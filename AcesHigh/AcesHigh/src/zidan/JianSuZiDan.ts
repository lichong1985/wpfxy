module zidan {
    export class JianSuZiDan extends zidan.ZiDanBase {
        constructor(scene: scene.SceneBase,zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(scene,zhenying, mass, wuqi.WUQI_TYPE.PU_TONG);
            this.initPT();
            this.bit_name = "wq_4_png";

        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("wq_4_png"))
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