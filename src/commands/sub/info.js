"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allianceInfo = void 0;
class allianceInfo {
    static init(player, allianceData) {
        if (!allianceData['players'][player.getName().toLowerCase()]['alliance'])
            return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        let activeInvites = allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['invites'].toString().replace(',', ', ');
        let activeMembers = allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].toString().replace(',', ', ');
        player.sendMessage(`§l§3Alliance Info:§r\n§cAlliance Name: §7${allianceData['players'][player.getName().toLowerCase()]['alliance']}\n§cAlliance Leader: §7${allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['founder']}\n§cAlliance Members: §7${activeMembers}\n§cAlliance Invites: §7${activeInvites}`);
    }
}
exports.allianceInfo = allianceInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsTUFBYSxZQUFZO0lBRWQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFjLEVBQUUsWUFBaUI7UUFDaEQsSUFBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFBRSxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0RBQWtELENBQUMsQ0FBQztRQUN2SixJQUFJLGFBQWEsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1SixJQUFJLGFBQWEsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1SixNQUFNLENBQUMsV0FBVyxDQUFDLDRDQUE0QyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLDBCQUEwQixZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLDJCQUEyQixhQUFhLDJCQUEyQixhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzdWLENBQUM7Q0FDSjtBQVJELG9DQVFDIn0=