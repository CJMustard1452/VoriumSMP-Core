<<<<<<< HEAD
import { CommandContext } from "bdsx/bds/command";
import { bedrockServer } from "bdsx/launcher";
import { Player } from "bdsx/bds/player";
import { writeFileSync } from "fs";
import { create } from "ts-node";
import AllianceModule from "../../lib/AllianceModule";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";
import { Messages } from "../../lib/Messages";
import { cache } from "../alliance";


const accept = (user: User, params: Record<string, any>) => {
    if (AllianceModule.ownsAlliance(user.name)) {
        user.message(Messages.ownAlliance)
        return
    }
    if(!params.name) {
        user.message(Messages.noName);
        return
    }
    if(!cache[params.name]) {
        user.message(Messages.noInviteAlliance)
        return;
    }

    if(!cache[params.name].includes(user.name)) {
        user.message(Messages.noInviteAlliance);
        return;
    }

    cache[params.name] = cache[params.name].filter(d => d !== user.name);
    AllianceModule.addMember(params.name, user.name);
    broadcast(Messages.newMember(user.invite, user.name))
}

=======
import { CommandContext } from "bdsx/bds/command";
import { bedrockServer } from "bdsx/launcher";
import { Player } from "bdsx/bds/player";
import { writeFileSync } from "fs";
import { create } from "ts-node";
import AllianceModule from "../../lib/AllianceModule";
import User from "../../lib/User";
import { broadcast } from "../../lib/Util";
import { Messages } from "../../lib/Messages";
import { cache } from "../alliance";


const accept = (user: User, params: Record<string, any>) => {
    if (AllianceModule.ownsAlliance(user.name)) {
        user.message(Messages.ownAlliance)
        return
    }
    if(!params.name) {
        user.message(Messages.noName);
        return
    }
    if(!cache[params.name]) {
        user.message(Messages.noInviteAlliance)
        return;
    }

    if(!cache[params.name].includes(user.name)) {
        user.message(Messages.noInviteAlliance);
        return;
    }

    cache[params.name] = cache[params.name].filter(d => d !== user.name);
    AllianceModule.addMember(params.name, user.name);
    broadcast(Messages.newMember(params.name, user.name))
}

>>>>>>> 32f5d1ed9645b60e565ffe1bc765fc0818b23598
export default accept;