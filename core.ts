import { events } from "bdsx/event";
import { existsSync, mkdirSync, openSync, readFileSync, writeFileSync } from "fs";
import AllianceData from "./src/lib/type/AllianceData";
import playerJoin from "./src/events/playerJoin";

import "./commands/alliance";

export const alliancePath = '../plugin_data/VoriumSMP-Core/alliancedata.json'
export const allianceData: AllianceData[] = JSON.parse(readFileSync(alliancePath, 'utf-8'));

events.serverOpen.on(() => {
    console.log('VoriumSMP-Core has been enabled.');
    if (!existsSync('../plugin_data/VoriumSMP-Core/alliancedata.json')) {
        if(!existsSync('../plugin_data')) mkdirSync('../plugin_data');
        if(!existsSync('../plugin_data/VoriumSMP-Core')) mkdirSync('../plugin_data/VoriumSMP-Core');
        if(!existsSync('../plugin_data/VoriumSMP-Core/alliancedata.json')) openSync('../plugin_data/VoriumSMP-Core/alliancedata.json', 'w');
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', '{"players":{},"alliances":{}}');
    }
});

events.playerJoin.on(event => {
    playerJoin(event)
})