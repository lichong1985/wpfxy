module djwq {
    //直射类武器
    export class ZhiSheWuQi extends DJWQBase {
        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.ZHI_SHE);
            this.cd = 1000;
        }

        //射击
        public fashe(angel: number, suke: shuke.ShuKe, now: number) {

            let angle: number = Math.atan2((suke.position[1] - this.fc.position[1]), (suke.position[0] - this.fc.position[0])) + Math.PI * 0.5
            let sx = Math.sin(angle) * this.sudu;
            let sy = Math.cos(angle) * this.sudu;
            if (suke.position[1] < this.fc.position[1]) {
                sy = sy * -1;
            }

            let xx = -(this.fc.position[0] - suke.position[0]);
            let xy = -(this.fc.position[1] - suke.position[1]);
            // let liliang = Tools.bilv(xx, xy, 5);
            let liliang = egret.Point.create(sx, sy);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);

        }
    }
}