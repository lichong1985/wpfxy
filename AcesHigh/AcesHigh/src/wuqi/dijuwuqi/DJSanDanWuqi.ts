module djwq {
    export class DJSanDanWuqi extends DJWQBase {
        public A0: number = 0 * Math.PI / 180;
        public A5: number = 5 * Math.PI / 180;
        public A10: number = 10 * Math.PI / 180;

        public FA5: number = -5 * Math.PI / 180;
        public FA10: number = -10 * Math.PI / 180;

        public fx: number;
        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase, fx: number) {
            super(fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DJ_SAN_DAN);
            this.fx = fx;
        }

        //射击
        // 1 前  2 后 3左 4右
        public fashe(angel: number, suke: shuke.ShuKe, now: number) {

            let angle: number
            if (this.fx == 1 || this.fx == 2) {
                angle = this.fc.angle
            }
            if (this.fx == 3) {
                angle = this.fc.angle + (-90 - 360) / 180 * Math.PI;
            }
            if (this.fx == 4) {
                angle = this.fc.angle + (90 - 360) / 180 * Math.PI;
            }


            this.diu(this.wuqi_type, this.getLiLiang(angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);


            this.diu(this.wuqi_type, this.getLiLiang(this.A5 + angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            this.diu(this.wuqi_type, this.getLiLiang(this.FA5 +angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            this.diu(this.wuqi_type, this.getLiLiang(this.A10 + angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            this.diu(this.wuqi_type, this.getLiLiang(this.FA10 + angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);


        }

        public getLiLiang(angle: number): egret.Point {

            let sx = Math.sin(angle) * this.sudu;
            let sy = Math.cos(angle) * this.sudu;
            if (this.fx == 1) {
                sy = sy * -1;
            }

            return egret.Point.create(sx, sy);
        }

    }
}