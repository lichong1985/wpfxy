module shuke {
    export class ShuKe extends feichuan.FeiChuanBase {

        public yun_tu: number[][];

        public wyCD: number = 15;
        public wyMark: number = 0;
        constructor(battle_scene: TestScene) {
            super(battle_scene, egret.Point.create(15, 45), GameConstant.ZHEN_YING.WO_JUN, 5, 1)
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
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_1", this);
                }
                if (dl.lv == 2) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_2", this);
                }
                if (dl.lv == 3) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_3", this);
                }
                if (dl.lv == 4) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_4", this);
                }
                if (dl.lv == 5) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_5", this);
                }
            }

            if (dl.dl_type == suiji.SJ_YAN_SE.WU_QI) {
                //普通
                if (dl.wq_type == suiji.WQ_TYPE[0]) {
                    hx = new wuqi.PuTongDan(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //散弹
                if (dl.wq_type == suiji.WQ_TYPE[1]) {
                    hx = new wjwq.SanDanWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //导弹
                if (dl.wq_type == suiji.WQ_TYPE[2]) {
                    hx = new wjwq.DaoDanWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //激光
                if (dl.wq_type == suiji.WQ_TYPE[3]) {
                    hx = new wjwq.JiGuangWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }

                //炮台
                if (dl.wq_type == suiji.WQ_TYPE[4]) {
                    hx = new wjwq.PaoTaiWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //鱼雷
                if (dl.wq_type == suiji.WQ_TYPE[5]) {
                    hx = new wjwq.YuLeiWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }

                //螺旋
                if (dl.wq_type == suiji.WQ_TYPE[6]) {
                    hx = new wjwq.LuoXuanWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }

                //长钉
                if (dl.wq_type == suiji.WQ_TYPE[7]) {
                    hx = new wjwq.ChangDingWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }

                //重锤
                if (dl.wq_type == suiji.WQ_TYPE[8]) {
                    hx = new wjwq.ZhongChuiWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }


                let wq = <wuqi.PuTongDan>hx
                hx.setMkLevel(dl.lv);
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
            this.battle_scene.addChild(hx);
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
                    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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


      

        //更新飞船
        public upsuke(n: number) {
            //1 装甲 2 武器 
            // egret.log("GGGGGGGGGG:"+this.yun_tu[10][8])
            let indx = this.getindx(n);
            let m = this.moKuaiList[indx[0]][indx[1]];
            if (m.moKuaiType == 2) {
                let w = <wuqi.WuQiBase>m;
                w.level = user.UserInfo.wuqi_shengji_tianti[n];
                w.sj_number = 30;
            }

            if (m.moKuaiType == 1) {
                let r = this.moKuaiList[indx[0]][indx[1]];
                if (r.parent) {
                    r.parent.removeChild(r);
                }

                let hx = this.initSKWuQi(n, indx[1], indx[0], user.UserInfo.wuqi_shengji_tianti[n], egret.Point.create(this.yun_tu[0].length, this.yun_tu.length));
                hx.sj_number = 30;
            }


        }

        public getindx(n: number): number[] {
            if (n < 4) {
                if (n == 1) {
                    return [10, 8]
                }
                if (n == 2) {
                    return [10, 9]
                }

                if (n == 3) {
                    return [10, 10]
                }
            }
            if (n < 7) {
                if (n == 4) {
                    return [11, 8]
                }
                if (n == 5) {
                    return [11, 9]
                }

                if (n == 6) {
                    return [11, 10]
                }
            }

            if (n < 10) {
                if (n == 7) {
                    return [12, 8]
                }
                if (n == 8) {
                    return [12, 9]
                }

                if (n == 9) {
                    return [12, 10]
                }
            }
            return null;
        }


        private initSuKe() {
            this.initYunTU();
            this.initPro(this.yun_tu, user.UserInfo.wuqi_shengji_tianti);
        }

        public updataPos() {
            super.updataPos();
            this.jiasu_texiao();

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

        public jiasu_texiao() {
            if (!this.battle_scene.is_jiasu) {
                return;
            }

            // if (egret.getTimer() - this.wyMark < this.wyCD) {
            //     return;
            // }



            let p = Tools.p2TOegretPoitn(egret.Point.create(this.position[0], this.position[1]));

            this.wyMark = egret.getTimer();
            let b: egret.Bitmap = new egret.Bitmap(RES.getRes("us_zd_9"));
            b.anchorOffsetX = b.width * 0.5;
            b.anchorOffsetY = b.height * 0.5;

            // b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = p.x;
            b.y = p.y;
            b.alpha = 0.5

            this.battle_scene.addChild(b);
            egret.Tween.get(b).to({ "scaleX": 0.1, "scaleY": 0.1, "y": p.y + 100, "rotation": 720 }, 250).call(this.dell, this, [b]);
        }



        //移除缓动动画
        public dell(DD: egret.DisplayObject) {
            if (DD) {
                if (DD.parent) {
                    egret.Tween.removeTweens(DD);
                    this.battle_scene.removeChild(DD);
                }
            }
            DD = null;

        }
        //被打
        public bei_da() {
            //能量顿
            let test_scene = <TestScene>this.battle_scene;
            test_scene.dpBar.jian();
            test_scene.hg.jizhong();
            test_scene.dou_ping();

        }

        //碎裂
        public sui_lie() {
            for (let i = 0; i < 50; i++) {
                let sp = new shuke.SuiPian("us_zd_8", Tools.p2TOegretPoitn(egret.Point.create(this.position[0], this.position[1])));
                this.battle_scene.addChild(sp);
                sp.too();
            }
            this.fuhuo();

        }

        // 复活界面
        public fuhuo() {
            let fh = new jiesuan.FuHuo();
            this.battle_scene.addChild(fh);
        }

        //结算 界面 
        public jiesuan() {

        }



    }
}