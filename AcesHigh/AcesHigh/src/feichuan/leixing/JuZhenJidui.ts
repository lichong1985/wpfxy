module feichuan {
    export class JuZhenJidui extends feichuan.FeiChuanBase {
        constructor(battle_scends: TestScene, info: feichuan.FeiChuanInfo, cs_pos: egret.Point, nan_du: number) {
            super(battle_scends, cs_pos, GameConstant.ZHEN_YING.DI_JUN, info.ti_ji, nan_du);
            this.fc_type = feichuan.FC_TYPE.DIJI;
            this.initJson(info);
            this.initTestFchuan();
        }

        //做一个 飞船
        public initTestFchuan() {
            this.angularDamping = 0;
            this.mass = this.W * this.H * 5;
            this.damping = 0;
        }
    }
}