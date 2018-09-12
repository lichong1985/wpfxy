module zidan {
    export class ChangDingZiDan extends zidan.ZiDanBase {
        //溅射数量
        public jsNumb: number = 3;
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number, level: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.DAO_DAN);
            this.initPT();
            this.bit_name = "us_zd_8";
            if (level >= 3) {
                this.jsNumb = 4;
            }

            if (level == 5) {
                this.jsNumb = 5;
            }

            this.is_updata = true;

        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_8"))
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        }
        //穿甲
        public chuan_jia(mok: mokuai.MoKuaiBase, fc: feichuan.FeiChuanBase) {
            if (!mok || !fc) {
                return;
            }
            //碰撞点
            let x = mok.moKuaiPost.x;
            let y = mok.moKuaiPost.y;
            //
            //
            //  -180    飞船    180
            //
            //
            //正
            if (mok.rotation > -45 && mok.rotation < 45) {
                this.loopJs(x, y, false, false, fc);
            }
            //左
            if (mok.rotation < -45 && mok.rotation > -135) {
                this.loopJs(x, y, true, true, fc);

            }

            //右
            if (mok.rotation > 45 && mok.rotation < 135) {
                this.loopJs(x, y, true, false, fc);
            }

            //后 11
            if (mok.rotation < -135 || mok.rotation > 135) {
                this.loopJs(x, y, false, true, fc);
            }
        }


        //循环溅射
        public loopJs(x: number, y: number, isX: boolean, isAdd: boolean, fc: feichuan.FeiChuanBase) {
            for (let i = 1; i <= this.jsNumb; i++) {
                if (isX) {
                    if (isAdd) {
                        this.chickThePost(x + i, y, fc);
                    } else {
                        this.chickThePost(x - i, y, fc);
                    }
                }

                if (!isX) {
                    if (isAdd) {
                        this.chickThePost(x, y + i, fc);
                    } else {
                        this.chickThePost(x, y - i, fc);
                    }
                }
            }


        }

       

        public texiao() {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(super.dell, this, [this.bitmap]);

        }

        public updata() {
            super.updata();
            this.force = [0, 0.0005];
        }

    }
}