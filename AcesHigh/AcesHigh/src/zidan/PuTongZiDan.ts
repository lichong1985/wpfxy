module zidan {
    export class PuTongZiDan extends zidan.ZiDanBase {
        constructor(zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(zhenying, mass, wuqi.WUQI_TYPE.PU_TONG);
            this.initPT();
        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("lv_dian_png"))
            this.damping = 0;
            this.displays = [this.bitmap];
        }

        public updata() {
            super.updata();
        }

    }
}