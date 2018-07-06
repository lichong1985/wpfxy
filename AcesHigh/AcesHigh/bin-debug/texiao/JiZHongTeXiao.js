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
var texiao;
(function (texiao) {
    //击中特效
    var JiZhongTeXiao = (function (_super) {
        __extends(JiZhongTeXiao, _super);
        function JiZhongTeXiao(bit_name) {
            return _super.call(this, bit_name) || this;
        }
        JiZhongTeXiao.prototype.goto = function () {
        };
        return JiZhongTeXiao;
    }(texiao.TeXiaoBase));
    texiao.JiZhongTeXiao = JiZhongTeXiao;
    __reflect(JiZhongTeXiao.prototype, "texiao.JiZhongTeXiao");
})(texiao || (texiao = {}));
//# sourceMappingURL=JiZHongTeXiao.js.map