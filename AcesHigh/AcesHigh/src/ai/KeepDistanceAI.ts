module ai {
    /**
     * 与sk保持 固定距离ai
     */
    export class KeepDistanceAI extends AiBase {
        public xs: number;
        constructor(fc: feichuan.FeiChuanBase, xs: number) {
            super(fc);
            this.xs = xs;

        }

        public doUpData(time: number) {
            if (!this.hang_up) {
                //计算 sk 与 宿主 之间的距离
                let jl = egret.Point.distance(egret.Point.create(this.suke.position[0], this.suke.position[1]), egret.Point.create(this.fc.position[0], this.fc.position[1]));
                //在距离内 不施加动力
                if (jl < this.xs) {
                    return;
                }

                //距离外 根据 距离远近 添加 不同大小的动力
                let rx = (this.suke.position[0] - this.fc.position[0]) * 0.1;
                let ry = (this.suke.position[1] - this.fc.position[1]) * 0.1;

                this.fc.velocity = [rx, ry];



            }
        }
    }
}