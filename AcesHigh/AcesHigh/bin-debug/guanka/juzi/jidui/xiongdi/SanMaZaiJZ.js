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
    var SanMaZaiJZ = (function (_super) {
        __extends(SanMaZaiJZ, _super);
        function SanMaZaiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SanMaZaiJZ.prototype.initFcInfo = function () {
            this.fc_info1 = FC_Console.getInfoByName(2, "xiao_23");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_24");
            this.fc_info3 = FC_Console.getInfoByName(2, "xiao_25");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        SanMaZaiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info1, egret.Point.create(17, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理1"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 2)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 2)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SanMaZaiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-2, 15), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SanMaZaiJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info3, egret.Point.create(32, 30), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 5)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 5)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        SanMaZaiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return SanMaZaiJZ;
    }(juzi.JuZiGuanLi));
    juzi.SanMaZaiJZ = SanMaZaiJZ;
    __reflect(SanMaZaiJZ.prototype, "juzi.SanMaZaiJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=SanMaZaiJZ.js.map