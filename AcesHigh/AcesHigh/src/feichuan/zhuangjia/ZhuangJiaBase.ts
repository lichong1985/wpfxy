module zhuangjia {
    /**
     * 装甲 基类
     */
    export class ZhuangJiaBase extends mokuai.MoKuaiBase {

        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(moKuaiPost, shapeType, bitName, fc);
            this.moKuaiType = mokuai.MO_KUAI_TYPE.ZHUANG_JIA;
        }

      

    }
}