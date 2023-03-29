import { CommandContext } from "bdsx/bds/command";
import { allianceCreate } from "./AllianceSubcommands/create";
import { allianceDisband } from "./AllianceSubcommands/disband";
import { allianceInfo } from "./AllianceSubcommands/info";
import { allianceInvite } from "./AllianceSubcommands/invite";
import { allianceLeave } from "./AllianceSubcommands/leave";

export class allianceCommand{

    public constructor(command: String, commandContext: CommandContext){
        switch(command.split(' ')[1]){
            case 'create':
                new allianceCreate(commandContext);
                break;
            case 'disband':
                new allianceDisband(commandContext);
                break;
            case 'info':
                new allianceInfo(commandContext);
                break;
            case 'invite':
                new allianceInvite(commandContext);
                break;
            case 'leave':
                new allianceLeave(commandContext);
                break;
        }
    }
}