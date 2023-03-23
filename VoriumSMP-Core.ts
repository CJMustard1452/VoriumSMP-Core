import { events } from "bdsx/event";
import { command } from "bdsx/command";
import { CommandContext } from "bdsx/bds/command";

events.serverOpen.on(() => {
    console.log("[VoriumCore] Enabled.");
    command.register('alliance', 'Provides access alliance commands.');
});

events.command.on((command, player, commandContext)=>{
    if(command.split(' ')[0].slice(1) == 'alliance') allianceCommand(command, player, commandContext)
    return 0;
});

function allianceCommand(command: string, player: string, commandContext: CommandContext){
    switch(command.split(' ')[1]){
        default:
            console.log('NOTHING')
            break;
        case 'help': case '?':
            //Alliance Help
            break;
        case 'create':
            //Create Alliance
            break;
        case 'delete':
            //Delete Alliance
            break;
        case 'leave':
            //Leave Alliance
            break;
        case 'invite':
            //Invite Player
            break;
        case 'kick':
            //Remove Player
            break;
    }
}
