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
    var ShuangJiXuanTingSheJiJUZI = (function (_super) {
        __extends(ShuangJiXuanTingSheJiJUZI, _super);
        function ShuangJiXuanTingSheJiJUZI(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangJiXuanTingSheJiJUZI.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_11");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        ShuangJiXuanTingSheJiJUZI.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(10, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangJiXuanTingSheJiJUZI.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 15), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangJiXuanTingSheJiJUZI.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return ShuangJiXuanTingSheJiJUZI;
    }(juzi.JuZiGuanLi));
    juzi.ShuangJiXuanTingSheJiJUZI = ShuangJiXuanTingSheJiJUZI;
    __reflect(ShuangJiXuanTingSheJiJUZI.prototype, "juzi.ShuangJiXuanTingSheJiJUZI");
})(juzi || (juzi = {}));
//# sourceMappingURL=ShuangJiXuanTingSheJiJUZI.js.map