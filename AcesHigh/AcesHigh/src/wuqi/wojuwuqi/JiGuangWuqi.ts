module wjwq {
    export class JiGuangWuqi extends wuqi.WuQiBase {
        public result = new p2.RaycastResult();
        public rayClosest = new p2.Ray({
            mode: p2.Ray.CLOSEST
        });
        public hitPoint = p2.vec2.create();

        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, fc: feichuan.FeiChuanBase, level: number) {
            super(mokaiPos, shType, "us_wq_4_png", wuqi.WUQI_TYPE.DAO_DAN, fc);
            this.level = level;
            this.cd = 2000;
            this.rayClosest.collisionGroup = GameConstant.WO_JUN_ZIDAN;
            this.rayClosest.collisionMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI;


        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            let p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            this.rayClosest.from = [p.x, p.y];
            this.rayClosest.to = [p.x, 80];
            this.rayClosest.update();
            this.result.reset();
            this.fc.battle_scene.world.raycast(this.result, this.rayClosest);

            this.result.getHitPoint(this.hitPoint, this.rayClosest);
            if (this.result.hasHit) {
                let dj = <feichuan.FeiChuanBase>this.result.body;
                let p = Tools.p2TOegretPoitn(egret.Point.create(this.hitPoint[0], this.hitPoint[1]));
                if (dj) {

                    dj.checkCollision(p.x, p.y, 1);
                } else {
                    p.y *= -1
                }
                let shp: egret.Shape = new egret.Shape();
                shp.graphics.lineStyle(10, 0xffff00);
                shp.graphics.moveTo(this.x, this.y);
                shp.graphics.lineTo(p.x, p.y);
                shp.graphics.endFill();
                shp.alpha = 0.5;
                this.fc.battle_scene.addChild(shp);
                let ff = this.fc

                egret.Tween.get(shp).to({ "alpha": 0.1 }, 600).call(this.removeXin, this, [shp]);

            }
        }

        //去掉激光线
        public removeXin(shp: egret.Shape) {
            if (shp.parent) {
                this.fc.battle_scene.removeChild(shp);
            }
        }


        //溅射伤害 
        public jianse() {

        }


    }
}