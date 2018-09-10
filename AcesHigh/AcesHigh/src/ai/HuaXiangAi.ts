module ai {
    export class HuaXingAi extends AiBase {
        public mark: number = 0;
        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, gj: zhuangtaiji.ZT_TYPE, xs: number) {
            super(fc, mt, mz, gj);
            this.xs = xs;
            this.mark = egret.getTimer();
            this.fc.angularDamping = 0.5;
        }

        public doUpData(time: number) {
            // if (egret.getTimer() - this.mark > this.xs * 1000) {
            //     this.upOver();
            //     this.fc.angularDamping = 0;
            // }
        }
    }
}