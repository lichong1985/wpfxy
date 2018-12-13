module test {
    export class TestGrid extends egret.Sprite {
        public sc: scene.SceneBase;
        public w: number;
        public h: number;
        public c1: Array<bj.XingXing>;//层1 最慢
        public c2: Array<bj.XingXing>;//层2
        public c3: Array<bj.XingXing>;//层3
        public c4: Array<bj.XingXing>;//层4
        public c5: Array<bj.XingXing>;//层5 最快

        public bgh: egret.Bitmap;//黑背景

        constructor(sc: scene.SceneBase) {
            super()
            this.sc = sc;
            this.drawGrid();
        }

        //画格子
        private drawGrid() {
            // this.w = Tools.getPhoneW();
            // this.h = Tools.getPhoneH();
            // this.graphics.beginFill(0x000000);
            // this.graphics.drawRect(900, 900, this.w + 1100, this.h + 1100);
            // this.graphics.endFill();
            this.bgh = new egret.Bitmap(RES.getRes("bjh_png"));
            this.bgh.x = 1000;
            this.bgh.y = 1000;
            this.bgh.scaleX = 6.5;
            this.bgh.scaleY = 6;
            this.sc.addChildAt(this.bgh, 0);





            //画星星
            this.init_random_xx();

        }

        //初始化随机星星
        public init_random_xx() {
            for (let i = 0; i < 5; i++) {
                let dd = new bj.XingXing(1.1, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (let i = 0; i < 5; i++) {
                let dd = new bj.XingXing(0.9, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (let i = 0; i < 5; i++) {
                let dd = new bj.XingXing(0.7, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (let i = 0; i < 5; i++) {
                let dd = new bj.XingXing(0.3, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (let i = 0; i < 5; i++) {
                let dd = new bj.XingXing(0.1, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }

        }
    }
}