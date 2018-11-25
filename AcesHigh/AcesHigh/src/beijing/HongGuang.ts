module bj {
    export class HongGuang {
        // public shp: egret.Shape;
        public scene: TestScene;

        constructor(scene: TestScene) {
            this.scene = scene;
        }

        public init() {
            // this.shp = new egret.Shape();
            // this.shp.graphics.beginFill(0XD71139, 1);
            // // this.shp.graphics.drawRect(1000, 1000, Tools.getPhoneW() + 1000, Tools.getPhoneH() + 1000);
            // this.shp.graphics.drawRect(1000, 1000, 1100, 1100);
            // this.shp.graphics.endFill();
            // // this.shp.alpha = 0.5;

            // this.scene.addChildAt(this.shp, 101);
        }
        public jizhong() {
            // this.shp.alpha = 0.5;
            // egret.Tween.get(this.shp).to({ "alpha": 0 }, 100);
            var shp: egret.Shape = new egret.Shape();
            shp.graphics.beginFill(0XD71139, 1);
            shp.graphics.drawRect(1000, 1000, 1100, 1100);
            shp.graphics.endFill();
            shp.alpha = 0.3;
            this.scene.addChild(shp);
            egret.Tween.get(shp).to({ "alpha": 0 }, 500).call(this.dell, this, [shp]);
        }

        //移除缓动动画
        public dell(DD: egret.DisplayObject) {
            if (DD) {
                if (DD.parent) {
                    egret.Tween.removeTweens(DD);
                    this.scene.removeChild(DD);
                }
            }
            DD = null;

        }
    }
}