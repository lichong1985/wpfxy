module juzi {
    export class KaoJinLiKaiJz extends JuZiGuanLi {
        // 飞船 信息
        public fc_info: feichuan.FeiChuanInfo;
        public fcs: Array<feichuan.FeiChuanBase> = new Array<feichuan.FeiChuanBase>();



        constructor(nd: number, scene: scene.SceneBase) {
            super(nd);
            this.scene = scene;
        }

        public initFcInfo() {
            this.fc_info = FC_Console.getInfoByName(1, "wei_2");
            for (let i = 0; i < 20; i++) {
                let fc = this.init1ZTJ(i);
                this.fcs.push(fc);
            }
        }

        public init1ZTJ(i: number): feichuan.JuZhenJidui {
            let jl = i / 2;
            let fx = i % 2;

            //目标坐标
            let to1 = egret.Point.create(7, 5);
            let to2 = egret.Point.create(23, 5);

            let lasto1 = egret.Point.create(-5, -5);
            let lasto2 = egret.Point.create(35, -5);
            let fc1;
            let ztj;

            if (fx == 1) {

                //1 创建飞船
                fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                    egret.Point.create(-1 + (-jl), -1 + (-jl)), this.nan_du);
                //2 创建状态机
                ztj = new fjztj.QuYuZTJ(fc1);
                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8),
                    zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2* jl, 1, null, 2, -1, "32:52"));

                //进场
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(to1,
                    zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));

                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8),
                    zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "32:52"));
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(lasto1,
                    zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));

            } else {

                //1 创建飞船
                fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info,
                    egret.Point.create(31 + jl, -1 + (-jl)), this.nan_du);
                //2 创建状态机
                ztj = new fjztj.QuYuZTJ(fc1);
                //休息
                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8),
                    zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2*jl, 1, null, 2, -1, "32:52"));


                //进场
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(to2,
                    zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));

                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8),
                    zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "32:52"));
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(lasto2,
                    zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));

            }

            ztj.is_loop = false;
            ztj.nextStep(0);
            fc1.ztj = ztj;
            return fc1;

        }





        //添加飞机到 战场
        public addFc(scene: scene.SceneBase) {
            for (let fc of this.fcs) {
                scene.dijis.push(fc)
            }

        }
    }
}