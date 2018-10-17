module ai {
    export class testAi extends AiBase {
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
        public is_mark: boolean = true;


        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, time_: number, xs: number) {
            super(fc, mt, xz, mz);
            this.start_pos = egret.Point.create(this.fc.position[0], this.fc.position[1]);
            this.time_ = time_;
            this.xs = xs;

            //初始化 减速参数
            this.zong_ju_li_x = 0;
            this.zong_ju_li_y = 18;
            this.is_cs_jiansu = true;
            this.mark_y = this.fc.position[1];

            this.jia_su_x();
            this.jia_su_y();
        }




        //------------------------加速------------------------------------
        public jia_su_x() {
            let mb_s: number = this.zong_ju_li_x;
            if (this.mu_biao_wz_X == 1) {
                mb_s = this.zong_ju_li_x * -1;
            }

            //S=(Vo+Vt)/2 *1.8*T
            //(s*2)/(t*1.8)-vo=vt
            // f*1.8=a*m;
            //(vt-vo)=at
            //(vt-vo)=f*1.8/m*t
            //f=(vt-vo)*m/(1.8*t)

            let vt = (mb_s * 2) / (this.xs * 1.8) - this.fc.velocity[0];
            this.force_x = ((vt - this.fc.velocity[0]) * this.fc.cs_mass) / (1.8 * this.xs);


        }

        public jia_su_y() {
            let mb_s: number = this.zong_ju_li_y;
            if (this.mu_biao_wz_Y == 1) {
                mb_s = this.zong_ju_li_y * -1;
            }

            let vt = (mb_s * 2) / (this.xs * 1.8) - this.fc.velocity[1];
            this.force_y = ((vt - this.fc.velocity[1]) * this.fc.cs_mass) / (1.8 * this.xs);
        }


        //-------------------------------------------------------------
        public doUpData(time: number) {
            super.doUpData(time);
            if (time < 10000) {
                return;
            }
            if (this.is_mark) {
                this.fc.velocity = [0, -5];
                this.is_mark = false;

                egret.log("DDDD")
            }

            //施加力
            this.fc.force = [this.force_x, this.force_y];

            egret.log("CCCCC:" + time + " -- " + Math.abs(this.mark_y - this.fc.position[1]) + " -- " + this.fc.velocity[1]);
            // egret.log("YYY:" + this.force_x + " -- " + this.force_y + " || " + this.x_type + " -- " + this.y_type + " || " + this.mu_biao_wz_X + " -- " + this.mu_biao_wz_Y);


        }


    }
}