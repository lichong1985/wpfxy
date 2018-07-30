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
        //全地图可以放下  每个 格子大小约等于一个 飞机的方块 
        public MAX_NUMBER: number = 30 * 50;
        public fc_list: Array<feichuan.FeiChuanBase> = new Array<feichuan.FeiChuanBase>();
        public fc_info_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();

        //句子里当前的飞机数量
        public fc_num_now: number;
        public constructor() { }

        //初始化飞机 数量
        public randomNum() {
            return suiji.GetRandomNum(1, 5);
        }

        //获取随机飞船信息
        public getandomFc(): feichuan.FeiChuanInfo {
            let i = suiji.GetRandomNum(0, (FC_Console.all_list.length - 1));
            return FC_Console.all_list[i];
        }


        // 初始化飞船信息
        public initFcInfo() {
            let num = this.randomNum();
            num += 1;
            num = 1;
            for (let i = 0; i < num; i++) {
                let info = this.getandomFc();
                this.fc_info_list.push(this.getandomFc());
            }


        }
        //随机相关
        public upSomeThing() {

        }

    }
}