import { CommandContext } from "bdsx/bds/command";
import { bedrockServer } from "bdsx/launcher";
import { Player } from "bdsx/bds/player";
import { writeFileSync } from "fs";

export class allianceUninvite {

    public static init(player: Player, commandContext: CommandContext, allianceData: any): void {
        if(!allianceData['players'][player.getName().toLowerCase()]['alliance']) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        if(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['founder'] !== player.getName().toLowerCase()) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou do not own this alliance.');
        if(!commandContext.command.split(' ')[2]) return player.sendMessage('§8(§3Vorium-SMP§8) §cPlease specify a player.');
        if(!allianceData['players'][commandContext.command.split(' ')[2].toLowerCase()]) return player.sendMessage('§8(§3Vorium-SMP§8) §cThis is not a registered player.');
        if(!allianceData['players'][commandContext.command.split(' ')[2].toLowerCase()]['invites'].includes(allianceData['players'][player.getName().toLowerCase()]['alliance'])) return player.sendMessage('§8(§3Vorium-SMP§8) §cThis player is not invited to your alliance.');
        allianceData['players'][commandContext.command.split(' ')[2].toLowerCase()]['invites'].splice(allianceData['players'][commandContext.command.split(' ')[2].toLowerCase()]['invites'].indexOf(allianceData['players'][player.getName().toLowerCase()]['alliance']), 1);
        allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['invites'].splice(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['invites'].indexOf(commandContext.command.split(' ')[2].toLowerCase()), 1);
        bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${commandContext.command.split(' ')[2]}§a has been removed from §c${allianceData['players'][player.getName().toLowerCase()]['alliance']}§a.`));
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}
