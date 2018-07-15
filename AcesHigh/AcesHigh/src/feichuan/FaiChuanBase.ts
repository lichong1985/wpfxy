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

        //ai 列表-----------------------------------
        public ais: Array<ai.AiBase>;

        //移动ai
        public moveAI: ai.AiBase;

        //旋转ai
        public xzAI: ai.AiBase;

        //瞄准ai 
        public mzAI: ai.AiBase;

        //需要移动到的坐标点 (物理世界坐标)
        public toPoint: egret.Point;
        //----------------------------------------------

        //飞船当前前往的 目的地坐标 null则没有
        public p2_target: egret.Point;

        //-----------------------状态机-------------------------
        //状态机
        public ztj: fjztj.FjZTJ;
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++

        //TODO: 通过配置文件来加载
        constructor(battle_scene: scene.SceneBase, egretWorldPoint: egret.Point, zhenying: GameConstant.ZHEN_YING) {
            super({ mass: 1 })
            //核心列表
            this.heXinList = new Array<mokuai.DongLiHeXin>();
            //装甲列表
            this.zhuangJaList = new Array<zhuangjia.PuTongZhuangJia>();
            //ai 列表 
            this.ais = new Array<ai.AiBase>();
            this.egretWorldPoint = egretWorldPoint;
            this.battle_scene = battle_scene;
            this.zhenying = zhenying;
            this.initPhPost();
            this.initColl();
            this.ztj = new fjztj.XBZhuangtaiji(this);
        }



        //初始化飞船
        public initJson(res: string) {
            let js = RES.getRes(res);
            //读取飞船的宽高
            this.W = js.layers[0].width;
            this.H = js.layers[0].height;
            this.initList(this.H, this.W);
            let data = js.layers[0].data;
            //初始化模块
            this.moKuaiList = new Array(this.H);
            let i: number = 0;
            for (let h = 0; h < this.H; h++) {
                this.moKuaiList[h] = new Array(this.W);
                for (let w = 0; w < this.W; w++) {
                    //读取节点信息
                    if (data[i] == 0) {
                        i++;
                        continue;
                    }

                    let bitName: string = js.tiles[data[i] - 1].image.replace(".", "_");
                    let hx: mokuai.MoKuaiBase;
                    if (bitName == "op_hx_hx_png" || bitName == "op_hx_ss_png" || bitName == "op_hx_zj_png") {
                        this.hx = new mokuai.DongLiHeXin(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        hx = this.hx;
                    }

                    if (bitName == "op_zj_pt_level_5_png") {
                        hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        hx.setMkLevel(5);
                    }

                    if (bitName == "op_zj_pt_level_4_png") {
                        hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        hx.setMkLevel(4);
                    }
                    if (bitName == "op_zj_pt_level_3_png") {
                        hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        hx.setMkLevel(3);
                    }
                    if (bitName == "op_zj_pt_level_2_png") {
                        hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        hx.setMkLevel(2);
                    }
                    if (bitName == "op_zj_pt_level_1_png") {
                        hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        hx.setMkLevel(1);
                    }


                    //敌军直射武器
                    if (bitName == "op_wq_1_png") {
                        hx = new djwq.ZhiSheWuQi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    //敌军定位武器
                    if (bitName == "op_wq_2_png") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    //敌军跟踪武器
                    if (bitName == "op_wq_3_png") {
                        hx = new djwq.GenZhongWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    //敌军减速武器
                    if (bitName == "op_wq_4_png") {
                        hx = new djwq.JianSuWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                    }


                    //掉落随机
                    this.suiji_dl(hx);





                    let hpp: egret.Point = Physics.getRelativeDistance(egret.Point.create(this.W, this.H), egret.Point.create(w, h), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
                    let box: p2.Box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
                    box.collisionGroup = this.collGroup;
                    box.collisionMask = this.collMask;
                    this.addShape(box, [hpp.x, hpp.y])
                    this.moKuaiList[h][w] = hx;

                    hx.boxShape = box;
                    if (hx instanceof mokuai.DongLiHeXin) {
                        this.battle_scene.addChildAt(hx, 10);

                    } else {
                        this.battle_scene.addChildAt(hx, 5);
                    }
                    this.mokuai_size++;
                    i++;
                }
            }
            this.battle_scene.world.addBody(this);

        }
        //随机掉落
        public suiji_dl(hx: mokuai.MoKuaiBase) {
            let is: boolean = suiji.isDiaoLuoMoKuai();
            hx.is_diao_luo = is;
            //不掉落退出
            if (!is) {
                return;
            }

            hx.diao_luo_type = suiji.suiji_yanse();
            if (hx.diao_luo_type == suiji.SJ_YAN_SE.WU_QI) {
                hx.dl_wq_type = suiji.suiji_wuqi();
            }
            hx.dl_lv = suiji.suiji_level(hx.diao_luo_type);
        }

        //初始化碰撞参数
        public initColl() {
            if (this.zhenying == GameConstant.ZHEN_YING.WO_JUN) {
                this.collGroup = GameConstant.WO_JUN;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI | GameConstant.DI_JUN_ZIDAN | GameConstant.DIAO_LUO;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.DI_JUN) {
                this.collGroup = GameConstant.DI_JUN;
                this.collMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI | GameConstant.WO_JUN_ZIDAN | GameConstant.DI_JUN;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                this.collGroup = GameConstant.ZHONG_LI;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI | GameConstant.WO_JUN | GameConstant.WO_JUN_ZIDAN | GameConstant.DI_JUN_ZIDAN;
            }
        }

        //设置物理世界坐标 
        public initPhPost() {
            let pos = Tools.egretTOp2(this.egretWorldPoint);
            this.position[0] = pos.x;
            this.position[1] = pos.y;
        }




        public initList(h: number, w: number) {
            this.moKuaiList = new Array<Array<mokuai.MoKuaiBase>>();
            for (let i = 0; i < h; i++) {
                this.moKuaiList.push(new Array<mokuai.MoKuaiBase>(w));
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

        public updataSomeThing() {
            this.updataPos();
            this.updataAI();
            this.updataZTJ();
            // this.updataJiGuang();
        }

        //更新激光
        // public updataJiGuang() {
        //     for (let wq of this.wuqiList) {
        //         if (wq instanceof wjwq.JiGuangWuqi) {

        //         }
        //     }
        // }

        public updataZTJ() {
            if (this.ztj) {
                this.ztj.upStep(egret.getTimer());
            }
        }

        //更新ai
        public updataAI() {
            // for (let a of this.ais) {
            //     a.updata_ai(egret.getTimer());
            // }

            //移动
            if (this.moveAI) {
                this.moveAI.updata_ai(egret.getTimer())
            }

            //旋转
            if (this.xzAI) {
                this.xzAI.updata_ai(egret.getTimer());
            }

            //瞄准
            if (this.mzAI) {
                this.mzAI.updata_ai(egret.getTimer());
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
                hx = new wjwq.ZhongChuiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, 3);
                let wq = <wuqi.WuQiBase>hx
                hx.setMkLevel(5);
                this.wuqiList.push(wq)
            }

            if (type == 2) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_5_png", this);
            }

            if (type == 1) {
                this.hx = new mokuai.DongLiHeXin(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_hx_hx_png", this);
                hx = this.hx;
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

            hx.boxShape = box;
            this.battle_scene.addChild(hx);
            this.mokuai_size++;
        }


        //碰撞点检测
        public jia_ce_peng_zhuang_dian(x: number, y: number): mokuai.MoKuaiBase {
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
            return zm;
        }

        //检测飞船碰撞点 将飞船上的碰撞点 标记 并且纪录到 删除列表里  在循环外删除
        public checkCollision(x: number, y: number, hitNumber: number) {

            let zm: mokuai.MoKuaiBase = this.jia_ce_peng_zhuang_dian(x, y);


            //如果没有找到碰撞点


            //装甲受伤处理
            this.shang_hai(zm, hitNumber);

        }


        //装甲受伤处理
        public shang_hai(zm: mokuai.MoKuaiBase, hitNumber: number) {
            if (!zm) {
                return;
            }
            // 模块碰撞 检测
            if (zm.coll(hitNumber)) {

                //将节点标记  之后在碰撞循环外清空
                this.moKuaiList[zm.moKuaiPost.y][zm.moKuaiPost.x] = null;
                //将飞船添加到受伤飞船列表
                this.battle_scene.shouShangFeiChuanList.push(this);
                //将需要移除的模块添加到列表
                this.removeMoKuai.push(zm);

                //如果该模块是 核心 则整体删除
                if (zm instanceof mokuai.DongLiHeXin) {
                    this.hx = null;
                    //减少每回合总飞机的 标记数量
                    this.battle_scene.lastFeiJi--;
                }

                //如果是武器类型
                if (zm.moKuaiType == mokuai.MO_KUAI_TYPE.WU_QI) {
                    this.removeWuQi(<wuqi.WuQiBase>zm);
                }
                zm.jihui_texiao();
            }
            zm.jiZhong_texiao();
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
                    let chhf = new canhai.CanHai(this, ch)
                    this.battle_scene.canHais.push(chhf);
                }
            }
        }

        //添加ai
        public addAI(ai: ai.AiBase) {
            this.ais.push(ai);
        }

        //移除武器
        public removeWuQi(wq: wuqi.WuQiBase) {
            let inx = this.wuqiList.indexOf(wq);
            this.wuqiList.splice(inx, 1);
        }

        public ji_guang_peng_zhuang(x: number, y: number) {
        }
    }
}