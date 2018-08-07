module ai {
    export class MoveToAi extends AiBase {
        //需要前往的坐标集合
        public points: Array<egret.Point>;
        //是否循环于集合点
        public is_loop: boolean;
        //是否变换目标
        public is_u = true;

        // 巡逻坐标节点 下标
        public point_index: number = 0;

        // public su_du: number = 1;

        //误差范围
        public wu_cha = 1;
        public rx;
        public ry;

         constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE) {
            super(fc, mt, xz, mz);
        }



        public doUpData(time: number) {
            if (!this.hang_up) {
                super.doUpData(time);
                //计算 sk 与 宿主 之间的距离
                let jl = egret.Point.distance(egret.Point.create(this.points[this.point_index].x, this.points[this.point_index].y),
                    egret.Point.create(this.fc.position[0], this.fc.position[1]));

                //在距离内 不施加动力
                if (jl < this.wu_cha) {
                    this.is_u = true;
                    this.point_index++;
                    if (this.point_index >= this.points.length) {
                        //是否为 循环巡逻
                        if (this.is_loop) {
                            this.point_index = 0;
                            this.fc.p2_target = this.points[this.point_index]
                            return;
                        }
                        else {
                            //挂起
                            this.hang_up = true;
                            //将目标清空
                            this.fc.p2_target = null;
                            return;
                        }
                    }
                    //设置新的目的地坐标
                    this.fc.p2_target = this.points[this.point_index]
                    return;
                }
                let x;
                let y;


                if (this.is_u) {
                    let angle: number = Math.atan2((this.suke.position[1] - this.fc.position[1]), (this.suke.position[0] - this.fc.position[0]))

                    //弹性版
                    this.rx = (this.points[this.point_index].x - this.fc.position[0]) * 0.1;
                    this.ry = (this.points[this.point_index].y - this.fc.position[1]) * 0.1;
                    this.is_u = false;
                }

                this.fc.velocity = [this.rx, this.ry];
            }
        }
    }
}