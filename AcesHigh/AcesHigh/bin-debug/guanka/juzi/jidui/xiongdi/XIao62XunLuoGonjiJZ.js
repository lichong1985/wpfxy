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
    var Xiao62XunLuoGonJiJZ = (function (_super) {
        __extends(Xiao62XunLuoGonJiJZ, _super);
        function Xiao62XunLuoGonJiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        Xiao62XunLuoGonJiJZ.prototype.initFcInfo = function () {
            this.fc_info2 = FC_Console.getInfoByName(1, "xiao_2");
            this.fc_info6 = FC_Console.getInfoByName(2, "xiao_6");
            this.init1ZTJ6();
            this.initZTJ21();
            this.initZTJ22();
            this.initZTJ23();
        };
        Xiao62XunLuoGonJiJZ.prototype.init1ZTJ6 = function () {
            //1 创建飞船
            this.fc6 = new feichuan.JuZhenJidui(this.scene, this.fc_info6, egret.Point.create(5, -2));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc6);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 3), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(6, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "32:52"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(9, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, -1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(6, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc6.ztj = ztj;
        };
        Xiao62XunLuoGonJiJZ.prototype.initZTJ21 = function () {
            //1 创建飞船
            this.fc21 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-2, 10));
            this.fc21.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc21);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc21.ztj = ztj;
        };
        Xiao62XunLuoGonJiJZ.prototype.initZTJ22 = function () {
            //1 创建飞船
            this.fc22 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-8, 10));
            this.fc22.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc22);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc22.ztj = ztj;
        };
        Xiao62XunLuoGonJiJZ.prototype.initZTJ23 = function () {
            //1 创建飞船
            this.fc23 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-14, 10));
            this.fc23.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc23);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc23.ztj = ztj;
        };
        //添加飞机到 战场
        Xiao62XunLuoGonJiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc6);
            scene.dijis.push(this.fc21);
            scene.dijis.push(this.fc22);
            scene.dijis.push(this.fc23);
        };
        return Xiao62XunLuoGonJiJZ;
    }(juzi.JuZiGuanLi));
    juzi.Xiao62XunLuoGonJiJZ = Xiao62XunLuoGonJiJZ;
    __reflect(Xiao62XunLuoGonJiJZ.prototype, "juzi.Xiao62XunLuoGonJiJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=XIao62XunLuoGonjiJZ.js.map