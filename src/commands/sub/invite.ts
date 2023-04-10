import { CommandContext, CommandSelector } from "bdsx/bds/command";
import { bedrockServer } from "bdsx/launcher";
import { Player } from "bdsx/bds/player";
import { writeFileSync } from "fs";
import AllianceModule from "../../lib/AllianceModule";
import { Messages } from "../../lib/Messages";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";
import { getUser } from "../../../core";
import { cache } from "../alliance";

const invite = (user: User, params: Record<string, any>) => {
    if (!AllianceModule.ownsAlliance(user.name)) {
        user.message(Messages.noOwnAlliance)
        return
    }
    const all = AllianceModule.getByLeader(user.name)!
    if (!all) {
        user.message(Messages.noOwnAlliance)
        return
    }
    if (!params.player) {
        user.message(Messages.invalidArgument);
        return;
    }
    const name = (params.player as CommandSelector<Player>).getName();
    if (name === user.name) {
        user.message(Messages.inviteSelf)
        return;
    }
    if (all.members.includes(name)) {
        user.message(Messages.memberPartOfAlliance)
        return
    }

    if (cache[all.name]) {
        cache[all.name].push(name);
    } else {
        cache[all.name] = [name]
    }

    broadcast(Messages.invitedMember(all.name, name))
}

export default invite;