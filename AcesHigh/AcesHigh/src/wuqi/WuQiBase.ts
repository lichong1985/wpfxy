module wuqi {
    export enum WUQI_TYPE {
        PU_TONG = 0,//普通武器
        SAN_DAN = 1,//散弹
        JI_GUANG = 2,//激光
        DAO_DAN = 3,//导弹
        DA_PAO = 4,//大炮
        ZHI_DAO_JI_GUANG = 5,//制导激光
        CHUAN_JIA_DAN = 6,//穿甲弹
        YUN_BAO_DAN = 7,//云爆弹
    }
    export class WuQiBase extends mokuai.MoKuaiBase {
        //武器类型
        public wuqi_type: WUQI_TYPE;
        //武器攻击cd 单位毫秒
        public cd: number = 1000;

        //时间标记 上一次攻击的时间
        public mark_time: number = 0;

        public sudu: number = 5;

        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, name: string, wuqii_type: WUQI_TYPE, fc: feichuan.FeiChuanBase) {
            super(mokaiPos, shType, name, fc);
        }


        public updata_wq(angel: number) {
            super.updata();
            let now = egret.getTimer();
            if ((now - this.mark_time) > this.cd) {

                this.mark_time = now;
                this.fashe(angel);
            }
        }

        public fashe(angel: number) {
            
        }
    }
}