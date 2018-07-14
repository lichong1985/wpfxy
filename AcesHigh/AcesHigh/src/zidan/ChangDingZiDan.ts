module zidan {
    export class ChangDingZiDan extends zidan.ZiDanBase {
        //跟踪弹生效时间

        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.DAO_DAN);
            this.initPT();
            this.bit_name = "us_zd_8_png";


        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_8_png"))
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        }
        //穿甲
        public chuan_jia(mok: mokuai.MoKuaiBase, fc: feichuan.FeiChuanBase) {
            egret.log("GGGGGGGGGGGGGGGGGGGGGGGGGGG:" + mok.rotation);
            //碰撞点
            let x = mok.moKuaiPost.x;
            let y = mok.moKuaiPost.y;

            //
            //
            //  -180    飞船    180
            //
            //

            if (fc.moKuaiList[y - 1][x] != null) {
                fc.shang_hai(fc.moKuaiList[y - 1][x], 1);
            }
            if (fc.moKuaiList[y - 2][x] != null) {
                fc.shang_hai(fc.moKuaiList[y - 2][x], 1);
            }
            if (fc.moKuaiList[y - 3][x] != null) {
                fc.shang_hai(fc.moKuaiList[y - 3][x], 1);
            }
        }

        public texiao() {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(super.dell, this, [this.bitmap]);

        }

    }
}