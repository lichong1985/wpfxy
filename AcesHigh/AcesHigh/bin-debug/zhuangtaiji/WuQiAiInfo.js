var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var zhuangtaiji;
(function (zhuangtaiji) {
    var WuQiAiInfo = (function () {
        function WuQiAiInfo(da_num, da_jian_ge, xiao_num, xiao_jian_ge, she_su) {
            this.da_num = da_num;
            this.da_jian_ge = da_jian_ge;
            this.xiao_num = xiao_num;
            this.xiao_jian_ge = xiao_jian_ge;
            this.she_su = she_su;
        }
        return WuQiAiInfo;
    }());
    zhuangtaiji.WuQiAiInfo = WuQiAiInfo;
    __reflect(WuQiAiInfo.prototype, "zhuangtaiji.WuQiAiInfo");
})(zhuangtaiji || (zhuangtaiji = {}));
//# sourceMappingURL=WuQiAiInfo.js.map