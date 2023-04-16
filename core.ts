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
import { Webhook } from "webhook-discord"
import { rallyCache } from "./src/commands/sub/rally";
import { bedrockServer } from "bdsx/launcher";
import { ActorDamageCause } from "bdsx/bds/actor";

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

export const logs = new Webhook("https://canary.discord.com/api/webhooks/1094961698026307656/MyTuIOKRtBtA5_x2X_Xt0tXKEx5UQK-d2rRyTxGRUsh6hSau_4lj8fgkZ-9k0UNHFmOM");
// const send = (msg: string) => {
//     fetch(logsURL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             content: msg,
//         }),
//     })
// }

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

    // setInterval(() => {
    //     for (let [allName, player] of Object.entries(rallyCache)) {
    //         const players = bedrockServer.level.getPlayers();
    //         const target = players.find(p => p.getName() === player);
    //         if (!target) {
    //             delete rallyCache[allName];
    //             continue;
    //         }
    //         const all = AllianceModule.get(allName);
    //         if(!all) {
    //             delete rallyCache[allName]
    //             continue;
    //         }
    //         const allMembers = players.filter((p => all.members.includes(p.getName())))

    //         let minDistance = Infinity;
    //         for (let p of allMembers) {
    //             if (player === p.getName()) {
    //                 p.setBossBar(`§7${p.getName()} §3${Math.round(p.getPosition().x)}, ${Math.round(p.getPosition().y)}, ${Math.round(p.getPosition().z)}`, 100);
    //                 continue;
    //             };
    //             const distance = Math.sqrt(
    //                 Math.pow(p.getPosition().x - target.getPosition().x, 2) +
    //                 Math.pow(p.getPosition().y - target.getPosition().y, 2) +
    //                 Math.pow(p.getPosition().z - target.getPosition().z, 2)
    //               );

    //               if (distance < minDistance) {
    //                 minDistance = distance;
    //               }
    //         }

    //         for (let p of allMembers) {
    //             if (player === p.getName()) {
    //                 p.setBossBar(`§7${p.getName()} §3${Math.round(p.getPosition().x)}, ${Math.round(p.getPosition().y)}, ${Math.round(p.getPosition().z)}`, 100);
    //                 continue;
    //             };
    //             const distance = Math.sqrt(
    //                 Math.pow(p.getPosition().x - target.getPosition().x, 2) +
    //                 Math.pow(p.getPosition().y - target.getPosition().y, 2) +
    //                 Math.pow(p.getPosition().z - target.getPosition().z, 2)
    //               );

    //               const percent = Math.max(0, 100 - (distance / minDistance) * 100);
    //               p.setBossBar(`§7${p.getName()} §3${Math.round(p.getPosition().x)}, ${Math.round(p.getPosition().y)}, ${Math.round(p.getPosition().z)}`, percent);
    //             }
    //     }
    // }, 1500);
});

events.playerJoin.on(event => {
    playerJoin(event)
})

events.playerLeft.on(event => {
    playerLeft(event)
    for (let [all, player] of Object.entries(rallyCache)) {
        if (event.player.getName() === player) {
            delete rallyCache[all];
        }
    }
})

events.chestOpen.on(ev => {
    if(!AllianceModule.allowed(ev.player)) {
        ev.player.sendMessage(Messages.notAllowedAlliance)
        return CANCEL;
    }
})

events.playerSleepInBed.on(event => {
    const players = bedrockServer.serverInstance.getPlayers();
    if(players.filter(p => p.isSleeping()) >= players.filter(p => !p.isSleeping())) {
        bedrockServer.executeCommandOnConsole('time set day');
        //players.forEach(p => p.sendMessage(Messages.mostSleep));
    }
});


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
    const a = AllianceModule.insideWhichClaim({
        x: ev.blockPos.x,
        y: ev.blockPos.y,
        z: ev.blockPos.z,
    });
    if (a) {
        if(!a.members.includes(ev.player.getName())) {
            ev.player.sendMessage(Messages.notAllowedAlliance)
            return CANCEL;
        }
    }
    logs.info("Place", `${ev.player.getName()} placed a block ${ev.block.getName()} at \`${ev.blockPos.x}, ${ev.blockPos.y}, ${ev.blockPos.z}\``)
});

