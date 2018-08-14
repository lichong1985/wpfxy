module ai {
    /**
     * 旋转ai
     */
    export class XuanZhuanAI extends AiBase {
        //旋转系数
        public xs: number;
        //旋转时针方向
        public shi_zhen: number;

        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE) {
            super(fc, mt, xz, mz);
        }

        public doUpData(time: number) {
            if (!this.hang_up) {
                super.doUpData(time)
                this.fc.angularVelocity = this.xs;

            }
        }
    }
}