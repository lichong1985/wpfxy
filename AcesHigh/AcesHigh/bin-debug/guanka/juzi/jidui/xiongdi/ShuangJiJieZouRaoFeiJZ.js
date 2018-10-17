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
    var ShuangJiJieZouRaoFeiJZ = (function (_super) {
        __extends(ShuangJiJieZouRaoFeiJZ, _super);
        function ShuangJiJieZouRaoFeiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangJiJieZouRaoFeiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_18");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        ShuangJiJieZouRaoFeiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 10), this.nan_du);
            this.fc1.angle = (-90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 4, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 5, 0.5, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangJiJieZouRaoFeiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 25), this.nan_du);
            this.fc2.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理2", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 5, 0.5, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 4, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangJiJieZouRaoFeiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return ShuangJiJieZouRaoFeiJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShuangJiJieZouRaoFeiJZ = ShuangJiJieZouRaoFeiJZ;
    __reflect(ShuangJiJieZouRaoFeiJZ.prototype, "juzi.ShuangJiJieZouRaoFeiJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=ShuangJiJieZouRaoFeiJZ.js.map