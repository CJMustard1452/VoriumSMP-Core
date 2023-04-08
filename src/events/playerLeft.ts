import { readFileSync, writeFileSync } from 'fs'
import { Player } from 'bdsx/bds/player';
import { PlayerJoinEvent, PlayerLeftEvent } from 'bdsx/event_impl/entityevent';
import { addUser, removeUser } from '../../core';

const playerLeft = (ev: PlayerLeftEvent) => {
    removeUser(ev.player.getName());
}

export default playerLeft;