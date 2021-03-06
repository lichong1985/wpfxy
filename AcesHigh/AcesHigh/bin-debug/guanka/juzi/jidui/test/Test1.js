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
var juzi;
(function (juzi) {
    var Test1 = (function (_super) {
        __extends(Test1, _super);
        function Test1(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        Test1.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_23");
            this.init1ZTJ();
        };
        Test1.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, 5), 9);
            this.fc1.angle = 70 / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 5, 2)], 2, -1, "13:15"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        Test1.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return Test1;
    }(juzi.JuZiGuanLi));
    juzi.Test1 = Test1;
    __reflect(Test1.prototype, "juzi.Test1");
})(juzi || (juzi = {}));
//# sourceMappingURL=Test1.js.map