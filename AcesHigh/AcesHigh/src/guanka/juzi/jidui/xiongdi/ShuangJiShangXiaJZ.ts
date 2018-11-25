module juzi {
    export class ShuangJiShangXiaJZ extends JuZiGuanLi {
        // 飞船 信息
        public fc_info: feichuan.FeiChuanInfo;
        public fc1: feichuan.JuZhenJidui;//上
        public fc2: feichuan.JuZhenJidui;//上


        constructor(nd: number, scene: TestScene) {
            super(nd);
            this.scene = scene;
        }

        public initFcInfo() {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_8");
            this.init1ZTJ();
            this.init2ZTJ();
        }

        public init1ZTJ() {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(35, 45), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc1);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 45),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 45),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));


            ztj.nextStep(0);
            this.fc1.ztj = ztj;

        }

        public init2ZTJ() {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(-5, 5), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc2);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));


            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 45),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1,
                [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));



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