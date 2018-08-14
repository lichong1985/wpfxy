module ai {
    export class TKXZZuiZhongAi extends AiBase {
        //飞船始发点
        public start_point: egret.Point;

        public x_jl: number = 0;
        public y_jl: number = 0;

        //误差范围
        public wu_cha = 0.3;

        //速度误差
        public sudu_wu_cha = 0.1;


        //是否减速
        public is_js: boolean;

        //当前相对与目标点的位置
        public wz: WEI_ZHI = WEI_ZHI.NN;

        //x方向上的速度
        public x_su: number = 0;

        //y方向上的速度
        public y_su: number = 0;

        public da_cheng_x: boolean = false;
        public da_cheng_y: boolean = false;

        //0速距离
        public zero_x_D: number = 0;
        public zero_y_D: number = 0;

        //阶段达成 
        public jd_dc_x: boolean = false;
        public jd_dc_y: boolean = false;

        public xb: boolean = true;
        public yb: boolean = true;


        //加减力次数
        public add_num_x: number = 5;
        public jian_num_x: number = 10;

        public add_num_y: number = 5;
        public jian_num_y: number = 10;

        public xs_x: number;
        public xs_y: number;


        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, is_js: boolean) {
            super(fc, mt, xz, mz);
            this.is_js = is_js;
            // egret.log("-------------------------------")

        }


        public init() {
            super.init();


            this.x_jl = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            this.y_jl = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            if (this.x_jl == 0) {
                this.x_jl = 0.01;
            }

            if (this.y_jl == 0) {
                this.y_jl = 0.01;
            }

            let pi = 0;
            if (this.x_jl < this.y_jl) {
                pi = this.x_jl / this.y_jl;
                this.xs_x = this.xs * pi;
                this.xs_y = this.xs - this.xs_x;
            } else {
                pi = this.y_jl / this.x_jl;
                this.xs_y = this.xs * pi;
                this.xs_x = this.xs - this.xs_y;
            }


            if (this.x_jl < this.wu_cha) {
                this.xs_x = 0;
            }

            if (this.y_jl < this.wu_cha) {
                this.xs_y = 0;
            }
            egret.log("PPPPPPPPPPPPP:" + pi);

            this.gen_xin_wei_zhi();

        }

        //更新位置
        public gen_xin_wei_zhi() {
            let zz: WEI_ZHI;
            //左上
            if (this.fc.position[0] > this.fc.toPoint.x && this.fc.position[1] < this.fc.toPoint.y) {
                zz = WEI_ZHI.ZS;
            }

            //右下
            if (this.fc.position[0] < this.fc.toPoint.x && this.fc.position[1] > this.fc.toPoint.y) {
                zz = WEI_ZHI.YX;
            }

            //左下
            if (this.fc.position[0] > this.fc.toPoint.x && this.fc.position[1] > this.fc.toPoint.y) {
                zz = WEI_ZHI.ZX;
            }

            //右上
            if (this.fc.position[0] < this.fc.toPoint.x && this.fc.position[1] < this.fc.toPoint.y) {
                zz = WEI_ZHI.YS;
            }


            //更新速度值
            if (this.wz != zz) {
                this.wz = zz;

                this.gen_xin_shu_ju();

            }
        }

        //根据位置的 四个方向的改变 跟新参数
        public gen_xin_shu_ju() {

            if (this.wz == WEI_ZHI.ZS) {
                // this.x_su = -this.xs_x;
                // this.y_su = this.xs_y;
                this.x_su = -this.xs;
                this.y_su = this.xs;
            }

            if (this.wz == WEI_ZHI.ZX) {
                // this.x_su = -this.xs_x;
                // this.y_su = -this.xs_y;
                this.x_su = -this.xs;
                this.y_su = -this.xs;
            }

            if (this.wz == WEI_ZHI.YS) {
                // this.x_su = this.xs_x;
                // this.y_su = this.xs_y;
                this.x_su = this.xs;
                this.y_su = this.xs;

            }

            if (this.wz == WEI_ZHI.YX) {
                // this.x_su = this.xs_x;
                // this.y_su = -this.xs_y;
                this.x_su = this.xs;
                this.y_su = -this.xs;
            }

            egret.log("SSSSSSSSSSSSSS:" + this.x_su + " -- " + this.y_su);
        }


        public doUpData(time: number) {

            super.doUpData(time);


            // //距离目标点距离
            let jj_x = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            let jj_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            //力
            let x_li: number = this.x_su;
            let y_li: number = this.y_su;



            //-------------加速阶段----------------------------

            if (this.x_su > 0 && this.fc.velocity[0] >= this.x_su) {
                x_li = 0;
            }

            if (this.x_su < 0 && this.fc.velocity[0] <= this.x_su) {
                x_li = 0;
            }

            if (this.y_su > 0 && this.fc.velocity[1] >= this.y_su) {
                y_li = 0;
            }

            if (this.y_su < 0 && this.fc.velocity[1] <= this.y_su) {
                y_li = 0;
            }





            //------------------------减速阶段------------------
            //判断通过情况
            if (jj_x < this.wu_cha) {
                if (!this.da_cheng_x) {
                    this.jian_num_x = Math.abs(Math.round(this.fc.velocity[0] / (0.06 * this.xs)));
                }
                this.da_cheng_x = true;

            }

            if (jj_y < this.wu_cha) {
                if (!this.da_cheng_y) {
                    this.jian_num_y = Math.abs(Math.round(this.fc.velocity[1] / (0.06 * this.xs)));
                }
                this.da_cheng_y = true;
            }



            //减速数量减少
            if (this.da_cheng_x) {
                this.jian_num_x--;
                x_li = -this.x_su
            }


            if (this.da_cheng_y) {
                this.jian_num_y--;
                y_li = -this.y_su
            }

            // 减速器用光
            if (this.jian_num_x <= 0) {
                x_li = 0;
            }


            if (this.jian_num_y <= 0) {
                y_li = 0;
            }


            //----------------------------------------------------
            this.fc.force = [x_li, y_li];
            //----------------达成阶段--------------

            //判断是否到达目的地 并修改状态
            if (this.da_cheng_x && this.da_cheng_y) {
                this.upOver();
                return;
            }

        }
    }
}