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
    //四兄弟
    var SiXiongDiJuzi = (function (_super) {
        __extends(SiXiongDiJuzi, _super);
        function SiXiongDiJuzi(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SiXiongDiJuzi.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_1");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
            this.init4ZTJ();
        };
        SiXiongDiJuzi.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(28, 1));
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            ztj.is_loop = true;
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, 0, -1, "28:30"));
            // ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25),
            //     zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, 0, -1, "15:25"));
            // ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 1),
            //     zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, 0, -1, "28:1"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SiXiongDiJuzi.prototype.init2ZTJ = function () {
        };
        SiXiongDiJuzi.prototype.init3ZTJ = function () {
        };
        SiXiongDiJuzi.prototype.init4ZTJ = function () {
        };
        //添加飞机到 战场
        SiXiongDiJuzi.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return SiXiongDiJuzi;
    }(juzi.JuZiGuanLi));
    juzi.SiXiongDiJuzi = SiXiongDiJuzi;
    __reflect(SiXiongDiJuzi.prototype, "juzi.SiXiongDiJuzi");
})(juzi || (juzi = {}));
//# sourceMappingURL=SiXIongDiJuzi.js.map