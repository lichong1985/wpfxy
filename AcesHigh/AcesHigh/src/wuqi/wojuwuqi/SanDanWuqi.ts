module wjwq {
    export class SanDanWuqi extends wuqi.WuQiBase {
        public A0: number = 0 * Math.PI / 180;
        public A5: number = 5 * Math.PI / 180;
        public A10: number = 10 * Math.PI / 180;
        public A15: number = 15 * Math.PI / 180;

        public FA5: number = -5 * Math.PI / 180;
        public FA10: number = -10 * Math.PI / 180;
        public FA15: number = -15 * Math.PI / 180;


        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, fc: feichuan.FeiChuanBase, level: number) {
            super(mokaiPos, shType, "us_wq_2", wuqi.WUQI_TYPE.SAN_DAN, fc);
            this.level = level;
            this.cd=2000;
        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
             super.fashe(angel, suke, now);
            if (this.level >= 1) {
                this.diu(this.wuqi_type, this.getLiliang(this.A5), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A5);
                this.diu(this.wuqi_type, this.getLiliang(this.FA5), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.FA5);
            }

            if (this.level >= 3) {
                // this.diu(this.wuqi_type, this.getLiliang(this.A0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A0);
                this.diu(this.wuqi_type, this.getLiliang(this.A10), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A10);
                this.diu(this.wuqi_type, this.getLiliang(this.FA10), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.FA10);
            }

            if (this.level >= 5) {
                this.diu(this.wuqi_type, this.getLiliang(this.A0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A0);
                this.diu(this.wuqi_type, this.getLiliang(this.A15), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A15);
                this.diu(this.wuqi_type, this.getLiliang(this.FA15), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.FA15);
            }

        }

        public getLiliang(angel: number): egret.Point {
            return egret.Point.create(Math.sin(-angel) * this.sudu, Math.cos(-angel) * this.sudu);
        }

    }
}   