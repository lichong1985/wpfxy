module djwq {
    export class HouSheWuqi extends DJWQBase {
        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DING_WEI);
        }

        //射击
        public fashe(angel: number, suke: shuke.ShuKe, now: number) {

            let angle: number = this.fc.angle
            let sx = Math.sin(angle) * this.sudu;
            let sy = Math.cos(angle) * this.sudu;

            let liliang = egret.Point.create(sx, sy);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);

        }
    }
}