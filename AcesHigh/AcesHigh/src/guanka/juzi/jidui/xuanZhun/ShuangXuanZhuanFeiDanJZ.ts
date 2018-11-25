module juzi {
    export class ShuangXuanZHuanFeiDanJZ extends JuZiGuanLi {
        // 飞船 信息
        public fc_info: feichuan.FeiChuanInfo;
        public fc1: feichuan.JuZhenJidui;
        public fc2: feichuan.JuZhenJidui;

        constructor(nd: number, scene: TestScene) {
            super(nd);
            this.scene = scene;
        }

        public initFcInfo() {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_14");
            this.init1ZTJ();
            this.init2ZTJ();

        }

        public init1ZTJ() {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(10, -5), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc1);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 10, null, 2, -1, "111111", true));

            //移动加普通武器射击
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 20),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 5,
                [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)],
                2, -1, "222222"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 25),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 0.5,
                null,
                2, -1, "33333333"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 10,
                [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)],
                2, -1, "44444444"));

            ztj.nextStep(0);
            this.fc1.ztj = ztj;

        }

        public init2ZTJ() {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(5, 55), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 5, null, 3, -1, "-2:52"));
            //移动加普通武器射击
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 5,
                [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)],
                2, -1, "222222"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(-2, 20),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 0.5,
                null,
                2, -1, "33333333"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 5,
                [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)],
                2, -1, "222222"));

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