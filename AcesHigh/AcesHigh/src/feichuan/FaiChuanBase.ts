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
        public wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public pt1_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public pt2_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public pt3_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public pth_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public ptz_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public pty_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public jg1_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public jg2_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public jg3_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public jg4_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public gz1_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public gzz_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public gzy_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public gzh_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public js1_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public sd1_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public sd2_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public sdh_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public sdz_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();
        public sdy_wuqiList: Array<wuqi.WuQiBase> = new Array<wuqi.WuQiBase>();

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
        public battle_scene: TestScene;

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
        public zx: mokuai.MoKuaiBase;


        public dd: mokuai.MoKuaiBase; //导弹
        public pt: mokuai.MoKuaiBase; //炮台

        //船体类型
        public fc_type: FC_TYPE;

        //分解列表
        public fen_jie: Array<Array<mokuai.MoKuaiBase>>;

        //当前模块数量
        public mokuai_size: number = 0;

        //初始质量'
        public cs_mass: number = 0;

        //ai 列表-----------------------------------
        public ais: Array<ai.AiBase>;

        //移动ai
        public moveAI: ai.AiBase;

        //攻击AI
        public gjAI: ai.AiBase;

        //瞄准ai 
        public mzAI: ai.AiBase;

        //需要移动到的坐标点 (物理世界坐标)
        public toPoint: egret.Point;
        //上一次的坐标点
        public beforToPoint: egret.Point;
        //----------------------------------------------

        //飞船当前前往的 目的地坐标 null则没有
        public p2_target: egret.Point;

        //-----------------------状态机-------------------------
        //状态机
        public ztj: fjztj.FjZTJ;
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++

        //-----------------------难度评分相关-------------------
        // 初始化时需要分配的分数
        public fengshu: number;
        //++++++++++++++++++++++++++++++++++++++++++++++++++++

        //难度 1 ~ 11  飞船难度 从1 到 11 级别
        public nan_du: number = 1;


        public wq_b: number = 1;

        //TODO: 通过配置文件来加载
        constructor(battle_scene: TestScene, egretWorldPoint: egret.Point, zhenying: GameConstant.ZHEN_YING, mass_: number, nan_du: number) {

            // super()
            super({ mass: mass_ })
            this.cs_mass = mass_;

            this.nan_du = nan_du;
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

        }



        //初始化飞船
        public initJson(info: feichuan.FeiChuanInfo) {

            //读取飞船的宽高
            this.W = info.width
            this.H = info.height;
            this.initList(this.H, this.W);
            let data = info.data;
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

                    let bitName: string = info.tiles[data[i] - 1];
                    let hx: mokuai.MoKuaiBase;



                    //----------------------------------敌军直射武器-------------------------------------------
                    if (bitName == "op_wq_1") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 1);

                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.pt1_wuqiList.push(<wuqi.WuQiBase>hx);
                    }
                    if (bitName == "op_wq_1_1") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 1);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.pt1_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_1_2") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 1);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.pt2_wuqiList.push(<wuqi.WuQiBase>hx);
                    }
                    if (bitName == "op_wq_1_3") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 1);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.pt3_wuqiList.push(<wuqi.WuQiBase>hx);
                    }
                    //普通后射
                    if (bitName == "op_wq_1_h") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 2);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.pth_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_1_z") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 3);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.ptz_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_1_y") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 4);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.pty_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    //-------------------------------------激光------------------------------------------------
                    if (bitName == "op_wq_2") {
                        hx = new djwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_2", this);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.jg1_wuqiList.push(<wuqi.WuQiBase>hx);
                    }
                    if (bitName == "op_wq_2_1") {
                        hx = new djwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_2", this);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.jg1_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_2_2") {
                        hx = new djwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_2", this);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.jg2_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_2_3") {
                        hx = new djwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_2", this);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.jg3_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_2_4") {
                        hx = new djwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_2", this);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.jg4_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    //---------------------------------------敌军跟踪武器-----------------------------------------------
                    if (bitName == "op_wq_3") {
                        hx = new djwq.GenZhongWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_3", this, 1);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.gz1_wuqiList.push(<wuqi.WuQiBase>hx);
                    }
                    if (bitName == "op_wq_3_1") {
                        hx = new djwq.GenZhongWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_3", this, 1);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.gz1_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_3_z") {
                        hx = new djwq.GenZhongWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_3", this, 3);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.gzz_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_3_y") {
                        hx = new djwq.GenZhongWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_3", this, 4);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.gzy_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_3_h") {
                        hx = new djwq.GenZhongWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_3", this, 4);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.gzh_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    //----------------------------------------敌军减速武器-----------------------------------------------
                    if (bitName == "op_wq_4_1") {
                        hx = new djwq.JianSuWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_4", this);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.js1_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    //--------------------------------敌军散弹 ------------------------------------------------
                    if (bitName == "op_wq_5_1") {
                        hx = new djwq.DJSanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_5", this, 1);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.sd1_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_5_2") {
                        hx = new djwq.DJSanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_5", this, 1);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.sd2_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_5_h") {
                        hx = new djwq.DJSanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_5", this, 2);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.sdh_wuqiList.push(<wuqi.WuQiBase>hx);
                    }

                    if (bitName == "op_wq_5_z") {
                        hx = new djwq.DJSanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_5", this, 3);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.sdz_wuqiList.push(<wuqi.WuQiBase>hx);
                    }


                    if (bitName == "op_wq_5_y") {
                        hx = new djwq.DJSanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_5", this, 4);
                        this.wuqiList.push(<wuqi.WuQiBase>hx);
                        this.sdy_wuqiList.push(<wuqi.WuQiBase>hx);
                    }
                    if (hx) {
                        hx.setMkLevel(this.nan_du);
                    }
                    //----------------装甲-------------------------------------------------------------------------

                    if (bitName == "op_hx_hx" || bitName == "op_hx_ss" || bitName == "op_hx_zj") {
                        this.hx = new mokuai.DongLiHeXin(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        hx = this.hx;
                    }
                    if (bitName == "op_zj_pt_level_2") {
                        hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this.getZJname(2), this);
                        hx.setMkLevel(this.getZJLevel(2));
                    }
                    if (bitName == "op_zj_pt_level_1") {
                        hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this.getZJname(1), this);
                        hx.setMkLevel(this.getZJLevel(1));
                    }



                    // egret.log("??? --" + data[i] + ":" + bitName);
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
                        this.battle_scene.addChildAt(hx, 100);

                    } else {
                        this.battle_scene.addChildAt(hx, 1);
                    }
                    this.mokuai_size++;
                    i++;
                }
            }
            this.battle_scene.world.addBody(this);

        }

        //根据难度 返回装甲名称
        public getZJname(level: number): string {
            if (this.nan_du == 1) {
                return "op_zj_pt_level_1";
            }

            if (this.nan_du == 2) {
                if (level == 1) {
                    return "op_zj_pt_level_1"
                }

                if (level == 2) {
                    return "op_zj_pt_level_2"
                }
            }

            if (this.nan_du == 3) {
                return "op_zj_pt_level_2";
            }

            if (this.nan_du == 4) {
                if (level == 1) {
                    return "op_zj_pt_level_2"
                }

                if (level == 2) {
                    return "op_zj_pt_level_3"
                }
            }

            if (this.nan_du == 5) {
                return "op_zj_pt_level_3";
            }

            if (this.nan_du == 6) {
                if (level == 1) {
                    return "op_zj_pt_level_3"
                }

                if (level == 2) {
                    return "op_zj_pt_level_4"
                }
            }

            if (this.nan_du == 7) {
                return "op_zj_pt_level_4";
            }

            if (this.nan_du == 8) {
                if (level == 1) {
                    return "op_zj_pt_level_4"
                }

                if (level == 2) {
                    return "op_zj_pt_level_5"
                }
            }

            if (this.nan_du == 9) {
                return "op_zj_pt_level_5";
            }

            if (this.nan_du == 10) {
                if (level == 1) {
                    return "op_zj_pt_level_5"
                }

                if (level == 2) {
                    return "op_zj_pt_level_6"
                }
            }

            if (this.nan_du == 11) {
                return "op_zj_pt_level_6";
            }





            return null;
        }

        public getZJLevel(level: number): number {
            if (this.nan_du == 1) {
                return 1;
            }

            if (this.nan_du == 2) {
                if (level == 1) {
                    return 1
                }

                if (level == 2) {
                    return 2
                }
            }

            if (this.nan_du == 3) {
                return 3
            }

            if (this.nan_du == 4) {
                if (level == 1) {
                    return 3
                }

                if (level == 2) {
                    return 4
                }
            }

            if (this.nan_du == 5) {
                return 5
            }

            if (this.nan_du == 6) {
                if (level == 1) {
                    return 5
                }

                if (level == 2) {
                    return 6
                }
            }

            if (this.nan_du == 7) {
                return 7
            }

            if (this.nan_du == 8) {
                if (level == 1) {
                    return 7
                }

                if (level == 2) {
                    return 8
                }
            }

            if (this.nan_du == 9) {
                return 9
            }

            if (this.nan_du == 10) {
                if (level == 1) {
                    return 9
                }

                if (level == 2) {
                    return 10
                }
            }

            if (this.nan_du == 11) {
                return 11
            }





            return null;
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

            if (hx.diao_luo_type == suiji.SJ_YAN_SE.ZHUANG_JIA) {
                hx.dl_lv = 5;
                return;
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
            let g2p = Tools.gridTop2(this.egretWorldPoint.x, this.egretWorldPoint.y);
            this.position[0] = g2p.x;
            this.position[1] = g2p.y;
            this.beforToPoint = g2p;
        }

        //更新目标点
        public upToPoint(pos: egret.Point) {
            if (this.toPoint != null) {
                this.beforToPoint = this.toPoint;
            }
            this.toPoint = pos;
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

            //攻击
            if (this.gjAI) {
                this.gjAI.updata_ai(egret.getTimer());
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
        public initPro(yun_tu: number[][], wqs: number[]) {
            let s: egret.Point = egret.Point.create(yun_tu[0].length, yun_tu.length);
            this.initList(yun_tu.length, yun_tu[0].length);

            for (let h = 0; h < yun_tu.length; h++) {
                for (let w = 0; w < yun_tu[0].length; w++) {
                    this.initMokuai(yun_tu[h][w], h, w, s, wqs);
                }
            }

            this.battle_scene.world.addBody(this);
        }

        //创建模块
        public initMokuai(type: number, h: number, w: number, chang_kuan: egret.Point, wqs: number[]) {
            let hx: mokuai.MoKuaiBase;
            if (type == 0) {
                return;
            }
            if (wqs[this.wq_b] == 0) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_5", this);
                let hpp: egret.Point = Physics.getRelativeDistance(chang_kuan, egret.Point.create(w, h), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
                let box: p2.Box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
                box.collisionGroup = this.collGroup;
                box.collisionMask = this.collMask;

                this.addShape(box, [hpp.x, hpp.y]);
                hx.boxShape = box;
                this.battle_scene.addChildAt(hx, 1);
                this.moKuaiList[h][w] = hx;
            } else {
                hx = this.initSKWuQi(this.wq_b, w, h, wqs[this.wq_b], chang_kuan);
            }

            if (this.wq_b == 5) {
                this.zx = hx;
            }

            this.mokuai_size++;
            this.wq_b++;
        }


        public initSKWuQi(wqb: number, w: number, h: number, level: number, chang_kuan: egret.Point): wuqi.WuQiBase {
            egret.log(w + " -- " + h)
            let hx;
            if (wqb == 1) {
                hx = new wuqi.PuTongDan(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                let wq = <wuqi.WuQiBase>hx
                this.wuqiList.push(wq)
            }

            if (wqb == 2) {
                hx = new wjwq.SanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                let wq = <wuqi.WuQiBase>hx
                this.wuqiList.push(wq)
            }

            if (wqb == 3) {
                hx = new wjwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                let wq = <wuqi.WuQiBase>hx
                this.wuqiList.push(wq)
            }
            if (wqb == 4) {
                hx = new wjwq.LuoXuanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                let wq = <wuqi.WuQiBase>hx
                this.wuqiList.push(wq)
            }

            if (wqb == 5) {
                hx = new wjwq.YuLeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                let wq = <wuqi.WuQiBase>hx
                this.wuqiList.push(wq);


            }

            if (wqb == 6) {
                hx = new wjwq.DaoDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                let wq = <wuqi.WuQiBase>hx
                this.wuqiList.push(wq)
                this.dd = hx;
            }

            if (wqb == 7) {
                hx = new wjwq.PaoTaiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                let wq = <wuqi.WuQiBase>hx
                this.wuqiList.push(wq)
                this.pt = hx;
            }

            if (wqb == 8) {
                hx = new wjwq.ChangDingWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                let wq = <wuqi.WuQiBase>hx
                this.wuqiList.push(wq)
            }

            if (wqb == 9) {
                hx = new wjwq.ZhongChuiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                let wq = <wuqi.WuQiBase>hx
                this.wuqiList.push(wq)
            }

            let hpp: egret.Point = Physics.getRelativeDistance(chang_kuan, egret.Point.create(w, h), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
            let box: p2.Box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
            box.collisionGroup = this.collGroup;
            box.collisionMask = this.collMask;

            this.addShape(box, [hpp.x, hpp.y]);
            hx.boxShape = box;
            this.battle_scene.addChildAt(hx, 1);
            this.moKuaiList[h][w] = hx;

            return hx;

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

            if (wq instanceof djwq.JiGuangWuqi) {
                let jg = <djwq.JiGuangWuqi>wq;
                jg.remove_();
            }
            let inx = this.wuqiList.indexOf(wq);
            this.wuqiList.splice(inx, 1);

            inx = this.pt1_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.pt1_wuqiList.splice(inx, 1);
            }

            inx = this.pt2_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.pt2_wuqiList.splice(inx, 1);
            }

            inx = this.pt3_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.pt3_wuqiList.splice(inx, 1);
            }

            inx = this.pth_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.pth_wuqiList.splice(inx, 1);
            }

            inx = this.ptz_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.ptz_wuqiList.splice(inx, 1);
            }

            inx = this.pty_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.pty_wuqiList.splice(inx, 1);
            }

            inx = this.jg1_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.jg1_wuqiList.splice(inx, 1);
            }

            inx = this.jg2_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.jg2_wuqiList.splice(inx, 1);
            }

            inx = this.jg3_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.jg3_wuqiList.splice(inx, 1);
            }

            inx = this.jg4_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.jg4_wuqiList.splice(inx, 1);
            }

            inx = this.gz1_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.gz1_wuqiList.splice(inx, 1);
            }
            inx = this.gzz_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.gzz_wuqiList.splice(inx, 1);
            }
            inx = this.gzy_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.gzy_wuqiList.splice(inx, 1);
            }
            inx = this.gzh_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.gzh_wuqiList.splice(inx, 1);
            }

            inx = this.js1_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.js1_wuqiList.splice(inx, 1);
            }

            inx = this.sd1_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.sd1_wuqiList.splice(inx, 1);
            }

            inx = this.sd2_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.sd2_wuqiList.splice(inx, 1);
            }

            inx = this.sdh_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.sdh_wuqiList.splice(inx, 1);
            }

            inx = this.sdz_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.sdz_wuqiList.splice(inx, 1);
            }

            inx = this.sdy_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.sdy_wuqiList.splice(inx, 1);
            }



        }

        public ji_guang_peng_zhuang(x: number, y: number) {
        }

        public reLoadToPoint(grid: egret.Point) {
            this.toPoint = Tools.gridTop2(grid.x, grid.y);
        }
    }
}