import { CommandSelector } from "bdsx/bds/command"
import { Player, ServerPlayer } from "bdsx/bds/player"
import { getUser } from "../../../core"
import AllianceModule from "../../lib/AllianceModule"
import { Messages } from "../../lib/Messages"
import User from "../../lib/User"
import { broadcast } from "../../lib/Util"
import { VectorXZ } from "bdsx/common"

const cache: {
    [name: string]: {
        alliance: string;
        start: VectorXZ
    }
} = {};

const claim = (user: User, params: Record<string, any>) => {
    if (!AllianceModule.ownsAlliance(user.name)) {
        user.message(Messages.noOwnAlliance)
        return
    }
    const all = AllianceModule.getByLeader(user.name)!
    if (!all) {
        user.message(Messages.noOwnAlliance)
        return
    }

    switch(params.claimOption) {
        case "start": {
            if(cache[user.name]) {
                user.message(Messages.runCompleteClaim)
                return;
            }
            if (AllianceModule.hasClaim(all.name)) {
                user.message(Messages.hasClaim)
                return;
            }
            if(AllianceModule.insideClaim(user.pos)) {
                user.message(Messages.insideClaim)
                return;
            }

            user.message(Messages.storedPos)
            cache[user.name] = {
                alliance: all.name,
                start: {
                    x: Object.freeze(user.pos.x),
                    z: Object.freeze(user.pos.z),
                },
            }
            return
        }
        case "complete": {
            if(!cache[user.name]) {
                user.message(Messages.runCompleteStart)
                return;
            }
            if (AllianceModule.hasClaim(all.name)) {
                user.message(Messages.hasClaim)
                return;
            }
            if(AllianceModule.insideClaim(user.player.getPosition())) {
                user.message(Messages.insideClaim)
                return;
            }

            const { x, z } = user.pos;
            const start = cache[user.name].start;
            const area = Math.floor(Math.abs(start.x - x) * Math.abs(start.z - z));
            if(area > 250000) {
                user.message(Messages.tooLarge)
                return;
            }
            if(AllianceModule.intersectsClaim([{
                x, y: 256, z,
            }, {
                x: start.x, y: -256, z: start.z
            }])) {
                user.message(Messages.intersectsClaim)
                return;
            }

            user.message(Messages.createdClaim);
            AllianceModule.createClaim(all.name, [{x, z}, {x: start.x, z: start.z}])
            delete cache[user.name]
            return
        }
    }
}

export default claim;