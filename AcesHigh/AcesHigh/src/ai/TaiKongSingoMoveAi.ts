module ai {
    export class TaiKongSingoMoveAi extends AiBase {





        //误差范围
        public wu_cha = 0.3;
        //减速距离
        public jian_su: number = 0.2;
        public rx;
        public ry;

        //飞船始发点
        public start_point: egret.Point;
        //到目标点的距离
        public jl_z: number;
        //可运行时间
        public run_time: number;

        // 开始 标记时间
        public st_time: number;

        public ty_f: number = 0.5;
        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number) {
            super(fc, mt, xz, mz);
            //纪录 始发位置 以及 总旅程
            this.start_point = egret.Point.create(this.fc.position[0], this.fc.position[1]);
            if (this.fc.toPoint) {
                this.jl_z = egret.Point.distance(this.fc.toPoint, egret.Point.create(this.fc.position[0], this.fc.position[1])) * 0.5;

            }
            // this.fc.velocity = [0, 0];
            //标记开始时间

            this.st_time = egret.getTimer();

            //设置执行时间 若果是 -1 则按最长（15秒）时间执行
            this.run_time = run_time * 1000;
            if (run_time == -1) {
                this.run_time = 15 * 1000;
            }
        }



        public doUpData(time: number) {
            super.doUpData(time);

            //时间到
            if ((egret.getTimer() - this.st_time) > this.run_time) {
                this.upOver();
                return;
            }
            //判断飞船目的地
            if (!this.fc.toPoint) {
                return;
            }

            //实时距离 
            let jl = egret.Point.distance(this.fc.toPoint, egret.Point.create(this.fc.position[0], this.fc.position[1]));
            let js = egret.Point.distance(this.start_point, egret.Point.create(this.fc.position[0], this.fc.position[1]));

            //判断是否到达目的地 并修改状态
            if (jl < this.wu_cha) {
                this.fc.toPoint = null;
                this.fc.velocity = [0, 0];
                this.upOver();
                return;
            }



            //计算速度向量
            let xl = Tools.xiangliang(egret.Point.create(this.fc.position[0], this.fc.position[1]), this.fc.toPoint, this.xs);
            let pi = 1;

            if (js < this.jl_z) {
                let x = xl.x * pi;
                let y = xl.y * pi;

                this.fc.force = [x, y];
                this.fc.applyForceLocal([x, y], this.fc.position);

            } else {
                // pi = jl / this.jl_z;
                // if (pi < 0.1) {
                //     pi = 0.1;
                // }

                let x = xl.x * pi;
                let y = xl.y * pi;

                this.fc.force = [-x, -y];
                // this.fc.applyForceLocal([-x, -y], this.fc.position);
            }









        }




    }
}