import { CommandContext } from "bdsx/bds/command";
import { Player } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";
import { writeFileSync } from "fs";

export class allianceAccept{

    public static init(player: Player, commandContext: CommandContext, allianceData: any): void {
        if(allianceData['players'][player.getName().toLowerCase()]['alliance']) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are already in an alliance.');
        if(!commandContext.command.split(' ')[2]) return player.sendMessage('§8(§3Vorium-SMP§8) §cPlease specify an alliance.');
        if(!allianceData['players'][player.getName().toLowerCase()]['invites'].includes(commandContext.command.split(' ')[2].toLowerCase())) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou have not been invited to this alliance.');
        allianceData['players'][player.getName().toLowerCase()]['invites'].splice(allianceData['players'][player.getName().toLowerCase()]['invites'].indexOf(commandContext.command.split(' ')[2].toLowerCase()), 1);
        allianceData['players'][player.getName().toLowerCase()]['alliance'] = commandContext.command.split(' ')[2].toLowerCase();
        allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].push(player.getName().toLowerCase());
        allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['invites'].splice(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['invites'].indexOf(player.getName().toLowerCase()), 1)
        bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${player.getName()} §ahas just joined §c${commandContext.command.split(' ')[2].toLowerCase()}§a.`));
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}
