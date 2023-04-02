
import { bedrockServer } from "bdsx/launcher";
import AllianceModule from "../../lib/AllianceModule";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";

const create = (user: User, params: Record<string, any>) => {
    if (AllianceModule.ownsAlliance(user.name)) {
        return // do message
    }
    if(!params.name) {
        return // do message
    }
    if (AllianceModule.exists(user.name)) {
        return // do message
    }

    broadcast("do message")

    AllianceModule.create(params.name, user.name)
}

export default create;