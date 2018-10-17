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
    var LiangXiongDiBuKaiQiangJZ = (function (_super) {
        __extends(LiangXiongDiBuKaiQiangJZ, _super);
        function LiangXiongDiBuKaiQiangJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        LiangXiongDiBuKaiQiangJZ.prototype.initFcInfo = function () {
            this.fc_info1 = FC_Console.getInfoByName(1, "xiao_2");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_5");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        LiangXiongDiBuKaiQiangJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info1, egret.Point.create(-5, 45), this.nan_du);
            this.fc1.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(0, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(26, 6), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(26, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        LiangXiongDiBuKaiQiangJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(32, 8), this.nan_du);
            this.fc2.angle = -(90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(27, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2", true));
            //1
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 2, -1, "13:15"));
            //2
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(26, 38), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 2, -1, "32:52"));
            //3
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            //4
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(33, -2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, -2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        LiangXiongDiBuKaiQiangJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return LiangXiongDiBuKaiQiangJZ;
    }(juzi.JuZiGuanLi));
    juzi.LiangXiongDiBuKaiQiangJZ = LiangXiongDiBuKaiQiangJZ;
    __reflect(LiangXiongDiBuKaiQiangJZ.prototype, "juzi.LiangXiongDiBuKaiQiangJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=LiangXiongDiBuKaiQiangJZ.js.map