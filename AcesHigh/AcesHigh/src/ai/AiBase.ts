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

        //计算后的速度  xy方向
        public xs_x: number;
        public xs_y: number;


        //目标相对飞机 所在位置  1左边  2中 3右边 
        public mu_biao_wz_X: number;
        //目标相对飞机 所在位置  1上边  2中 3下边 
        public mu_biao_wz_Y: number;

        //误差
        public wu_cha: number = 0.2;

        //初始位置
        public start_pos: egret.Point;



        //时间标记
        public time_mark: number;
        constructor(fc: feichuan.FeiChuanBase, mT: zhuangtaiji.ZT_TYPE, mZ: zhuangtaiji.ZT_TYPE, gj: zhuangtaiji.ZT_TYPE) {
            this.fc = fc;
            this.sceneConsole = fc.battle_scene;
            this.suke = this.sceneConsole.sk;
            this.mT_over = mT;
            this.gj_over = gj;
            this.mZ_over = mZ;
            this.time_mark = egret.getTimer();

            this.mu_biao_wz_X = this.js_wz(this.fc.position[0], this.fc.toPoint.x);
            this.mu_biao_wz_Y = this.js_wz(this.fc.position[1], this.fc.toPoint.y);
        }

        public init() {
        }


        //目标 相对 你的位置
        public js_wz(you: number, to: number): number {
            if (to > you) {
                if ((to - you) < 0.25) {
                    return 2;
                }
                return 3;
            }

            if (you > to) {
                if ((you - to) < 0.25) {
                    return 2;
                }
                return 1;
            }
            return 2;
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


        //---------------判断是否到达目的地----------------
        public is_x_over(): boolean {
            //左边
            // if (this.mu_biao_wz_X == 1 && Math.abs(this.fc.position[0] - this.fc.toPoint.x) < this.wu_cha) {
            if (this.mu_biao_wz_X == 1 && this.fc.position[0] < this.fc.toPoint.x) {
                return true;
            }
            //中
            if (this.mu_biao_wz_X == 2) {
                return true;
            }

            //右
            if (this.mu_biao_wz_X == 3 && this.fc.position[0] > this.fc.toPoint.x) {
                return true;
            }


            return false;
        }

        public is_y_over() {

            //下边
            if (this.mu_biao_wz_Y == 1 && this.fc.position[1] < this.fc.toPoint.y) {
                return true;
            }
            //中
            if (this.mu_biao_wz_Y == 2) {
                return true;
            }

            //上
            if (this.mu_biao_wz_Y == 3 && this.fc.position[1] > this.fc.toPoint.y) {
                return true;
            }


            return false;

        }


        //返回  x方向 动力系数
        public getXS_X(): number {
            return 0;
        }

        //返回 Y  方向动力系数
        public getXS_Y(): number {
            return 0;
        }

        //----------------------------------------------


    }
}