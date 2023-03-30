import { CommandContext } from "bdsx/bds/command";
import { Player } from "bdsx/bds/player";

export class allianceInfo{

    public static init(player: Player, commandContext: CommandContext, allianceData: any): void {
        if(!allianceData['players'][player.getName()]['alliance']) return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        let activeInvites = allianceData['alliances'][allianceData['players'][player.getName()]['alliance']]['invites'].toString().replace(',', ', ');
        let activeMembers = allianceData['alliances'][allianceData['players'][player.getName()]['alliance']]['members'].toString().replace(',', ', ');
        player.sendMessage(`§l§3Alliance Info:§r\n§cAlliance Name: §7${allianceData['players'][player.getName()]['alliance']}\n§cAlliance Leader: §7${allianceData['alliances'][allianceData['players'][player.getName()]['alliance']]['founder']}\n§cAlliance Members: §7${activeMembers}\n§cAlliance Invites: §7${activeInvites}`);
    }
}
