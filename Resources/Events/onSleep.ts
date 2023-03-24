import { Player } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";
module.exports = {
    execute(player: Player){
        const sleepingPlayers = bedrockServer.serverInstance.getPlayers().filter(player => player.isSleeping()).length + 1;
        const allPlayers = bedrockServer.serverInstance.getPlayers().length;
        if((player.getLevel().getTime() > 36750) && (sleepingPlayers >= (allPlayers / 2))){
        bedrockServer.serverInstance.getPlayers().forEach(p => { p.sendMessage(`§aMore than half of the online players opted to sleep.`)});
        player.getLevel().setTime(24000);
        }
    }
}
