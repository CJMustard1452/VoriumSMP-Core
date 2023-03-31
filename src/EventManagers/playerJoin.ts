import { readFileSync, writeFileSync } from 'fs'
import { Player } from 'bdsx/bds/player';
export class playerJoin {

    allianceData = JSON.parse(readFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', 'utf-8'));

    public constructor(player: Player){
        if(!this.allianceData['players'][`${player.getName().toLowerCase()}`]) this.registerPlayer(player);
    }

    private registerPlayer(player: Player): void {
        player.sendMessage('§8(§3Vorium-SMP§8) §aWelcome, we are currently setting up player data associated with this account, to get started run §c/alliance§a.');
        this.allianceData['players'][`${player.getName().toLowerCase()}`] = {};
        this.allianceData['players'][`${player.getName().toLowerCase()}`]["alliance"] = false;
        this.allianceData['players'][`${player.getName().toLowerCase()}`]["invites"] = [];
        writeFileSync('../plugin_data/VoriumSMP-Core/alliancedata.json', JSON.stringify(this.allianceData), 'utf-8');
    }
}
