import {readFileSync} from 'fs'
import { command } from "bdsx/command";
import { CxxString } from "bdsx/nativetype";
import create from "./sub/create";
import { ServerPlayer } from "bdsx/bds/player";
import User from "../lib/User";
import { PlayerCommandSelector } from 'bdsx/bds/command';
import { getUser } from '../../core';
import invite from './sub/invite';
import remove from './sub/remove';
import accept from './sub/accept';
import who from './sub/who';
import disband from './sub/disband';
import leave from './sub/leave';
import claim from './sub/claim';
import rally from './sub/rally';

export const cache: { [name: string]: string[] } = {}

command.register("alliance", "§cAccess to alliance sub-commands.")
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        create(user, params)
    }, { option: command.enum("option.create", "create"), name: CxxString })
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        invite(user, params)
    }, { option: command.enum("option.invite", "invite"), player: [PlayerCommandSelector, false] })
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        remove(user, params)
    }, { option: command.enum("option.remove", "remove"), player: [PlayerCommandSelector, false] })
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        accept(user, params)
    }, { option: command.enum("option.accept", "accept"), name: CxxString })
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        who(user, params)
    }, { option: command.enum("option.who", "who"), name: CxxString  })
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        leave(user, params)
    }, { option: command.enum("option.leave", "leave"), name: CxxString })
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        disband(user, params)
    }, { option: command.enum("option.disband", "disband") })
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        claim(user, params)
    }, { option: command.enum("option.claim", "claim"), claimOption: command.enum("claimOption", "start", "complete") })
    .overload((params, origin) => {
        const user = new User((origin.getEntity() as ServerPlayer))!
        //rally(user, params)
    }, { option: command.enum("option.rally", "rally"), alliance: CxxString })