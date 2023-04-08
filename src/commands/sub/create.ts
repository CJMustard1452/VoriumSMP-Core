
import { bedrockServer } from "bdsx/launcher";
import AllianceModule from "../../lib/AllianceModule";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";
import { Messages } from "../../lib/Messages";

const create = (user: User, params: Record<string, any>) => {
    if (AllianceModule.ownsAlliance(user.name)) {
        user.message(Messages.ownAlliance)
        return
    }
    if(!params.name) {
        user.message(Messages.noName);
        return
    }
    if(params.name.length < 3 || params.name.length > 15) {
        user.message(Messages.invalidName);
        return
    }
    if (AllianceModule.exists(user.name)) {
        user.message(Messages.exists);
        return
    }

    AllianceModule.create(params.name, user.name)
    broadcast(Messages.newAlliance(params.name))
}

export default create;