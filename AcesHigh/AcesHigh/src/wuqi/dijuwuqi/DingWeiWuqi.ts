module djwq {
    //直射类武器
    export class DingWeiWuqi extends DJWQBase {
        public fx: number = 1;
        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase, fx: number) {
            super(fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DING_WEI);
            this.fx = fx;
            this.wq_numb = 1;
        }
        // 1 前  2 后 3左 4右
        //射击
        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            let angle: number
            if (this.fx == 1) {
                angle = this.fc.angle
            }
            if (this.fx == 2) {
                angle = this.fc.angle + 180 / 180 * Math.PI;
            }
            if (this.fx == 3) {
                angle = this.fc.angle - 90 / 180 * Math.PI;
            }
            if (this.fx == 4) {
                angle = this.fc.angle + 90 / 180 * Math.PI;
            }
            let sx = Math.sin(angle) * this.sudu;
            let sy = Math.cos(angle) * this.sudu;

            sy = sy * -1;


            let liliang = egret.Point.create(sx, sy);
            super.fashe(angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);

        }
    }
}