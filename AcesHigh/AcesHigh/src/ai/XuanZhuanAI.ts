module ai {
    /**
     * 旋转ai
     */
    export class XuanZhuanAI extends AiBase {
        //旋转系数
        public xs: number;

        constructor(fc: feichuan.FeiChuanBase, xs: number, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE) {
            super(fc, mt, xz, mz);
            this.xs = xs;
        }

        public doUpData(time: number) {
            if (!this.hang_up) {
                super.doUpData(time)
                this.fc.angularVelocity = this.xs;
                egret.log("KKKKKKKKKK:" + this.fc.angle);
            }
        }
    }
}