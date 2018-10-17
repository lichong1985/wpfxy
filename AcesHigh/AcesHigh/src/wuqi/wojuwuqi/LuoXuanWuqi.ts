module wjwq {
    export class LuoXuanWuqi extends wuqi.WuQiBase {


        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, fc: feichuan.FeiChuanBase, level: number) {
            super(mokaiPos, shType, "us_wq_7", wuqi.WUQI_TYPE.LUO_XUAN, fc);
            this.level = level;
            this.cd = 5000;


        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            super.fashe(angel, suke, now);
            this.diu(this.wuqi_type, egret.Point.create(0, 0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0);
        }
    }
}   