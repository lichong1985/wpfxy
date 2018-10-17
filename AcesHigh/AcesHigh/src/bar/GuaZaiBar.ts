module bar {
    export class GuaZaiBar {
        public scene: scene.SceneBase;

        public w1: egret.Bitmap;
        public w2: egret.Bitmap;

        public w3: egret.Bitmap;

        public w4: egret.Bitmap;
        public w5: egret.Bitmap;

        public w6: egret.Bitmap;
        public w7: egret.Bitmap;

        public y: number = 1030;
        public x: number;

        public pi: number = 20;

        constructor(scene: scene.SceneBase) {
            this.x = Tools.getPhoneW() * 0.01 + 1000;
            this.scene = scene;
            this.initUI();
        }

        public initUI() {
            this.w1 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w1, 100);
            this.w1.y = this.y;
            this.w1.x = this.x + this.pi * 0;

            this.w2 = new egret.Bitmap(RES.getRes("1"));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.x + this.pi * 1;

            this.w3 = new egret.Bitmap(RES.getRes("sx"));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.x + this.pi * 2;

            this.w4 = new egret.Bitmap(RES.getRes("1"));
            this.scene.addChildAt(this.w4, 100);
            this.w4.y = this.y;
            this.w4.x = this.x + this.pi * 3;

            this.w5 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w5, 100);
            this.w5.y = this.y;
            this.w5.x = this.x + this.pi * 4;

            this.w6 = new egret.Bitmap(RES.getRes("gua"));
            this.scene.addChildAt(this.w6, 100);
            this.w6.y = this.y;
            this.w6.x = this.x + this.pi * 5;


            this.w7 = new egret.Bitmap(RES.getRes("zai"));
            this.scene.addChildAt(this.w7, 100);
            this.w7.y = this.y;
            this.w7.x = this.x + this.pi * 6;

        }

        //设置数值
        public setNumber(s: number) {
            if (s < 10) {
                this.w2.texture = RES.getRes(s + "");
                return;
            }

            let l1 = s / 10;
            let l2 = s % 10;
            this.w1.texture = RES.getRes(l1 + "");
            this.w2.texture = RES.getRes(l2 + "");
        }
    }
}