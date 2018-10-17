module bar {
    export class TimeBar {
        public scene: scene.SceneBase;

        public w1: egret.Bitmap;
        public w2: egret.Bitmap;

        public w3: egret.Bitmap;

        public w4: egret.Bitmap;
        public w5: egret.Bitmap;

        public w6: egret.Bitmap;
        public w7: egret.Bitmap;
        public w8: egret.Bitmap;

        public wz: egret.Bitmap;


        public y: number = 1050;
        public x: number;

        public pi: number = 20;

        //当前剩余时间
        public now_time: number = 0;
        //标记时间
        public mark_time: number = 0;

        constructor(scene: scene.SceneBase) {
            this.x = Tools.getPhoneW() * 0.01 + 1000;
            this.scene = scene;
            this.initUI();

        }

        public initUI() {

            this.wz = new egret.Bitmap(RES.getRes("z"));
            this.scene.addChildAt(this.wz, 100);
            this.wz.y = this.y;
            this.wz.x = this.x + this.pi * 0;
            this.y += 10;

            this.w2 = new egret.Bitmap(RES.getRes("1"));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.wz.width + this.x + this.wz.width * 0.5;

            this.w3 = new egret.Bitmap(RES.getRes("sd"));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.wz.width + this.x + this.wz.width * 0.6 + 1 * this.w2.width;

            this.w4 = new egret.Bitmap(RES.getRes("5"));
            this.scene.addChildAt(this.w4, 100);
            this.w4.y = this.y;
            this.w4.x = this.wz.width + this.x + this.wz.width * 0.5 + 2 * this.w2.width;

            this.w5 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w5, 100);
            this.w5.y = this.y;
            this.w5.x = this.wz.width + this.x + this.wz.width * 0.6 + 3 * this.w2.width;

        }

        //设置数值
        public setNumber(s: number) {

            if (s < 0) {
                return;
            }

            let l2 = Math.floor(s / 60);
            let m = s % 60;
            let l5 = Math.floor(m / 10);
            let l6 = m % 10

            this.w2.texture = RES.getRes(l2 + "");
            this.w4.texture = RES.getRes(l5 + "");
            this.w5.texture = RES.getRes(l6 + "");
        }


        //设置标记时间
        public setMark(s: number) {
            this.mark_time = s;
            this.now_time = this.mark_time - egret.getTimer();
        }
        //更新秒表
        public upup() {
            let n = this.mark_time - egret.getTimer()

            if (this.now_time - n > 1000) {
                this.now_time = n;
                this.setNumber(Math.floor(this.now_time / 1000));

            }

        }
    }
}