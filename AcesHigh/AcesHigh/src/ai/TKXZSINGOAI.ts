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
        // 最大力
        public max_force: number;
        //最大时间
        public max_time: number;



        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, time_: number, xs: number) {
            super(fc, mt, xz, mz);
            this.start_pos = egret.Point.create(this.fc.position[0], this.fc.position[1]);
            this.time_ = time_;
            this.xs = xs;
            this.max_force = this.fc.cs_mass;

            // egret.log(this.xs_x + " -- " + this.xs_y + " -- " + this.xs);
            //f * 1.8=a * m;
            //S/1.8=Vt^2+a(t^2)/2
            //s/1.8=xs^2+(f*1.8)/m*(t^2)/2
            this.upType();
            egret.log("TTTTTTTTTTTTT:" + this.getMaxTimeX() + " -- " + this.getMaxTimeY())



        }

        //获取 x 方向 末速度
        public getVtX(): number {
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
            return mb_s;
        }

        //获取 y 方向 末速度 
        public getVtY(): number {

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
            return mb_s;
        }

        //获取 x方向 最大 行使时间
        public getMaxTimeX(): number {
            //f * 1.8=a * m;
            //S/1.8=Vt^2+a(t^2)/2
            //s/1.8=xs^2+(f*1.8)/m*(t^2)/2
            //2*m*(s/1.8-this.xs*this.xs)/(f*1.8)=t*t
            //math.sqrt(9)

            let s = this.getZJLX();
            egret.log("TTTXXXXXX:" + -1351.9998901649758/ 304.2 );
            let z = (2 * this.fc.cs_mass * (s / 1.8 - this.xs * this.xs)) / (this.max_force * 1.8)
            let t = Math.sqrt(z)

            return t;


        }
        // 获取 y 方向 最大  行使时间
        public getMaxTimeY(): number {
            let s = this.getZJLY();
            let z = (2 * this.fc.cs_mass * (s / 1.8 - this.xs * this.xs)) / (this.max_force * 1.8)
            let t = Math.sqrt(z)

            return t;
        }

        //当前距离目标距离 x
        public getZJLX(): number {
            return Math.abs(this.fc.position[0] - this.fc.toPoint.x);
        }

        //当前距离目标距离 y
        public getZJLY(): number {
            return Math.abs(this.fc.position[1] - this.fc.toPoint.y);

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
        }


        //----------------------------减速---------------------------------------
        public x_jian_su() {
            //vt =v0 + FT*1.8  2=0.5秒
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
            //vt=at
            //vt=f*1.8/m*t
            //f=vt*m/(1.8*t)

            let mb_s: number = this.getVtX();

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


            let mb_s: number = this.getVtY();

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


                //施加力
                this.fc.force = [this.force_x, this.force_y];
            }


        }
    }
}