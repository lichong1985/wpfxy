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
    var SanBianYiXuanZhuanJZ = (function (_super) {
        __extends(SanBianYiXuanZhuanJZ, _super);
        function SanBianYiXuanZhuanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SanBianYiXuanZhuanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(4, "da_6");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_19");
            this.fc_info3 = FC_Console.getInfoByName(2, "xiao_20");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        SanBianYiXuanZhuanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(17, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 1),
                new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 16),
                new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 17),
                new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 18)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SanBianYiXuanZhuanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(8, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 1),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 16),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 17),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 18)], 2, -1, "3:8"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SanBianYiXuanZhuanJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info3, egret.Point.create(32, 30), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(35, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 8, -1, "-1:1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 1),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 16),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 17),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 18)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        SanBianYiXuanZhuanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return SanBianYiXuanZhuanJZ;
    }(juzi.JuZiGuanLi));
    juzi.SanBianYiXuanZhuanJZ = SanBianYiXuanZhuanJZ;
    __reflect(SanBianYiXuanZhuanJZ.prototype, "juzi.SanBianYiXuanZhuanJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=SanBianYiXuanZhuanJZ.js.map