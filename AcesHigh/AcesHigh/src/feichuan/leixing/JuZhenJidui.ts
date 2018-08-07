module feichuan {
    export class JuZhenJidui extends feichuan.FeiChuanBase {
        constructor(battle_scends: scene.SceneBase, info: feichuan.FeiChuanInfo, cs_pos: egret.Point, to_pos: egret.Point) {
            super(battle_scends, cs_pos, GameConstant.ZHEN_YING.DI_JUN);
            this.fc_type = feichuan.FC_TYPE.DIJI;
            this.initJson(info);
            this.initTestFchuan();
            this.toPoint = Tools.gridTop2(to_pos.x, to_pos.y);
            this.ztj = new fjztj.JuZhenZTJ(this);

        }

        //做一个 飞船
        public initTestFchuan() {
            this.angularDamping = 0;
            this.mass = this.W * this.H * 5;
            this.damping = 0;
        }
    }
}