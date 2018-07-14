module zidan {
    export class ChangDingZiDan extends zidan.ZiDanBase {
        //溅射数量
        public jsNumb: number = 3;
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number, level: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.DAO_DAN);
            this.initPT();
            this.bit_name = "us_zd_8_png";
            if (level >= 3) {
                this.jsNumb = 4;
            }

            if (level == 5) {
                this.jsNumb = 5;
            }

            this.is_updata = true;

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
                egret.log("正正正正正正正正正正正正正正正正正正正")
            }
            //左
            if (mok.rotation < -45 && mok.rotation > -135) {
                this.loopJs(x, y, true, true, fc);
                egret.log("左左左左左左左左左左左左左左左左左左")

            }

            //右
            if (mok.rotation > 45 && mok.rotation < 135) {
                this.loopJs(x, y, true, false, fc);
                egret.log("右右右右右右右右右右右右右右右右右右")
            }

            //后
            if (mok.rotation < -135 || mok.rotation > 135) {
                this.loopJs(x, y, false, true, fc);
                egret.log("后后后后后后后后后后后后后后后后后后后")

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

        //检测 节点是否可以被击中
        public chickThePost(x: number, y: number, fc: feichuan.FeiChuanBase) {
            if (x < 0) {
                return;
            }
            if (y < 0) {
                return;
            }

            if (x >= fc.moKuaiList[0].length) {
                return;
            }

            if (y >= fc.moKuaiList.length) {
                return;
            }
            fc.shang_hai(fc.moKuaiList[y][x], this.hitNumber);
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