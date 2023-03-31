import { CommandContext } from "bdsx/bds/command";
import { Player } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";
import { writeFileSync } from "fs";

export class allianceCreate{

    public static init(player: Player, commandContext: CommandContext, allianceData: any): void {
        if(allianceData['players'][player.getName().toLowerCase()]['alliance'] !== false) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are already in an alliance.');
        if(!commandContext.command.split(' ')[2]) return player.sendMessage('§8(§3Vorium-SMP§8) §cPlease enter an alliance name.');
        if(allianceData['alliances'][commandContext.command.slice(17)]) return player.sendMessage('§8(§3Vorium-SMP§8) §cThis alliance already exists.');
        bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${player.getName()} §ahas just founded §c${commandContext.command.slice(17)}§a.`));
        allianceData['players'][player.getName().toLowerCase()]['alliance'] = commandContext.command.slice(17);
        allianceData['alliances'][commandContext.command.slice(17)] = {};
        allianceData['alliances'][commandContext.command.slice(17)]['founder'] = player.getName().toLowerCase();
        allianceData['alliances'][commandContext.command.slice(17)]['invites'] = [];
        allianceData['alliances'][commandContext.command.slice(17)]['members'] = [];
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}
