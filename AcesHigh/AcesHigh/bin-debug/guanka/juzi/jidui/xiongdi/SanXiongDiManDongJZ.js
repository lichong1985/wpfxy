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
    var SanXiongDiManDongJZ = (function (_super) {
        __extends(SanXiongDiManDongJZ, _super);
        function SanXiongDiManDongJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SanXiongDiManDongJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_2");
            this.init1ZTJ();
            // this.init2ZTJ();
            // this.init3ZTJ();
        };
        SanXiongDiManDongJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(20, -2));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 2, 15, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2, 2, null, 2, -1, "32:52"));
            ztj.nextStep(0);
            ztj.is_loop = false;
            this.fc1.ztj = ztj;
        };
        SanXiongDiManDongJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(32, -2));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 10, 15, null, 2, -1, "-2:52"));
            ztj.nextStep(0);
            ztj.is_loop = false;
            this.fc2.ztj = ztj;
        };
        SanXiongDiManDongJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(32, -2));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 10, 15, null, 2, -1, "-2:52"));
            ztj.nextStep(0);
            ztj.is_loop = false;
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        SanXiongDiManDongJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            // scene.dijis.push(this.fc2)
            // scene.dijis.push(this.fc3)
        };
        return SanXiongDiManDongJZ;
    }(juzi.JuZiGuanLi));
    juzi.SanXiongDiManDongJZ = SanXiongDiManDongJZ;
    __reflect(SanXiongDiManDongJZ.prototype, "juzi.SanXiongDiManDongJZ");
})(juzi || (juzi = {}));
//# sourceMappingURL=SanXiongDiManDongJZ.js.map