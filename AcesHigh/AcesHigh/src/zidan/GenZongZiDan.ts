module zidan {
    export class GenZongZiDan extends zidan.ZiDanBase {
        //跟踪弹生效时间
        public gz_time: number = 10000;
        public suke: shuke.ShuKe;
        public sudu: number = 3;
        constructor(zhenying: GameConstant.ZHEN_YING, mass: number, suke: shuke.ShuKe) {
            super(zhenying, mass, wuqi.WUQI_TYPE.PU_TONG);
            this.initPT();
            this.is_updata = true;
            this.damping = 0;
            this.suke = suke;
        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("1-5_png"))
            this.damping = 0;
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
            let angle: number = Math.atan2((this.suke.position[1] - this.position[1]), (this.suke.position[0] - this.position[0])) + Math.PI * 0.5
            let sx = Math.sin(angle) * this.sudu;
            let sy = Math.cos(angle) * this.sudu;
            // if (suke.position[1] < this.fc.position[1]) {
            sy = sy * -1;
            // }

            this.angle = angle;
            this.velocity = [sx, sy];
            

        }

    }
}