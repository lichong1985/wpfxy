module feichuan {
    export enum FC_TYPE {
        SUKE,//舒克
        DIJI,//敌机
        CANHAI,//残骸
    }

    /**
     * 飞船基础类
     */
    export class FeiChuanBase extends p2.Body {
        /**
         * 核心列表
         */
        public heXinList: Array<mokuai.DongLiHeXin>;
        /**
         * 装甲列表
         */
        public zhuangJaList: Array<zhuangjia.PuTongZhuangJia>;

        /**
         * 武器列表
         */
        public wuqiList: Array<wuqi.WuQiBase>;

        /**
         * 飞船宽
         */
        public W: number;

        /**
         * 飞船高
         */
        public H: number;

        /**
         * 飞船结构二位数组
         */
        public moKuaiList: Array<Array<mokuai.MoKuaiBase>>;
        // public boxList: Array<Array<p2.Box>>;

        /**
         * 战斗场景实例
         */
        public battle_scene: scene.SceneBase;

        //白鹭世界坐标
        public egretWorldPoint: egret.Point;

        //阵营
        public zhenying: GameConstant.ZHEN_YING;

        // 碰撞组
        public collGroup: number
        //碰撞 mask
        public collMask: number;

        //需要移除的模块
        public removeMoKuai: Array<mokuai.MoKuaiBase>;

        //飞船核心
        public hx: mokuai.DongLiHeXin;

        //船体类型
        public fc_type: FC_TYPE;

        //分解列表
        public fen_jie: Array<Array<mokuai.MoKuaiBase>>;

        //当前模块数量
        public mokuai_size: number = 0;





        //TODO: 通过配置文件来加载
        constructor(battle_scene: scene.SceneBase, egretWorldPoint: egret.Point, zhenying: GameConstant.ZHEN_YING) {
            super({ mass: 1 })
            this.heXinList = new Array<mokuai.DongLiHeXin>();
            this.zhuangJaList = new Array<zhuangjia.PuTongZhuangJia>();

            this.egretWorldPoint = egretWorldPoint;
            this.battle_scene = battle_scene;
            this.zhenying = zhenying;

            this.initPhPost();
            this.initColl();

        }

        //初始化碰撞参数
        public initColl() {
            if (this.zhenying == GameConstant.ZHEN_YING.WO_JUN) {
                this.collGroup = GameConstant.WO_JUN;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI;
            }

            if (this.zhenying == GameConstant.ZHEN_YING.DI_JUN) {
                this.collGroup = GameConstant.DI_JUN;
                this.collMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI;
            }

            if (this.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                this.collGroup = GameConstant.ZHONG_LI;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI | GameConstant.WO_JUN;
            }
        }

        public initPhPost() {

            let pos = Tools.egretTOp2(this.egretWorldPoint);
            this.position[0] = pos.x;
            this.position[1] = pos.y;
        }




        public initList(h: number, w: number) {
            this.moKuaiList = new Array<Array<mokuai.MoKuaiBase>>();
            // this.boxList = new Array<Array<p2.Box>>();
            for (let i = 0; i < h; i++) {
                this.moKuaiList.push(new Array<mokuai.MoKuaiBase>(w));
                // this.boxList.push(new Array<p2.Box>(w));

            }

            this.wuqiList = new Array<wuqi.WuQiBase>();
            this.removeMoKuai = new Array<mokuai.MoKuaiBase>();

        }

        public updataFenJie() {
            this.fen_jie = new Array<Array<mokuai.MoKuaiBase>>();
            for (let i = 0; i < 10; i++) {
                this.fen_jie.push([]);
            }
        }
        //更新坐标以及角度
        public updataPos() {
            let h = this.moKuaiList.length;
            let w = this.moKuaiList[0].length;
            if (this instanceof shuke.ShuKe) {
                this.angle = 0;
            }
            for (let i = 0; i < h; i++) {
                for (let j = 0; j < w; j++) {

                    if (!this.moKuaiList[i][j]) {
                        continue;
                    }
                    let boxBody: p2.Box = this.moKuaiList[i][j].boxShape;
                    let dis = this.moKuaiList[i][j];
                    let an: number = Math.PI / 180 * 360 - this.angle;
                    // let an: number = this.angle;

                    /**
                     *     |-      
                     *  R= | cos(a)     sin(a)
                     *     | -sin(a)    cos(a)
                     *     |-
                     */

                    let rx = Math.cos(an) * boxBody.position[0] + Math.sin(an) * boxBody.position[1];
                    let ry = -Math.sin(an) * boxBody.position[0] + Math.cos(an) * boxBody.position[1];

                    let p: egret.Point = Tools.p2TOegretPoitn(egret.Point.create(rx + this.position[0], ry + this.position[1]))
                    dis.x = p.x;
                    dis.y = p.y;
                    dis.markPoint = p;
                    dis.rotation = 360 - this.angle * 180 / Math.PI;


                }
            }
        }

        public getMokWorldpos(p: egret.Point): egret.Point {
            let an: number = Math.PI / 180 * 360 - this.angle;
            let rx = Math.cos(an) * p.x + Math.sin(an) * p.y;
            let ry = -Math.sin(an) * p.x + Math.cos(an) * p.y;
            return egret.Point.create(rx + this.position[0], ry + this.position[1])
        }

        /**
         * 初始化 配置文件
         */
        public initPro(yun_tu: number[][]) {
            let s: egret.Point = egret.Point.create(yun_tu[0].length, yun_tu.length);
            this.initList(yun_tu.length, yun_tu[0].length);
            for (let h = 0; h < yun_tu.length; h++) {
                for (let w = 0; w < yun_tu[0].length; w++) {
                    this.initMokuai(yun_tu[h][w], h, w, s);
                }
            }

            this.battle_scene.world.addBody(this);
        }

        //创建模块
        public initMokuai(type: number, h: number, w: number, chang_kuan: egret.Point) {
            let hx: mokuai.MoKuaiBase;
            if (type == 3) {
                hx = new wuqi.PuTongDan(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "lan_dian_png", wuqi.WUQI_TYPE.PU_TONG, this);
                let wq = <wuqi.PuTongDan>hx
                this.wuqiList.push(wq)
            }

            if (type == 2) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "hong_dian_png", this);

            }

            if (type == 1) {
                hx = new mokuai.DongLiHeXin(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "huang_dian_png", this);
                this.hx = hx;
            }

            if (type == 0) {
                return;
            }
            let hpp: egret.Point = Physics.getRelativeDistance(chang_kuan, egret.Point.create(w, h), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
            let box: p2.Box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
            box.collisionGroup = this.collGroup;
            box.collisionMask = this.collMask;
            this.addShape(box, [hpp.x, hpp.y])
            this.moKuaiList[h][w] = hx;
            // this.boxList[h][w] = box;

            hx.boxShape = box;
            this.battle_scene.addChild(hx);
            this.mokuai_size++;
        }

        //检测飞船碰撞点
        public checkCollision(x: number, y: number) {
            let xw: number = 1000;
            let yh: number = 1000;
            let zm: mokuai.MoKuaiBase;
            //遍历个个节点 检测 是否被碰撞
            for (let h = 0; h < this.moKuaiList.length; h++) {
                for (let w = 0; w < this.moKuaiList[h].length; w++) {
                    let z = this.moKuaiList[h][w];
                    if (z) {
                        let c1 = Math.abs(z.x - x);
                        let c2 = Math.abs(z.y - y);

                        if ((c1 + c2) < (xw + yh)) {
                            xw = c1;
                            yh = c2;
                            zm = z;
                        }
                    }
                }
            }

            //将节点标记  之后在碰撞循环外清空
            this.moKuaiList[zm.moKuaiPost.y][zm.moKuaiPost.x] = null;
            this.battle_scene.removeFeiChuan.push(this);
            this.removeMoKuai.push(zm);


        }

        //删除模块
        public dellMokuai() {
            for (let i = 0; i < this.removeMoKuai.length; i++) {
                let n: mokuai.MoKuaiBase = this.removeMoKuai.pop();
                this.moKuaiList[n.moKuaiPost.y][n.moKuaiPost.x] = null;
                this.removeShape(n.boxShape);
                this.battle_scene.removeChild(n);

            }
        }

        //分解船体创建新船体
        public fenJie() {
            let h = this.fen_jie.length;
            for (let i = 0; i < h; i++) {
                let ch = this.fen_jie.pop();
                let w = ch.length;
                //默认十乘十 检测每个维度 是否有东西
                let b: boolean = false;
                for (let m of ch) {
                    if (m) {
                        b = true;
                    }
                }
                if (b) {
                    let chhƒ = new canhai.CanHai(this, ch)
                }

            }
        }


    }
}