import { readFileSync, writeFileSync } from "fs";
import { warpPath } from "../../core";
import WarpData from "./type/WarpData";
import { DimensionId } from "bdsx/bds/actor";
import { VectorXYZ } from "bdsx/common";
import { ServerPlayer } from "bdsx/bds/player";
import { Dimension } from "bdsx/bds/dimension";
import { bedrockServer } from "bdsx/launcher";

export default class WarpModule {
    public static create(ign: string, name: string, dimension: DimensionId, coords: VectorXYZ) {
        const data = this.getDB();
        if (!data[ign]) {
            data[ign] = [{
                name,
                coords,
                dimension: dimension
            }];
        } else {
            data[ign].push({
                name,
                dimension,
                coords,
            })
        }
        this.writeDB(data);
    }

    public static getAll(ign: string): WarpData[] | undefined {
        const data = this.getDB();
        if(!data[ign]) { return undefined; }
        return data[ign];
    }

    public static get(ign: string, name: string): WarpData | undefined {
        const data = this.getDB()[ign];
        if (!data) return undefined;
        return data.find(d => d.name === name);
    }

    public static delete(ign: string, name: string) {
        const data = this.getDB()
        data[ign] = data[ign].filter(d => d.name !== name);
        this.writeDB(data);
    }

    public static teleport(ign: string, name: string) {
        const warp = this.getDB()[ign];
        let w = warp.find(e => e.name === name)!;
        const { coords: c } = w;
        let dim: string;
        switch (w.dimension) {
            case DimensionId.Overworld:
                dim = "overworld"
                break;
            case DimensionId.Nether:
                dim = "nether"
                break;
            case DimensionId.TheEnd:
                dim = "the_end";
                break;
            default:
                return;
        }

        bedrockServer.executeCommand(`/execute in ${dim} as ${ign} at @s run teleport @s ${c.x} ${c.y} ${c.z}`);
    }

    public static getDB(): { [name: string]: WarpData[] } {
        const data = readFileSync(warpPath).toString();
        return JSON.parse(data);
    }

    public static writeDB(data: { [name: string]: WarpData[] }): void {
        writeFileSync(warpPath, JSON.stringify(data, null, 4));
    }
}