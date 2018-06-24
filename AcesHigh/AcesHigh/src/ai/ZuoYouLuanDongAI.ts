module ai {
    export class ZuoYouLuanDongAI extends AiBase {
        //临时目标
        private target_point: egret.Point;
        //是否抵达
        private is_get: boolean = true;
        //速度
        private v: number = 1;
        constructor(fc: feichuan.FeiChuanBase) {
            super(fc);

        }
        /**
         * 边界位置
         *  左右 ： 20 - 32
         *  上下 ： 60 - 37
         */
        public doUpData(time: number) {
            //满足条件重新随机
            if (this.is_get || this.fc.velocity[0] < 0.5) {

                this.target_point = egret.Point.create(this.getRandomX(), this.fc.position[1])
                if (this.target_point.x > this.fc.position[0]) {
                    this.fc.velocity = [this.v, 0];
                } else {
                    this.fc.velocity = [-this.v, 0];
                }

                this.is_get = false;
                return;
            }

            //查看是否到达指定位置
            let jl = egret.Point.distance(egret.Point.create(this.fc.position[0], this.fc.position[1]), this.target_point);
            if (jl < 0.5) {
                this.is_get = true;
            }
        }

        //获取随机坐标点
        private getRandomX(): number {
            let x = Math.random() * (scene.p2_you - scene.p2_zuo) + scene.p2_zuo;
            return x;
        }
    }
}