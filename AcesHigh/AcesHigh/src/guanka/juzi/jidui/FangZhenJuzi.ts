module juzi {
    //方阵队列机队
    export class FangZhenJuzi extends juzi.JuZiGuanLi {
        //0是占位符 机队 横向 和纵向的数量
        public kuan: number[] = [0, 4, 5, 6, 7, 7];
        public hou: number[] = [0, 2, 3, 4, 5, 6];
        public fc_info: feichuan.FeiChuanInfo;

        public fc_w: number;
        public fc_h: number;

        public jg_w: number;
        public zx_w: number;


        constructor(nan_du: number) {
            super(nan_du);
        }

        public initFcInfo() {
            this.fc_info = FC_Console.getInfoByName(1, "xiao_3");
            this.fc_w = this.fc_info.width;
            this.fc_h = this.fc_info.height;
            this.jg_w = Math.floor(30 / this.kuan[this.nan_du]);
            this.zx_w = Math.round(this.jg_w / 3);

        }

        //添加飞机到 战场
        public addFc(scene: scene.SceneBase) {
            let w = this.kuan[this.nan_du];
            let h = this.hou[this.nan_du];

            for (let x = 0; x < w; x++) {
                for (let y = 0; y < h; y++) {
                    //1 创建飞船
                    let fc: feichuan.JuZhenJidui = new feichuan.JuZhenJidui(scene, this.fc_info,
                        egret.Point.create(x * this.jg_w + this.zx_w, (-this.fc_info.height - 2) * y));

                    //2 创建状态机
                    let ztj_info: zhuangtaiji.ZhuangTaiJiInfoBean = new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(x * this.jg_w + this.zx_w, (this.fc_info.height + 2) * (h - y)),
                        zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 0, 0, -1, "");
                    let ztj: fjztj.QuYuZTJ = new fjztj.QuYuZTJ(fc);
                    ztj.is_loop = false;
                    ztj.addInfo(ztj_info);
                    ztj.nextStep(0);
                    fc.ztj = ztj;
                    //3 添加到列表
                    scene.dijis.push(fc);
                }
            }
        }

    }
}