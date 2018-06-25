module fjztj {
    export class XBZhuangtaiji extends FjZTJ {
        public fc: feichuan.FeiChuanBase;

        constructor(fc: feichuan.FeiChuanBase) {
            super();
            this.fc = fc;
            this.mT = zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING;
            this.xzT = zhuangtaiji.ZT_TYPE.NULL_T;
            this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
        }

        //进步器
        public upStep(time: number) {
            super.upStep(time);

            //检测移动状态并赋值 ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING) {
                if (!this.fc.moveAI) {
                    this.fc.moveAI = new ai.SingoMoveToAi(this.fc);
                }
            }

            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {
                if (!this.fc.moveAI || !(this.fc.moveAI instanceof ai.ZuoYouLuanDongAI)) {
                    // this.fc.moveAI = new ai.ZuoYouLuanDongAI(this.fc);
                }
            }
        }

    }
}