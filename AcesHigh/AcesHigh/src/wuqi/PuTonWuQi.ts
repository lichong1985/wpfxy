module wuqi {
    export class PuTongDan extends wuqi.WuQiBase {
        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, name: string, wuqii_type: WUQI_TYPE, fc: feichuan.FeiChuanBase) {
            super(mokaiPos, shType, name, wuqii_type, fc)
        }

        public fashe(angel: number) {
            super.fashe(angel)
            let zd: zidan.PuTongZiDan = new zidan.PuTongZiDan(GameConstant.ZHEN_YING.WO_JUN, 0.0001);
            let p: egret.Point = Tools.egretTOp2(egret.Point.create(this.x, this.y))
            zd.position[0] = p.x;
            zd.position[1] = p.y;

            let rx = Math.cos(this.fc.angle) * 0 + Math.sin(this.fc.angle) * this.sudu;
            let ry = -Math.sin(this.fc.angle) * 0 + Math.cos(this.fc.angle) * this.sudu;

            this.fc.battle_scene.world.addBody(zd);
            this.fc.battle_scene.addChild(zd.bitmap);
            zd.velocity = [rx, ry];
        }
    }
}