module ai {
    export enum AI_TYPE {
        xuan_zhuan, //旋转类型
        miao_zhun,//瞄准类型
    }

    //位置
    export enum WEI_ZHI {
        ZS = 0,//左上
        ZX = 1,//左下
        YS = 2,//右上
        YX = 3,//右下
        NN = 4,//空状态
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

        //单次状态 持续时间
        public jian_ge: number = 10 * 1000;
        // public mark_time: number = 0;

        // over type 
        public mT_over: zhuangtaiji.ZT_TYPE;
        public gj_over: zhuangtaiji.ZT_TYPE;
        public mZ_over: zhuangtaiji.ZT_TYPE;

        //系数
        public xs: number;

        //时间标记
        public time_mark: number;
        constructor(fc: feichuan.FeiChuanBase, mT: zhuangtaiji.ZT_TYPE, gj: zhuangtaiji.ZT_TYPE, mZ: zhuangtaiji.ZT_TYPE) {
            this.fc = fc;
            this.sceneConsole = fc.battle_scene;
            this.suke = this.sceneConsole.sk;
            this.mT_over = mT;
            this.gj_over = gj;
            this.mZ_over = mZ;
            this.time_mark = egret.getTimer();

        }

        public init() {
        }

        public updata_ai(now: number) {
            //到时没有达成任务 退出
            if ((egret.getTimer() - this.time_mark) > this.jian_ge) {
                // this.upOver();
            }
            this.doUpData(now);
        }
        //场景刷新器
        public doUpData(time: number) {

        }

        public upOver() {
            if (this.mT_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.mT = this.mT_over;
            }
            if (this.gj_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.gjT = this.gj_over;
            }
            if (this.mZ_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.mzT = this.mZ_over;
            }

        }


    }
}