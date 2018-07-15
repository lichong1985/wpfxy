module zidan {
    export class ZhongChuiZiDan extends zidan.ZiDanBase {
        public lv_1: number[][] = [[-1, 0], [1, 0], [0, -1]];
        public lv_3: number[][] = [[-2, 0], [2, 0], [-1, -1], [1, -1], [0, -2]];
        public lv_5: number[][] = [[-3, 0], [3, 0], [-2, -1], [2, -1], [-1, -2], [1, -2], [0, -3]];
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number, level: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG);
            this.initPT();
            this.collNumber = 1;
            this.bit_name = "us_zd_9_png";
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.is_updata = true;
            this.level = level;

        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_9_png"))
            this.damping = 0;
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
                this.loop_level(x, y, true, true, fc);
            }
            //左
            if (mok.rotation < -45 && mok.rotation > -135) {
                this.loop_level(x, y, false, false, fc);

            }

            //右
            if (mok.rotation > 45 && mok.rotation < 135) {
                this.loop_level(x, y, false, true, fc);
            }

            //后
            if (mok.rotation < -135 || mok.rotation > 135) {
                this.loop_level(x, y, true, false, fc);

            }
        }

        public loop_level(x: number, y: number, isX: boolean, isAdd: boolean, fc: feichuan.FeiChuanBase) {
            if (this.level >= 1) {
                this.loopJs(x, y, isX, isAdd, fc, this.lv_1);
            }

            if (this.level >= 3) {
                this.loopJs(x, y, isX, isAdd, fc, this.lv_3);
            }

            if (this.level >= 5) {
                this.loopJs(x, y, isX, isAdd, fc, this.lv_5);
            }
        }



        //循环溅射
        public loopJs(x: number, y: number, isX: boolean, isAdd: boolean, fc: feichuan.FeiChuanBase, ps: number[][]) {
            for (let p of ps) {
                if (isX) {
                    if (isAdd) {
                        this.chickThePost(x + p[0], y + p[1], fc);

                    } else {
                        this.chickThePost(x + p[0], y - p[1], fc);
                    }
                }

                if (!isX) {
                    if (isAdd) {
                        this.chickThePost(x + p[1], y + p[0], fc);
                    } else {
                        this.chickThePost(x - p[1], y + p[0], fc);
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


        public updata() {
            super.updata();
            super.weiyi(this.bit_name);
        }

        public texiao() {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(super.dell, this, [this.bitmap]);

        }

    }
}