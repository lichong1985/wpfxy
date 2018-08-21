module ai {
    export class PuTongWuqiAi extends AiBase {
        public wuqiInfo: zhuangtaiji.WuQiAiInfo;
        //大间隔标记
        public da_ge_mark: number = 0;
        //小间隔标记
        public xiao_ge_mark: number = 0;

        //射几次数标记
        public da_num_mark: number = 0;
        public xiao_num_mark: number = 0;

        public is_xiao: boolean = false;

        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, wuqiInfo: zhuangtaiji.WuQiAiInfo) {
            super(fc, mt, xz, mz);
            this.wuqiInfo = wuqiInfo;
            // this.da_ge_mark = egret.getTimer();
            // this.xiao_ge_mark = egret.getTimer();
        }

        public doUpData(time: number) {


            super.doUpData(time);

            if ((time - this.da_ge_mark) > this.wuqiInfo.da_jian_ge && this.da_num_mark < this.wuqiInfo.da_num) {
                //目标达成结束
                if (this.da_num_mark <= this.wuqiInfo.da_num) {
                    this.is_xiao = true;
                }

                this.da_ge_mark = time;
                this.da_num_mark++;
            }

            this.sheji(time);

        }

        //射击
        public sheji(time: number) {

            if (this.xiao_num_mark >= this.wuqiInfo.xiao_num) {
                this.is_xiao = false;
                this.xiao_num_mark = 0;
            }
            // egret.log((time - this.xiao_ge_mark) + " -- " + this.xiao_num_mark + " -- " + this.is_xiao + " -- " + this.wuqiInfo.xiao_jian_ge + " -- " + this.da_num_mark)

            if ((time - this.xiao_ge_mark) > this.wuqiInfo.xiao_jian_ge && this.xiao_num_mark < this.wuqiInfo.xiao_num && this.is_xiao) {
                //射击
                for (let w of this.fc.pt_wuqiList) {
                    //发射
                    w.sudu = this.wuqiInfo.she_su;
                    w.fashe(null, null, time);
                }
                this.xiao_num_mark++;
                this.xiao_ge_mark = time;
            }
        }
    }
}