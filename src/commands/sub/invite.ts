import { CommandContext, CommandSelector } from "bdsx/bds/command";
import { bedrockServer } from "bdsx/launcher";
import { Player } from "bdsx/bds/player";
import { writeFileSync } from "fs";
import AllianceModule from "../../lib/AllianceModule";
import { Messages } from "../../lib/Messages";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";
import { getUser } from "../../../core";

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

    const targetUser = getUser(name)!;
    if(targetUser.invite) {
        user.message(Messages.memberHasInvite);
        return;
    }

    targetUser.invite = all.name;
    broadcast(Messages.invitedMember(targetUser.invite, targetUser.name))
}

export default invite;