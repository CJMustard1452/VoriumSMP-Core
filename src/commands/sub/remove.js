"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allianceRemove = void 0;
const launcher_1 = require("bdsx/launcher");
const fs_1 = require("fs");
class allianceRemove {
    static init(player, commandContext, allianceData) {
        if (!allianceData['players'][player.getName().toLowerCase()]['alliance'])
            return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are not in an alliance.');
        if (allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['founder'] !== player.getName().toLowerCase())
            return player.sendMessage('§8(§3Vorium-SMP§8) §cYou do not own this alliance.');
        if (!commandContext.command.split(' ')[2])
            return player.sendMessage('§8(§3Vorium-SMP§8) §cPlease specify a player to remove.');
        if (!allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].includes(commandContext.command.split(' ')[2].toLowerCase()))
            return player.sendMessage('§8(§3Vorium-SMP§8) §cThis player is not in your alliance.');
        allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].splice(allianceData['alliances'][allianceData['players'][player.getName().toLowerCase()]['alliance']]['members'].indexOf(commandContext.command.split(' ')[2].toLowerCase()), 1);
        allianceData["players"][commandContext.command.split(' ')[2].toLowerCase()]['alliance'] = false;
        launcher_1.bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${commandContext.command.split(' ')[2]}§a has been removed from §c${allianceData['players'][player.getName().toLowerCase()]['alliance']}§a.`));
        (0, fs_1.writeFileSync)('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}
exports.allianceRemove = allianceRemove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVtb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDRDQUE4QztBQUU5QywyQkFBbUM7QUFFbkMsTUFBYSxjQUFjO0lBRWhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBYyxFQUFFLGNBQThCLEVBQUUsWUFBaUI7UUFDaEYsSUFBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFBRSxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0RBQWtELENBQUMsQ0FBQztRQUN2SixJQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQUUsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFDak8sSUFBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1FBQy9ILElBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQUUsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7UUFDblEsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM1IsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2hHLHdCQUFhLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyw4QkFBOEIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFPLElBQUEsa0JBQWEsRUFBQyxpREFBaUQsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVHLENBQUM7Q0FDSjtBQVpELHdDQVlDIn0=