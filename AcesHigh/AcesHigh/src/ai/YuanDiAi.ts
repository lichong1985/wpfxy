module ai {
    //原地等待 ai
    export class YuanDiAi extends AiBase {
        public init_time: number = 0;
        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE, xs: number) {
            super(fc, mt, xz, mz);
            this.xs = xs;
            this.init_time = egret.getTimer();
        }

        //
        public doUpData(time: number) {
            if ((time - this.init_time) > this.xs * 1000) {
                this.upOver();
            }
            //vt =v0 + at*1.8

            let fx = -this.fc.velocity[0] / 1.8 / 0.5;
            let fy = -this.fc.velocity[1] / 1.8 / 0.5;

            // egret.log("HHHHHHHHHHHHHHH:" + fx + " -- " + fy);
            this.fc.force = [fx, fy];

        }
    }
}