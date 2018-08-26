module juzi {
    export class SanXiongDiManDongJZ extends juzi.JuZiGuanLi {
        // 飞船 信息
        public fc_info: feichuan.FeiChuanInfo;
        public fc1: feichuan.JuZhenJidui;//上
        public fc2: feichuan.JuZhenJidui;//左
        public fc3: feichuan.JuZhenJidui;//右

        constructor(nd: number, scene: scene.SceneBase) {
            super(nd);
            this.scene = scene;
        }

        public initFcInfo() {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_2");
            // this.init1ZTJ();
            this.init2ZTJ();
            // this.init3ZTJ();

        }

        public init1ZTJ() {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(17, -2));
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc1);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));

            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 2),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 2),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;

        }


        public init2ZTJ() {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(-2, 25));
            this.fc2.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 25),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "特殊处理2", true));

            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "3:8"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "3:8 等待"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 24),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "3:24"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 24),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "3:24 等待"));

            ztj.nextStep(0);
            this.fc2.ztj = ztj;

        }

        public init3ZTJ() {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(32, 30));
            this.fc3.angle = -(90 - 360) / 180 * Math.PI;
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc3);


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 30),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 2, 15, null, 2, -1, "-1:1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 15),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 8),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 35),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;

        }

        //添加飞机到 战场
        public addFc(scene: scene.SceneBase) {
            // scene.dijis.push(this.fc1)
            scene.dijis.push(this.fc2)
            // scene.dijis.push(this.fc3)
        }
    }
}