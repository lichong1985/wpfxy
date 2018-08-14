module ai {
    export class ZhuanXiangDongLiAi extends AiBase {
        //飞船始发点
        public start_point: egret.Point;

        public x_jl: number;
        public y_jl: number;

        //误差范围
        public wu_cha = 0.3;


        //是否减速
        public is_js: boolean;

        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, is_js: boolean) {
            super(fc, mt, xz, mz);

            //纪录 始发位置 以及 总旅程
            this.start_point = egret.Point.create(this.fc.position[0], this.fc.position[1]);
            this.x_jl = Math.abs(this.start_point.x - this.fc.toPoint.x);
            this.y_jl = Math.abs(this.start_point.y - this.fc.toPoint.y);
            this.is_js = is_js;
            // egret.log("更新——————————————————————————————————————————————————")


        }

        public doUpData(time: number) {

            super.doUpData(time);

            let pi_x = 1;
            let pi_y = 1;

            //向左走 
            if (this.start_point.x > this.fc.toPoint.x) {
                pi_x *= -1
            }

            //向下走 
            if (this.start_point.y > this.fc.toPoint.y) {
                pi_y *= -1
            }

            //距离 出发点距离 
            let n_x = Math.abs(this.fc.position[0] - this.start_point.x);
            let n_y = Math.abs(this.fc.position[1] - this.start_point.y);

            //距离目标点距离
            let jj_x = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            let jj_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);

            let x_l: number = 0;
            let y_l: number = 0;

            //前半段加速-------------------------OK---------
            if (n_x < this.x_jl * 0.1) {
                x_l = this.xs * pi_x;
            }

            if (n_y < this.y_jl * 0.1) {
                y_l = this.xs * pi_y;
            }

            if (this.x_jl < this.wu_cha * 0.5) {
                x_l = 0;
            }

            if (this.y_jl < this.wu_cha * 0.5) {
                y_l = 0;
            }

            this.fc.force = [x_l, y_l];

            //----------------后半段减速区域-----------------待ok--------------
            if (this.is_js) {
                if (n_x >= this.x_jl * 0.9) {
                    x_l = -this.xs * pi_x;
                }

                if (n_y >= this.y_jl * 0.9) {
                    y_l = -this.xs * pi_y;
                }

                if (this.x_jl < this.wu_cha * 0.5) {
                    x_l = 0;
                }

                if (this.y_jl < this.wu_cha * 0.5) {
                    y_l = 0;
                }

                this.fc.force = [x_l, y_l];

            }



            //实时距离 
            let jl = egret.Point.distance(this.fc.toPoint, egret.Point.create(this.fc.position[0], this.fc.position[1]));
            egret.log("SSSSSSSSS:" + this.fc.velocity[0] + ":" + this.fc.velocity[1]);

            //判断是否到达目的地 并修改状态
            if (jj_x < this.wu_cha && jj_y < this.wu_cha) {
                egret.log("到达")
                this.upOver();
                return;
            }
        }
    }
}