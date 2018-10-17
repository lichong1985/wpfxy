module juzi {
    export class PuTongDanXuanZhanDaGeJZ extends JuZiGuanLi {
        public fc_info: feichuan.FeiChuanInfo;
        public fc2_info: feichuan.FeiChuanInfo;
        public fc3_info: feichuan.FeiChuanInfo;
        public fc1: feichuan.JuZhenJidui;//上
        public fc2: feichuan.JuZhenJidui;//上
        public fc3: feichuan.JuZhenJidui;//上


        constructor(nd: number, scene: scene.SceneBase) {
            super(nd);
            this.scene = scene;
        }

        public initFcInfo() {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_22");
            this.fc2_info = FC_Console.getInfoByName(3, "zhong_20");
            this.init1ZTJ();
            this.init2ZTJ();
        }

        public init1ZTJ() {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(15, -5), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc1);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 2),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(14, 3),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 2, 800, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 3),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 2, 800, 3, 1)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(16, 4),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 2, 800, 3, 1)], 2, -1, "13:15"));



            ztj.nextStep(0);
            this.fc1.ztj = ztj;

        }


        public init2ZTJ() {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc2_info,
                egret.Point.create(35, 8), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc2);

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)],
                1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(24, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)],
                1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1,
                null,
                1, -1, "特殊处理1"));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 20),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1,
                null,
                1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 21),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)],
                1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 22),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)],
                1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 22),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1,
                null,
                1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(24, 22),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)],
                1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 22),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)],
                1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 30),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1,
                null,
                1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 8),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1,
                null,
                1, -1, "特殊处理1"));




            ztj.nextStep(0);
            this.fc2.ztj = ztj;

        }

        //添加飞机到 战场
        public addFc(scene: scene.SceneBase) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        }
    }
}