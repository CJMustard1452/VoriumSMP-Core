import { allianceDisband } from "./AllianceSubcommands/disband";
import { allianceInvite } from "./AllianceSubcommands/invite";
import { allianceCreate } from "./AllianceSubcommands/create";
import { allianceLeave } from "./AllianceSubcommands/leave";
import { allianceInfo } from "./AllianceSubcommands/info";
import { CommandContext } from "bdsx/bds/command";
import {readFileSync} from 'fs'

export class allianceCommand{

    allianceData = JSON.parse(readFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', 'utf-8'));

    public constructor(command: String, commandContext: CommandContext){
        switch(command.split(' ')[1]){
            case 'create':
                allianceCreate.init(commandContext, this.allianceData);
                break;
            case 'disband':
                allianceDisband.init(commandContext, this.allianceData);
                break;
            case 'info':
                allianceInfo.init(commandContext, this.allianceData);
                break;
            case 'invite':
                allianceInvite.init(commandContext, this.allianceData);
                break;
            case 'leave':
                allianceLeave.init(commandContext, this.allianceData);
                break;
        }
    }
}