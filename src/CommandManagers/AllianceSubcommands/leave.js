"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allianceLeave = void 0;
const launcher_1 = require("bdsx/launcher");
const fs_1 = require("fs");
class allianceLeave {
    static init(player, commandContext, allianceData) {
        if (!allianceData['players'][player.getName().toLowerCase()]['alliance'])
            return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        if (allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['founder'] == player.getName().toLowerCase())
            return player.sendMessage('§8(§3Vorium-SMP§8) §cYou can not leave your own alliance, Use /alliance disband to disband your alliance.');
        launcher_1.bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${player.getName()} §ahas just left §c${allianceData['players'][player.getName().toLowerCase()]['alliance']}§a.`));
        allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].splice(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].indexOf(player.getName().toLowerCase()), 1);
        allianceData['players'][player.getName().toLowerCase()]['alliance'] = false;
        (0, fs_1.writeFileSync)('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}
exports.allianceLeave = allianceLeave;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZWF2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw0Q0FBOEM7QUFDOUMsMkJBQW1DO0FBRW5DLE1BQWEsYUFBYTtJQUVmLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBYyxFQUFFLGNBQThCLEVBQUUsWUFBaUI7UUFDaEYsSUFBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFBRSxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0RBQWtELENBQUMsQ0FBQztRQUN2SixJQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQUUsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLDJHQUEyRyxDQUFDLENBQUM7UUFDdlIsd0JBQWEsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlNLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2USxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzVFLElBQUEsa0JBQWEsRUFBQyxpREFBaUQsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVHLENBQUM7Q0FDSjtBQVZELHNDQVVDIn0=