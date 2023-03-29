import { events } from "bdsx/event";
import { openServer } from "./src/PluginManagers/openServer";
import { playerJoin } from "./src/EventManagers/playerJoin";

events.serverOpen.on(() => {
    openServer.init();
});
