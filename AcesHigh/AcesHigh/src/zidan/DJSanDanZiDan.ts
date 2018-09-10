module zidan {
    export class DJSanDanZiDan extends zidan.ZiDanBase {
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG);
            this.initPT();
            this.bit_name = "op_wq_5";
            this.is_updata = true;
        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("op_wq_5"))
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;

            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        }

        public updata() {
            super.updata();
            // super.weiyi(this.bit_name);
        }

        // public texiao() {
        //     this.bitmap.scaleX = 0.8;
        //     this.bitmap.scaleY = 0.8;
        //     this.bitmap.alpha = 0.8
        //     egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(super.dell, this, [this.bitmap]);

        // }

    }
}