module bar {
    export class ZhongJianTiShiBar {
        public scene: scene.SceneBase;

        public w1: egret.Bitmap;

        public w2: egret.Bitmap;
        public w3: egret.Bitmap;


        public y: number = 1030;
        public x: number;

        public pi: number = 20;

        constructor(scene: scene.SceneBase) {
            this.x = Tools.getPhoneW() * 0.4 + 1000;
            this.y = Tools.getPhoneH() * 0.4 + 1000;
            this.scene = scene;

        }

        public setNumber(n: number) {
            this.w1 = new egret.Bitmap(RES.getRes("hh"));
            this.scene.addChildAt(this.w1, 100);
            this.w1.y = this.y;
            this.w1.x = this.x;

            this.y += 10
            let s;
            let g
            if (n >= 10) {
                s = n / 10
                g = s % 10
            } else {
                s = 0
                g = n;
            }

            this.w2 = new egret.Bitmap(RES.getRes(s + ""));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.x + this.w1.width + this.w1.width * 0.5;



            this.w3 = new egret.Bitmap(RES.getRes(g + ""));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.x + this.w1.width + this.w1.width * 0.5 + this.w2.width + this.w2.width * 0.5;
            egret.Tween.get(this.w1).to({ alpha: 1 }, 2000).call(this.remove_set, this);
        }

        public remove_set() {
            this.scene.removeChild(this.w1)
            this.scene.removeChild(this.w2)
            this.scene.removeChild(this.w3)
        }



    }
}