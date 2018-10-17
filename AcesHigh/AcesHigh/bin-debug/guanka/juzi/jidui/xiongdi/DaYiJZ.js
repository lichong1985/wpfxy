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
    var DaYiJZ = (function (_super) {
        __extends(DaYiJZ, _super);
        function DaYiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DaYiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(4, "da_1");
            this.init1ZTJ();
        };
        DaYiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(13, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 4), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 2, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "32:52"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, -2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.STOP_SHOOT_NOW, 8, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DaYiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DaYiJZ;
    }(juzi.JuZiGuanLi));
    juzi.DaYiJZ = DaYiJZ;
    __reflect(DaYiJZ.prototype, "juzi.DaYiJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=DaYiJZ.js.map