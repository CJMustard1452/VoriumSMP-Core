"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allianceDisband = void 0;
const launcher_1 = require("bdsx/launcher");
const fs_1 = require("fs");
class allianceDisband {
    static init(player, commandContext, allianceData) {
        if (!allianceData['players'][player.getName().toLowerCase()]['alliance'])
            return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        if (allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['founder'] !== player.getName().toLowerCase())
            return player.sendMessage('§8(§3Vorium-SMP§8) §cYou do not own this alliance.');
        launcher_1.bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${player.getName()} §ahas just disbanded §c${allianceData['players'][player.getName().toLowerCase()]['alliance']}§a.`));
        if (allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'])
            allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].forEach(function (member) {
                allianceData['players'][member.toLowerCase()]['alliance'] = false;
            });
        if (allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['invites'])
            allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['invites'].forEach(function (member) {
                allianceData['players'][member.toLowerCase()]['invites'].splice(allianceData['players'][member.toLowerCase()]['invites'].indexOf(allianceData['players'][player.getName().toLowerCase()]['alliance']), 1);
            });
        delete allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']];
        allianceData['players'][player.getName().toLowerCase()]['alliance'] = false;
        (0, fs_1.writeFileSync)('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}
exports.allianceDisband = allianceDisband;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYmFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc2JhbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsNENBQThDO0FBQzlDLDJCQUFtQztBQUVuQyxNQUFhLGVBQWU7SUFFakIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFjLEVBQUMsY0FBOEIsRUFBRSxZQUFpQjtRQUMvRSxJQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUFFLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQ3ZKLElBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFBRSxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0RBQW9ELENBQUMsQ0FBQztRQUNqTyx3QkFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLHdCQUF3QixNQUFNLENBQUMsT0FBTyxFQUFFLDJCQUEyQixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbk4sSUFBRyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxVQUFVLE1BQVU7Z0JBQ2pQLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDdEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFFLFVBQVUsTUFBVTtnQkFDalAsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlNLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdEcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM1RSxJQUFBLGtCQUFhLEVBQUMsaURBQWlELEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RyxDQUFDO0NBQ0o7QUFoQkQsMENBZ0JDIn0=