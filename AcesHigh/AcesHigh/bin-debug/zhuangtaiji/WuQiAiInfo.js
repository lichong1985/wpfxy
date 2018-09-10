var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var zhuangtaiji;
(function (zhuangtaiji) {
    var WuQiAiInfo = (function () {
        function WuQiAiInfo(da_num, da_jian_ge, xiao_num, xiao_jian_ge, she_su, wq_type, nan_du) {
            this.da_num_mark = 0;
            this.xiao_num_mark = 0;
            this.is_xiao = false;
            // 1 2 3个档次 小 中 大  大小跟难度相关 之后 做转换
            this.zi_dan_da_xiao = 2;
            //跟子弹威力相关 跟子弹威力系数想关
            this.nan_du = 0;
            //延迟
            this.yan_chi = 0;
            this.da_num = da_num;
            this.da_jian_ge = da_jian_ge;
            this.xiao_num = xiao_num;
            this.xiao_jian_ge = xiao_jian_ge;
            this.she_su = she_su % 100;
            this.wq_type = wq_type;
            this.da_ge_mark = egret.getTimer() + (she_su - this.she_su);
            this.yan_chi = (she_su - this.she_su);
            this.xiao_ge_mark = egret.getTimer();
            if (nan_du) {
                this.nan_du = nan_du;
            }
        }
        //重新设置cd
        WuQiAiInfo.prototype.initCD = function () {
            this.da_ge_mark = egret.getTimer() - this.da_jian_ge + this.yan_chi;
            this.da_num_mark = 0;
            this.xiao_num_mark = 0;
        };
        return WuQiAiInfo;
    }());
    zhuangtaiji.WuQiAiInfo = WuQiAiInfo;
    __reflect(WuQiAiInfo.prototype, "zhuangtaiji.WuQiAiInfo");
})(zhuangtaiji || (zhuangtaiji = {}));
//# sourceMappingURL=WuQiAiInfo.js.map