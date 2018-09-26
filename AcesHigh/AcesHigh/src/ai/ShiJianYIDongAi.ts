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

        //test ------
        public mark_y: number;


        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, time_: number, xs: number) {
            super(fc, mt, xz, mz);
            this.start_pos = egret.Point.create(this.fc.position[0], this.fc.position[1]);
            this.time_ = time_;
            this.xs = xs;

            //初始化 减速参数
            this.zong_ju_li_x = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            this.zong_ju_li_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            this.is_cs_jiansu = true;
            this.mark_y = egret.getTimer();

            this.jia_su_x();
            this.jia_su_y();
        }

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
                egret.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:" + (egret.getTimer() - this.mark_y));
            }

            if (this.y_da_cheng) {
                this.y_type = 1;
                egret.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY:" + (egret.getTimer() - this.mark_y));
            }
        }


        //----------------------------减速---------------------------------------
        public x_jian_su() {
            //f=ma1.8
            //Vt＝Vo+at 
            //Vt＝Vo+f/(m1.8)t 
            //-Vom1.8/t＝+f/(m1.8)t
            //
            let f = -this.fc.velocity[0] * this.fc.cs_mass * 1.8 / 0.5
            if (f > 0 && this.force_x < f) {
                this.force_x = f;
            }

            if (f < 0 && this.force_x > f) {
                this.force_x = f;
            }
        }

        public y_jian_su() {
            let f = -this.fc.velocity[1] * this.fc.cs_mass * 1.8 / 0.5
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
            let mb_s: number = this.zong_ju_li_x;
            if (this.mu_biao_wz_X == 1) {
                mb_s = this.zong_ju_li_x * -1;
            }

            //S=(Vo+Vt)/2 *1.8*T
            //(s*2)/(t*1.8)-vo=vt
            // f*1.8=a*m;
            //vt=at
            //vt=f*1.8/m*t
            //f=vt*m/(1.8*t)

            let vt = (mb_s * 2) / (this.xs * 1.8) - this.fc.velocity[0];
            this.force_x = (vt * this.fc.cs_mass) / (1.8 * this.xs);

            egret.log("XXXXX:" + mb_s + " -- " + this.fc.velocity[0] + " -- " + vt + " -- " + this.force_x + " -- " + this.xs);

        }

        public jia_su_y() {
            let mb_s: number = this.zong_ju_li_y;
            if (this.mu_biao_wz_Y == 1) {
                mb_s = this.zong_ju_li_y * -1;
            }

            let vt = (mb_s * 2) / (this.xs * 1.8) - this.fc.velocity[1];
            this.force_y = (vt * this.fc.cs_mass) / (1.8 * this.xs);

            egret.log("YYYYY:" + mb_s + " -- " + this.fc.velocity[1] + " -- " + vt + " -- " + this.force_y + " -- " + this.xs);
        }


        //-------------------------------------------------------------
        public doUpData(time: number) {
            super.doUpData(time);
            this.upType();
            if (time < 10000) {
                return;
            }

            //判断是否到达目的地 并修改状态
            if (this.x_da_cheng && this.y_da_cheng) {
                this.upOver();

                egret.log("TTTTTTTT:" + (time - this.mark_y))
                return;
            }

            if (this.x_type == 1) {
                // this.x_jian_su();
            }
            if (this.x_type == 2) {
                this.force_x = 0;
            }

            if (this.x_type == 3) {
                // this.jia_su_x();
            }

            if (this.y_type == 1) {
                // this.y_jian_su();
            }
            if (this.y_type == 2) {
                this.force_y = 0;
            }

            if (this.y_type == 3) {
                // this.jia_su_y();
            }

            //施加力
            this.fc.force = [this.force_x, this.force_y];
            // this.fc.velocity = [0, 1];


            // egret.log("YYY:" + this.force_x + " -- " + this.force_y + " || " + this.x_type + " -- " + this.y_type + " || " + this.mu_biao_wz_X + " -- " + this.mu_biao_wz_Y);


        }


    }
}