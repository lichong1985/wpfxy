var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var zhuangtaiji;
(function (zhuangtaiji) {
    var ZT_TYPE;
    (function (ZT_TYPE) {
        ZT_TYPE[ZT_TYPE["SINGO_MOVE_ING"] = 0] = "SINGO_MOVE_ING";
        ZT_TYPE[ZT_TYPE["SINGO_MOVE_OVER"] = 1] = "SINGO_MOVE_OVER";
        ZT_TYPE[ZT_TYPE["ZUO_YOU_MOVE"] = 2] = "ZUO_YOU_MOVE";
        ZT_TYPE[ZT_TYPE["MOVE_OVER"] = 3] = "MOVE_OVER";
        ZT_TYPE[ZT_TYPE["NULL_T"] = 4] = "NULL_T";
    })(ZT_TYPE = zhuangtaiji.ZT_TYPE || (zhuangtaiji.ZT_TYPE = {}));
    var ZhuangTaiJiBase = (function () {
        function ZhuangTaiJiBase() {
        }
        //进步器
        ZhuangTaiJiBase.prototype.upStep = function (time) {
        };
        return ZhuangTaiJiBase;
    }());
    zhuangtaiji.ZhuangTaiJiBase = ZhuangTaiJiBase;
    __reflect(ZhuangTaiJiBase.prototype, "zhuangtaiji.ZhuangTaiJiBase");
})(zhuangtaiji || (zhuangtaiji = {}));
//# sourceMappingURL=ZhuangTaiJi.js.map