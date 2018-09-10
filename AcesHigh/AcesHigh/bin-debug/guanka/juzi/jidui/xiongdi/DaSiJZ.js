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
    var DaSiJZ = (function (_super) {
        __extends(DaSiJZ, _super);
        function DaSiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DaSiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(4, "da_4");
            this.init1ZTJ();
        };
        DaSiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, -5));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            // this.fc1.angle = (45 - 360) / 180 * Math.PI;
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 1003, 16, 1),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 1503, 17, 1),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 2003, 18, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, -0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 1003, 16, 1),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 1503, 17, 1),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 2003, 18, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DaSiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DaSiJZ;
    }(juzi.JuZiGuanLi));
    juzi.DaSiJZ = DaSiJZ;
    __reflect(DaSiJZ.prototype, "juzi.DaSiJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=DaSiJZ.js.map