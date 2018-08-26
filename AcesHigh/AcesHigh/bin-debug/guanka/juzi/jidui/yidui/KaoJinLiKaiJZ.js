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
    var KaoJinLiKaiJz = (function (_super) {
        __extends(KaoJinLiKaiJz, _super);
        function KaoJinLiKaiJz(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.fcs = new Array();
            _this.scene = scene;
            return _this;
        }
        KaoJinLiKaiJz.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(1, "wei_2");
            for (var i = 0; i < 20; i++) {
                var fc = this.init1ZTJ(i);
                this.fcs.push(fc);
            }
        };
        KaoJinLiKaiJz.prototype.init1ZTJ = function (i) {
            var jl = i / 2;
            var fx = i % 2;
            //目标坐标
            var to1 = egret.Point.create(7, 5);
            var to2 = egret.Point.create(23, 5);
            var lasto1 = egret.Point.create(-5, -5);
            var lasto2 = egret.Point.create(35, -5);
            var fc1;
            var ztj;
            if (fx == 1) {
                //1 创建飞船
                fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-1 + (-jl), -1 + (-jl)));
                //2 创建状态机
                ztj = new fjztj.QuYuZTJ(fc1);
                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2 * jl, 1, null, 2, -1, "32:52"));
                //进场
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(to1, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "32:52"));
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(lasto1, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            }
            else {
                //1 创建飞船
                fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(31 + jl, -1 + (-jl)));
                //2 创建状态机
                ztj = new fjztj.QuYuZTJ(fc1);
                //休息
                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2 * jl, 1, null, 2, -1, "32:52"));
                //进场
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(to2, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "32:52"));
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(lasto2, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            }
            ztj.is_loop = false;
            ztj.nextStep(0);
            fc1.ztj = ztj;
            return fc1;
        };
        //添加飞机到 战场
        KaoJinLiKaiJz.prototype.addFc = function (scene) {
            for (var _i = 0, _a = this.fcs; _i < _a.length; _i++) {
                var fc = _a[_i];
                scene.dijis.push(fc);
            }
        };
        return KaoJinLiKaiJz;
    }(juzi.JuZiGuanLi));
    juzi.KaoJinLiKaiJz = KaoJinLiKaiJz;
    __reflect(KaoJinLiKaiJz.prototype, "juzi.KaoJinLiKaiJz");
})(juzi || (juzi = {}));
//# sourceMappingURL=KaoJinLiKaiJZ.js.map