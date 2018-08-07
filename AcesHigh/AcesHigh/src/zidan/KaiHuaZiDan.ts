module zidan {
    export class KaiHuaZiDan extends zidan.ZiDanBase {
        constructor(scene: scene.SceneBase,zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(scene,zhenying, mass, wuqi.WUQI_TYPE.PU_TONG);
            this.initPT();
            this.is_updata = true;
            this.bit_name = "1-5";

        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("1-5"))
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