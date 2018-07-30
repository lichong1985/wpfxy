module zhuangtaiji {
    export enum ZT_TYPE {
        SINGO_MOVE_ING,//简单移动
        SINGO_MOVE_OVER,//简单移动结束
        ZUO_YOU_MOVE,//左右移动
        MOVE_OVER,//移动结束
        XUAN_ZHUAN,//旋转状态
        XUAN_ZHUAN_OVER,//旋转结束
        MIAO_ZHUN,//瞄准状态
        MIAO_ZHUN_OVER,//瞄准结束 
        NULL_T,//空状态

    }

    export class ZhuangTaiJiBase {
        /**
         * 时间标记
         */
        public markTime: number;
        //移动状态
        public mT: ZT_TYPE;

        //旋转状态
        public xzT: ZT_TYPE;

        //瞄准状态
        public mzT: ZT_TYPE;

        public sleep_long: number;

        constructor() {

        }
        //进步器
        public upStep(time: number) {
            this.markTime = time;
        }
        //休眠
        public sleep(t: number) {
            this.sleep_long = this.markTime + t;
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