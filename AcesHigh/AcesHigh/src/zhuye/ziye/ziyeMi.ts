module zy {
    export class ziyeMi extends egret.DisplayObjectContainer {
        public z: ZhuYe;
        constructor(z: ZhuYe) {
            super();
            this.width = Tools.getPhoneW();
            this.height = Tools.getPhoneH();
            this.z = z
            this.x = 0
            this.y = 0;
        }



    }
}