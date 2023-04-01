import { CommandContext } from "bdsx/bds/command";
import { Player } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";
import { writeFileSync } from "fs";

export class allianceRemove{

    public static init(player: Player, commandContext: CommandContext, allianceData: any): void {
        if(!allianceData['players'][player.getName().toLowerCase()]['alliance']) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        if(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['founder'] !== player.getName().toLowerCase()) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou do not own this alliance.');
        if(!commandContext.command.split(' ')[2]) return player.sendMessage('§8(§3Vorium-SMP§8) §cPlease specify a player to remove.');
        if(!allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].includes(commandContext.command.split(' ')[2].toLowerCase())) return player.sendMessage('§8(§3Vorium-SMP§8) §cThis player is not in your alliance.');
        allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].splice(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].indexOf(commandContext.command.split(' ')[2].toLowerCase()), 1)
        allianceData["players"][commandContext.command.split(' ')[2].toLowerCase()]['alliance'] = false;
        bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${commandContext.command.split(' ')[2]}§a has been removed from §c${allianceData['players'][player.getName().toLowerCase()]['alliance']}§a.`));
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}
