module fjztj {
    //飞机状态机
    export class FjZTJ extends zhuangtaiji.ZhuangTaiJiBase {
        public fc: feichuan.FeiChuanBase;
        constructor() {
            super();
        }

        //进步器
        public upStep(time: number) {
            super.upStep(time);
        }
    }
}