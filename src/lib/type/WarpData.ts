import { DimensionId } from "bdsx/bds/actor";
import { VectorXYZ } from "bdsx/common"

type WarpData = {
    name: string;
    dimension: DimensionId
    coords: VectorXYZ
}

export default WarpData;