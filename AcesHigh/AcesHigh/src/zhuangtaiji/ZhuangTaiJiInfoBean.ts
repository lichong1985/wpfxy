module zhuangtaiji {
    export class ZhuangTaiJiInfoBean {
        //目的地
        public pos: egret.Point;
        public mT: zhuangtaiji.ZT_TYPE;
        public mZ: zhuangtaiji.ZT_TYPE;
        public gjT: zhuangtaiji.ZT_TYPE;

        public mT_xs: number;
        public mZ_xs: number;
        public gjT_xs: number;

        public is_loop: boolean;
        public wate_time: number;

        constructor(pos: egret.Point, mT: zhuangtaiji.ZT_TYPE, mZ: zhuangtaiji.ZT_TYPE, gjT: zhuangtaiji.ZT_TYPE, mT_xs: number, mZ_xs: number, gjT_xs: number, is_loop: boolean, wate_time: number) {
            this.pos = pos;
            this.mT = mT;
            this.mZ = mZ;
            this.gjT = gjT;
            this.mT_xs = mT_xs;
            this.mZ_xs = mZ_xs;
            this.gjT_xs = gjT_xs;
        }
    }
}