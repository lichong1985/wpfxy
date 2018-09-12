module zidan {
    export class YuLeiZiDan extends zidan.ZiDanBase {
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.YU_LEI);

            this.collNumber = 1;
            this.bit_name = "us_zd_6";

            this.is_updata = true;
            this.sheng_ming_zhou_qi = 10000;

            this.initPT();

        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_6"))
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
            this.angularVelocity = 4;
        }


        //穿甲相关
        public chuan_jia(mok: mokuai.MoKuaiBase, fc: feichuan.FeiChuanBase) {
            if (!mok || !fc) {
                return;
            }
            //碰撞点
            let x = mok.moKuaiPost.x;
            let y = mok.moKuaiPost.y;

            this.chickThePost(x + 1, y, fc);
            this.chickThePost(x + 2, y, fc);
            this.chickThePost(x - 1, y, fc);
            this.chickThePost(x - 2, y, fc);
            this.chickThePost(x, y + 1, fc);
            this.chickThePost(x, y + 2, fc);
            this.chickThePost(x, y - 1, fc);
            this.chickThePost(x, y - 2, fc);
            this.chickThePost(x - 1, y - 1, fc);
            this.chickThePost(x + 1, y - 1, fc);
            this.chickThePost(x - 1, y + 1, fc);
            this.chickThePost(x + 1, y + 1, fc);




        }

        //循环特效
        public loop() {
            let tw = egret.Tween.get(this.bitmap, { loop: true });
            tw.to({ "scaleX": 2.2, "scaleY": 2.2, "alpha": 0.8 }, 50).to({ "alpha": 1, "scaleX": 1, "scaleY": 1 }, 180);
        }

        public removeTeXiao() {
            egret.Tween.removeTweens(this.bitmap);
            let tw = egret.Tween.get(this.bitmap);
            tw.to({ "scaleX": 3, "scaleY": 3, "alpha": 0.3 }, 800).call(this.addRemove, this)
        }


    }
}