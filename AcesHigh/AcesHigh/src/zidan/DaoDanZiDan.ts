module zidan {
    export class DaoDanZiDan extends zidan.ZiDanBase {
        //跟踪弹生效时间
        public gz_time: number = 10000;
        public fc: feichuan.FeiChuanBase;
        public sudu: number = 5;
        //导弹启动时间
        public qi_dong = 300;
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number, fc: feichuan.FeiChuanBase) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.DAO_DAN);
            this.initPT();
            this.is_updata = true;
            this.damping = 0;
            this.fc = fc;
            this.bit_name = "op_zd_3_png";
            this.sudu = 8;

        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("op_zd_3_png"))
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        }

        public updata() {
            super.updata();


            if ((egret.getTimer() - this.mark_time) > this.gz_time) {
                this.is_updata = false;
                return;
            }
            if (!this.fc) {
                return;
            }
            if ((egret.getTimer() - this.mark_time) < this.qi_dong) {
                this.velocity = [0, 3];
                super.weiyi(this.bit_name);
                return;
            }


            let angle: number = Math.atan2((this.fc.position[1] - this.position[1]), (this.fc.position[0] - this.position[0])) + Math.PI * 0.5
            let sx = Math.sin(angle) * this.sudu;
            let sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            this.angle = angle;
            this.velocity = [sx, sy];
            super.weiyi(this.bit_name);

        }



        public texiao() {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(super.dell, this, [this.bitmap]);

        }

    }
}