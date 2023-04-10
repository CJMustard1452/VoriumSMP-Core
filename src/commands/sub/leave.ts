import { CommandContext } from "bdsx/bds/command";
import { bedrockServer } from "bdsx/launcher";
import { Player } from "bdsx/bds/player";
import { writeFileSync } from "fs";
import AllianceModule from "../../lib/AllianceModule";
import { Messages } from "../../lib/Messages";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";

const leave = (user: User, params: Record<string, any>) => {
    if (AllianceModule.ownsAlliance(user.name)) return user.message(Messages.ownAllianceLeave);
    const data = AllianceModule.getByMember(user.name);
    if(data == undefined) return user.message(Messages.notInAlliance);

    AllianceModule.removeMember(data.name, user.name);
    broadcast(Messages.leftMember(data.name, user.name))
}

export default leave;