module juzi {
    export class ShuangDuiJiaoJiaXuanZhuanJZ extends JuZiGuanLi {
        public fc_info: feichuan.FeiChuanInfo;
        public fc_info2: feichuan.FeiChuanInfo;
        public fc1: feichuan.JuZhenJidui;//上
        public fc2: feichuan.JuZhenJidui;//左
        public fc3: feichuan.JuZhenJidui;//右

        constructor(nd: number, scene: scene.SceneBase) {
            super(nd);
            this.scene = scene;
        }

        public initFcInfo() {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_21");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_12");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();

        }

        public init1ZTJ() {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(3, -5));
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc1);


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));

            //
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1,
                null, 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 3,
                [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));

            //
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1,
                null, 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 3,
                [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 1),
                zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1,
                null, 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 1),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1,
                null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));


            ztj.nextStep(0);
            this.fc1.ztj = ztj;

        }


        public init2ZTJ() {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(27, -15));
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc2);


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(27, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));

            //
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(27, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1,
                null, 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 3,
                [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));

            //
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1,
                null, 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 3,
                [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(27, 1),
                zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1,
                null, 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(27, 1),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1,
                null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));


            ztj.nextStep(0);
            this.fc2.ztj = ztj;

        }

        public init3ZTJ() {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info2,
                egret.Point.create(-5, 30));
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc3);

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 30),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 2, 10, null, 2, -1, "-1:1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 15),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1,
                null, 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 40),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 1, 10,
                null, 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 30),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 1, 10,
                null, 2, -1, "13:15"));

            ztj.nextStep(0);
            this.fc3.ztj = ztj;

        }

        //添加飞机到 战场
        public addFc(scene: scene.SceneBase) {
            scene.dijis.push(this.fc1)
            scene.dijis.push(this.fc2)
            scene.dijis.push(this.fc3)
        }
    }

}