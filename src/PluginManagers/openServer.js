"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openServer = void 0;
const fs_1 = require("fs");
const command_1 = require("bdsx/command");
class openServer {
    static init() {
        console.log('VoriumSMP-Core has been enabled.');
        if (!(0, fs_1.existsSync)('../plugin_data/VoriumSMP-Core/alliancedata.json'))
            openServer.registerPluginData();
        openServer.registerAllianceCommand();
    }
    static registerPluginData() {
        if (!(0, fs_1.existsSync)('../plugin_data'))
            (0, fs_1.mkdirSync)('../plugin_data');
        if (!(0, fs_1.existsSync)('../plugin_data/VoriumSMP-Core'))
            (0, fs_1.mkdirSync)('../plugin_data/VoriumSMP-Core');
        if (!(0, fs_1.existsSync)('../plugin_data/VoriumSMP-Core/alliancedata.json'))
            (0, fs_1.openSync)('../plugin_data/VoriumSMP-Core/alliancedata.json', 'w');
        (0, fs_1.writeFileSync)('../plugin_data/VoriumSMP-Core/alliancedata.json', '{"players":{},"alliances":{}}');
    }
    static registerAllianceCommand() {
        command_1.command.register("alliance", "Access to alliance sub-commands.")
            .overload(param => { }, { option: command_1.command.enum("create", "create"), text: command_1.command.enum("alliance name") })
            .overload(param => { }, { option: command_1.command.enum("invite", "invite"), text: command_1.command.enum("playername") })
            .overload(param => { }, { option: command_1.command.enum("remove", "remove"), text: command_1.command.enum("playername") })
            .overload(param => { }, { option: command_1.command.enum("info", "info") })
            .overload(param => { }, { option: command_1.command.enum("leave", "leave") })
            .overload(param => { }, { option: command_1.command.enum("disband", "disband") });
    }
}
exports.openServer = openServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlblNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9wZW5TZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQW1FO0FBQ25FLDBDQUF1QztBQUN2QyxNQUFhLFVBQVU7SUFFWixNQUFNLENBQUMsSUFBSTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBQSxlQUFVLEVBQUMsaURBQWlELENBQUM7WUFBRSxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNwRyxVQUFVLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRU8sTUFBTSxDQUFDLGtCQUFrQjtRQUM3QixJQUFHLENBQUMsSUFBQSxlQUFVLEVBQUMsZ0JBQWdCLENBQUM7WUFBRSxJQUFBLGNBQVMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlELElBQUcsQ0FBQyxJQUFBLGVBQVUsRUFBQywrQkFBK0IsQ0FBQztZQUFFLElBQUEsY0FBUyxFQUFDLCtCQUErQixDQUFDLENBQUM7UUFDNUYsSUFBRyxDQUFDLElBQUEsZUFBVSxFQUFDLGlEQUFpRCxDQUFDO1lBQUUsSUFBQSxhQUFRLEVBQUMsaURBQWlELEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEksSUFBQSxrQkFBYSxFQUFDLGlEQUFpRCxFQUFFLCtCQUErQixDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVPLE1BQU0sQ0FBQyx1QkFBdUI7UUFDbEMsaUJBQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLGtDQUFrQyxDQUFDO2FBQzNELFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxpQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUM7YUFDdkcsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQzthQUNwRyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsaUJBQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxpQkFBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO2FBQ3JHLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxpQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQzthQUMvRCxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDakUsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQztDQUNKO0FBeEJELGdDQXdCQyJ9