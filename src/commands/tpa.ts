import { PlayerCommandSelector } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { CxxString } from "bdsx/nativetype";
import User from "../lib/User";
import { bedrockServer } from "bdsx/launcher";

const cache: { [name: string]: string } = {}

command.register("tpa", "§bAccess to TPA sub-commands")
.overload((params, origin) => {
    const user = new User((origin.getEntity() as ServerPlayer))!
    if(cache[user.name]) {
        return;
    }
    cache[user.name] = params.player.getName();
    const target = params.player.newResults(origin)[0];
    target?.sendMessage(`§2${user.name} wants to TPA to you`)
    setTimeout((name) => {
        user.message(`§4TPA to ${name} expired`)
        delete cache[user.name];
    }, 60000, params.player.getName());
}, { option: command.enum("option.to", "to"), player: [PlayerCommandSelector, false] })
.overload((params, origin) => {
    const user = new User((origin.getEntity() as ServerPlayer))!
    for (let [from, to] of Object.entries(cache)) {
        if (to === user.name) {
            bedrockServer.executeCommand(`tp ${from} ${to}`);
            delete cache[from]
            break;
        } else { continue }
    }
}, { option: command.enum("option.accept", "accept"), player: [PlayerCommandSelector, false] })
.overload((params, origin) => {
    const user = new User((origin.getEntity() as ServerPlayer))!


}, { option: command.enum("option.deny", "deny"), player: [PlayerCommandSelector, false] })