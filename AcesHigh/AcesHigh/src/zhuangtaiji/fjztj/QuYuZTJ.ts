module fjztj {
    //区域瞄准状态机
    export class QuYuZTJ extends FjZTJ {



        constructor(fc: feichuan.FeiChuanBase) {
            super();
            this.fc = fc;
            this.mT = zhuangtaiji.ZT_TYPE.NO_THING;
            this.gjT = zhuangtaiji.ZT_TYPE.NULL_T;
            this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
        }

        public nextTick() {

        }

        //进步器
        public upStep(time: number) {
            super.upStep(time);
            //休眠判定
            if (this.isSleep()) {
                return;
            }

            //------------------------------------------------移动------------------------------------------------------
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING) {
                if (this.fc.moveAI == null) {
                    this.fc.moveAI = new ai.TaiKongSingoMoveAi(this.fc, zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.moveAI.xs = this.info.mT_xs;
                }
            }

            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {
                this.fc.moveAI = null;
                this.nextStep();
            }



            //------------------------------保持瞄准sk--------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK) {
                if (this.mzT == null) {
                    this.fc.mzAI = new ai.MiaoZhun(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }

            if (this.mzT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER) {
                //瞄准结束
            }

            //------------------------------导航--------------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.DAO_HANG) {
                if (this.mzT == null) {
                    this.fc.mzAI = new ai.DaoHuangAi(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.DAO_HANG_OVER, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }

            if (this.mzT == zhuangtaiji.ZT_TYPE.DAO_HANG_OVER) {
                if (this.mT == zhuangtaiji.ZT_TYPE.NULL_T) {
                    this.nextStep();
                }
            }

            //----------------------------旋转-----------------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN) {
                if (this.mzT == null) {
                    this.fc.mzAI = new ai.XuanZhuanAI(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.DAO_HANG_OVER, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }

        }

    }
}