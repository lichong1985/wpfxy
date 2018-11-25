module wjwq {
    export class JiGuangWuqi extends wuqi.WuQiBase {
        public result = new p2.RaycastResult();

        //射线宽度
        public kuan: number = 10;
        public kuan_mark: number = 0;
        public kuan_more: number = 20;
        //激光标记次数
        public hit_mark: number = 0;
        public is_hit: boolean = false
        public shp: egret.Shape = new egret.Shape();
        public rayClosest = new p2.Ray({
            mode: p2.Ray.CLOSEST
        });
        public hitPoint = p2.vec2.create();

        public dj: feichuan.FeiChuanBase = null;
        public egP: egret.Point = null;

        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, fc: feichuan.FeiChuanBase, level: number) {
            super(mokaiPos, shType, "us_wq_4", wuqi.WUQI_TYPE.DAO_DAN, fc);
            this.level = level;
            this.cd = 2000;
            this.rayClosest.collisionGroup = GameConstant.WO_JUN_ZIDAN;
            this.rayClosest.collisionMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI;


        }

        public updata() {
            //攻击
            if (this.hit_mark > 0 && this.kuan_mark <= 0) {

                this.kuan_mark = 0;
                this.huizhikd(5, 0x23FF49, 0.5);
              

                if (this.dj && this.egP && !this.is_hit) {

                    this.dj.checkCollision(this.egP.x, this.egP.y, this.hit);
                    this.dj = null;
                    this.egP = null;
                }
                this.is_hit = true;
                //清理
                egret.Tween.get(this.shp).to({ "alpha": 0.1 }, 600).call(this.clear, this);
                this.hit_mark = 0;
            }


            if (this.kuan_mark <= 0) {
                if (this.shp.parent && !this.is_hit) {
                    this.fc.battle_scene.removeChild(this.shp);
                }
                return;
            }

            let pi = this.kuan_mark / this.kuan_more;

            this.huizhikd(this.kuan * pi, 0x23FF49, 0.5);

            this.kuan_mark--;

        }

        //射击
        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            super.fashe(angel, suke, now);
            this.fc.battle_scene.addChild(this.shp);
            this.kuan_mark = this.kuan_more;
            this.is_hit = false;
            this.hit_mark = 0;
        }

        // 宽度  颜色  透明度
        public huizhikd(kd: number, color: number, alpha: number) {
            // 计算碰撞点
            let p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            let angle: number = this.fc.angle
            let sx = Math.sin(angle) * 20;
            let sy = Math.cos(angle) * 20;
            // sy = sy * -1;
            //无碰撞目标点
            let pTo = egret.Point.create(p.x + sx, p.y + sy);
            this.rayClosest.from = [p.x, p.y];
            this.rayClosest.to = [p.x + sx, p.y + sy];


            this.rayClosest.update();
            this.result.reset();
            this.fc.battle_scene.world.raycast(this.result, this.rayClosest);
            this.result.getHitPoint(this.hitPoint, this.rayClosest);


            // 2画线


            if (this.result.hasHit) {

                this.dj = <feichuan.FeiChuanBase>this.result.body;
                if (this.dj) {
                    this.egP = Tools.p2TOegretPoitn(egret.Point.create(this.hitPoint[0], this.hitPoint[1]));
                    this.hit_mark++;
                } else {
                    this.egP = Tools.p2TOegretPoitn(pTo)
                    this.hit_mark = 0;
                }
            }


            //清理
            this.shp.graphics.clear();
            //重绘
            this.shp.graphics.lineStyle(kd, color);
            this.shp.graphics.moveTo(this.x, this.y);

            this.shp.graphics.lineTo(this.egP.x, this.egP.y);
            this.shp.graphics.endFill();
            this.shp.alpha = alpha;

        }

        public clear() {
            if (!this.shp) {
                return;
            }
            this.shp.graphics.clear();
            if (this.shp.parent)
                this.fc.battle_scene.removeChild(this.shp);

            this.is_hit = false;
        }

        public remove_() {
            if (!this.shp) {
                return;
            }
            this.shp.graphics.clear();
            if (this.shp.parent)
                this.fc.battle_scene.removeChild(this.shp);

            this.is_hit = false;
            this.shp = null;
        }

        // public fashe(angel: number, suke: shuke.ShuKe, now: number) {
        //     super.fashe(angel, suke, now);
        //     let p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
        //     this.rayClosest.from = [p.x, p.y];
        //     this.rayClosest.to = [p.x, 80];
        //     this.rayClosest.update();
        //     this.result.reset();
        //     this.fc.battle_scene.world.raycast(this.result, this.rayClosest);


        //     this.result.getHitPoint(this.hitPoint, this.rayClosest);
        //     if (this.result.hasHit) {

        //         let dj = <feichuan.FeiChuanBase>this.result.body;
        //         let p = Tools.p2TOegretPoitn(egret.Point.create(this.hitPoint[0], this.hitPoint[1]));
        //         if (dj) {
        //             dj.checkCollision(p.x, p.y, this.hit);
        //         } else {
        //             p.y *= -1
        //         }
        //         this.shp = new egret.Shape();
        //         this.shp.graphics.lineStyle(10, 0x23FF49);
        //         this.shp.graphics.moveTo(this.x, this.y);
        //         this.shp.graphics.lineTo(p.x, p.y);
        //         this.shp.graphics.endFill();
        //         this.shp.alpha = 0.5;


        //         this.fc.battle_scene.addChild(this.shp);
        //         let ff = this.fc

        //         egret.Tween.get(this.shp).to({ "alpha": 0.1 }, 600).call(this.removeXin, this);

        //     }
        // }

        // // //去掉激光线
        // public removeXin() {
        //     if (this.shp.parent) {
        //         this.fc.battle_scene.removeChild(this.shp);
        //     }
        //     this.shp = null;
        // }


        // //溅射伤害 
        // public jianse() {

        // }


    }
}