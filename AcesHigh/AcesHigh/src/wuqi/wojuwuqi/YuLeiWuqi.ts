module wjwq {
    export class YuLeiWuqi extends wuqi.WuQiBase {


        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, fc: feichuan.FeiChuanBase, level: number) {
            super(mokaiPos, shType, "us_wq_6_png", wuqi.WUQI_TYPE.YU_LEI, fc);
            this.level = level;
            this.cd = 1000;
            if (level == 1) {
                this.cd = 3000;
            }
            if (level == 2) {
                this.cd = 2500;
            }
            if (level == 3) {
                this.cd = 2000;
            }
            if (level == 4) {
                this.cd = 1500;
            }
            if (level == 1) {
                this.cd = 1000;
            }

        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            //发射鱼雷
            this.diu(this.wuqi_type, egret.Point.create(0, 0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0);
        }



    }
}   