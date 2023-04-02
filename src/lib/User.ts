import { ServerPlayer } from "bdsx/bds/player";
import AllianceData from "./type/AllianceData";

export default class User {
    #player: ServerPlayer;

    public constructor(player: ServerPlayer) {
        this.#player = player;
    }

    public get name(): string {
        return this.#player.getName();
    }

    public get xuid(): string {
        return this.#player.getXuid();
    }
}