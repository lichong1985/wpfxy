module zhuangtaiji {
    export enum ZT_TYPE {
        SINGO_MOVE_ING,//简单移动
        SINGO_MOVE_OVER,//简单移动结束
        ZUO_YOU_MOVE,//左右移动
        MOVE_OVER,//移动结束
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


        constructor() {

        }
        //进步器
        public upStep(time: number) {

        }
    }
}