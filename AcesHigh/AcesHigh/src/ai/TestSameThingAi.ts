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

        public add_num: number = 2;
        public lase_t: number = 0;

        public y20: number;



        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, time_: number) {
            super(fc, mt, xz, mz);
            this.start_point = egret.Point.create(this.fc.position[0], this.fc.position[1]);
            this.y_jl = this.fc.position[1] - this.fc.toPoint.y;
            this.fc.damping = 0;
            this.fc.mass = 1000;
            // this.fc.velocity = [0, -1];
            this.mk = egret.getTimer();
            this.y20 = this.y_jl * 0.2;

            // // s= vt*1.8 + a*1.8*tt/2*1.8

            //s*1.8=v*t
            let v = (this.y_jl - this.y20) * 1.8 / time_;


            egret.log("JJJJJJJJJJJJJJJJJJJJJJJJJ:" + this.y_jl)
        }



        public doUpData(time: number) {
            if (egret.getTimer() - this.mk < 2000) {
                return;
            }

            super.doUpData(time);
            let x_li = 0;
            let y_li = -this.xs;

            let jl_y = this.start_point.y - this.fc.position[1];
            if (this.add_num > 0) {
                this.fc.force = [0, -1];
                this.add_num--;
            }
            let now = egret.getTimer();
            egret.log(jl_y + " -- " + this.fc.velocity[1] + " -- " + egret.getTimer() + " -- " + this.fc.damping + " -- " + this.fc.mass + " ** " + (now - this.lase_t))
            this.lase_t = now;

            // this.fc.velocity = [0, -2];

            // 1.6739997863769531 -- - 1.7999992370605469 -- 4421 -- 0 -- 1000 

            //6.587993621826172 -- - 3.5999975204467773 -- 5421 -- 0 -- 1000

            //14.741992950439453 -- - 5.399995803833008 -- 6421 -- 0 -- 1000 

            // s= （vt*1.8 + a*1.8*tt/2）*1.8 

            // 8.16  13.07 


            //  let pi = 0;
            // if (this.fc.velocity[0] > 0) {
            //     pi = -1;
            // }

            // if (this.fc.velocity[0] < 0) {
            //     pi = 1;
            // }

            // if (Math.abs(this.fc.velocity[0]) > this.jian_su_li_pi) {
            //     this.force_x = this.jian_su_li * pi;
            //     return;
            // }
            // 
            // this.force_x = Math.abs(this.fc.velocity[0]) / this.jian_su_li_pi * pi;


        }
    }
}