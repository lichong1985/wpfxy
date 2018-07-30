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
            //休眠判定
            if (this.isSleep()) {
                return;
            }

            //检测移动状态并赋值 ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING) {
                if (!this.fc.moveAI) {
                    this.fc.moveAI = new ai.TaiKongSingoMoveAi(this.fc);
                }
            }

            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {


                //随机新的 target

                this.fc.reLoadToPoint(suiji.randomTargetPos_simple());
                this.mT = zhuangtaiji.ZT_TYPE.MIAO_ZHUN;
                this.fc.moveAI = null;
                // this.sleep(5 * 1000);
            }

            //旋转类
            if (this.mT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN) {

            }

            //旋转结束
            if (this.mT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_OVER) {

            }

            //瞄准
            if (this.mT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN) {
                if (!this.fc.mzAI) {
                    this.fc.mzAI = new ai.DaoHuangAi(this.fc);
                    egret.log("添加 瞄准")
                }

            }
            //瞄准结束
            if (this.mT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING;
                this.fc.mzAI = null;
            }

        }

    }
}