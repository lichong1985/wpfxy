module wjwq {
    export class ZhongChuiWuqi extends wuqi.WuQiBase {


        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, fc: feichuan.FeiChuanBase, level: number) {
            super(mokaiPos, shType, "us_wq_9", wuqi.WUQI_TYPE.ZHONG_CHUI, fc);
            this.level = level;
            this.cd = 2000;

        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
             super.fashe(angel, suke, now);
            this.diu(this.wuqi_type, egret.Point.create(0, this.sudu), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.fc.angle);

        }
    }
}