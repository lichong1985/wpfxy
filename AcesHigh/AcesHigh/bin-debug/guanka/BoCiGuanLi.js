var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var guanqia;
(function (guanqia) {
    var FC_TYPE;
    (function (FC_TYPE) {
        FC_TYPE[FC_TYPE["KUAN_TI"] = 0] = "KUAN_TI";
        FC_TYPE[FC_TYPE["XUAN_ZHUAN"] = 1] = "XUAN_ZHUAN";
        FC_TYPE[FC_TYPE["YIN_SHEN"] = 2] = "YIN_SHEN";
        FC_TYPE[FC_TYPE["NAI_DA"] = 3] = "NAI_DA";
        FC_TYPE[FC_TYPE["ZONG_XING"] = 4] = "ZONG_XING";
        FC_TYPE[FC_TYPE["CHUAN_DUI"] = 5] = "CHUAN_DUI";
        FC_TYPE[FC_TYPE["TONG_YONG"] = 6] = "TONG_YONG";
    })(FC_TYPE = guanqia.FC_TYPE || (guanqia.FC_TYPE = {}));
    var BoCiGuanLi = (function () {
        function BoCiGuanLi() {
            //当前波次
            this.bociNum = 0;
            //是否进行下一个关卡
            this.is_next = true;
        }
        //下一波
        BoCiGuanLi.prototype.nextBo = function () {
            this.is_next = false;
            this.bociNum++;
            //1 
            this.bc_now = new boci.BoCi();
            this.bc_now.initJuzi();
        };
        BoCiGuanLi.prototype.addFc = function (scene) {
            egret.log("SSSSSSSSSSSSSSS:" + this.bc_now.jz.fc_info_list.length);
            for (var _i = 0, _a = this.bc_now.jz.fc_info_list; _i < _a.length; _i++) {
                var info = _a[_i];
                info.reRandomPos();
                var fc = new feichuan.XiaoBing(scene, info);
                scene.dijis.push(fc);
            }
        };
        //随机相关
        BoCiGuanLi.prototype.upSomeThing = function () {
            if (TestScene.getInstance().dijis.length <= 0) {
                this.is_next = true;
            }
        };
        return BoCiGuanLi;
    }());
    guanqia.BoCiGuanLi = BoCiGuanLi;
    __reflect(BoCiGuanLi.prototype, "guanqia.BoCiGuanLi");
})(guanqia || (guanqia = {}));
//# sourceMappingURL=BoCiGuanLi.js.map