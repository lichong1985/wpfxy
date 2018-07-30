module canhai {
    export class CanHai extends feichuan.FeiChuanBase {
        public yuntu: Array<mokuai.MoKuaiBase>;
        public zhuji: feichuan.FeiChuanBase;
        constructor(zhuji: feichuan.FeiChuanBase, yuntu: Array<mokuai.MoKuaiBase>) {
            super(zhuji.battle_scene, egret.Point.create(500, 500), GameConstant.ZHEN_YING.ZHONG_LI)
            this.fc_type = feichuan.FC_TYPE.CANHAI;
            this.yuntu = yuntu;
            this.zhuji = zhuji;
            this.initCanhai();
            // this.zhenying = GameConstant.ZHONG_LI

        }


        //初始化残骸
        public initCanhai() {
            let ly: number = 100;
            let lx: number = 100;
            let hx: number = 0;
            let hy: number = 0;
            for (let p of this.yuntu) {
                if (p) {
                    if (p.moKuaiPost.x < lx) {
                        lx = p.moKuaiPost.x;
                    }

                    if (p.moKuaiPost.y < ly) {
                        ly = p.moKuaiPost.y;
                    }

                    if (p.moKuaiPost.x > hx) {
                        hx = p.moKuaiPost.x;
                    }

                    if (p.moKuaiPost.y > hy) {
                        hy = p.moKuaiPost.y;
                    }
                }
            }

            let hm = hy - ly + 1;
            let wm = hx - lx + 1;

            let yt: Array<Array<number>> = new Array<Array<number>>();
            for (let h = 0; h <= hm; h++) {
                yt[h] = new Array<number>()
                for (let w = 0; w <= wm; w++) {
                    yt[h].push(0);
                }
            }

            for (let p of this.yuntu) {
                yt[p.moKuaiPost.y - ly][p.moKuaiPost.x - lx] = p.mk_level;

            }
            this.initChanHai(yt)
            //初始化中心坐标
            let m = this.yuntu[0];
            let o = this.moKuaiList[m.moKuaiPost.y - ly][m.moKuaiPost.x - lx];
            let an: number = Math.PI / 180 * 360 - this.zhuji.angle;


            /**
            *     |-      
            *  R= | cos(a)     sin(a)
            *     | -sin(a)    cos(a)
            *     |-
            */

            let rx = Math.cos(an) * (m.boxShape.position[0] - o.boxShape.position[0]) + Math.sin(an) * (m.boxShape.position[1] - o.boxShape.position[1]);
            let ry = -Math.sin(an) * (m.boxShape.position[0] - o.boxShape.position[0]) + Math.cos(an) * (m.boxShape.position[1] - o.boxShape.position[1]);

            this.position[0] = (this.zhuji.position[0] + rx);
            this.position[1] = (this.zhuji.position[1] + ry);
            this.angle = this.zhuji.angle;


        }

        public initChanHai(yun_tu: number[][]) {
            let s: egret.Point = egret.Point.create(yun_tu[0].length, yun_tu.length);
            this.initList(yun_tu.length, yun_tu[0].length);
            for (let h = 0; h < yun_tu.length; h++) {
                for (let w = 0; w < yun_tu[0].length; w++) {
                    this.initMK(yun_tu[h][w], h, w, s);
                }
            }

            this.battle_scene.world.addBody(this);
        }

        public initMK(level: number, h: number, w: number, chang_kuan: egret.Point) {
            let hx: mokuai.MoKuaiBase;


            if (level == 1) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_1_ch_png", this);

            }
            if (level == 2) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_2_ch_png", this);

            }
            if (level == 3) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_3_ch_png", this);

            }
            if (level == 4) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_4_ch_png", this);

            }
            if (level == 5) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_5_ch_png", this);

            }


            if (level == 0) {
                return;
            }
            let hpp: egret.Point = Physics.getRelativeDistance(chang_kuan, egret.Point.create(w, h), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
            let box: p2.Box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
            box.collisionGroup = this.collGroup;
            box.collisionMask = this.collMask;

            this.addShape(box, [hpp.x, hpp.y])
            this.moKuaiList[h][w] = hx;

            hx.boxShape = box;
            this.battle_scene.addChild(hx);
            this.mokuai_size++;
        }


        public updataSomeThing() {
            super.updataSomeThing();
        }
    }
}