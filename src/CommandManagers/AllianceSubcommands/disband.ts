import { CommandContext } from "bdsx/bds/command";
import { Player } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";
import { writeFileSync } from "fs";

export class allianceDisband{

    public static init(player: Player,commandContext: CommandContext, allianceData: any): void {
        if(!allianceData['players'][player.getName().toLowerCase()]['alliance']) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        if(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['founder'] !== player.getName().toLowerCase()) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou do not own this alliance.');
        bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${player.getName()} §ahas just disbanded §c${allianceData['players'][player.getName().toLowerCase()]['alliance']}§a.`));
        if(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members']) allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].forEach( function (member:any){
            allianceData['players'][member.toLowerCase()]['alliance'] = false;
        });
        if(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['invites']) allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['invites'].forEach( function (member:any){
            allianceData['players'][member.toLowerCase()]['invites'].splice(allianceData['players'][member.toLowerCase()]['invites'].indexOf(allianceData['players'][player.getName().toLowerCase()]['alliance']), 1);
        });
        delete allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']];
        allianceData['players'][player.getName().toLowerCase()]['alliance'] = false;
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}
