module djwq {
    export class DJWQBase extends wuqi.WuQiBase {
        public suke: feichuan.FeiChuanBase;

        constructor(suzhu: feichuan.FeiChuanBase, moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, w_t: wuqi.WUQI_TYPE) {
            super(moKuaiPost, shapeType, bitName, w_t, suzhu);
            this.cd = 5000;
        }
        //射击
        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            super.fashe(angel, suke, now);
        }
    }
}