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

        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE) {
            super(fc, mt, xz, mz);
            //纪录 始发位置 以及 总旅程
            this.start_point = egret.Point.create(this.fc.position[0], this.fc.position[1]);
            if (this.fc.toPoint) {
                this.jl_z = egret.Point.distance(this.fc.toPoint, egret.Point.create(this.fc.position[0], this.fc.position[1]));
            }
        }



        public doUpData(time: number) {
            super.doUpData(time);
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
                this.upOver();
                return;
            }



            //计算速度向量
            let xl = Tools.xiangliang(egret.Point.create(this.fc.position[0], this.fc.position[1]), this.fc.toPoint, 1.5);
            let pi = 1;

            //加速区
            if (js < 3) {
                pi = js / 3
                if (pi < 0.3) {
                    pi = 0.3;
                }
            }
            //减速区域
            if (jl < 3) {
                pi = jl / 3;
            }


            let x = xl.x * pi;
            let y = xl.y * pi;
            this.fc.velocity = [x, y];


        }




    }
}