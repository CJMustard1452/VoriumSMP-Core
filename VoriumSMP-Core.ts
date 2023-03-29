import { events } from "bdsx/event";
import { openServer } from "./src/PluginManagers/openServer";
import { playerJoin } from "./src/EventManagers/playerJoin";
import { CommandContext } from "bdsx/bds/command";
import { commandManager } from "./src/PluginManagers/commandManager";

events.serverOpen.on(() => {
    openServer.init();
});

events.playerJoin.on(event => {
    new playerJoin(event.player);
})

events.command.on((command: string, playerName: string, commandContent: CommandContext) => {
    commandManager.init(command, commandContent);
    if(command == '/alliance') return 0;
})