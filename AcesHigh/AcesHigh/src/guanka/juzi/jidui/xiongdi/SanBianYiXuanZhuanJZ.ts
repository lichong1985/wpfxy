module juzi {
    export class SanBianYiXuanZhuanJZ extends JuZiGuanLi {
        public fc_info: feichuan.FeiChuanInfo;
        public fc_info2: feichuan.FeiChuanInfo;
        public fc_info3: feichuan.FeiChuanInfo;
        public fc1: feichuan.JuZhenJidui;//上
        public fc2: feichuan.JuZhenJidui;//左
        public fc3: feichuan.JuZhenJidui;//右

        constructor(nd: number, scene: scene.SceneBase) {
            super(nd);
            this.scene = scene;
        }

        public initFcInfo() {
            this.fc_info = FC_Console.getInfoByName(4, "da_6");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_19");
            this.fc_info3 = FC_Console.getInfoByName(2, "xiao_20");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();

        }

        public init1ZTJ() {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(17, -5), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc1);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));

            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 1),
                new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 16),
                new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 17),
                new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 18)], 2, -1, "13:15"));

            ztj.nextStep(0);
            this.fc1.ztj = ztj;

        }


        public init2ZTJ() {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info2,
                egret.Point.create(8, -5), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 15),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2", true));

            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 15),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 1),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 16),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 17),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 18)], 2, -1, "3:8"));


            ztj.nextStep(0);
            this.fc2.ztj = ztj;

        }

        public init3ZTJ() {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info3,
                egret.Point.create(32, 30), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc3);


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(35, 10),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 8, -1, "-1:1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 15),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 1),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 16),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 17),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 18)], 2, -1, "13:15"));

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