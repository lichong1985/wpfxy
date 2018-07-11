module zidan {
    export class YuLeiZiDan extends zidan.ZiDanBase {
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.YU_LEI);

            this.collNumber = 1;
            this.bit_name = "us_zd_6_png";

            this.is_updata = true;
            this.sheng_ming_zhou_qi = 10000;

            this.initPT();

        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_6_png"))
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.damping = 0;
            this.displays = [this.bitmap];
            this.angularDamping = 0;
            this.damping = 0;
            this.loop();
        }

        public updata() {
            super.updata();
            this.velocity = [0, 0.2];
            this.angularVelocity = 5;
        }





        //循环特效
        public loop() {
            let tw = egret.Tween.get(this.bitmap, { loop: true });
            tw.to({ "scaleX": 1.6, "scaleY": 2, "alpha": 1.6 }, 100).to({ "alpha": 1, "scaleX": 1, "scaleY": 1 }, 150);


        }

        public removeTeXiao() {
            egret.Tween.removeTweens(this.bitmap);
            let tw = egret.Tween.get(this.bitmap);
            tw.to({ "scaleX": 3, "scaleY": 3, "alpha": 0.3 }, 800).call(this.addRemove, this)
        }


    }
}