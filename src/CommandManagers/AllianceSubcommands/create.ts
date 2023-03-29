import { CommandContext } from "bdsx/bds/command";
import { bedrockServer } from "bdsx/launcher";
import { writeFileSync } from "fs";

export class allianceCreate{

    public static init(commandContext: CommandContext, allianceData: any) {
        const player = commandContext.origin.getEntity();
        if(!player?.isPlayer()) return;
        if(allianceData['players'][player.getName()]['alliance'] !== false) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are already in an alliance.');
        if(!commandContext.command.split(' ')[2]) return player.sendMessage('§8(§3Vorium-SMP§8) §cPlease enter an alliance name.');
        if(allianceData['alliances'][commandContext.command.slice(17)] == true) return player.sendMessage('§8(§3Vorium-SMP§8) §cThis alliance already exists.');
        bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${player.getName()} §ahas just founded §c${commandContext.command.slice(17)}§a.`));
        allianceData['players'][player.getName()]['alliance'] = commandContext.command.slice(17);
        allianceData['alliances'][commandContext.command.slice(17)] = {};
        allianceData['alliances'][commandContext.command.slice(17)]['founder'] = player.getName();
        allianceData['alliances'][commandContext.command.slice(17)]['invites'] = false;
        allianceData['alliances'][commandContext.command.slice(17)]['members'] = false;
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}
