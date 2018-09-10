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
    var ShuangXuanZHuanFeiDanJZ = (function (_super) {
        __extends(ShuangXuanZHuanFeiDanJZ, _super);
        function ShuangXuanZHuanFeiDanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangXuanZHuanFeiDanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_14");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        ShuangXuanZHuanFeiDanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(10, -5));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 5, 10, null, 2, -1, "111111", true));
            //移动加普通武器射击
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 5, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)], 2, -1, "222222"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING, zhuangtaiji.ZT_TYPE.NULL_T, 2, 0.5, null, 2, -1, "33333333"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 10, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)], 2, -1, "44444444"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangXuanZHuanFeiDanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(5, 55));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 2, 5, null, 3, -1, "-2:52"));
            //移动加普通武器射击
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 5, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)], 2, -1, "222222"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(-2, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING, zhuangtaiji.ZT_TYPE.NULL_T, 2, 0.5, null, 2, -1, "33333333"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 5, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)], 2, -1, "222222"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangXuanZHuanFeiDanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return ShuangXuanZHuanFeiDanJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShuangXuanZHuanFeiDanJZ = ShuangXuanZHuanFeiDanJZ;
    __reflect(ShuangXuanZHuanFeiDanJZ.prototype, "juzi.ShuangXuanZHuanFeiDanJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=ShuangXuanZhuanFeiDanJZ.js.map