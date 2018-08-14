module ai {
    export class TKXZjiaqianban extends AiBase {
        //飞船始发点
        public start_point: egret.Point;

        public x_jl: number;
        public y_jl: number;

        //误差范围
        public wu_cha = 0.3;

        //速度误差
        public sudu_wu_cha = 0.1;


        //是否减速
        public is_js: boolean;

        //当前相对与目标点的位置
        public wz: WEI_ZHI = WEI_ZHI.NN;

        //x方向上的速度
        public x_su: number;

        //y方向上的速度
        public y_su: number;

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
        public add_num: number = 10;
        public jian_num: number = 10;


        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, is_js: boolean) {
            super(fc, mt, xz, mz);
            this.is_js = is_js;
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
                this.x_su = -this.xs;
                this.y_su = this.xs;
            }

            if (this.wz == WEI_ZHI.ZX) {
                this.x_su = -this.xs;
                this.y_su = -this.xs;
            }

            if (this.wz == WEI_ZHI.YS) {
                this.x_su = this.xs;
                this.y_su = this.xs;
            }

            if (this.wz == WEI_ZHI.YX) {
                this.x_su = this.xs;
                this.y_su = -this.xs;
            }

        }

        public doUpData(time: number) {

            super.doUpData(time);
            //位置更新
            this.gen_xin_wei_zhi();

            //距离目标点距离
            let jj_x = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            let jj_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);

            //标记减速距离
            if (Math.abs(this.fc.velocity[0]) < this.sudu_wu_cha && this.da_cheng_x) {
                this.jd_dc_x = true;
                // egret.log("xxxxx000000:" + this.fc.velocity[0] + " -- " + this.x_su)

            }

            if (Math.abs(this.fc.velocity[1]) < this.sudu_wu_cha && this.da_cheng_x) {
                this.jd_dc_y = true;
                // egret.log("yyyyy000000:" + this.fc.velocity[1] + " -- " + this.y_su)
            }



            //力
            let x_li: number = 0;
            let y_li: number = 0;

            //误差
            let w_x: boolean = false;
            let w_y: boolean = false;

            if (jj_x < this.wu_cha) {
                w_x = true;
            }

            if (jj_y < this.wu_cha) {
                w_y = true;
            }


            //计算 力的方向
            if (this.fc.velocity[0] > this.x_su && Math.abs(this.fc.velocity[0] - this.x_su) > this.sudu_wu_cha && !w_x) {
                x_li = -this.xs;
            }
            if (this.fc.velocity[0] < this.x_su && Math.abs(this.x_su - this.fc.velocity[0]) > this.sudu_wu_cha && !w_x) {
                x_li = this.xs;
            }

            if (this.fc.velocity[1] > this.y_su && Math.abs(this.fc.velocity[1] - this.y_su) > this.sudu_wu_cha && !w_y) {
                y_li = -this.xs;
            }
            if (this.fc.velocity[1] < this.y_su && Math.abs(this.y_su - this.fc.velocity[1]) > this.sudu_wu_cha && !w_y) {
                y_li = this.xs;
            }



            //判断通过情况
            if (jj_x < this.wu_cha) {
                this.da_cheng_x = true;
                if (this.xb) {
                    // egret.log("XXXX")
                    this.xb = false;
                }
                egret.log("xxxxx000000:" + this.fc.velocity[0] + " -- " + this.x_su)

            }

            if (jj_y < this.wu_cha) {
                this.da_cheng_y = true;
                if (this.yb) {
                    // egret.log("YYYY")
                    this.yb = false;
                }
                egret.log("yyyyy000000:" + this.fc.velocity[1] + " -- " + this.y_su)

            }





            //--------------------------------------------------------------

            //判断是否到达目的地 并修改状态
            if (this.da_cheng_x && this.da_cheng_y) {
                egret.log("到达")
                this.upOver();
                return;
            }

            //施加动力
            this.fc.force = [x_li, y_li];
        }
    }
}