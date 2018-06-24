module zidan {
    export class KaiHuaZiDan extends zidan.ZiDanBase {
        constructor(zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(zhenying, mass, wuqi.WUQI_TYPE.PU_TONG);
            this.initPT();
            this.is_updata = true;
        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("1-5_png"))
            this.damping = 0;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        }

        public updata() {
            super.updata();
            this.force = [0, -0.0001];
        }

    }
}