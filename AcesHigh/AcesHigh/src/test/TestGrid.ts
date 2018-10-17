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

        constructor(sc: scene.SceneBase) {
            super()
            this.sc = sc;
            this.drawGrid();
        }

        //画格子
        private drawGrid() {
            this.w = Tools.getPhoneW();
            this.h = Tools.getPhoneH();
            this.graphics.beginFill(0x000000);
            this.graphics.drawRect(0, 0, scene.battle_sceneW, scene.battle_sceneH);
            this.graphics.endFill();

            // //画横格子
            // this.graphics.lineStyle(0.2, 0xffffff);
            // for (let i: number = 0; i < scene.battle_sceneH / 100; i++) {
            //     this.graphics.moveTo(0, i * 100);                          // 起始点的x,y坐标
            //     this.graphics.lineTo(scene.battle_sceneW, i * 100);
            // }
            // this.graphics.endFill();

            // //画竖格子

            // this.graphics.lineStyle(0.2, 0xffffff);
            // for (let i: number = 0; i < scene.battle_sceneW / 100; i++) {
            //     this.graphics.moveTo(i * 100, 0);                          // 起始点的x,y坐标
            //     this.graphics.lineTo(i * 100, scene.battle_sceneH);
            // }
            // this.graphics.endFill();

            //画竖格子
            this.init_random_xx();

        }

        //初始化随机星星
        public init_random_xx() {
            for (let i = 0; i < 10; i++) {
                let dd = new bj.XingXing(1.1, 1);
                this.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (let i = 0; i < 10; i++) {
                let dd = new bj.XingXing(0.9, 1);
                this.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (let i = 0; i < 10; i++) {
                let dd = new bj.XingXing(0.7, 1);
                this.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (let i = 0; i < 10; i++) {
                let dd = new bj.XingXing(0.3, 1);
                this.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (let i = 0; i < 10; i++) {
                let dd = new bj.XingXing(0.1, 1);
                this.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }

        }
    }
}