module zidan {
    export class JianSuZiDan extends zidan.ZiDanBase {
        constructor(zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(zhenying, mass, wuqi.WUQI_TYPE.PU_TONG);
            this.initPT();
        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("1-6_png"))
            this.damping = 0.8;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        }

        public updata() {
            super.updata();
        }

    }
}