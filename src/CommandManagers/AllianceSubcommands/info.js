"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allianceInfo = void 0;
class allianceInfo {
    static init(player, commandContext, allianceData) {
        if (!allianceData['players'][player.getName().toLowerCase()]['alliance'])
            return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        let activeInvites = allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['invites'].toString().replace(',', ', ');
        let activeMembers = allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].toString().replace(',', ', ');
        player.sendMessage(`§l§3Alliance Info:§r\n§cAlliance Name: §7${allianceData['players'][player.getName().toLowerCase()]['alliance']}\n§cAlliance Leader: §7${allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['founder']}\n§cAlliance Members: §7${activeMembers}\n§cAlliance Invites: §7${activeInvites}`);
    }
}
exports.allianceInfo = allianceInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsTUFBYSxZQUFZO0lBRWQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFjLEVBQUUsY0FBOEIsRUFBRSxZQUFpQjtRQUNoRixJQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUFFLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQ3ZKLElBQUksYUFBYSxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVKLElBQUksYUFBYSxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVKLE1BQU0sQ0FBQyxXQUFXLENBQUMsNENBQTRDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsMkJBQTJCLGFBQWEsMkJBQTJCLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDN1YsQ0FBQztDQUNKO0FBUkQsb0NBUUMifQ==