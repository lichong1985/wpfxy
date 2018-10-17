var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var test;
(function (test) {
    var TestGrid = (function (_super) {
        __extends(TestGrid, _super);
        function TestGrid(sc) {
            var _this = _super.call(this) || this;
            _this.sc = sc;
            _this.drawGrid();
            return _this;
        }
        //画格子
        TestGrid.prototype.drawGrid = function () {
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
        };
        //初始化随机星星
        TestGrid.prototype.init_random_xx = function () {
            for (var i = 0; i < 10; i++) {
                var dd = new bj.XingXing(1.1, 1);
                this.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 10; i++) {
                var dd = new bj.XingXing(0.9, 1);
                this.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 10; i++) {
                var dd = new bj.XingXing(0.7, 1);
                this.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 10; i++) {
                var dd = new bj.XingXing(0.3, 1);
                this.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 10; i++) {
                var dd = new bj.XingXing(0.1, 1);
                this.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
        };
        return TestGrid;
    }(egret.Sprite));
    test.TestGrid = TestGrid;
    __reflect(TestGrid.prototype, "test.TestGrid");
})(test || (test = {}));
//# sourceMappingURL=TestGrid.js.map