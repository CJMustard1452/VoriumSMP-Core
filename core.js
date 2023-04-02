"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allianceData = exports.alliancePath = void 0;
const event_1 = require("bdsx/event");
const fs_1 = require("fs");
const playerJoin_1 = require("./src/events/playerJoin");
require("./commands/alliance");
exports.alliancePath = '../plugin_data/VoriumSMP-Core/alliancedata.json';
exports.allianceData = JSON.parse((0, fs_1.readFileSync)(exports.alliancePath, 'utf-8'));
event_1.events.serverOpen.on(() => {
    console.log('VoriumSMP-Core has been enabled.');
    if (!(0, fs_1.existsSync)('../plugin_data/VoriumSMP-Core/alliancedata.json')) {
        if (!(0, fs_1.existsSync)('../plugin_data'))
            (0, fs_1.mkdirSync)('../plugin_data');
        if (!(0, fs_1.existsSync)('../plugin_data/VoriumSMP-Core'))
            (0, fs_1.mkdirSync)('../plugin_data/VoriumSMP-Core');
        if (!(0, fs_1.existsSync)('../plugin_data/VoriumSMP-Core/alliancedata.json'))
            (0, fs_1.openSync)('../plugin_data/VoriumSMP-Core/alliancedata.json', 'w');
        (0, fs_1.writeFileSync)('../plugin_data/VoriumSMP-Core/alliancedata.json', '{"players":{},"alliances":{}}');
    }
});
event_1.events.playerJoin.on(event => {
    (0, playerJoin_1.default)(event);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9DO0FBQ3BDLDJCQUFrRjtBQUVsRix3REFBaUQ7QUFFakQsK0JBQTZCO0FBRWhCLFFBQUEsWUFBWSxHQUFHLGlEQUFpRCxDQUFBO0FBQ2hFLFFBQUEsWUFBWSxHQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUEsaUJBQVksRUFBQyxvQkFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFFNUYsY0FBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUNoRCxJQUFJLENBQUMsSUFBQSxlQUFVLEVBQUMsaURBQWlELENBQUMsRUFBRTtRQUNoRSxJQUFHLENBQUMsSUFBQSxlQUFVLEVBQUMsZ0JBQWdCLENBQUM7WUFBRSxJQUFBLGNBQVMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlELElBQUcsQ0FBQyxJQUFBLGVBQVUsRUFBQywrQkFBK0IsQ0FBQztZQUFFLElBQUEsY0FBUyxFQUFDLCtCQUErQixDQUFDLENBQUM7UUFDNUYsSUFBRyxDQUFDLElBQUEsZUFBVSxFQUFDLGlEQUFpRCxDQUFDO1lBQUUsSUFBQSxhQUFRLEVBQUMsaURBQWlELEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEksSUFBQSxrQkFBYSxFQUFDLGlEQUFpRCxFQUFFLCtCQUErQixDQUFDLENBQUM7S0FDckc7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILGNBQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ3pCLElBQUEsb0JBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQTtBQUNyQixDQUFDLENBQUMsQ0FBQSJ9