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
        };
        //初始化随机星星
        TestGrid.prototype.init_random_xx = function () {
            for (var i = 0; i < 5; i++) {
                var dd = new bj.XingXing(1.1, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 5; i++) {
                var dd = new bj.XingXing(0.9, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 5; i++) {
                var dd = new bj.XingXing(0.7, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 5; i++) {
                var dd = new bj.XingXing(0.3, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 5; i++) {
                var dd = new bj.XingXing(0.1, 1);
                this.sc.addChild(dd.displays[0]);
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