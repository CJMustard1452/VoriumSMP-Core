import { CommandSelector } from "bdsx/bds/command";
import { Player } from "bdsx/bds/player";
import AllianceModule from "../../lib/AllianceModule";
import { Messages } from "../../lib/Messages";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";

const remove = (user: User, params: Record<string, any>) => {
    if (!AllianceModule.ownsAlliance(user.name)) {
        user.message(Messages.noOwnAlliance)
        return
    }
    const all = AllianceModule.getByLeader(user.name);
    if (!all) {
        user.message(Messages.noOwnAlliance)
        return
    }
    if (!(params.players as CommandSelector<Player>)) {
        user.message(Messages.invalidArgument);
        return;
    }

    const name = (params.players as CommandSelector<Player>).getName();

    if (name === user.name) {
        user.message(Messages.removeSelf)
        return;
    }
    if (!all.members.includes(name)) {
        user.message(Messages.memberNotPartOfAlliance)
        return
    }

    AllianceModule.removeMember(user.name, name);
    broadcast(Messages.removedMember(all.name, user.name))
}

export default remove;