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
        ZT_TYPE[ZT_TYPE["XUAN_ZHUAN"] = 4] = "XUAN_ZHUAN";
        ZT_TYPE[ZT_TYPE["XUAN_ZHUAN_OVER"] = 5] = "XUAN_ZHUAN_OVER";
        ZT_TYPE[ZT_TYPE["MIAO_ZHUN"] = 6] = "MIAO_ZHUN";
        ZT_TYPE[ZT_TYPE["MIAO_ZHUN_OVER"] = 7] = "MIAO_ZHUN_OVER";
        ZT_TYPE[ZT_TYPE["DAO_HANG"] = 8] = "DAO_HANG";
        ZT_TYPE[ZT_TYPE["DAO_HANG_OVER"] = 9] = "DAO_HANG_OVER";
        ZT_TYPE[ZT_TYPE["JIN_CHANG"] = 10] = "JIN_CHANG";
        ZT_TYPE[ZT_TYPE["JIN_CHANG_OVER"] = 11] = "JIN_CHANG_OVER";
        ZT_TYPE[ZT_TYPE["NULL_T"] = 12] = "NULL_T";
        ZT_TYPE[ZT_TYPE["NO_THING"] = 13] = "NO_THING";
    })(ZT_TYPE = zhuangtaiji.ZT_TYPE || (zhuangtaiji.ZT_TYPE = {}));
    var ZhuangTaiJiBase = (function () {
        function ZhuangTaiJiBase() {
        }
        //进步器
        ZhuangTaiJiBase.prototype.upStep = function (time) {
            this.markTime = time;
        };
        //休眠
        ZhuangTaiJiBase.prototype.sleep = function (t) {
            this.sleep_long = this.markTime + t;
        };
        //判断是否是休眠状态
        ZhuangTaiJiBase.prototype.isSleep = function () {
            if (this.markTime < this.sleep_long) {
                return true;
            }
            return false;
        };
        return ZhuangTaiJiBase;
    }());
    zhuangtaiji.ZhuangTaiJiBase = ZhuangTaiJiBase;
    __reflect(ZhuangTaiJiBase.prototype, "zhuangtaiji.ZhuangTaiJiBase");
})(zhuangtaiji || (zhuangtaiji = {}));
//# sourceMappingURL=ZhuangTaiJi.js.map