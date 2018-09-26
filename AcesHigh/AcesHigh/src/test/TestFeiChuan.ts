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
            super(battle_scene, egret.Point.create(1200, 15), GameConstant.ZHEN_YING.DI_JUN, 1);

            this.fc_type = feichuan.FC_TYPE.DIJI;
            // this.initJson("6_1_json");
            this.initTestFchuan();
        }

        //做一个 飞船
        public initTestFchuan() {

            this.mass = 100;
            // this.addAI(new ai.KeepDistanceAI(this, 5));
            // this.addAI(new ai.ShiShiMiaoZhunAi(this));
            // let ps: Array<egret.Point> = new Array<egret.Point>();
            // ps.push(Tools.egretTOp2(egret.Point.create(15, 15)));
            // ps.push(Tools.egretTOp2(egret.Point.create(1700, 1700)));
            // this.addAI(new ai.MoveToAi(this, ps, true));
            // this.addAI(new ai.ZhuanXiang(this));
            // this.addAI(new ai.RandomPointAi(this, ai.RANDOM_POINT.all, 2));
        }

    }
}