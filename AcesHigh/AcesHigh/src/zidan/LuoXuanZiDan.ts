module zidan {
    export class LuoXuanZiDan extends zidan.ZiDanBase {
        public sudu: number = 5;
        //号码
        public hao_ma: number = 0;
        //螺旋武器 父节点
        public wu: wjwq.LuoXuanWuqi;
        //位置角度
        public wz: number;
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.YU_LEI);
            this.collNumber = 1;
            this.bit_name = "us_zd_7";
            this.is_updata = true;
            this.sheng_ming_zhou_qi = 10000;
            this.initPT();
            this.sheng_ming_zhou_qi = 1000 * 60;

        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_7"))
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.displays = [this.bitmap];
            this.angularDamping = 0;




        }

        //约束
        public yue_shu() {
            // let constraint1 = new p2.DistanceConstraint(this.scene.sk, this);
            // this.scene.world.addConstraint(constraint1);
            // constraint1.upperLimitEnabled = true;
            // constraint1.lowerLimitEnabled = true;
            // constraint1.upperLimit = 3;
            // constraint1.lowerLimit = 3;
            // this.yueShulist.push(constraint1);
        }

        public updata() {
            super.updata();

            if (this.hao_ma == 0) {
                return;
            }
            if (this.wu == null) {
                return;
            }
            let angle: number = this.wz + this.wu.lx;
            let sx = Math.sin(angle) * 3;
            let sy = Math.cos(angle) * 3;

            this.position[0] = this.scene.sk.position[0] + sx;
            this.position[1] = this.scene.sk.position[1] + sy;
            this.weiyi("us_zd_7");
        }

        public weiyi(name: string) {
            if (egret.getTimer() - this.wyMark < this.wyCD && this.bitmap != null) {
                return;
            }
            this.wyMark = egret.getTimer();
            let b: egret.Bitmap = new egret.Bitmap(RES.getRes(name));
            b.anchorOffsetX = this.bitmap.width * 0.5;
            b.anchorOffsetY = this.bitmap.height * 0.5;

            b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = this.bitmap.x;
            b.y = this.bitmap.y;
            b.scaleX = 0.6;
            b.scaleY = 0.6;
            this.scene.addChild(b);
            b.alpha = 0.5;
            egret.Tween.get(b).to({ "alpha": 0.1 }, 200).call(this.dell, this, [b]);

        }

    }
}