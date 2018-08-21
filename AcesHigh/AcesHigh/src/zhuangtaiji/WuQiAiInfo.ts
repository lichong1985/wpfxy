module zhuangtaiji {
    export class WuQiAiInfo {
        //大的波次
        public da_num: number;
        //大的间隔
        public da_jian_ge: number;

        public xiao_num: number;
        public xiao_jian_ge: number;

        public she_su: number;
        constructor(da_num: number, da_jian_ge: number, xiao_num: number, xiao_jian_ge: number, she_su: number) {
            this.da_num = da_num;
            this.da_jian_ge = da_jian_ge;
            this.xiao_num = xiao_num;
            this.xiao_jian_ge = xiao_jian_ge;
            this.she_su = she_su;

        }
    }
}