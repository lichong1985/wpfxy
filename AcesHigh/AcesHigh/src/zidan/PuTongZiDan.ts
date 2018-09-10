module zidan {
    export class PuTongZiDan extends zidan.ZiDanBase {
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG);
            this.initPT();
            this.collNumber = 1;
            this.bit_name = "us_zd_1";
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.4;
            this.bitmap.scaleY = 0.4;
            this.is_updata = true;

        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_1"))
            this.damping = 0;
            this.displays = [this.bitmap];
        }

        public updata() {
            super.updata();
            super.weiyi("pt_wy");
        }

        public texiao() {
            this.bitmap.scaleX = 1;
            this.bitmap.scaleY = 1;
            this.bitmap.alpha = 0.8
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(super.dell, this, [this.bitmap]);

        }

    }
}