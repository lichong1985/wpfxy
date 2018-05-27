module mokuai {
    /**
     * 飞船动力核心
     */
    export class DongLiHeXin extends MoKuaiBase {

        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(moKuaiPost, shapeType, bitName, fc);
            this.moKuaiType = mokuai.MO_KUAI_TYPE.HE_XIN;
        }



    }
}