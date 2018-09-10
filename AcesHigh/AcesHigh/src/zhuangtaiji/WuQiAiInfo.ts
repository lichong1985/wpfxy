module zhuangtaiji {
    export class WuQiAiInfo {
        //大的波次
        public da_num: number;
        //大的间隔
        public da_jian_ge: number;

        public xiao_num: number;
        public xiao_jian_ge: number;

        //余数 是速度  除数是 延时发射的 时间 例： 505  延时 o.5秒 速度 5
        public she_su: number;

        public da_ge_mark: number;
        public xiao_ge_mark: number;

        public da_num_mark: number = 0;
        public xiao_num_mark: number = 0;

        public is_xiao: boolean = false;

        // 1 2 3个档次 小 中 大  大小跟难度相关 之后 做转换
        public zi_dan_da_xiao: number = 2;
        //跟子弹威力相关 跟子弹威力系数想关
        public nan_du: number = 0;

        //延迟
        public yan_chi: number = 0;

        //1 普通 2 激光  3 跟踪 4 变速  5 散弹
        public wq_type: number;
        constructor(da_num: number, da_jian_ge: number, xiao_num: number, xiao_jian_ge: number, she_su: number, wq_type: number, nan_du?: number) {
            this.da_num = da_num;
            this.da_jian_ge = da_jian_ge;
            this.xiao_num = xiao_num;
            this.xiao_jian_ge = xiao_jian_ge;
            this.she_su = she_su % 100;
            this.wq_type = wq_type;
            this.da_ge_mark = egret.getTimer() + (she_su - this.she_su);
            this.yan_chi = (she_su - this.she_su);
            this.xiao_ge_mark = egret.getTimer();
            if (nan_du) {
                this.nan_du = nan_du
            }

        }


        //重新设置cd
        public initCD() {
            this.da_ge_mark = egret.getTimer() - this.da_jian_ge + this.yan_chi;
            this.da_num_mark = 0;
            this.xiao_num_mark = 0;
        }
    }
}