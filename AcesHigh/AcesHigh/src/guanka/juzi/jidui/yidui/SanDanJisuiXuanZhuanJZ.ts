module juzi {
    export class SanDanJiDuiXuanZhuanJZ extends JuZiGuanLi {
        // 飞船 信息
        public fc1_info: feichuan.FeiChuanInfo;
        public fc2_info: feichuan.FeiChuanInfo;
        public fc3_info: feichuan.FeiChuanInfo;

        public fc1: feichuan.JuZhenJidui;//上

        public fc2: feichuan.JuZhenJidui;//上
        public fc3: feichuan.JuZhenJidui;//上
        public fc4: feichuan.JuZhenJidui;//上
        public fc5: feichuan.JuZhenJidui;//上


        public fc6: feichuan.JuZhenJidui;//上



        constructor(nd: number, scene: scene.SceneBase) {
            super(nd);
            this.scene = scene;
        }

        public initFcInfo() {
            this.fc1_info = FC_Console.getInfoByName(2, "xiao_10");
            this.fc2_info = FC_Console.getInfoByName(1, "wei_3");
            this.fc3_info = FC_Console.getInfoByName(2, "xiao_7");
            this.init1ZTJ();

            this.init2ZTJ();
            this.init3ZTJ();
            this.init4ZTJ();
            this.init5ZTJ();

            this.init6ZTJ();

        }

        public init1ZTJ() {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc1_info,
                egret.Point.create(28, -5), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc1);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 1),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 1),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 3),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 1),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5)], 2, -1, "13:15"));

            ztj.nextStep(0);
            this.fc1.ztj = ztj;

        }

        public init2ZTJ() {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc2_info,
                egret.Point.create(35, 1), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc2);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理1", true));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));



            ztj.nextStep(0);
            this.fc2.ztj = ztj;

        }

        public init3ZTJ() {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info,
                egret.Point.create(37, 3), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc3);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理1", true));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));



            ztj.nextStep(0);
            this.fc3.ztj = ztj;

        }

        public init4ZTJ() {
            //1 创建飞船
            this.fc4 = new feichuan.JuZhenJidui(this.scene, this.fc2_info,
                egret.Point.create(39, 5), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc4);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理1", true));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));



            ztj.nextStep(0);
            this.fc4.ztj = ztj;

        }

        public init5ZTJ() {
            //1 创建飞船
            this.fc5 = new feichuan.JuZhenJidui(this.scene, this.fc2_info,
                egret.Point.create(41, 7), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc5);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理1", true));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));



            ztj.nextStep(0);
            this.fc5.ztj = ztj;

        }


        public init6ZTJ() {
            //1 创建飞船
            this.fc6 = new feichuan.JuZhenJidui(this.scene, this.fc3_info,
                egret.Point.create(15, 55), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc6);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 10),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 5, null, 2, -1, "特殊处理1", true));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 10),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 2, 3, null, 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 30),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 5, null, 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 30),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 5, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 10),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 5, null, 2, -1, "13:15"));



            ztj.nextStep(0);
            this.fc6.ztj = ztj;

        }



        //添加飞机到 战场
        public addFc(scene: scene.SceneBase) {
            scene.dijis.push(this.fc1)

            scene.dijis.push(this.fc2)
            scene.dijis.push(this.fc3)
            scene.dijis.push(this.fc4)
            scene.dijis.push(this.fc5)

            scene.dijis.push(this.fc6)
        }
    }
}