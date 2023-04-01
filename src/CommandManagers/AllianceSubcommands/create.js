"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allianceCreate = void 0;
const launcher_1 = require("bdsx/launcher");
const fs_1 = require("fs");
class allianceCreate {
    static init(player, commandContext, allianceData) {
        if (allianceData['players'][player.getName().toLowerCase()]['alliance'] !== false)
            return player.sendMessage('§8(§3Vorium-SMP§8) §cYou are already in an alliance.');
        if (!commandContext.command.split(' ')[2])
            return player.sendMessage('§8(§3Vorium-SMP§8) §cPlease enter an alliance name.');
        if (allianceData['alliances'][commandContext.command.slice(17)])
            return player.sendMessage('§8(§3Vorium-SMP§8) §cThis alliance already exists.');
        launcher_1.bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(`§8(§3Vorium-SMP§8) §c${player.getName()} §ahas just founded §c${commandContext.command.slice(17)}§a.`));
        allianceData['players'][player.getName().toLowerCase()]['alliance'] = commandContext.command.slice(17);
        allianceData['alliances'][commandContext.command.slice(17)] = {};
        allianceData['alliances'][commandContext.command.slice(17)]['founder'] = player.getName().toLowerCase();
        allianceData['alliances'][commandContext.command.slice(17)]['invites'] = [];
        allianceData['alliances'][commandContext.command.slice(17)]['members'] = [];
        (0, fs_1.writeFileSync)('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(allianceData), 'utf-8');
    }
}
exports.allianceCreate = allianceCreate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDRDQUE4QztBQUM5QywyQkFBbUM7QUFFbkMsTUFBYSxjQUFjO0lBRWhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBYyxFQUFFLGNBQThCLEVBQUUsWUFBaUI7UUFDaEYsSUFBRyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSztZQUFFLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1FBQ3BLLElBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMscURBQXFELENBQUMsQ0FBQztRQUMzSCxJQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUFFLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1FBQ2hKLHdCQUFhLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLE1BQU0sQ0FBQyxPQUFPLEVBQUUseUJBQXlCLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlLLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hHLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM1RSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDNUUsSUFBQSxrQkFBYSxFQUFDLGlEQUFpRCxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUcsQ0FBQztDQUNKO0FBZEQsd0NBY0MifQ==