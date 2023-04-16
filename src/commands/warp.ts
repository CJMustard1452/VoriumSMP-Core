import { PlayerCommandSelector } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { CxxString } from "bdsx/nativetype";
import { remove } from "jszip";
import { create } from "ts-node";
import User from "../lib/User";
import accept from "./sub/accept";
import claim from "./sub/claim";
import disband from "./sub/disband";
import invite from "./sub/invite";
import leave from "./sub/leave";
import who from "./sub/who";
import WarpModule from "../lib/WarpModule";
import { DimensionId } from "bdsx/bds/actor";

command.register("warp", "§3Access to warp sub-commands.")
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        const w = WarpModule.get(user.name, params.name);
        if(!w) {
            user.message("§4That warp does not exist.");
            return;
        }
        if (w.dimension !== user.player.getDimensionId()) {
            user.message("§4Must be in same dimension as warp");
            return;
        }
        WarpModule.teleport(user.name, w.name);
    }, { option: command.enum("option.to", "to"), name: CxxString })
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        const w = WarpModule.get(user.name, params.name);
        if(w) {
            user.message("§4That warp already exists.");
            return;
        }
        WarpModule.create(user.name, params.name, user.player.getDimensionId(), {
            x: user.player.getPosition().x,
            y: user.player.getPosition().y,
            z: user.player.getPosition().z,
        })
        user.message(`§2Successfully created warp §3${params.name}`)
    }, { option: command.enum("option.create", "create"), name: CxxString })
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        const w = WarpModule.get(user.name, params.name);
        if(!w) {
            user.message("§4That warp does not exist.");
            return;
        }
        WarpModule.delete(user.name, params.name);
    }, { option: command.enum("option.delete", "delete"), name: CxxString })
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        const warps = WarpModule.getAll(user.name);
        if(!warps || !warps.length) {
            user.message("§4You have no warps.");
            return;
        }
        user.message(`§2Current Warps\n§3${warps.map(w => {
            let dim: string = "§7Unknown";
            switch (w.dimension) {
                case DimensionId.Overworld:
                    dim = "§1Overworld"
                    break;
                case DimensionId.Nether:
                    dim = "§4Nether"
                    break;
                case DimensionId.TheEnd:
                    dim = "§6The End";
                    break;
            }
            return `§3${w.name}§7: (${Math.round(w.coords.x)}, ${Math.round(w.coords.y)}, ${Math.round(w.coords.z)}) | ${dim}`
        })}\n`)
    }, { option: command.enum("option.list", "list") })
