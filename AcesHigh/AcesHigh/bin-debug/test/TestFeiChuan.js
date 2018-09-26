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
            var _this = _super.call(this, battle_scene, egret.Point.create(1200, 15), GameConstant.ZHEN_YING.DI_JUN, 1) || this;
            _this.fc_type = feichuan.FC_TYPE.DIJI;
            // this.initJson("6_1_json");
            _this.initTestFchuan();
            return _this;
        }
        //做一个 飞船
        TestFeiChuan.prototype.initTestFchuan = function () {
            this.mass = 100;
            // this.addAI(new ai.KeepDistanceAI(this, 5));
            // this.addAI(new ai.ShiShiMiaoZhunAi(this));
            // let ps: Array<egret.Point> = new Array<egret.Point>();
            // ps.push(Tools.egretTOp2(egret.Point.create(15, 15)));
            // ps.push(Tools.egretTOp2(egret.Point.create(1700, 1700)));
            // this.addAI(new ai.MoveToAi(this, ps, true));
            // this.addAI(new ai.ZhuanXiang(this));
            // this.addAI(new ai.RandomPointAi(this, ai.RANDOM_POINT.all, 2));
        };
        return TestFeiChuan;
    }(feichuan.FeiChuanBase));
    test.TestFeiChuan = TestFeiChuan;
    __reflect(TestFeiChuan.prototype, "test.TestFeiChuan");
})(test || (test = {}));
//# sourceMappingURL=TestFeiChuan.js.map