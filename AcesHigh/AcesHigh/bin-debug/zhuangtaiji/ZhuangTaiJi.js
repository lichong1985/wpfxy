var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var zhuangtaiji;
(function (zhuangtaiji) {
    var ZT_TYPE;
    (function (ZT_TYPE) {
        ZT_TYPE[ZT_TYPE["SINGO_MOVE_ING"] = 0] = "SINGO_MOVE_ING";
        ZT_TYPE[ZT_TYPE["SINGO_MOVE_OVER"] = 1] = "SINGO_MOVE_OVER";
        ZT_TYPE[ZT_TYPE["JIAN_SI_MOVE_ING"] = 2] = "JIAN_SI_MOVE_ING";
        ZT_TYPE[ZT_TYPE["JIAN_SI_MOVE_OVER"] = 3] = "JIAN_SI_MOVE_OVER";
        ZT_TYPE[ZT_TYPE["XUAN_ZHUAN"] = 4] = "XUAN_ZHUAN";
        ZT_TYPE[ZT_TYPE["XUAN_ZHUAN_OVER"] = 5] = "XUAN_ZHUAN_OVER";
        ZT_TYPE[ZT_TYPE["MIAO_ZHUN_SK"] = 6] = "MIAO_ZHUN_SK";
        ZT_TYPE[ZT_TYPE["MIAO_ZHUN_SK_OVER"] = 7] = "MIAO_ZHUN_SK_OVER";
        ZT_TYPE[ZT_TYPE["YUN_DONG_DAO_HANG_ING"] = 8] = "YUN_DONG_DAO_HANG_ING";
        ZT_TYPE[ZT_TYPE["DAO_HANG"] = 9] = "DAO_HANG";
        ZT_TYPE[ZT_TYPE["DAO_HANG_OVER"] = 10] = "DAO_HANG_OVER";
        ZT_TYPE[ZT_TYPE["PU_TONG_GONG_JI"] = 11] = "PU_TONG_GONG_JI";
        ZT_TYPE[ZT_TYPE["PU_TONG_GONG_JI_OVER"] = 12] = "PU_TONG_GONG_JI_OVER";
        ZT_TYPE[ZT_TYPE["NULL_T"] = 13] = "NULL_T";
        ZT_TYPE[ZT_TYPE["YUAN_TI_DENG_DAI_ING"] = 14] = "YUAN_TI_DENG_DAI_ING";
        ZT_TYPE[ZT_TYPE["YUAN_TI_DENG_DAI_OVER"] = 15] = "YUAN_TI_DENG_DAI_OVER";
        ZT_TYPE[ZT_TYPE["PU_TONG_WU_QI_ING"] = 16] = "PU_TONG_WU_QI_ING";
        ZT_TYPE[ZT_TYPE["PU_TONG_WU_QI_OVER"] = 17] = "PU_TONG_WU_QI_OVER";
        ZT_TYPE[ZT_TYPE["STOP_SHOOT_NOW"] = 18] = "STOP_SHOOT_NOW";
        ZT_TYPE[ZT_TYPE["NO_THING"] = 19] = "NO_THING";
        ZT_TYPE[ZT_TYPE["HUA_XING_ING"] = 20] = "HUA_XING_ING";
        ZT_TYPE[ZT_TYPE["HUA_XING_OVER"] = 21] = "HUA_XING_OVER";
        ZT_TYPE[ZT_TYPE["XUAN_ZHUAN_JIAN_ING"] = 22] = "XUAN_ZHUAN_JIAN_ING";
        ZT_TYPE[ZT_TYPE["ZHENG_XIA_FANG_ING"] = 23] = "ZHENG_XIA_FANG_ING";
    })(ZT_TYPE = zhuangtaiji.ZT_TYPE || (zhuangtaiji.ZT_TYPE = {}));
    var ZhuangTaiJiBase = (function () {
        function ZhuangTaiJiBase() {
        }
        //进步器
        ZhuangTaiJiBase.prototype.upStep = function (time) {
            this.markTime = time;
        };
        //休眠 单位秒
        ZhuangTaiJiBase.prototype.sleep = function (t) {
            this.sleep_long = this.markTime + t * 1000;
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