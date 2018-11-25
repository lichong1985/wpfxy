module zy {
    export class kaishiMi extends ziyeMi {
        public kai_shi: egret.TextField = new egret.TextField();//开始
        constructor(z: ZhuYe) {
            super(z);
            this.init();

        }

        public init() {
            this.initKaiShi();
        }

        public initKaiShi() {
            this.kai_shi.textFlow = new Array<egret.ITextElement>(
                { text: "出击", style: { underline: true, "textColor": 0xEDFFF9 } })

            this.kai_shi.lineSpacing = 20;
            this.addChild(this.kai_shi);
            this.kai_shi.x = Tools.getPhoneW() * 0.5;
            this.kai_shi.y = Tools.getPhoneH() * 0.5;
            //添加点击事件
            this.kai_shi.touchEnabled = true;
            this.kai_shi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kaishiOnT, this);




        }

        public kaishiOnT() {

            egret.Tween.get(this.kai_shi).to({ "scaleX": 1.1, "scaleY": 1.1 }, 100).to({ "scaleX": 1, "scaleY": 1 }, 100);
            this.z.end();
            this.z.qie()
            this.z = null;

        }
    }
}