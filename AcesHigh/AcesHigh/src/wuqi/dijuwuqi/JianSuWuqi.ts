module djwq {
    //直射类武器
    export class JianSuWuqi extends DJWQBase {
        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.JIAN_SU);
            this.sudu = 25;
        }

        //射击
        public fashe(angel: number, suke: shuke.ShuKe, now: number) {


            let angle: number = this.fc.angle
            let sx = Math.sin(angle) * this.sudu;
            let sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;

            let xx = -(this.fc.position[0] - suke.position[0]);
            let xy = -(this.fc.position[1] - suke.position[1]);
            let liliang = egret.Point.create(sx, sy);
            super.fashe(angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);


        }
    }
}