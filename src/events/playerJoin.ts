import { readFileSync, writeFileSync } from 'fs'
import { Player } from 'bdsx/bds/player';
import { PlayerJoinEvent } from 'bdsx/event_impl/entityevent';
import { addUser } from '../../core';

const playerJoin = (ev: PlayerJoinEvent) => {
    addUser(ev.player);
}

export default playerJoin;