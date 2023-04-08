import { CommandContext } from "bdsx/bds/command";
import { Player } from "bdsx/bds/player";
import AllianceModule from "../../lib/AllianceModule";
import { Messages } from "../../lib/Messages";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";

const who = (user: User, params: Record<string, any>) => {
    if (!AllianceModule.exists(params.name)) {
        user.message(Messages.invalidAlliance);
        return
    }

    const all = AllianceModule.get(params.name)!;
    user.message(Messages.allianceWho(all.name, all.leader, all.members))
}

export default who;