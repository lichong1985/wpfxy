module zhuangtaiji {
    export enum ZT_TYPE {
        SINGO_MOVE_ING,//简单移动
        SINGO_MOVE_OVER,//简单移动结束
        JIAN_SI_MOVE_ING,//减速移动中
        JIAN_SI_MOVE_OVER,//减速移动结束
        XUAN_ZHUAN,//旋转状态
        XUAN_ZHUAN_OVER,//旋转结束
        MIAO_ZHUN_SK,//瞄准舒克
        MIAO_ZHUN_SK_OVER,//瞄准结束
        DAO_HANG,//导航
        DAO_HANG_OVER,//导航结束 
        PU_TONG_GONG_JI,    //普通攻击状态
        PU_TONG_GONG_JI_OVER,//普通攻击结束
        NULL_T,//空状态
        NO_THING,// 不做任何改变

    }

    export class ZhuangTaiJiBase {
        /**
         * 时间标记
         */
        public markTime: number;
        //移动状态
        public mT: ZT_TYPE;

        //攻击状态
        public gjT: ZT_TYPE;

        //瞄准状态
        public mzT: ZT_TYPE;

        public sleep_long: number;

        constructor() {

        }
        //进步器
        public upStep(time: number) {
            this.markTime = time;
        }
        //休眠 单位秒
        public sleep(t: number) {
            this.sleep_long = this.markTime + t * 1000;
        }

        //判断是否是休眠状态
        public isSleep(): boolean {
            if (this.markTime < this.sleep_long) {
                return true;
            }
            return false;
        }
    }
}