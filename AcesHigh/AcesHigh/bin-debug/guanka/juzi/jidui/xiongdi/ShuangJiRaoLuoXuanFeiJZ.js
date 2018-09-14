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
    var ShuangJiRaoLuoXuanFeiJZ = (function (_super) {
        __extends(ShuangJiRaoLuoXuanFeiJZ, _super);
        function ShuangJiRaoLuoXuanFeiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangJiRaoLuoXuanFeiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_22");
            this.fc_info2 = FC_Console.getInfoByName(3, "zhong_12");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        ShuangJiRaoLuoXuanFeiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 15));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(30, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 4, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 503, 1)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangJiRaoLuoXuanFeiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 35));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 4, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 503, 1)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        ShuangJiRaoLuoXuanFeiJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(15, -5));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 2, 10, null, 2, -1, "-1:1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 2, 10, null, 2, -1, "-1:1"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3, 18)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangJiRaoLuoXuanFeiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return ShuangJiRaoLuoXuanFeiJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShuangJiRaoLuoXuanFeiJZ = ShuangJiRaoLuoXuanFeiJZ;
    __reflect(ShuangJiRaoLuoXuanFeiJZ.prototype, "juzi.ShuangJiRaoLuoXuanFeiJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=ShuangJiRaoLuoXuanFeiJZ.js.map