module diaoluo {
    export class DiaoLuo extends p2.Body {
        //阵营掉落
        public zhenying: GameConstant.ZHEN_YING = GameConstant.ZHEN_YING.DIAO_LUO;
        // 碰撞组
        public collGroup: number
        //碰撞 mask
        public collMask: number;
        //掉落类型˝
        public dl_type: suiji.SJ_YAN_SE;

        //场景
        public scene: scene.SceneBase;

        //图片
        public bitmap: egret.Bitmap;

        //武器类型
        public wq_type: wuqi.WUQI_TYPE

        //缓动
        public tw: egret.Tween;

        //等级
        public lv: number;

        public name1: string;
        public name2: string;

        //碰撞数量
        public collNum: number = 1;

        constructor(scene: scene.SceneBase, dl_type: suiji.SJ_YAN_SE, lv: number, pot: egret.Point, wq_type?: wuqi.WUQI_TYPE) {
            super({ mass: 1 })
            this.scene = scene;
            this.dl_type = dl_type;
            this.lv = lv;
            if (dl_type == suiji.SJ_YAN_SE.WU_QI) {
                this.wq_type = wq_type;
            }
            this.position[0] = pot.x;
            this.position[1] = pot.y;
            this.initColl();
            this.init();

            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;

        }

        public init() {
            let box: p2.Box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO] });
            this.addShape(box);
            box.collisionMask = this.collMask;
            box.collisionGroup = this.collGroup;

            //掉落燃料
            if (this.dl_type == suiji.SJ_YAN_SE.RAN_LIAO) {
                if (this.lv == 1) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op__dl_rl_1_dl"));
                    this.name1 = "op__dl_rl_1_dl";
                    this.name2 = "op_dl_rl_1_s_dl";
                }

                if (this.lv == 2) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op__dl_rl_2_dl"));
                    this.name1 = "op__dl_rl_2_dl";
                    this.name2 = "op_dl_rl_2_s_dl";
                }

                if (this.lv == 3) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op__dl_rl_3_dl"));
                    this.name1 = "op__dl_rl_3_dl";
                    this.name2 = "op_dl_rl_3_s_dl";
                }

            }


            //武器

            if (this.dl_type == suiji.SJ_YAN_SE.WU_QI) {
                //普通武器
                if (this.wq_type == wuqi.WUQI_TYPE.PU_TONG) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_1"));
                    this.name1 = "op_dl_wq_1";
                    this.name2 = "op_dl_wq_1_s";
                }
                //散弹
                if (this.wq_type == wuqi.WUQI_TYPE.SAN_DAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_2"));
                    this.name1 = "op_dl_wq_2";
                    this.name2 = "op_dl_wq_2_s";
                }

                //导弹
                if (this.wq_type == wuqi.WUQI_TYPE.DAO_DAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_3"));
                    this.name1 = "op_dl_wq_3";
                    this.name2 = "op_dl_wq_3_s";
                }

                //射线
                if (this.wq_type == wuqi.WUQI_TYPE.SHE_XIAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_4"));
                    this.name1 = "op_dl_wq_4";
                    this.name2 = "op_dl_wq_4_s";
                }

                //定向
                if (this.wq_type == wuqi.WUQI_TYPE.DING_XIANG) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_5"));
                    this.name1 = "op_dl_wq_5";
                    this.name2 = "op_dl_wq_5_s";
                }

                //鱼雷
                if (this.wq_type == wuqi.WUQI_TYPE.YU_LEI) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_6"));
                    this.name1 = "op_dl_wq_6";
                    this.name2 = "op_dl_wq_6_s";
                }

                //螺旋
                if (this.wq_type == wuqi.WUQI_TYPE.LUO_XUAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_7"));
                    this.name1 = "op_dl_wq_7";
                    this.name2 = "op_dl_wq_7_s";
                }

                //长钉
                if (this.wq_type == wuqi.WUQI_TYPE.CHANG_DING) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_8"));
                    this.name1 = "op_dl_wq_8";
                    this.name2 = "op_dl_wq_8_s";
                }

                //重锤
                if (this.wq_type == wuqi.WUQI_TYPE.ZHONG_CHUI) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_9"));
                    this.name1 = "op_dl_wq_9";
                    this.name2 = "op_dl_wq_9_s";
                }

            }
            //装甲
            if (this.dl_type == suiji.SJ_YAN_SE.ZHUANG_JIA) {
                // if (this.lv == 1) {
                //     this.bitmap = new egret.Bitmap(RES.getRes("op_dl_zj_level_1_dl"));
                //     this.name1 = "op_dl_zj_level_1_dl";
                //     this.name2 = "op_dl_zj_level_1_s_dl";
                // }

                // if (this.lv == 2) {
                //     this.bitmap = new egret.Bitmap(RES.getRes("op_dl_zj_level_2_dl"));
                //     this.name1 = "op_dl_zj_level_2_dl";
                //     this.name2 = "op_dl_zj_level_2_s_dl";
                // }

                // if (this.lv == 3) {
                //     this.bitmap = new egret.Bitmap(RES.getRes("op_dl_zj_level_3_dl"));
                //     this.name1 = "op_dl_zj_level_3_dl";
                //     this.name2 = "op_dl_zj_level_3_s_dl";
                // }

                // if (this.lv == 4) {
                //     this.bitmap = new egret.Bitmap(RES.getRes("op_dl_zj_level_4_dl"));
                //     this.name1 = "op_dl_zj_level_4_dl";
                //     this.name2 = "op_dl_zj_level_4_s_dl";
                // }

                // if (this.lv == 5) {
                this.bitmap = new egret.Bitmap(RES.getRes("op_dl_zj_level_5_dl"));
                this.name1 = "op_dl_zj_level_5_dl";
                this.name2 = "op_dl_zj_level_5_s_dl";
                // }
            }

            this.displays = [this.bitmap];

        }

        //初始化碰撞参数
        public initColl() {


            this.collGroup = GameConstant.DIAO_LUO;
            this.collMask = GameConstant.WO_JUN;

        }

        //
        public updata() {
            this.velocity = [0, -1];
        }

        //循环特效
        public loop() {
            this.tw = egret.Tween.get(this.bitmap, { loop: true });
            this.tw.to({ "alpha": 0.8 }, 300).call(this.upBit, this, [this.name2]).to({ "alpha": 0.8 }, 300).call(this.upBit, this, [this.name1]);


        }

        public upBit(name: string) {
            this.bitmap.texture = RES.getRes(name);
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
        }


    }
}