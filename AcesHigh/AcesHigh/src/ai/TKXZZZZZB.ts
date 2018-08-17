module ai {
    export class TKXZZZZZZB extends AiBase {
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

        //加速时间
        public time_: number;

        // 1 p2 力= 3.27 A(加速度)
        public pi: number = 3.27;

        // xy  方向上的力
        public x_fc: number;
        public y_fc: number;

        //下一个目的地
        public next_pos: egret.Point;


        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, time_: number) {
            super(fc, mt, xz, mz);

            this.time_ = time_;
            this.start_point = egret.Point.create(this.fc.position[0], this.fc.position[1]);

            this.x_jl = this.fc.toPoint.x - this.fc.position[0];
            this.y_jl = this.fc.toPoint.y - this.fc.position[1];

            this.x_su = this.fc.velocity[0];
            this.y_su = this.fc.velocity[1];

            // // s= vt*1.8 + a*1.8*tt/2*1.8
            //a=(s-vt*1.8)/1.8*2/1.8/tt

            let xf = (this.x_jl - this.x_su * this.time_ * 1.8) / (this.time_ * this.time_) / 1.62;
            let yf = (this.y_jl - this.y_su * this.time_ * 1.8) / (this.time_ * this.time_) / 1.62;

            this.x_fc = xf / this.pi;
            this.y_fc = yf / this.pi;




            if (Math.abs(this.fc.position[0] - this.fc.toPoint.x) < 0.1) {
                // this.x_fc = 0;
                this.da_cheng_x = true;
            }

            if (Math.abs(this.fc.position[1] - this.fc.toPoint.y) < 0.1) {
                // this.x_fc = 0;
                this.da_cheng_y = true;
            }

            egret.log("???????????:" + this.x_fc + " -- " + this.y_fc + " | " + this.x_su + " -- " + this.y_su + " | " + this.x_jl + " -- " + this.y_jl);
        }





        public doUpData(time: number) {

            super.doUpData(time);





            //------------------判断通过情况-----------------------
            if (this.start_point.x > this.fc.toPoint.x) {
                if (this.fc.position[0] < this.fc.toPoint.x) {
                    this.da_cheng_x = true;
                    // egret.log("DDDDDDDDDDDDDDDD --- X1")
                }
            } else {
                if (this.fc.position[0] > this.fc.toPoint.x) {
                    this.da_cheng_x = true;
                    // egret.log("DDDDDDDDDDDDDDDD --- X2")
                }
            }


            if (this.start_point.y > this.fc.toPoint.y) {
                if (this.fc.position[1] < this.fc.toPoint.y) {
                    this.da_cheng_y = true;
                    // egret.log("DDDDDDDDDDDDDDDD --- Y1" + this.fc.position[0] + " ** " + this.fc.toPoint.y)
                }
            } else {
                if (this.fc.position[1] > this.fc.toPoint.y) {
                    this.da_cheng_y = true;
                    // egret.log("DDDDDDDDDDDDDDDD --- Y2")
                }
            }






            //------------------------加速----------------------------
            this.fc.force = [this.x_fc, this.y_fc];
            //----------------达成阶段--------------

            //判断是否到达目的地 并修改状态
            if (this.da_cheng_x && this.da_cheng_y) {
                egret.log("TTTTTTTTTTTTTTTTTTTTTTT")
                this.upOver();
                return;
            }

        }
    }
}