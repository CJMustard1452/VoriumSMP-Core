import { readFileSync, writeFileSync } from "fs";
import AllianceData from "./type/AllianceData";
import { allianceData, alliancePath } from "../../core";
import { VectorXYZ, VectorXZ } from "bdsx/common";
import { intersects, inBetween } from "./Util";
import { Player } from "bdsx/bds/player";

export default class AllianceModule {
    public static create(name: string, leader: string) {
        const data = this.getDB();
        data.push({
            name,
            leader,
            members: [leader],
        })
        this.writeDB(data);
    }

    public static delete(name: string) {
        const data = this.getDB();
        const idx = data.findIndex(a => a.name === name);
        delete data[idx];
        this.writeDB(data);
    }

    public static exists(name: string) {
        return this.getDB().find(a => a.name === name);
    }

    public static get(name: string): AllianceData | undefined {
        return this.getDB().find(a => a.name === name);
    }

    public static getByLeader(name: string): AllianceData | undefined {
        return this.getDB().find(a => a.leader === name);
    }

    public static addMember(name: string, member: string) {
        const data = this.getDB();
        const idx = data.findIndex(a => a.name === name);
        data[idx].members.push(member);
        this.writeDB(data);
    }

    public static hasMember(name: string, member: string): boolean {
        const idx = this.getDB().findIndex(a => a.name === name);
        return this.getDB()[idx].members.includes(member)
    }

    public static removeMember(name: string, member: string) {
        const data = this.getDB();
        const idx = data.findIndex(a => a.name === name);
        data[idx].members = data[idx].members.filter(n => n !== member)
        this.writeDB(data);
    }

    public static createClaim(name: string, area: [VectorXZ, VectorXZ]) {
        const data = this.getDB();
        const idx = data.findIndex(a => a.name === name);
        data[idx].claim = area;
        this.writeDB(data);
    }

    public static hasClaim(name: string): boolean {
        const idx = this.getDB().findIndex(a => a.name === name);
        return !!this.getDB()[idx].claim
    }

    public static setHome(name: string, home: VectorXYZ) {
        const data = this.getDB();
        const idx = data.findIndex(a => a.name === name);
        data[idx].home = home;
        this.writeDB(data);
    }

    public static ownsAlliance(member: string): boolean {
        return !!this.getDB().find(a => a.leader === member);
    }

    public static isLeader(name: string, member: string): boolean {
        const idx = this.getDB().findIndex(a => a.name === name);
        return this.getDB()[idx].leader === member;
    }

    public static isMember(name: string, member: string): boolean {
        const idx = this.getDB().findIndex(a => a.name === name);
        return this.getDB()[idx].members.includes(member)
    }

    public static insideClaim(vec: VectorXYZ): boolean {
        let a = this.getDB().filter((data) => {
            if (data.claim) {
                return inBetween(vec, data.claim!)
            }
        });

        if(a.length) {
            return true;
        } else {
            return false;
        }
    }

    public static intersectsClaim(area: [VectorXYZ, VectorXYZ]): boolean {
        let a = this.getDB().filter((data) => {
            if (data.claim) {
                return intersects(area, data.claim!)
            } else {
                false;
            }
        });
        if(a.length) {
            return true;
        } else {
            return false;
        }
    }

    public static insideWhichClaim(vec: VectorXYZ): AllianceData | undefined {
        return this.getDB().find((data) => {
            if (data.claim) {
                return inBetween(vec, data.claim!);
            }
        });
    }

    public static allowed(player: Player): boolean {
        for (let data of this.getDB()) {
            if(data.claim) {
                if (inBetween(player.getPosition(), data.claim)) {
                    return data.leader === player.getName() || data.members.includes(player.getName());
                } else {
                    continue;
                }
            } else {
                continue;
            }
        }
        return true;
    }

    public static getDB(): AllianceData[] {
        const data = readFileSync(alliancePath).toString();
        return JSON.parse(data);
    }

    public static writeDB(data: AllianceData[]): void {
        writeFileSync(alliancePath, JSON.stringify(data, null, 4));
    }
}

