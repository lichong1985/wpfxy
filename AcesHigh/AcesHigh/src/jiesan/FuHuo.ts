module jiesuan {
    export class FuHuo extends egret.Sprite {
        constructor() {
            super();
            this.init();
        }

        public init() {
            this.initOver();

        }

        public initOver() {
            var label: eui.Label = new eui.Label();
            label.text = "游戏结束";
            this.addChild(label);
            label.width = 400;//设置宽度
            label.height = 300;//设置高度
            label.fontFamily = "Tahoma";//设置字体
            label.textColor = 0xD71139;//设置颜色
            label.size = 35;//设置文本字号
            label.bold = true;//设置是否加粗
            label.textAlign = "right";//设置水平对齐方式
            label.verticalAlign = "middle";//设置垂直对齐方式

            label.x = 1000;
            label.y = 1100;
        }
    }
}