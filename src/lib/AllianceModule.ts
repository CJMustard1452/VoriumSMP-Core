import { readFileSync, writeFileSync } from "fs";
import AllianceData from "./type/AllianceData";
import { allianceData, alliancePath } from "../../core";
import { VectorXYZ } from "bdsx/common";
import { intersects, inBetween } from "./Util";

export default class AllianceModule {
    public static create(name: string, leader: string) {
        allianceData.push({
            name,
            leader,
            members: [],
        })
        this.writeDB();
    }

    public static delete(name: string) {
        const idx = allianceData.findIndex(a => a.name === name);
        delete allianceData[idx];
        this.writeDB();
    }

    public static exists(name: string) {
        return allianceData.find(a => a.name === name);
    }

    public static get(name: string): AllianceData | undefined {
        return allianceData.find(a => a.name === name);
    }

    public static getByLeader(name: string): AllianceData | undefined {
        return allianceData.find(a => a.leader === name);
    }

    public static addMember(name: string, member: string) {
        const idx = allianceData.findIndex(a => a.name === name);
        allianceData[idx].members.push(member);
        this.writeDB();
    }

    public static removeMember(name: string, member: string) {
        const idx = allianceData.findIndex(a => a.name === name);
        allianceData[idx].members = allianceData[idx].members.filter(n => n !== member)
        this.writeDB();
    }

    public static setHome(name: string, home: VectorXYZ) {
        const idx = allianceData.findIndex(a => a.name === name);
        allianceData[idx].home = home;
        this.writeDB();
    }

    public static ownsAlliance(member: string): boolean {
        return !!allianceData.find(a => a.leader === member);
    }

    public static isLeader(name: string, member: string): boolean {
        const idx = allianceData.findIndex(a => a.name === name);
        return allianceData[idx].leader === member;
    }

    public static isMember(name: string, member: string): boolean {
        const idx = allianceData.findIndex(a => a.name === name);
        return allianceData[idx].members.includes(member)
    }

    public static insideClaim(vec: VectorXYZ): boolean {
        let a = allianceData.filter((data) => {
            return inBetween(vec, data.claim!);
        });

        if(a.length) {
            return true;
        } else {
            return false;
        }
    }

    public static intersectsClaim(area: [VectorXYZ, VectorXYZ]): boolean {
        let a = allianceData.filter((data) => {
            if (!data.claim) {
                return intersects(area, data.claim!)
            }
        });
        if(a.length) {
            return true;
        } else {
            return false;
        }
    }

    public static insideWhichClaim(vec: VectorXYZ): AllianceData | undefined {
        return allianceData.find((data) => {
            return inBetween(vec, data.claim!);
        });
    }

    public static getDB(): AllianceData[] {
        const data = readFileSync(alliancePath).toString();
        return JSON.parse(data);
    }

    public static writeDB(): void {
        writeFileSync(alliancePath, JSON.stringify(allianceData, null, 4));
    }
}

