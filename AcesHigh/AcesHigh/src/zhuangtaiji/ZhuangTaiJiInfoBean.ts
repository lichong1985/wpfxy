module zhuangtaiji {
    export class ZhuangTaiJiInfoBean {
        //目的地
        public pos: egret.Point;
        //三种ai类型
        public mT: zhuangtaiji.ZT_TYPE;
        public mZ: zhuangtaiji.ZT_TYPE;
        public gjT: zhuangtaiji.ZT_TYPE;
        //三种ai的系数
        public mT_xs: number;
        public mZ_xs: number;
        public gjT_xs: WuQiAiInfo[];

        //当前回合休结束后眠时间
        public sleep_time: number;

        //速度阻尼
        public zn: number;

        //移动ai 执行时间
        public mT_run_time: number;

        public mb: string;

        //加速度 时间
        public move_time: number;

        //是否参与循环
        public is_loop: boolean = true;


        //目标坐标  三种状态机类型 以及参数 达成成后休眠时间  
        constructor(pos: egret.Point, mT: zhuangtaiji.ZT_TYPE, mZ: zhuangtaiji.ZT_TYPE, gjT: zhuangtaiji.ZT_TYPE, mT_xs: number, mZ_xs: number, gjT_xs: WuQiAiInfo[], move_time: number, sleep_time: number, mb: string, is_loop?: boolean) {

            this.pos = Tools.gridTop2(pos.x, pos.y);

            this.mT = mT;
            this.mZ = mZ;
            this.gjT = gjT;
            this.mT_xs = mT_xs;
            this.mZ_xs = mZ_xs;
            this.gjT_xs = gjT_xs;

            this.move_time = move_time;
            this.sleep_time = sleep_time;
            this.mb = mb;
            if (is_loop) {
                this.is_loop = false;
            } else {
                this.is_loop = true;
            }


        }
    }
}