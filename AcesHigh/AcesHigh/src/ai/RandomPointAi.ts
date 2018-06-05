module ai {
    export enum RANDOM_POINT {
        x,//横向 
        y,//纵向 
        all //左右方向
    }
    export class RandomPointAi extends ai.AiBase {
        public d_limit: number;
        public random_type: RANDOM_POINT;
        //随机坐标  
        public r_point: egret.Point;

        public is_u: boolean = true;
        public rx;
        public ry;

        constructor(fc: feichuan.FeiChuanBase, r: RANDOM_POINT, d_limit: number) {
            super(fc);
            this.d_limit = d_limit;
            this.random_type = r;
            this.r_point = this.random_p();

        }
        public doUpData(time: number) {
            //计算 sk 与 宿主 之间的距离
            let jl = egret.Point.distance(egret.Point.create(this.r_point.x, this.r_point.y),
                egret.Point.create(this.fc.position[0], this.fc.position[1]));
            egret.log("KKKKKKKKKKKKKK:" + jl);
            if (jl < 0.3) {
                this.r_point = this.random_p();
                this.is_u = true;
            }

            if (this.is_u) {
                let angle: number = Math.atan2((this.suke.position[1] - this.fc.position[1]), (this.suke.position[0] - this.fc.position[0]))

                //弹性版
                this.rx = (this.r_point.x - this.fc.position[0]) * 0.1;
                this.ry = (this.r_point.y - this.fc.position[1]) * 0.1;
                this.is_u = false;
            }

            this.fc.velocity = [this.rx, this.ry];


        }

        public random_p(): egret.Point {
            let x = Math.random() * this.d_limit * 2 - this.d_limit;
            let y = Math.random() * this.d_limit * 2 - this.d_limit;

            if (this.random_type == RANDOM_POINT.x) {

                return egret.Point.create(this.fc.position[0] + x, this.fc.position[1]);
            }

            if (this.random_type == RANDOM_POINT.y) {
                return egret.Point.create(this.fc.position[0], this.fc.position[1] + y);
            }

            if (this.random_type == RANDOM_POINT.all) {
                return egret.Point.create(this.fc.position[0] + x, this.fc.position[1] + y);
            }


            return null;
        }


    }
}