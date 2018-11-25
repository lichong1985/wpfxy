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
var zy;
(function (zy) {
    var kaishiMi = (function (_super) {
        __extends(kaishiMi, _super);
        function kaishiMi(z) {
            var _this = _super.call(this, z) || this;
            _this.kai_shi = new egret.TextField(); //开始
            _this.init();
            return _this;
        }
        kaishiMi.prototype.init = function () {
            this.initKaiShi();
        };
        kaishiMi.prototype.initKaiShi = function () {
            this.kai_shi.textFlow = new Array({ text: "出击", style: { underline: true, "textColor": 0xEDFFF9 } });
            this.kai_shi.lineSpacing = 20;
            this.addChild(this.kai_shi);
            this.kai_shi.x = Tools.getPhoneW() * 0.5;
            this.kai_shi.y = Tools.getPhoneH() * 0.5;
            //添加点击事件
            this.kai_shi.touchEnabled = true;
            this.kai_shi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kaishiOnT, this);
        };
        kaishiMi.prototype.kaishiOnT = function () {
            egret.Tween.get(this.kai_shi).to({ "scaleX": 1.1, "scaleY": 1.1 }, 100).to({ "scaleX": 1, "scaleY": 1 }, 100);
            this.z.end();
            this.z.qie();
            this.z = null;
        };
        return kaishiMi;
    }(zy.ziyeMi));
    zy.kaishiMi = kaishiMi;
    __reflect(kaishiMi.prototype, "zy.kaishiMi");
})(zy || (zy = {}));
//# sourceMappingURL=kaishiMi.js.map