module fjztj {
    export class JuZhenZTJ extends FjZTJ {
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
            //休眠判定
            if (this.isSleep()) {
                return;
            }

            //检测移动状态并赋值 ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING) {
                if (!this.fc.moveAI) {
                    this.fc.moveAI = new ai.TaiKongSingoMoveAi(this.fc, zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                }
            }

            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.fc.moveAI = null;

            }
        }
    }
}