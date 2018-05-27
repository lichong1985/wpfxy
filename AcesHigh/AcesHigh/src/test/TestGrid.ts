module test {
    export class TestGrid extends egret.Sprite {
        constructor() {
            super()
            this.drawGrid();
        }

        //画格子
        private drawGrid() {
            this.graphics.beginFill(0x000000);
            this.graphics.drawRect(0, 0, scene.battle_sceneW, scene.battle_sceneH);
            this.graphics.endFill();

            //画横格子
            this.graphics.lineStyle(0.2, 0xffffff);
            for (let i: number = 0; i < scene.battle_sceneH / 100; i++) {
                this.graphics.moveTo(0, i * 100);                          // 起始点的x,y坐标
                this.graphics.lineTo(scene.battle_sceneW, i * 100);
            }
            this.graphics.endFill();

            //画竖格子

            this.graphics.lineStyle(0.2, 0xffffff);
            for (let i: number = 0; i < scene.battle_sceneW / 100; i++) {
                this.graphics.moveTo(i * 100,0);                          // 起始点的x,y坐标
                this.graphics.lineTo( i * 100,scene.battle_sceneH);
            }
            this.graphics.endFill();

            //画竖格子

        }
    }
}