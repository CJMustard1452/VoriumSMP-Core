import { ServerPlayer } from "bdsx/bds/player";
import AllianceData from "./type/AllianceData";
import { Vec3 } from "bdsx/bds/blockpos";

export default class User {
    #player: ServerPlayer;

    invite: string;

    public constructor(player: ServerPlayer) {
        this.#player = player;
        this.invite = "";
    }

    public get name(): string {
        return this.#player.getName();
    }

    public get xuid(): string {
        return this.#player.getXuid();
    }

    public get player(): ServerPlayer {
        return this.#player
    }

    public get pos(): Vec3 {
        return this.player.getPosition();
    }

    public message(msg: string): void {
        this.#player.sendMessage(msg)
    }
}