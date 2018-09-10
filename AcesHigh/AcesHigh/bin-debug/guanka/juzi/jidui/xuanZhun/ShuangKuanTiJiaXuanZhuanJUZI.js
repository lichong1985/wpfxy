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
    var ShuangKuanTiJiaXuanZhuanJUZI = (function (_super) {
        __extends(ShuangKuanTiJiaXuanZhuanJUZI, _super);
        function ShuangKuanTiJiaXuanZhuanJUZI(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangKuanTiJiaXuanZhuanJUZI.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_6");
            this.fc2_info = FC_Console.getInfoByName(2, "xiao_14");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        ShuangKuanTiJiaXuanZhuanJUZI.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 2));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 3), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 3), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangKuanTiJiaXuanZhuanJUZI.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 10));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 11), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(29, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 11), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        ShuangKuanTiJiaXuanZhuanJUZI.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(15, 55));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 18), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangKuanTiJiaXuanZhuanJUZI.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return ShuangKuanTiJiaXuanZhuanJUZI;
    }(juzi.JuZiGuanLi));
    juzi.ShuangKuanTiJiaXuanZhuanJUZI = ShuangKuanTiJiaXuanZhuanJUZI;
    __reflect(ShuangKuanTiJiaXuanZhuanJUZI.prototype, "juzi.ShuangKuanTiJiaXuanZhuanJUZI");
})(juzi || (juzi = {}));
//# sourceMappingURL=ShuangKuanTiJiaXuanZhuanJUZI.js.map