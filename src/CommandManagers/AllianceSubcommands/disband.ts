import { CommandContext } from "bdsx/bds/command";
import { bedrockServer } from "bdsx/launcher";
import { writeFileSync } from "fs";

export class allianceDisband{

    public static init(commandContext: CommandContext, allianceData: any): void {
        const player = commandContext.origin.getEntity();
        if(!player?.isPlayer()) return;
        if(!allianceData['players'][player.getName()]['alliance']) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        if(allianceData['alliances'][allianceData['players'][player.getName()]['alliance']]['founder'] !== player.getName()) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou do not own this alliance.');
        bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${player.getName()} §ahas just disbanded §c${allianceData['players'][player.getName()]['alliance']}§a.`));
        if(allianceData['alliances'][allianceData['players'][player.getName()]['alliance']]['members']) allianceData['alliances'][allianceData['players'][player.getName()]['alliance']]['members'].forEach( function (member:any){
            allianceData['players'][member]['alliance'] = false;
        });
        if(allianceData['alliances'][allianceData['players'][player.getName()]['alliance']]['invites']) allianceData['alliances'][allianceData['players'][player.getName()]['alliance']]['invites'].forEach( function (member:any){
            allianceData['players'][member]['invites'].splice(allianceData['players'][member]['invites'].indexOf(allianceData['players'][player.getName()]['alliance']), 1);
        });
        delete allianceData['alliances'][allianceData['players'][player.getName()]['alliance']];
        allianceData['players'][player.getName()]['alliance'] = false;
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}
