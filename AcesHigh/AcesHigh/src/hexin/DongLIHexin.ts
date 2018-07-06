module mokuai {
    /**
     * 飞船动力核心
     */
    export class DongLiHeXin extends MoKuaiBase {
        //核心类型
        public hx_type: suiji.SJ_HE_XIN;

        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(moKuaiPost, shapeType, bitName, fc);
            this.moKuaiType = mokuai.MO_KUAI_TYPE.HE_XIN;
        }



    }
}