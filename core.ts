import { events } from "bdsx/event";
import { existsSync, mkdirSync, openSync, readFileSync, writeFileSync } from "fs";
import AllianceData from "./src/lib/type/AllianceData";
import playerJoin from "./src/events/playerJoin";
import User from "./src/lib/User";
import { RawPacket } from "bdsx/rawpacket";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { Player, ServerPlayer } from "bdsx/bds/player";
import playerLeft from "./src/events/playerLeft";
import AllianceModule from "./src/lib/AllianceModule";
import { CANCEL } from "bdsx/common";
import { Messages } from "./src/lib/Messages";
import { Packet } from "bdsx/bds/packet";
import { ActorType } from "bdsx/bds/actor";
import {Webhook} from "discord-webhook-node"

let users: User[] = []

export const getUser = (name: string): User | undefined => {
    return users.find(u => u.name === name);
}

export const addUser = (player: Player) => {
    users.push(new User(player))
}

export const removeUser = (name: string) => {
    users = users.filter(u => u.name !== name);
}

export const logs = new Webhook("https://canary.discord.com/api/webhooks/1094961698026307656/MyTuIOKRtBtA5_x2X_Xt0tXKEx5UQK-d2rRyTxGRUsh6hSau_4lj8fgkZ-9k0UNHFmOM")

export const alliancePath = '../plugin_data/VoriumSMP-Core/alliancedata.json'
export const warpPath = '../plugin_data/VoriumSMP-Core/warpdata.json';
export const allianceData: AllianceData[] = JSON.parse(readFileSync(alliancePath, 'utf-8'));

events.serverOpen.on(async() => {
    await import("./src/commands/alliance");
    await import("./src/commands/tpa");
    await import("./src/commands/warp");
    console.log('VoriumSMP-Core has been enabled.');
    if (!existsSync(alliancePath)) {
        if(!existsSync('../plugin_data')) mkdirSync('../plugin_data');
        if(!existsSync('../plugin_data/VoriumSMP-Core')) mkdirSync('../plugin_data/VoriumSMP-Core');
        if(!existsSync(alliancePath)) openSync(alliancePath, 'w');
        writeFileSync(alliancePath, '[]');
    }

    if (!existsSync(warpPath)) {
        if(!existsSync('../plugin_data')) mkdirSync('../plugin_data');
        if(!existsSync('../plugin_data/VoriumSMP-Core')) mkdirSync('../plugin_data/VoriumSMP-Core');
        if(!existsSync(warpPath)) openSync(warpPath, 'w');
        writeFileSync(warpPath, '{}');
    }
});

events.playerJoin.on(event => {
    playerJoin(event)
})

events.playerLeft.on(event => {
    playerLeft(event)
})

events.chestOpen.on(ev => {
    if(!AllianceModule.allowed(ev.player)) {
        ev.player.sendMessage(Messages.notAllowedAlliance)
        return CANCEL;
    }
})

events.blockInteractedWith.on(e => {
    if(!AllianceModule.allowed(e.player)) {
        if(e.player.hasOpenContainer()) return;
        e.player.sendMessage(Messages.notAllowedAlliance);
        return CANCEL;
    };
});

events.blockPlace.on(ev => {
    if(!AllianceModule.allowed(ev.player)) {
        ev.player.sendMessage(Messages.notAllowedAlliance)
        return CANCEL;
    }
    logs.send(`${ev.player.getName()} placed a block ${ev.block.getName()} at \`${ev.blockPos.x}, ${ev.blockPos.y}, ${ev.blockPos.z}\``)
});

events.blockDestroy.on(ev => {
    if(!AllianceModule.allowed(ev.player)) {
        ev.player.sendMessage(Messages.notAllowedAlliance)
        return CANCEL;
    }
    logs.send(`${ev.player.getName()} broke a block ${ev.itemStack.getName()} at \`${ev.blockPos.x}, ${ev.blockPos.y}, ${ev.blockPos.z}\``)
});

events.playerInteract.on(ev => {
    if(!AllianceModule.allowed(ev.player)) {
        ev.player.sendMessage(Messages.notAllowedAlliance)
        return CANCEL;
    }
    logs.send(`${ev.player.getName()} interacted (Victim: ${ev.victim.getNameTag()}) at \`${ev.interactPos.x}, ${ev.interactPos.y}, ${ev.interactPos.z}\``)

});

const safeMobs = [
    ActorType.Villager,
    ActorType.VillagerV2,
    ActorType.ZombieVillager,
    ActorType.ZombieVillagerV2,
    ActorType.Cow,
    ActorType.Pig,
    ActorType.Chicken,
    ActorType.Fish,
    ActorType.Cat,
    ActorType.Parrot,
    ActorType.Donkey,
    ActorType.Sheep,
    ActorType.Horse,
    ActorType.MushroomCow
]

events.entityHurt.on(ev => {
    const p = ev.damageSource.getDamagingEntity()
    if(!p?.isPlayer()) return;
    if(!safeMobs.includes(ev.entity.getEntityTypeId())) return CANCEL && p.sendMessage(Messages.notAllowedAlliance);
})

events.itemUse.on(ev => {
    if(!AllianceModule.allowed(ev.player)) {
        if(ev.itemStack.getItem()?.isFood()) return;
        if(!ev.itemStack.isPotionItem()) {
            ev.player.sendMessage(Messages.notAllowedAlliance)
            return CANCEL;
        }
    }
    logs.send(`${ev.player.getName()} used item ${ev.itemStack.getName()} at \`${ev.player.getPosition().x}, ${ev.player.getPosition().y}, ${ev.player.getPosition().z}\``)

});

events.itemUseOnBlock.on(ev => {
    if (ev.actor instanceof Player) {
        logs.send(`${ev.actor.getName()} used item ${ev.itemStack.getName()} at \`${ev.actor.getPosition().x}, ${ev.actor.getPosition().y}, ${ev.actor.getPosition().z}\``)
        if(!AllianceModule.allowed(ev.actor)) {
            ev.actor.sendMessage(Messages.notAllowedAlliance)
            return CANCEL;
        }
    }

});

events.splashPotionHit.on(ev => {
    console.log(ev.potionEffect)
    if (ev.potionEffect === 23 || ev.potionEffect === 24) {
        return CANCEL;
    }
});
