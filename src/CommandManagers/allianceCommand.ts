import { allianceDisband } from "./AllianceSubcommands/disband";
import { allianceInvite } from "./AllianceSubcommands/invite";
import { allianceCreate } from "./AllianceSubcommands/create";
import { allianceRemove } from "./AllianceSubcommands/remove";
import { allianceLeave } from "./AllianceSubcommands/leave";
import { allianceInfo } from "./AllianceSubcommands/info";
import { CommandContext } from "bdsx/bds/command";
import {readFileSync} from 'fs'

export class allianceCommand{

    allianceData = JSON.parse(readFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', 'utf-8'));

    public constructor(command: String, commandContext: CommandContext){
        const player = commandContext.origin.getEntity();
        if(!player?.isPlayer()) return;
        switch(command.split(' ')[1]){
            default:
                player.sendMessage('§l§3Alliance Sub-Commands:§r\n§c/alliance create (Alliance Name) §7 - Creates an alliance.\n§c/alliance disband §7- Deletes your alliance.\n§c/alliance invite (Player Name) §7- Invites choosen player.\n§c/alliance remove (Player Name) §7- Removes choosen player from your alliance.\n§c/alliance leave §7- Allowes you to leave your current alliance.\n§c/alliance info §7- Shows information about your current alliance.');
            break;
            case 'create':
                allianceCreate.init(player, commandContext, this.allianceData);
                break;
            case 'disband':
                allianceDisband.init(player, commandContext, this.allianceData);
                break;
            case 'remove':
                allianceRemove.init(player, commandContext, this.allianceData);
                break;
            case 'info':
                allianceInfo.init(player, commandContext, this.allianceData);
                break;
            case 'invite':
                allianceInvite.init(player, commandContext, this.allianceData);
                break;
            case 'leave':
                allianceLeave.init(player, commandContext, this.allianceData);
                break;
        }
    }
}