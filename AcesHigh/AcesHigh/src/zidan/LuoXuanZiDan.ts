module zidan {
    export class LuoXuanZiDan extends zidan.ZiDanBase {
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.YU_LEI);

            this.collNumber = 1;
            this.bit_name = "us_zd_7_png";

            this.is_updata = true;
            this.sheng_ming_zhou_qi = 10000;

            this.initPT();

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
            constraint1.upperLimit = 2;
            constraint1.lowerLimit = 1.5;
            this.yueShulist.push(constraint1);
        }

        public updata() {
            super.updata();
            this.velocity = [3, 3];
        }




    }
}