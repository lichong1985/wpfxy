module test {
    export enum yuntu_type {
        nll = 0,//空
        hx = 1,//核心
        zj = 2//装甲
    }
    export class TestFeiChuan extends feichuan.FeiChuanBase {
        public yun_tu: number[][];

        public bit1: egret.Bitmap;
        public bit2: egret.Bitmap;
        public box1: p2.Box;
        public box2: p2.Box;
        constructor(battle_scene: scene.SceneBase) {
            super(battle_scene, egret.Point.create(1300, 1300), GameConstant.ZHEN_YING.DI_JUN)
            this.initTestFchuan();
            this.fc_type = feichuan.FC_TYPE.DIJI;
        }

        //做一个 飞船
        public initTestFchuan() {
            this.initYunTU();
            this.initPro(this.yun_tu);
            this.angle = Math.PI / 180 * 30;
            this.angularDamping = 0;
            // this.angularForce = 2;
            this.mass = 100;
        }



        //初始化云图
        public initYunTU() {
            this.yun_tu =
                [
                    [2, 2, 2, 2, 2, 2, 2],
                    [2, 0, 0, 2, 0, 0, 2],
                    [0, 0, 0, 2, 0, 0, 0],
                    [0, 2, 2, 2, 2, 2, 0],
                    [0, 2, 0, 2, 0, 2, 0],
                    [0, 2, 0, 1, 0, 2, 0],
                    [0, 2, 0, 2, 0, 2, 0],
                    [0, 2, 2, 2, 2, 2, 0],
                    [0, 0, 0, 2, 0, 0, 0],
                    [2, 0, 0, 2, 0, 0, 2],
                    [2, 2, 2, 2, 2, 2, 2],
                ]
        }

    }
}