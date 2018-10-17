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
    var ShuangJiShangXiaJZ = (function (_super) {
        __extends(ShuangJiShangXiaJZ, _super);
        function ShuangJiShangXiaJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangJiShangXiaJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_8");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        ShuangJiShangXiaJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 45), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangJiShangXiaJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangJiShangXiaJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return ShuangJiShangXiaJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShuangJiShangXiaJZ = ShuangJiShangXiaJZ;
    __reflect(ShuangJiShangXiaJZ.prototype, "juzi.ShuangJiShangXiaJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=ShuangJiShangXiaJZ.js.map