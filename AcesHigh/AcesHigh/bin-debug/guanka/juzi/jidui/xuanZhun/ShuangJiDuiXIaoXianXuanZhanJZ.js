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
    var ShuangJiDuiJiaoXianXuanZhuanJZ = (function (_super) {
        __extends(ShuangJiDuiJiaoXianXuanZhuanJZ, _super);
        function ShuangJiDuiJiaoXianXuanZhuanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangJiDuiJiaoXianXuanZhuanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_15");
            this.fc2_info = FC_Console.getInfoByName(2, "xiao_16");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        ShuangJiDuiJiaoXianXuanZhuanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(5, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 3, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangJiDuiJiaoXianXuanZhuanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 20), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 3, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        ShuangJiDuiJiaoXianXuanZhuanJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(15, 55), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 18), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangJiDuiJiaoXianXuanZhuanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return ShuangJiDuiJiaoXianXuanZhuanJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShuangJiDuiJiaoXianXuanZhuanJZ = ShuangJiDuiJiaoXianXuanZhuanJZ;
    __reflect(ShuangJiDuiJiaoXianXuanZhuanJZ.prototype, "juzi.ShuangJiDuiJiaoXianXuanZhuanJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=ShuangJiDuiXIaoXianXuanZhanJZ.js.map