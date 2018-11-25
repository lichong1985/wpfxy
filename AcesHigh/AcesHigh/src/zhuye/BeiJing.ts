module zy {
    export class BeiJing extends egret.Sprite {
        constructor() {
            super();
            this.drawGrid();
        }

        private drawGrid() {
            this.graphics.beginFill(0x000000);
            this.graphics.drawRect(0, 0, Tools.getPhoneW(), Tools.getPhoneH());
            this.graphics.endFill();

        }
    }
}