module feichuan {
    export class XiaoBing extends feichuan.FeiChuanBase {

        constructor(battle_scends: scene.SceneBase, addPoint: egret.Point, toPoint: egret.Point, info: feichuan.FeiChuanInfo) {
            super(battle_scends, addPoint, GameConstant.ZHEN_YING.DI_JUN);
            this.fc_type = feichuan.FC_TYPE.DIJI;
            this.initJson(info);
            this.initTestFchuan();
            this.toPoint = Tools.gridTop2(toPoint.x, toPoint.y);
        }

        //做一个 飞船
        public initTestFchuan() {
            this.angularDamping = 0.6;
            this.mass = 100;
            this.damping = 0.5
        }
    }
}