import { VectorXYZ, VectorXZ } from "bdsx/common"

type AllianceData = {
    name: string;
    leader: string,
    members: string[],
    claim?: [VectorXZ, VectorXZ]
    home?: VectorXYZ
}

export default AllianceData