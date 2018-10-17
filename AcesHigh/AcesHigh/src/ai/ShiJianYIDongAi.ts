module ai {
    export class ShiJianYiDongAi extends AiBase {
        //加速时间
        public time_: number;

        //减速次数上线
        public jian_su_num: number = 20;
        //减速标记
        public jian_su_x_mark: number = 0;
        public jian_su_y_mark: number = 0;

        //力量对速度的印象
        public jian_su_li_pi = 5 * 1.8;
        //实际作用力
        public jian_su_li = 5;


        // 1 减速 2 不动 3加速
        public x_type: number;
        public y_type: number;

        //达成
        public x_da_cheng: boolean = false;
        public y_da_cheng: boolean = false;


        //作用力
        public force_x: number = 0;
        public force_y: number = 0;

        //总距离
        public zong_ju_li_x: number = 0;
        public zong_ju_li_y: number = 0;

        //移动前判断是否需要减速
        public is_cs_jiansu: boolean;

        //飞船最大动力 （推力与 质量 比例关系）
        public max_force: number;

        //最大 移动时间
        public max_time: number;

        //test ------
        public mark_y: number;
        public yp: number = 0;
        public cs_y: number = 0;



        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, time_: number, xs: number) {
            super(fc, mt, xz, mz);
            this.start_pos = egret.Point.create(this.fc.position[0], this.fc.position[1]);
            this.time_ = time_;
            this.xs = xs;
            this.max_time = xs * 1000;

            //初始化 减速参数
            this.zong_ju_li_x = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            this.zong_ju_li_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            this.mark_y = egret.getTimer();
            this.max_force = this.fc.cs_mass * 1;//( 力与质量 1：1)


            //公式 
            //S=V(初)*T-1/2at^2
            //Vt＝Vo+at 
            //f1.8=ma
            //a=(f*1.8)/m
            //f=(m*a)/1.8
        }

        //----------------------------初始减速----------------------------------

        public cs_jansu_x() {
            if (this.mu_biao_wz_X == 1 && this.fc.velocity[0] < 0) {
                return;
            }
            if (this.mu_biao_wz_X == 3 && this.fc.velocity[0] > 0) {
                return;
            }

            if (Math.abs(this.fc.velocity[0]) < 0.01) {
                return;
            }

            // egret.log("XXXXXXJJJJJJJJJJJ")
            this.x_jian_su();
        }

        public cs_jansu_y() {
            if (this.mu_biao_wz_Y == 1 && this.fc.velocity[1] < 0) {
                return;
            }
            if (this.mu_biao_wz_Y == 3 && this.fc.velocity[1] > 0) {
                return;
            }
            if (Math.abs(this.fc.velocity[1]) < 0.01) {
                return;
            }
            // egret.log("YYYYYYYYYJJJJJJJJJJJ")

            this.y_jian_su();

        }
        //------------------------------------------------------------------

        //更新状态
        public upType() {
            //位置达到
            if (!this.x_da_cheng) {
                this.x_da_cheng = this.is_x_over();
                this.x_type = 3;
            }

            if (!this.y_da_cheng) {
                this.y_da_cheng = this.is_y_over();
                this.y_type = 3;
            }

            if (this.x_da_cheng) {
                this.x_type = 1;
                // egret.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:" + (egret.getTimer() - this.mark_y));
            }

            if (this.y_da_cheng) {
                this.y_type = 1;
                // egret.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY:" + (egret.getTimer() - this.mark_y));
            }
        }


        //----------------------------减速---------------------------------------
        public x_jian_su() {
            let a = -this.fc.velocity[0] * 2
            let f = (this.fc.cs_mass * a) / 1.8
            if (f > 0 && this.force_x < f) {
                this.force_x = f;
            }

            if (f < 0 && this.force_x > f) {
                this.force_x = f;
            }
        }

        public y_jian_su() {
            let a = -this.fc.velocity[1] * 2
            let f = (this.fc.cs_mass * a) / 1.8
            if (f > 0 && this.force_y < f) {
                this.force_y = f;
            }

            if (f < 0 && this.force_y > f) {
                this.force_y = f;
            }
        }
        //----------------------------------------------------------------

        //------------------------加速------------------------------------
        public jia_su_x() {
            let s: number = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            let v = this.fc.velocity[0];
            let t = (this.max_time - (egret.getTimer() - this.mark_y)) / 1000
            let m = this.fc.cs_mass;
            if (this.mu_biao_wz_X == 1) {
                s = this.zong_ju_li_x * -1;
            }


            //S*1.8=V*T+1/2at^2
            //((s*1.8)-v*t)*2/(t*t)=a
            //f1.8=ma
            //a=(f*1.8)/m
            //f=(m*a)/1.8

            let a = ((s * 1.8) - v * t) * 2 / (t * t);
            let f = (a * m) / 1.8
            this.force_x = f;
        }

        public jia_su_y() {
            let s: number = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            let v = this.fc.velocity[1];
            let t = (this.max_time - (egret.getTimer() - this.mark_y)) / 1000
            let m = this.fc.cs_mass;
            if (this.mu_biao_wz_Y == 1) {
                s = this.zong_ju_li_y * -1;
            }

            let a = ((s * 1.8) - v * t) * 2 / (t * t);
            let f = (a * m) / 1.8
            this.force_y = f;



        }


        //-------------------------------------------------------------
        public doUpData(time: number) {
            super.doUpData(time);
            this.upType();
            // if (time < 10000) {
            //     this.mark_y = time;
            //     return;
            // }

            //判断是否到达目的地 并修改状态
            if (this.x_da_cheng && this.y_da_cheng) {
                this.upOver();
                return;
            }

            if (this.x_type == 1) {
                this.x_jian_su();

            }
            if (this.x_type == 2) {
                this.force_x = 0;
            }
            //先减速再加速
            if (this.x_type == 3) {
                this.jia_su_x();
                this.cs_jansu_x()
            }


            if (this.y_type == 1) {
                this.y_jian_su();

            }
            if (this.y_type == 2) {
                this.force_y = 0;
            }
            //先减速再加速
            if (this.y_type == 3) {
                this.jia_su_y();
                this.cs_jansu_y();
            }

            let vx = this.fc.velocity[0];
            let vy = this.fc.velocity[1];
            if (vx > 0 && vx > 5) {
                vx = 5;
                this.force_x = 0;
            }

            if (vx < 0 && vx < -5) {
                vx = -5;
                this.force_x = 0;
            }


            if (vy > 0 && vy > 5) {
                vy = 5;
                this.force_y = 0;
            }

            if (vy < 0 && vy < -5) {
                vy = -5;
                this.force_y = 0;
            }
            this.fc.velocity = [vx, vy];
            //施加力
            this.fc.force = [this.force_x, this.force_y];


        }


    }
}