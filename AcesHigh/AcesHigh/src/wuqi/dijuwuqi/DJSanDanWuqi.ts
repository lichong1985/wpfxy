module djwq {
    export class DJSanDanWuqi extends DJWQBase {
        public A0: number = 0 * Math.PI / 180;
        public A5: number = 5 * Math.PI / 180;
        public A10: number = 10 * Math.PI / 180;

        public FA5: number = -5 * Math.PI / 180;
        public FA10: number = -10 * Math.PI / 180;
        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DJ_SAN_DAN);
        }

        //射击
        public fashe(angel: number, suke: shuke.ShuKe, now: number) {


            let angle: number = this.fc.angle
            this.diu(this.wuqi_type, this.getLiLiang(angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);

            angle = this.A5 + this.fc.angle
            this.diu(this.wuqi_type, this.getLiLiang(angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            angle = this.FA5 + this.fc.angle
            this.diu(this.wuqi_type, this.getLiLiang(angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);

            angle = this.A10 + this.fc.angle
            this.diu(this.wuqi_type, this.getLiLiang(angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            angle = this.FA10 + this.fc.angle
            this.diu(this.wuqi_type, this.getLiLiang(angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);


        }

        public getLiLiang(angle: number): egret.Point {

            let sx = Math.sin(angle) * this.sudu;
            let sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;

            return egret.Point.create(sx, sy);
        }

    }
}