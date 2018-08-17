module ai {
    export class TKXZZuiZhongAi extends AiBase {

        public time_: number;
        //xy方向 达成标记
        public da_cheng_x: boolean;
        public da_cheng_y: boolean;


        // xy 方向 类型  0 无状态  1:减速到0 2:计算速度
        public x_type: number;
        public y_type: number;


        //力矩方向
        public x_pi: number;
        public y_pi: number;

        //纪录 初速度
        public c_v_x: number;
        public c_v_y: number;

        //下一个 pos 
        public next_pos: egret.Point;

        // 加速时间  
        public jia_su_time: number = 500;

        //加速次数
        public add_su_num: number = 20;






        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, run_time: number, time_: number, next_pos: egret.Point) {
            super(fc, mt, xz, mz);
            this.time_ = time_;
            this.next_pos = next_pos;

            
            // // s= vt*1.8 + a*1.8*tt/2*1.8\
            //s*1.8=v*t;

        }



      




        public doUpData(time: number) {

            super.doUpData(time);
            //----------------------------------------------------
            this.fc.force = [0, 0];
            //----------------达成阶段--------------

            //判断是否到达目的地 并修改状态
            if (this.da_cheng_x && this.da_cheng_y) {
                this.upOver();
                return;
            }

        }
    }
}