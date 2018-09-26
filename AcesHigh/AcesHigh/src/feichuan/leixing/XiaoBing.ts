module feichuan {
    export class XiaoBing extends feichuan.FeiChuanBase {

        constructor(battle_scends: scene.SceneBase, info: feichuan.FeiChuanInfo) {
            egret.log("XXXXXXXXXXXBBBBBBBBBBBBBBBBBBB:" + info.width * info.height)
            super(battle_scends, info.chu_sheng_pos, GameConstant.ZHEN_YING.DI_JUN, info.width * info.height);
            this.fc_type = feichuan.FC_TYPE.DIJI;
            this.initJson(info);
            this.initTestFchuan();
            this.toPoint = Tools.gridTop2(info.target_pos.x, info.target_pos.y);

            this.ztj = new fjztj.XBZhuangtaiji(this);

        }

        //做一个 飞船
        public initTestFchuan() {
            this.angularDamping = 0;
            this.mass = this.W * this.H * 5;
            this.damping = 0;
        }
    }
}