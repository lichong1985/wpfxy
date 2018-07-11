module zidan {
    export class LuoXuanZiDan extends zidan.ZiDanBase {
        public sudu: number = 5;
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.YU_LEI);
            this.collNumber = 1;
            this.bit_name = "us_zd_7_png";
            this.is_updata = true;
            this.sheng_ming_zhou_qi = 10000;
            this.initPT();
            this.sheng_ming_zhou_qi = 1000 * 60;

        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_7_png"))
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.displays = [this.bitmap];
            this.angularDamping = 0;




        }

        //约束
        public yue_shu() {
            let constraint1 = new p2.DistanceConstraint(this.scene.sk, this);
            this.scene.world.addConstraint(constraint1);
            constraint1.upperLimitEnabled = true;
            constraint1.lowerLimitEnabled = true;
            constraint1.upperLimit = 3;
            constraint1.lowerLimit = 3;
            this.yueShulist.push(constraint1);
        }

        public updata() {
            super.updata();
            let angle: number = (Math.atan2((this.scene.sk.position[1] - this.position[1]), (this.scene.sk.position[0] - this.position[0])) + Math.PI * 0.5) - (90 * Math.PI / 180)
            let sx = Math.sin(angle) * this.sudu;
            let sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            this.angle = angle;
            this.velocity = [sx, sy];
        }

    }
}