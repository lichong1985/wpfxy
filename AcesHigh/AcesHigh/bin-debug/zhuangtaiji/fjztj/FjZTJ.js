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
var fjztj;
(function (fjztj) {
    //飞机状态机
    var FjZTJ = (function (_super) {
        __extends(FjZTJ, _super);
        function FjZTJ() {
            return _super.call(this) || this;
        }
        //进步器
        FjZTJ.prototype.upStep = function (time) {
        };
        return FjZTJ;
    }(zhuangtaiji.ZhuangTaiJiBase));
    fjztj.FjZTJ = FjZTJ;
    __reflect(FjZTJ.prototype, "fjztj.FjZTJ");
})(fjztj || (fjztj = {}));
//# sourceMappingURL=FjZTJ.js.map