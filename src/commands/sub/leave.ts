import { CommandContext } from "bdsx/bds/command";
import { bedrockServer } from "bdsx/launcher";
import { Player } from "bdsx/bds/player";
import { writeFileSync } from "fs";
import AllianceModule from "../../lib/AllianceModule";
import { Messages } from "../../lib/Messages";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";

const leave = (user: User, params: Record<string, any>) => {
    if (AllianceModule.ownsAlliance(user.name)) {
        user.message(Messages.ownAllianceLeave)
        return
    }

    const all = AllianceModule.get(params.name);
    if (!all) {
        user.message(Messages.invalidAlliance);
        return;
    }

    if (!all.members.includes(user.name)) {
        user.message(Messages.notPartOfAlliance);
        return;
    }

    AllianceModule.removeMember(all.name, user.name);
    broadcast(Messages.leftMember(all.name, user.name))
}

export default leave;