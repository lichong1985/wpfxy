module ai {
    export class SingoMoveToAi extends AiBase {
        //需要前往的坐标集合
        public point: egret.Point;
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

        constructor(fc: feichuan.FeiChuanBase) {
            super(fc);
        }



        public doUpData(time: number) {
            if (!this.fc.toPoint) {
                return;
            }
            super.doUpData(time);

            //飞船与目标点之间的距离
            let jl = egret.Point.distance(this.fc.toPoint, egret.Point.create(this.fc.position[0], this.fc.position[1]));
            //到达后清楚 目标点标记
            if (jl < this.wu_cha) {
                this.fc.toPoint = null;
                this.fc.ztj.mT = zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER;
                return;
            }
            let xl = Tools.xiangliang(egret.Point.create(this.fc.position[0], this.fc.position[1]), this.fc.toPoint, 1);

            this.fc.velocity = [xl.x, xl.y];



        }
    }
}