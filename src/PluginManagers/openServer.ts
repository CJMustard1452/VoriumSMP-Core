import { mkdirSync, openSync, writeFileSync, existsSync } from 'fs'
import { command } from "bdsx/command";
export class openServer {

    public static init(): void {
        console.log('VoriumSMP-Core has been enabled.');
        if (!existsSync('../plugin_data/VoriumSMP-Core/alliancedata.json')) openServer.registerPluginData();
        openServer.registerAllianceCommand();
    }

    private static registerPluginData(): void {
        if(!existsSync('../plugin_data')) mkdirSync('../plugin_data');
        if(!existsSync('../plugin_data/VoriumSMP-Core')) mkdirSync('../plugin_data/VoriumSMP-Core');
        if(!existsSync('../plugin_data/VoriumSMP-Core/alliancedata.json')) openSync('../plugin_data/VoriumSMP-Core/alliancedata.json', 'w');
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', '{"players":{},"alliances":{}}');
    }

    private static registerAllianceCommand(): void {
        command.register("alliance", "Access to alliance sub-commands.")
            .overload(param => {}, { option: command.enum("create", "create"), text: command.enum("alliance name")})
            .overload(param => {}, { option: command.enum("invite", "invite"), text: command.enum("playername")})
            .overload(param => {}, { option: command.enum("remove", "remove"), text: command.enum("playername") })
            .overload(param => {}, { option: command.enum("info", "info") })
            .overload(param => {}, { option: command.enum("leave", "leave") })
            .overload(param => {}, { option: command.enum("disband", "disband") });
    }
}
