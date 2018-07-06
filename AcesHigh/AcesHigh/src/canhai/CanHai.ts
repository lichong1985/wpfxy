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
                yt[p.moKuaiPost.y - ly][p.moKuaiPost.x - lx] = 2;

            }
            this.initPro(yt)
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


        public updataSomeThing() {
            super.updataSomeThing();
        }
    }
}