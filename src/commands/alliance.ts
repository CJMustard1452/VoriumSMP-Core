import {readFileSync} from 'fs'
import { command } from "bdsx/command";
import { CxxString } from "bdsx/nativetype";
import create from "./sub/create";
import { ServerPlayer } from "bdsx/bds/player";
import User from "../lib/User";

command.register("alliance", "Access to alliance sub-commands.")
    .overload((params, origin) => {
        create(new User(origin.getEntity() as ServerPlayer), params)
    }, { option: command.enum("option.create", "create"), name: CxxString })
    .overload(param => {

    }, { option: command.enum("option.invite", "invite"), player: CxxString })
    .overload(param => {

    }, { option: command.enum("option.remove", "remove"), player: CxxString })
    .overload(param => {

    }, { option: command.enum("option.accept", "accept"), name: CxxString })
    .overload(param => {

    }, { option: command.enum("option.uninvite", "uninvite"), player: CxxString })
    .overload(param => {

    }, { option: command.enum("option.info", "info") })
    .overload(param => {

    }, { option: command.enum("option.leave", "leave") })
    .overload(param => {

    }, { option: command.enum("option.disband", "disband") })
    .alias("al",).alias("ally");