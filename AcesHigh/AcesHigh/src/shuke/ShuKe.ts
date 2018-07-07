module shuke {
    export class ShuKe extends feichuan.FeiChuanBase {

        public yun_tu: number[][];
        constructor(battle_scene: scene.SceneBase) {
            super(battle_scene, egret.Point.create(scene.scene_anch_x + 640 * 0.5, 2100), GameConstant.ZHEN_YING.WO_JUN)
            this.fc_type = feichuan.FC_TYPE.SUKE;
            this.initSuKe();

        }


        //添加模块
        public addMoKuai(dl: diaoluo.DiaoLuo) {
            if (!dl) {
                return;
            }
            let t: number = -1;
            let x: number;
            let y: number;
            //获取碰撞点
            let mk = this.jia_ce_peng_zhuang_dian(dl.displays[0].x, dl.displays[0].y)
            if (!mk) {
                return;
            }

            // 燃料相关操作
            if (dl.dl_type == suiji.SJ_YAN_SE.RAN_LIAO) {
                return;
            }




            x = mk.moKuaiPost.x;
            y = mk.moKuaiPost.y;

            // //添加模块
            if (Math.abs(mk.x - dl.bitmap.x) > Math.abs(mk.y - dl.bitmap.y)) {
                //右
                if (dl.bitmap.x > mk.x) {
                    x = mk.moKuaiPost.x + 1;
                    t = 4
                } else {
                    //左
                    x = mk.moKuaiPost.x - 1;
                    t = 3
                }

            } else {
                //上
                if (dl.bitmap.y < mk.y) {
                    y = mk.moKuaiPost.y - 1;
                    t = 1
                } else {
                    //下
                    y = mk.moKuaiPost.y + 1;
                    t = 2
                }
            }

            //越界过滤
            if (x < 0 || y < 0 || x >= this.W || y >= this.H) {
                return;
            }

            //如果该节点已经有模块
            if (this.moKuaiList[y][x]) {
                egret.log("KKKKKKKKKKKKK")
                let p = this.kuosan(x, y);
                if (p) {
                    x = p.x;
                    y = p.y;

                }
            }


            let hx: mokuai.MoKuaiBase;
            //装甲
            if (dl.dl_type == suiji.SJ_YAN_SE.ZHUANG_JIA) {
                if (dl.lv == 1) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "zj_us_level_1_png", this);
                }
                if (dl.lv == 2) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "zj_us_level_2_png", this);
                }
                if (dl.lv == 3) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "zj_us_level_3_png", this);
                }
                if (dl.lv == 4) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "zj_us_level_4_png", this);
                }
                if (dl.lv == 5) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "zj_us_level_5_png", this);
                }
            }

            if (dl.dl_type == suiji.SJ_YAN_SE.WU_QI) {
                hx = new wuqi.PuTongDan(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "wq_1_png", wuqi.WUQI_TYPE.PU_TONG, this);
                let wq = <wuqi.PuTongDan>hx
                hx.setMkLevel(5);
                this.wuqiList.push(wq)
            }


            hx.setMkLevel(1);

            let hpp: egret.Point = Physics.getRelativeDistance(egret.Point.create(this.W, this.H), egret.Point.create(x, y), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
            let box: p2.Box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
            box.collisionGroup = this.collGroup;
            box.collisionMask = this.collMask;
            this.addShape(box, [hpp.x, hpp.y])
            this.moKuaiList[y][x] = hx;

            hx.boxShape = box;
            this.battle_scene.addChildAt(hx, 5);
            this.mokuai_size++;
        }




        //初始化云图
        public initYunTU() {
            this.yun_tu =
                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

                ]

            this.W = this.yun_tu[0].length;
            this.H = this.yun_tu.length;

            // this.yun_tu =
            // [
            //     [1, 2, 2, 2, 3]
            // ]
        }


        private initSuKe() {
            this.initYunTU();
            this.initPro(this.yun_tu);
        }

        public updataPos() {
            super.updataPos();
        }

        //扩散
        public kuosan(x: number, y: number): egret.Point {
            if (this.chick((y - 1), (x - 1))) {
                return egret.Point.create((x - 1), (y - 1));
            }

            if (this.chick((y - 1), x)) {
                return egret.Point.create((x), (y - 1));
            }

            if (this.chick((y - 1), (x + 1))) {
                return egret.Point.create((x + 1), (y - 1));
            }
            //----------------------------
            if (this.chick(y, (x - 1))) {
                return egret.Point.create((x - 1), (y));
            }

            if (this.chick(y, (x + 1))) {
                return egret.Point.create((x + 1), (y));
            }
            //--------------------------
            if (this.chick((y + 1), (x - 1))) {
                return egret.Point.create((x - 1), (y + 1));
            }
            if (this.chick((y + 1), x)) {
                return egret.Point.create((x), (y + 1));
            }
            if (this.chick((y + 1), (x + 1))) {
                return egret.Point.create((x + 1), (y + 1));
            }
            //=============================================================
            if (this.chick((y - 2), (x - 2))) {
                return egret.Point.create((x - 2), (y - 2));
            }

            if (this.chick((y - 2), (x - 1))) {
                return egret.Point.create((x - 1), (y - 2));
            }
            if (this.chick((y - 2), (x))) {
                return egret.Point.create((x), (y - 2));
            }

            if (this.chick((y - 2), (x + 1))) {
                return egret.Point.create((x + 1), (y - 2));
            }

            if (this.chick((y - 2), (x + 2))) {
                return egret.Point.create((x + 2), (y - 2));

            }
            //----------------------------------
            if (this.chick((y - 1), (x - 2))) {
                return egret.Point.create((x - 2), (y - 1));

            }

            if (this.chick((y - 1), (x + 2))) {
                return egret.Point.create((x + 2), (y - 1));

            }
            //--------------------------------
            if (this.chick(y, (x - 2))) {
                return egret.Point.create((x - 2), (y));
            }


            if (this.chick(y, (x + 2))) {
                return egret.Point.create((x + 2), (y));
            }

            //-----------------------------
            if (this.chick((y + 1), (x - 2))) {
                return egret.Point.create((x - 2), (y + 1));

            }

            if (this.chick((y + 1), (x + 2))) {
                return egret.Point.create((x + 2), (y + 1));
            }
            //--------------------------------------------
            if (this.chick((y + 2), (x - 2))) {
                return egret.Point.create((x - 2), (y + 2));
            }

            if (this.chick((y + 2), (x - 1))) {
                return egret.Point.create((x - 1), (y + 2));
            }
            if (this.chick((y + 2), x)) {
                return egret.Point.create((x), (y + 2));
            }

            if (this.chick((y + 2), (x + 1))) {
                return egret.Point.create((x + 1), (y + 2));
            }

            if (this.chick((y + 2), (x + 2))) {
                return egret.Point.create((x + 2), (y + 2));

            }
            return null;
        }

        public chick(x: number, y: number): boolean {
            if (x < 0 || y < 0 || x >= this.W || y >= this.H) {
                return false;
            }

            return true;
        }



    }
}