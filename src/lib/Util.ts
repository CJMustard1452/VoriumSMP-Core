import { VectorXZ } from "bdsx/common";
import { bedrockServer } from "bdsx/launcher";

export function inBetween(vector: VectorXZ, tuple: [VectorXZ, VectorXZ]): boolean {
    const [start, end] = tuple;
    const minX = Math.min(start.x, end.x);
    const maxX = Math.max(start.x, end.x);
    const minZ = Math.min(start.z, end.z);
    const maxZ = Math.max(start.z, end.z);

    return (
      vector.x >= minX &&
      vector.x <= maxX &&
      vector.z >= minZ &&
      vector.z <= maxZ
    );
}

export function intersects(tuple1: [VectorXZ, VectorXZ], tuple2: [VectorXZ, VectorXZ]): boolean {
    const [start1, end1] = tuple1;
    const [start2, end2] = tuple2;

    // Find the minimum and maximum x and z values for each tuple
    const minX1 = Math.min(start1.x, end1.x);
    const maxX1 = Math.max(start1.x, end1.x);
    const minZ1 = Math.min(start1.z, end1.z);
    const maxZ1 = Math.max(start1.z, end1.z);
    const minX2 = Math.min(start2.x, end2.x);
    const maxX2 = Math.max(start2.x, end2.x);
    const minZ2 = Math.min(start2.z, end2.z);
    const maxZ2 = Math.max(start2.z, end2.z);

    // Check if the x and z ranges of the two tuples intersect
    const xOverlap = (minX1 <= maxX2) && (maxX1 >= minX2);
    const zOverlap = (minZ1 <= maxZ2) && (maxZ1 >= minZ2);

    return xOverlap && zOverlap;
}

export function broadcast(msg: string) {
    bedrockServer.serverInstance.getPlayers().forEach(p => p.sendMessage(msg));
}