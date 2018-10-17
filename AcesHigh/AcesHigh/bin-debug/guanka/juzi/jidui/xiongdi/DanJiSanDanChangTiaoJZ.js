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
    var DanJiSanDanChangTiaoJZ = (function (_super) {
        __extends(DanJiSanDanChangTiaoJZ, _super);
        function DanJiSanDanChangTiaoJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DanJiSanDanChangTiaoJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_17");
            this.init1ZTJ();
        };
        DanJiSanDanChangTiaoJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(18, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DanJiSanDanChangTiaoJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DanJiSanDanChangTiaoJZ;
    }(juzi.JuZiGuanLi));
    juzi.DanJiSanDanChangTiaoJZ = DanJiSanDanChangTiaoJZ;
    __reflect(DanJiSanDanChangTiaoJZ.prototype, "juzi.DanJiSanDanChangTiaoJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=DanJiSanDanChangTiaoJZ.js.map