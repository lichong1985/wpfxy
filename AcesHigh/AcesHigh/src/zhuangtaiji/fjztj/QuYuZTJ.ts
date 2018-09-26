module fjztj {
    //区域瞄准状态机
    export class QuYuZTJ extends FjZTJ {



        constructor(fc: feichuan.FeiChuanBase) {
            super();
            this.fc = fc;
            this.mT = zhuangtaiji.ZT_TYPE.NULL_T;
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



            //------------------------------------------------简单移动------------------------------------------------------
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING) {
                if (this.fc.moveAI == null) {
                    this.fc.moveAI = new ai.TKZXSINGOAI(this.fc, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, this.info.mT_run_time, this.info.move_time, this.info.mT_xs);
                    // this.fc.moveAI.xs = this.info.mT_xs;
                    this.fc.moveAI.init();
                }
            }

            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {
                this.fc.moveAI = null;
                this.nextStep(this.info.sleep_time);

            }

            //-----------------------------------------------减速移动--------------------------------------

            if (this.mT == zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING) {
                if (this.fc.moveAI == null) {
                    this.fc.moveAI = new ai.testAi(this.fc, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, this.info.mT_run_time, this.info.move_time, this.info.mT_xs);
                    // this.fc.moveAI.xs = this.info.mT_xs;
                    this.fc.moveAI.init();
                }
            }

            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_OVER) {
                this.fc.moveAI = null;
                this.nextStep(this.info.sleep_time);

            }

            //-----------------------------------原地等待----------------------------------------
            if (this.mT == zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING) {
                if (this.fc.moveAI == null) {
                    this.fc.moveAI = new ai.YuanDiAi(this.fc, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, this.info.mT_xs);
                }
            }
            if (this.mT == zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_OVER) {
                this.fc.moveAI = null;
                this.nextStep(this.info.sleep_time);
            }

            //--------------------------------------------------------------------------------

            //------------------------------保持瞄准sk--------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK) {
                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.MiaoZhun(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }

            if (this.mzT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER) {
                //瞄准结束
            }
            //------------------------------运动导航--------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING) {

                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.DaoHuangAi(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }
            //------------------------------导航--------------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.DAO_HANG) {
                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.DaoHuangAi(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.DAO_HANG_OVER, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }

            if (this.mzT == zhuangtaiji.ZT_TYPE.DAO_HANG_OVER) {
                this.fc.mzAI = null;
                this.nextStep(this.info.sleep_time);

            }

            //----------------------------旋转-----------------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN) {
                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.XuanZhuanAI(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_OVER, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }

            //-------------------------正下方--------------------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING) {
                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.ZhengXiaFangAi(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_OVER, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }


            //-------------------普通武器射击---------------------------------
            if (this.gjT == zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING) {
                if (this.fc.gjAI == null) {
                    this.fc.gjAI = new ai.PuTongWuqiAi(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_OVER, zhuangtaiji.ZT_TYPE.NO_THING, this.info.gjT_xs);
                }
            }

            //停止射击
            if (this.gjT == zhuangtaiji.ZT_TYPE.STOP_SHOOT_NOW) {
                this.fc.gjAI = null;
            }

            //------------------滑行------------------------
            if (this.mT == zhuangtaiji.ZT_TYPE.HUA_XING_ING) {
                if (this.fc.moveAI == null) {
                    this.fc.moveAI = new ai.HuaXingAi(this.fc, zhuangtaiji.ZT_TYPE.HUA_XING_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, this.info.mT_xs);
                }
            }

            if (this.mT == zhuangtaiji.ZT_TYPE.HUA_XING_OVER) {
                this.fc.moveAI = null;
                this.nextStep(this.info.sleep_time);
            }

            //----------------旋转减速---------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING) {
                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.XuanZhuanJian(this.fc, this.info.mZ_xs);
                }
            }

        }

    }
}