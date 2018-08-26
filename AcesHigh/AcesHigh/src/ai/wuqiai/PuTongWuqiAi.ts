module ai {
    export class PuTongWuqiAi extends AiBase {
        public wuqiInfo: zhuangtaiji.WuQiAiInfo[];


        //射几次数标记


        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, wuqiInfo: zhuangtaiji.WuQiAiInfo[]) {
            super(fc, mt, xz, mz);
            this.wuqiInfo = wuqiInfo;
        }

        public doUpData(time: number) {


            super.doUpData(time);
            // let size = this.wuqiInfo.length;
            for (let info of this.wuqiInfo) {
                if ((time - info.da_ge_mark) > info.da_jian_ge && info.da_num_mark < info.da_num) {
                    //目标达成结束
                    if (info.da_num_mark <= info.da_num) {
                        info.is_xiao = true;
                    }

                    info.da_ge_mark = time;
                    info.da_num_mark++;
                }

                this.sheji(time, info);
            }





        }

        //射击
        public sheji(time: number, info: zhuangtaiji.WuQiAiInfo) {

            if (info.xiao_num_mark >= info.xiao_num) {
                info.is_xiao = false;
                info.xiao_num_mark = 0;
            }

            let wuqiList: Array<wuqi.WuQiBase>;
            if (info.wq_type == 1) {
                wuqiList = this.fc.pt1_wuqiList;
            }

            if (info.wq_type == 16) {
                wuqiList = this.fc.pth_wuqiList;
            }

            if (info.wq_type == 2) {
                wuqiList = this.fc.jg1_wuqiList;
            }

            if (info.wq_type == 3) {
                wuqiList = this.fc.gz1_wuqiList;
            }

            if (info.wq_type == 4) {
                wuqiList = this.fc.js1_wuqiList;
            }
            if (info.wq_type == 5) {
                wuqiList = this.fc.sd1_wuqiList;
            }


            if ((time - info.xiao_ge_mark) > info.xiao_jian_ge && info.xiao_num_mark < info.xiao_num && info.is_xiao) {

                //射击
                for (let w of wuqiList) {
                    //发射
                    w.sudu = info.she_su;
                    w.fashe(null, null, time);
                }
                info.xiao_num_mark++;
                info.xiao_ge_mark = time;
            }
        }
    }
}