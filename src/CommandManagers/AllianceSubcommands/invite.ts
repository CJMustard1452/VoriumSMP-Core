import { CommandContext } from "bdsx/bds/command";
import { Player } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";
import { writeFileSync } from "fs";

export class allianceInvite{

    public static init(player: Player, commandContext: CommandContext, allianceData: any): void {
        if(!allianceData['players'][player.getName().toLowerCase()]['alliance']) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        if(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['founder'] !== player.getName().toLowerCase()) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou do not own this alliance.');
        if(!commandContext.command.split(' ')[2]) return player.sendMessage('§8(§3Vorium-SMP§8) §cPlease specify a player to invite.');
        if(commandContext.command.split(' ')[2].toLowerCase() == player.getName().toLowerCase()) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou can not invite yourself.');
        if(!allianceData['players'][commandContext.command.split(' ')[2].toLowerCase()]) return player.sendMessage('§8(§3Vorium-SMP§8) §cThat player does not exist.');
        if(allianceData['players'][commandContext.command.split(' ')[2].toLowerCase()]['invites'].includes(allianceData['players'][player.getName().toLowerCase()]['alliance'])) return player.sendMessage('§8(§3Vorium-SMP§8) §cThat player has already been invited.');
        bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${commandContext.command.split(' ')[2]} §ahas just been invited to §c${allianceData['players'][player.getName().toLowerCase()]['alliance']}§a.`));
        allianceData["players"][commandContext.command.split(' ')[2].toLowerCase()]['invites'].push(allianceData['players'][player.getName().toLowerCase()]['alliance'].toLowerCase);
        allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['invites'].push(commandContext.command.split(' ')[2].toLowerCase());
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}