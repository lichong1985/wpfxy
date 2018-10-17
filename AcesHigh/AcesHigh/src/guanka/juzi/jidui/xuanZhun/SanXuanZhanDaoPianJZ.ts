module juzi {
    export class SanXuanZhanDaoPianJZ extends JuZiGuanLi {
        public fc_info: feichuan.FeiChuanInfo;
        public fc2_info: feichuan.FeiChuanInfo;
        public fc1: feichuan.JuZhenJidui;//上
        public fc2: feichuan.JuZhenJidui;//上
        public fc3: feichuan.JuZhenJidui;//上


        constructor(nd: number, scene: scene.SceneBase) {
            super(nd);
            this.scene = scene;
        }

        public initFcInfo() {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_21");
            this.fc2_info = FC_Console.getInfoByName(3, "zhong_22");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        }

        public init1ZTJ() {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(-5, 25), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc1);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 25),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1,
                [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 45),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1,
                [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(29, 25),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 12),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1,
                [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1,
                [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));






            ztj.nextStep(0);
            this.fc1.ztj = ztj;

        }

        public init2ZTJ() {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                egret.Point.create(35, 25), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc2);

            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(29, 25),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1,
                [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 5),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1,
                [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 25),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 12),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1,
                [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 45),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1,
                [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));



            ztj.nextStep(0);
            this.fc2.ztj = ztj;

        }


        public init3ZTJ() {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info,
                egret.Point.create(-5, -5), this.nan_du);
            //2 创建状态机
            let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(this.fc3);

            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25),
                zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));


            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, -1),
                zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 10, 1,
                null, 1, -1, "特殊处理1"));






            ztj.nextStep(0);
            this.fc3.ztj = ztj;

        }




        //添加飞机到 战场
        public addFc(scene: scene.SceneBase) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        }
    }
}