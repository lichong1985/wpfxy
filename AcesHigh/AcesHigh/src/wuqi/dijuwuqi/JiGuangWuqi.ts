module djwq {
    enum JG_TYPE {
        WU,//无状态
        ZHAO,//照射状态
        GONG,//攻击状态 
        TIAO_ZHENG,//调整状态
    }
    //直射类武器
    export class JiGuangWuqi extends DJWQBase {
        public result = new p2.RaycastResult();
        public rayClosest = new p2.Ray({
            mode: p2.Ray.CLOSEST
        });
        public hitPoint = p2.vec2.create();

        //射线宽度
        public kuan: number = 10;
        public kuan_mark: number = 0;
        public kuan_more: number = 20;
        //激光标记次数
        public hit_mark: number = 0;
        public is_hit: boolean = false
        public shp: egret.Shape = new egret.Shape();

        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.JI_GUANG);
            this.rayClosest.collisionGroup = GameConstant.DI_JUN_ZIDAN;
            this.rayClosest.collisionMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI;

        }

        public updata() {
            //攻击
            if (this.hit_mark > 0 && this.kuan_mark <= 0) {
                this.is_hit = true;
                this.kuan_mark = 0;
                this.huizhikd(5, 0xffff00, 0.5);
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

            this.huizhikd(this.kuan * pi, 0xffff00, 0.5);

            this.kuan_mark--;

        }

        //射击
        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
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
            let pTo = egret.Point.create(p.x + sx, p.y - sy);
            this.rayClosest.from = [p.x, p.y];
            this.rayClosest.to = [p.x + sx, p.y - sy];


            this.rayClosest.update();
            this.result.reset();
            this.fc.battle_scene.world.raycast(this.result, this.rayClosest);
            this.result.getHitPoint(this.hitPoint, this.rayClosest);


            // 2画线

            let egP: egret.Point;
            if (this.result.hasHit) {
                let dj = <feichuan.FeiChuanBase>this.result.body;
                if (dj) {
                    egP = Tools.p2TOegretPoitn(egret.Point.create(this.hitPoint[0], this.hitPoint[1]));
                    this.hit_mark++;
                } else {
                    egP = Tools.p2TOegretPoitn(pTo)
                    this.hit_mark = 0;
                }
            }


            //清理
            this.shp.graphics.clear();
            //重绘
            this.shp.graphics.lineStyle(kd, color);
            this.shp.graphics.moveTo(this.x, this.y);

            this.shp.graphics.lineTo(egP.x, egP.y);
            this.shp.graphics.endFill();
            this.shp.alpha = alpha;

        }

        public clear() {
            this.shp.graphics.clear();
            if (this.shp.parent)
                this.fc.battle_scene.removeChild(this.shp);

            this.is_hit = false;
        }


    }
}