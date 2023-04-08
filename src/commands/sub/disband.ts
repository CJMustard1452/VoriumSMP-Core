import { CommandContext, CommandSelector } from "bdsx/bds/command";
import { bedrockServer } from "bdsx/launcher";
import { Player } from "bdsx/bds/player";
import { writeFileSync } from "fs";
import { getUser } from "../../../core";
import AllianceModule from "../../lib/AllianceModule";
import { Messages } from "../../lib/Messages";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";


const disband = (user: User, params: Record<string, any>) => {
    if (!AllianceModule.ownsAlliance(user.name)) {
        user.message(Messages.noOwnAlliance)
        return
    }
    const all = AllianceModule.getByLeader(user.name)!;
    AllianceModule.delete(all.name);

    broadcast(Messages.deletedAlliance(all.name))
}

export default disband;