import { CommandSelector } from "bdsx/bds/command"
import { Player } from "bdsx/bds/player"
import AllianceModule from "../../lib/AllianceModule"
import { Messages } from "../../lib/Messages"
import User from "../../lib/User"
import { broadcast } from "../../lib/Util"
import { cache } from "../alliance"
import { bedrockServer } from "bdsx/launcher"
import { VectorXYZ } from "bdsx/common"
import { BossEventPacket } from "bdsx/bds/packets"

export const rallyCache: { [dyn: string]: string } = {};

const rally = (user: User, params: Record<string, any>) => {
    const all = AllianceModule.get(params.alliance)
    if (!all) {
        user.message(Messages.invalidAlliance)
        return
    }
    if (!all.members.includes(user.name)) {
        user.message(Messages.notPartOfAlliance)
        return
    }

    rallyCache[all.name] = user.name;

    bedrockServer.level.getPlayers().forEach(p => {
        if(all.members.includes(p.getName())) {
            p.sendMessage(Messages.rally(user.name));
            p.setBossBar(`§7${user.name} §3(${Math.round(user.player.getPosition().x)}, ${user.player.getPosition().y}, ${user.player.getPosition().z}`, 100, BossEventPacket.Colors.Red)
        }
    });
}

export default rally;