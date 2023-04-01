"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerJoin = void 0;
const fs_1 = require("fs");
class playerJoin {
    constructor(player) {
        this.allianceData = JSON.parse((0, fs_1.readFileSync)('../plugin_data/VoriumSMP-Core/alliancedata.json', 'utf-8'));
        if (!this.allianceData['players'][`${player.getName().toLowerCase()}`])
            this.registerPlayer(player);
    }
    registerPlayer(player) {
        player.sendMessage('§8(§3Vorium-SMP§8) §aWelcome, we are currently setting up player data associated with this account, to get started run §c/alliance§a.');
        this.allianceData['players'][`${player.getName().toLowerCase()}`] = {};
        this.allianceData['players'][`${player.getName().toLowerCase()}`]["alliance"] = false;
        this.allianceData['players'][`${player.getName().toLowerCase()}`]["invites"] = [];
        (0, fs_1.writeFileSync)('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(this.allianceData), 'utf-8');
    }
}
exports.playerJoin = playerJoin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVySm9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXllckpvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQWdEO0FBRWhELE1BQWEsVUFBVTtJQUluQixZQUFtQixNQUFjO1FBRmpDLGlCQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFBLGlCQUFZLEVBQUMsaURBQWlELEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUdoRyxJQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1lBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRU8sY0FBYyxDQUFDLE1BQWM7UUFDakMsTUFBTSxDQUFDLFdBQVcsQ0FBQyx1SUFBdUksQ0FBQyxDQUFDO1FBQzVKLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2RSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDdEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xGLElBQUEsa0JBQWEsRUFBQyxpREFBaUQsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqSCxDQUFDO0NBQ0o7QUFmRCxnQ0FlQyJ9