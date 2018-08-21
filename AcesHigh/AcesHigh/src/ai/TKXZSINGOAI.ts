module ai {
    export class TKZXSINGOAI extends AiBase {
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
        //减速距离
        public jian_su_ju_li_x: number = 0;
        public jian_su_ju_li_y: number = 0;


        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, time_: number) {
            super(fc, mt, xz, mz);
            this.start_pos = egret.Point.create(this.fc.position[0], this.fc.position[1]);
            this.time_ = time_;

            //初始化 减速参数
            this.zong_ju_li_x = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            this.zong_ju_li_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            this.jian_su_ju_li_x = this.zong_ju_li_x * 0.1;
            this.jian_su_ju_li_y = this.zong_ju_li_y * 0.1;
            if (this.jian_su_ju_li_x > 1) {
                this.jian_su_ju_li_x = 1;
            }
            if (this.jian_su_ju_li_y > 1) {
                this.jian_su_ju_li_y = 1;
            }


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
            }

            if (this.y_da_cheng) {
                this.y_type = 1;
            }


            //速度达到
            // if (this.fc.velocity[0] >= this.xs) {
            //     this.x_type = 2;
            // }

            // if (this.fc.velocity[1] >= this.xs) {
            //     this.y_type = 2;
            // }

        }


        //----------------------------减速---------------------------------------
        public x_jian_su() {
            //vt =v0 + at*1.8  2=0.5秒
            let f = -this.fc.velocity[0] / 1.8 / (1 / this.xs)
            if (f > 0 && this.force_x < f) {
                this.force_x = f;
            }

            if (f < 0 && this.force_x > f) {
                this.force_x = f;
            }

        }

        public y_jian_su() {
            let f = -this.fc.velocity[1] / 1.8 / (1 / this.xs)
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
            //vt =v0 + at*1.8
            let mb_s: number = 0;
            if (this.mu_biao_wz_X == 1) {
                mb_s = -this.xs;

            }

            if (this.mu_biao_wz_X == 2) {
                mb_s = 0;

            }
            if (this.mu_biao_wz_X == 3) {
                mb_s = this.xs;

            }
            let vt = this.fc.velocity[0] + this.force_x * 1.8;
            if (mb_s > 0 && vt >= mb_s) {
                this.force_x = 0;
                return;
            }
            if (mb_s < 0 && vt <= mb_s) {
                this.force_x = 0;
                return;
            }

            this.force_x = (mb_s - this.fc.velocity[0]);
        }

        public jia_su_y() {
            //vt =v0 + at*1.8
            let mb_s: number = 0;
            if (this.mu_biao_wz_Y == 1) {
                mb_s = -this.xs;

            }

            if (this.mu_biao_wz_Y == 2) {
                mb_s = 0;

            }
            if (this.mu_biao_wz_Y == 3) {
                mb_s = this.xs;

            }


            let vt = this.fc.velocity[1] + this.force_y * 1.8;

            if (mb_s > 0 && vt >= mb_s) {
                this.force_y = 0;
                return;
            }
            if (mb_s < 0 && vt <= mb_s) {
                this.force_y = 0
                return;
            }

            this.force_y = (mb_s - this.fc.velocity[1]);


        }


        //-------------------------------------------------------------
        public doUpData(time: number) {
            super.doUpData(time);
            this.upType();


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

            if (this.x_type == 3) {
                this.jia_su_x();
            }

            if (this.y_type == 1) {
                this.y_jian_su();
            }
            if (this.y_type == 2) {
                this.force_y = 0;
            }

            if (this.y_type == 3) {
                this.jia_su_y();
            }

            // egret.log("???????????:" + this.x_type + " -- " + this.y_type + " | " + this.force_x + " -- " + this.force_y + " | " + this.mu_biao_wz_X + " -- " + this.mu_biao_wz_Y);


            //施加力
            this.fc.force = [this.force_x, this.force_y];


        }


    }
}