module zidan {
    export class DingXiangZiDan extends zidan.ZiDanBase {
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG);
            this.initPT();
            this.bit_name = "us_zd_5";
        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_5"))
            this.damping = 0;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        }

        public updata() {
            super.updata();
        }

    }
}