module juzi {
    export enum JU_ZI_TYPE {
        SZ,//上中结构
        ZX,//中心结构
        SX,//上下结构
        ZY,//左右结构
        LX,//螺旋结构
        SB,//四边结构
        DJ,//单机结构
        SJXL,//双机巡逻结构
        SXD,//三兄弟结构
        SEWZ,//四个二五仔结构
        SJ,//四角结构
    }
    export let JUZIList: JU_ZI_TYPE[] = [JU_ZI_TYPE.SZ, JU_ZI_TYPE.ZX, JU_ZI_TYPE.SX, JU_ZI_TYPE.ZY, JU_ZI_TYPE.LX, JU_ZI_TYPE.SB, JU_ZI_TYPE.DJ, JU_ZI_TYPE.SJXL, JU_ZI_TYPE.SXD, JU_ZI_TYPE.SEWZ, JU_ZI_TYPE.SJ]
    export class JuZiGuanLi {

    }
}