events.projectileHit.on((ev) => {

})

events.blockDestroy.on(ev => {
    if(!AllianceModule.allowed(ev.player)) {
        ev.player.sendMessage(Messages.notAllowedAlliance)
        return CANCEL;
    }
    const a = AllianceModule.insideWhichClaim({
        x: ev.blockPos.x,
        y: ev.blockPos.y,
        z: ev.blockPos.z,
    });
    if (a) {
        if(!a.members.includes(ev.player.getName())) {
            ev.player.sendMessage(Messages.notAllowedAlliance)
            return CANCEL;
        }
    }
    logs.info("Destroy", `${ev.player.getName()} broke a block ${ev.itemStack.getName()} at \`${ev.blockPos.x}, ${ev.blockPos.y}, ${ev.blockPos.z}\``)
});

events.playerInteract.on(ev => {
    if(!AllianceModule.allowed(ev.player)) {
        ev.player.sendMessage(Messages.notAllowedAlliance)
        return CANCEL;
    }
    //logs.info("Interact", `${ev.player.getName()} interacted (Victim: ${ev.victim.getNameTag()}) at \`${ev.interactPos.x}, ${ev.interactPos.y}, ${ev.interactPos.z}\``)

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

events.playerAttack.on(ev => {
    const p = ev.player
    if(!p?.isPlayer()) return;
    if(!AllianceModule.allowed(p)) {
        if(safeMobs.includes(ev.victim.getEntityTypeId())) {
            p.sendMessage(Messages.notAllowedAlliance)
            return CANCEL;
        };
    }
    logs.info("Attack", `${p.getName()} used item ${ev.victim.getIdentifier()} at \`${p.getPosition().x}, ${p.getPosition().y}, ${p.getPosition().z}\``)
})

events.entityHurt.on(ev => {
    if(AllianceModule.insideClaim(ev.entity.getPosition())) {
        const cause = ev.damageSource.cause;
        if(cause === ActorDamageCause.Projectile || cause === ActorDamageCause.BlockExplosion || cause === ActorDamageCause.EntityExplosion) {
            if(safeMobs.includes(ev.entity.getEntityTypeId())) {
                return CANCEL;
            };
        }
    }
})

events.itemUse.on(ev => {
    if(!AllianceModule.allowed(ev.player)) {
        if(ev.itemStack.getItem()?.isFood()) return;
        if(!ev.itemStack.isPotionItem() && !ev.itemStack.isDamageableItem()) {
            ev.player.sendMessage(Messages.notAllowedAlliance)
            return CANCEL;
        }
    }
    //logs.info("ItemUse", `${ev.player.getName()} used item ${ev.itemStack.getName()} at \`${ev.player.getPosition().x}, ${ev.player.getPosition().y}, ${ev.player.getPosition().z}\``)

});

events.itemUseOnBlock.on(ev => {
    if (ev.actor instanceof Player) {
        //logs.info("ItemUseOnblock", `${ev.actor.getName()} used item ${ev.itemStack.getName()} at \`${ev.actor.getPosition().x}, ${ev.actor.getPosition().y}, ${ev.actor.getPosition().z}\``)
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


events.levelExplode.on(ev => {
    if(AllianceModule.insideClaim({
        x: ev.position.x,
        y: ev.position.y,
        z: ev.position.z
    }) || AllianceModule.insideClaim({
        x: ev.position.x + 5,
        y: ev.position.y + 5,
        z: ev.position.z + 5
    }) || AllianceModule.insideClaim({
        x: ev.position.x - 5,
        y: ev.position.y - 5,
        z: ev.position.z - 5
    }) || AllianceModule.insideClaim({
        x: ev.position.x + 5,
        y: ev.position.y - 5,
        z: ev.position.z - 5,
    }) || AllianceModule.insideClaim({
        x: ev.position.x - 5,
        y: ev.position.y + 5,
        z: ev.position.z + 5,
    })) {
        return CANCEL;
    }
})