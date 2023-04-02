import { CommandContext } from "bdsx/bds/command";
import { bedrockServer } from "bdsx/launcher";
import { Player } from "bdsx/bds/player";
import { writeFileSync } from "fs";
import { create } from "ts-node";
import AllianceModule from "../../lib/AllianceModule";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";
import { Messages } from "../../lib/Messages";

const accept = (user: User, params: Record<string, any>) => {
    if (!user.invite.length) {
        user.message(Messages.noInviteAny)
        return;
    }
    if (AllianceModule.ownsAlliance(user.name)) {
        user.message(Messages.ownAlliance)
        return
    }
    if(!params.name) {
        user.message(Messages.noName);
        return
    }
    broadcast(Messages.newMember(user.invite, user.name))
    user.invite = ""
}

export default accept;