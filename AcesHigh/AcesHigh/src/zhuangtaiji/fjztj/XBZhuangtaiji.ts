module fjztj {
    export class XBZhuangtaiji extends FjZTJ {

        // 是否到达目的地
        public is_Tirget: boolean = false;
        //瞄准攻击 开始时间标记
        public miao_zhun_mark: number = 0;
        //瞄准攻击时间限制
        public miao_zhun_limit: number = 15 * 1000;

        constructor(fc: feichuan.FeiChuanBase) {
            super();
            this.fc = fc;
            this.mT = zhuangtaiji.ZT_TYPE.DAO_HANG;
            this.gjT = zhuangtaiji.ZT_TYPE.NULL_T;
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
                    this.fc.moveAI = new ai.TaiKongSingoMoveAi(this.fc, zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, -1);
                }
            }

            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK;
                this.fc.moveAI = null;
                this.miao_zhun_mark = egret.getTimer();
            }

            //旋转类
            if (this.mT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN) {

            }

            //旋转结束
            if (this.mT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_OVER) {

            }

            //瞄准
            if (this.mT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK) {
                if (!this.fc.mzAI) {
                    this.fc.mzAI = new ai.MiaoZhun(this.fc, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                }
                //瞄准时间到了
                if ((egret.getTimer() - this.miao_zhun_mark) > this.miao_zhun_limit) {
                    this.mT = zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER;
                }

            }
            //瞄准结束
            if (this.mT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.DAO_HANG;
                this.fc.mzAI = null;
            }

            //导航开始
            if (this.mT == zhuangtaiji.ZT_TYPE.DAO_HANG) {
                if (!this.fc.mzAI) {
                    this.fc.reLoadToPoint(suiji.randomTargetPos_simple());
                    this.fc.mzAI = new ai.DaoHuangAi(this.fc, zhuangtaiji.ZT_TYPE.DAO_HANG_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                }


            }
            //导航结束
            if (this.mT == zhuangtaiji.ZT_TYPE.DAO_HANG_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING;
                this.fc.mzAI = null;
            }
        }

    }
}