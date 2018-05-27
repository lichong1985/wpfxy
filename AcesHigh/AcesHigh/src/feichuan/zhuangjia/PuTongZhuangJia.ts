module zhuangjia {
    export class PuTongZhuangJia extends ZhuangJiaBase {
        public markNumber; number = 3;
        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(moKuaiPost, shapeType, bitName, fc);
        }


        public Defense(): boolean {
            this.markNumber--;
            if (this.markNumber <= 0) {
                return false;
            }
            return true;
        }
    }
}