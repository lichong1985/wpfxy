module wjwq {
    export class JiGuangWuqi extends wuqi.WuQiBase {
        public result = new p2.RaycastResult();
        public rayClosest = new p2.Ray({
            mode: p2.Ray.ANY
        });

        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, fc: feichuan.FeiChuanBase, level: number) {
            super(mokaiPos, shType, "us_wq_3_png", wuqi.WUQI_TYPE.DAO_DAN, fc);
            this.level = level;
            this.cd = 150;

        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            let p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            this.rayClosest.from = [p.x, p.y];
            this.rayClosest.to = [p.x, 80];
            this.rayClosest.update();
            this.result.reset();
            this.fc.battle_scene.world.raycast(this.result, this.rayClosest);

            
        }


    }
}