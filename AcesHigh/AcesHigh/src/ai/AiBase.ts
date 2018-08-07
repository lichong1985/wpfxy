module ai {
    export enum AI_TYPE {
        xuan_zhuan, //旋转类型
        miao_zhun,//瞄准类型
    }

    //位置
    export enum WEI_ZHI {
        ZS = 0,//左上
        ZX = 1,//左下
        YS = 2,//右下
        YX = 3,//右上
    }

    //转向
    export enum ZHUAN_XIANG {
        Clockwise = 0,//顺时针
        Anti_clockwise = 1,//逆时针


    }
    export class AiBase {
        //场景管理器
        public sceneConsole: scene.SceneBase;
        //苏克
        public suke: shuke.ShuKe;

        public fc: feichuan.FeiChuanBase

        //是否停止ai
        public hang_up: boolean = false;

        //间隔
        public jian_ge: number = 50;
        public mark_time: number = 0;

        // over type 
        public mT_over: zhuangtaiji.ZT_TYPE;
        public xZ_over: zhuangtaiji.ZT_TYPE;
        public mZ_over: zhuangtaiji.ZT_TYPE;

        //时间标记
        public time_mark: number;
        constructor(fc: feichuan.FeiChuanBase, mT: zhuangtaiji.ZT_TYPE, xZ: zhuangtaiji.ZT_TYPE, mZ: zhuangtaiji.ZT_TYPE) {
            this.fc = fc;
            this.sceneConsole = fc.battle_scene;
            this.suke = this.sceneConsole.sk;
            this.mT_over = mT;
            this.xZ_over = xZ;
            this.mZ_over = mZ;

        }

        public updata_ai(now: number) {

            if ((now - this.mark_time) > this.jian_ge) {
                this.mark_time = now;
                this.doUpData(now);
            }
        }
        //场景刷新器
        public doUpData(time: number) {

        }

        public upOver() {
            if (this.mT_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.mT = this.mT_over;
            }
            if (this.xZ_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.xzT = this.xZ_over;
            }
            if (this.mZ_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.mzT = this.mZ_over;
            }

        }


    }
}