import { CommandContext } from "bdsx/bds/command";
import { Player } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";
import { writeFileSync } from "fs";

export class allianceLeave{

    public static init(player: Player, commandContext: CommandContext, allianceData: any): void {
        if(!allianceData['players'][player.getName().toLowerCase()]['alliance']) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        if(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['founder'] == player.getName().toLowerCase()) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou can not leave your own alliance, Use /alliance disband to disband your alliance.');
        bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${player.getName()} §ahas just left §c${allianceData['players'][player.getName().toLowerCase()]['alliance']}§a.`));
        allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].splice(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].indexOf(player.getName().toLowerCase()), 1);
        allianceData['players'][player.getName().toLowerCase()]['alliance'] = false;
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}