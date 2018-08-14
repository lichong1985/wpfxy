module ai {
    export class TestSameThingAi extends AiBase {
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

        public li_num: number = 20;
        public jian_num: number = 0;

        public is_guo: boolean = false;
        public mk: number;



        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, is_js: boolean) {
            super(fc, mt, xz, mz);
            this.is_js = is_js;
            this.start_point = egret.Point.create(this.fc.position[0], this.fc.position[1]);
            this.y_jl = this.fc.position[1] - this.fc.toPoint.y;
            this.fc.damping = 0;
            this.fc.mass=1000;
            this.mk = egret.getTimer();
        }



        public doUpData(time: number) {
            if (egret.getTimer() - this.mk < 2000) {
                return;
            }
            super.doUpData(time);
            let x_li = 0;
            let y_li = -this.xs;

            let jl_y = this.start_point.y - this.fc.position[1];
            egret.log(jl_y + " -- " + this.fc.velocity[1] + " -- " + egret.getTimer() + " -- " + this.fc.damping)
            this.fc.force = [0, -2];


            // let sudu_cha: number = 0;
            // sudu_cha = Math.abs(Math.abs(this.fc.velocity[1]) - this.xs);

            // if (this.li_num > 0) {
            //     this.fc.force = [x_li, y_li];
            //     this.li_num--;
            // }

            // if (jl_y > this.y_jl && !this.is_guo) {

            //     this.is_guo = true;
            //     this.jian_num = Math.abs(Math.round(this.fc.velocity[1] / (0.06)));

            // }
            // if (jl_y > this.y_jl) {
            //     if (this.jian_num > 0) {
            //         this.fc.force = [x_li, 1];
            //         this.jian_num--;
            //     }
            // }

            // let jj_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);



        }
    }
}