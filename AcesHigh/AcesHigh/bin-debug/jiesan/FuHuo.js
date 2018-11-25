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
var jiesuan;
(function (jiesuan) {
    var FuHuo = (function (_super) {
        __extends(FuHuo, _super);
        function FuHuo() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        FuHuo.prototype.init = function () {
            this.initOver();
        };
        FuHuo.prototype.initOver = function () {
            var label = new eui.Label();
            label.text = "游戏结束";
            this.addChild(label);
            label.width = 400; //设置宽度
            label.height = 300; //设置高度
            label.fontFamily = "Tahoma"; //设置字体
            label.textColor = 0xD71139; //设置颜色
            label.size = 35; //设置文本字号
            label.bold = true; //设置是否加粗
            label.textAlign = "right"; //设置水平对齐方式
            label.verticalAlign = "middle"; //设置垂直对齐方式
            label.x = 1000;
            label.y = 1100;
        };
        return FuHuo;
    }(egret.Sprite));
    jiesuan.FuHuo = FuHuo;
    __reflect(FuHuo.prototype, "jiesuan.FuHuo");
})(jiesuan || (jiesuan = {}));
//# sourceMappingURL=FuHuo.js.map