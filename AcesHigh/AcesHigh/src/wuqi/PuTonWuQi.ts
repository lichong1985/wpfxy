module wuqi {
    export class PuTongDan extends wuqi.WuQiBase {
        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, name: string, wuqii_type: WUQI_TYPE, fc: feichuan.FeiChuanBase) {
            super(mokaiPos, shType, name, wuqii_type, fc)
            this.cd = 500;
        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            super.fashe(angel, suke, now)
            let zd: zidan.PuTongZiDan = new zidan.PuTongZiDan(this.fc.battle_scene,GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0.0001);
            let p: egret.Point = Tools.egretTOp2(egret.Point.create(this.x, this.y))
            zd.position[0] = p.x;
            zd.position[1] = p.y;

            //画 重点
            let rx = Math.cos(this.fc.angle) * 0 + Math.sin(this.fc.angle) * this.sudu;
            let ry = -Math.sin(this.fc.angle) * 0 + Math.cos(this.fc.angle) * this.sudu;

            this.fc.battle_scene.world.addBody(zd);
            this.fc.battle_scene.addChild(zd.bitmap);
            zd.velocity = [rx, ry];
        }
    }
}