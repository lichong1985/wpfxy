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
    var YiPaiSheJiJZ = (function (_super) {
        __extends(YiPaiSheJiJZ, _super);
        function YiPaiSheJiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        YiPaiSheJiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(1, "wei_1");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
            this.init4ZTJ();
        };
        YiPaiSheJiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(6, -2));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(6, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        YiPaiSheJiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(12, -2));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        YiPaiSheJiJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(18, -2));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        YiPaiSheJiJZ.prototype.init4ZTJ = function () {
            //1 创建飞船
            this.fc4 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(24, -2));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc4);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(24, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc4.ztj = ztj;
        };
        //添加飞机到 战场
        YiPaiSheJiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
            scene.dijis.push(this.fc4);
        };
        return YiPaiSheJiJZ;
    }(juzi.JuZiGuanLi));
    juzi.YiPaiSheJiJZ = YiPaiSheJiJZ;
    __reflect(YiPaiSheJiJZ.prototype, "juzi.YiPaiSheJiJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=YiPaiSheJiJZ.js.map