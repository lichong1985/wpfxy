module feichuan {
    export class XiaoBing extends feichuan.FeiChuanBase {

        constructor(battle_scends: scene.SceneBase, addPoint: egret.Point, toPoint: egret.Point, jName: string) {
            super(battle_scends, addPoint, GameConstant.ZHEN_YING.DI_JUN);
            this.fc_type = feichuan.FC_TYPE.DIJI;
            this.initJson(jName);
            this.initTestFchuan();
            this.toPoint = Tools.egretTOp2(toPoint);
        }

        //做一个 飞船
        public initTestFchuan() {
            this.angularDamping = 0.6;
            this.mass = 100;
            this.damping = 0.5
        }
    }
}