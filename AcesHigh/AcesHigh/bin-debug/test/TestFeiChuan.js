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
    var yuntu_type;
    (function (yuntu_type) {
        yuntu_type[yuntu_type["nll"] = 0] = "nll";
        yuntu_type[yuntu_type["hx"] = 1] = "hx";
        yuntu_type[yuntu_type["zj"] = 2] = "zj"; //装甲
    })(yuntu_type = test.yuntu_type || (test.yuntu_type = {}));
    var TestFeiChuan = (function (_super) {
        __extends(TestFeiChuan, _super);
        function TestFeiChuan(battle_scene) {
            var _this = _super.call(this, battle_scene, egret.Point.create(1300, 1300), GameConstant.ZHEN_YING.DI_JUN) || this;
            _this.initTestFchuan();
            _this.fc_type = feichuan.FC_TYPE.DIJI;
            return _this;
        }
        //做一个 飞船
        TestFeiChuan.prototype.initTestFchuan = function () {
            this.initYunTU();
            this.initPro(this.yun_tu);
            this.angle = Math.PI / 180 * 30;
            this.angularDamping = 0;
            // this.angularForce = 2;
            this.mass = 100;
        };
        //初始化云图
        TestFeiChuan.prototype.initYunTU = function () {
            this.yun_tu =
                [
                    [2, 2, 2, 2, 2, 2, 2],
                    [2, 0, 0, 2, 0, 0, 2],
                    [0, 0, 0, 2, 0, 0, 0],
                    [0, 2, 2, 2, 2, 2, 0],
                    [0, 2, 0, 2, 0, 2, 0],
                    [0, 2, 0, 1, 0, 2, 0],
                    [0, 2, 0, 2, 0, 2, 0],
                    [0, 2, 2, 2, 2, 2, 0],
                    [0, 0, 0, 2, 0, 0, 0],
                    [2, 0, 0, 2, 0, 0, 2],
                    [2, 2, 2, 2, 2, 2, 2],
                ];
        };
        return TestFeiChuan;
    }(feichuan.FeiChuanBase));
    test.TestFeiChuan = TestFeiChuan;
    __reflect(TestFeiChuan.prototype, "test.TestFeiChuan");
})(test || (test = {}));
//# sourceMappingURL=TestFeiChuan.js.map