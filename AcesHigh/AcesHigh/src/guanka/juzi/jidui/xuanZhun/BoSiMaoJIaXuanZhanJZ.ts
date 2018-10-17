module juzi {
    export class BoSiMaoJiaXuanZhuanJZ extends JuZiGuanLi {
        public fc_info: feichuan.FeiChuanInfo;
        public fc_info2: feichuan.FeiChuanInfo;
        public fc1: feichuan.JuZhenJidui;//上
        public fc2: feichuan.JuZhenJidui;//上


        constructor(nd: number, scene: scene.SceneBase) {
            super(nd);
            this.scene = scene;
        }

        public initFcInfo() {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_10");
            this.init1ZTJ();

            this.fc_info2 = FC_Console.getInfoByName(3, "zhong_11");
            this.init2ZTJ();
        }

        public init1ZTJ() {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(35, 5), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc1);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5),
                zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "13:15"));

            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 2,
                [new zhuangtaiji.WuQiAiInfo(2, 5000, 12, 300, 3, 1, 3),//散弹一号
                new zhuangtaiji.WuQiAiInfo(3, 3000, 3, 100, 3, 5, 1),
                new zhuangtaiji.WuQiAiInfo(2, 5000, 1, 100, 3, 2, 1)],
                2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5),
                zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 2,
                [new zhuangtaiji.WuQiAiInfo(2, 5000, 12, 300, 3, 1, 3),//散弹一号
                new zhuangtaiji.WuQiAiInfo(3, 3000, 3, 100, 3, 5, 1),
                new zhuangtaiji.WuQiAiInfo(2, 5000, 1, 100, 3, 2, 1)],
                2, -1, "13:15"));



            ztj.nextStep(0);
            this.fc1.ztj = ztj;

        }



        public init2ZTJ() {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info2,
                egret.Point.create(-5, 25), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc2);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));


            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 25),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 2,
                [new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 1, 3),//散弹一号
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 16, 1),
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 17, 1),
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 18, 1)],
                2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING, zhuangtaiji.ZT_TYPE.NULL_T, 5, 0.3, null, 2, -1, "13:15"));



            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 2,
                [new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 1, 3),//散弹一号
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 16, 1),
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 17, 1),
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 18, 1)],
                2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING, zhuangtaiji.ZT_TYPE.NULL_T, 5, 0.3, null, 2, -1, "13:15"));


            ztj.nextStep(0);
            this.fc2.ztj = ztj;

        }

        //添加飞机到 战场
        public addFc(scene: scene.SceneBase) {
            scene.dijis.push(this.fc1)
            scene.dijis.push(this.fc2)
        }
    }
}