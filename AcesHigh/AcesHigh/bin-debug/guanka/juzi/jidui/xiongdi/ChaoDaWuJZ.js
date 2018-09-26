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
    var ChaoDaWuJZ = (function (_super) {
        __extends(ChaoDaWuJZ, _super);
        function ChaoDaWuJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ChaoDaWuJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(5, "chaoda_4");
            this.init1ZTJ();
        };
        ChaoDaWuJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(10, -15));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 0.5, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 0.5, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 11), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 0.5, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 0.5, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 19), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 0.5, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 24), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 0.5, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 28), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 0.5, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        ChaoDaWuJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return ChaoDaWuJZ;
    }(juzi.JuZiGuanLi));
    juzi.ChaoDaWuJZ = ChaoDaWuJZ;
    __reflect(ChaoDaWuJZ.prototype, "juzi.ChaoDaWuJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=ChaoDaWuJZ.js.map