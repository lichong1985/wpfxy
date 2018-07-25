var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var juzi;
(function (juzi) {
    var JU_ZI_TYPE;
    (function (JU_ZI_TYPE) {
        JU_ZI_TYPE[JU_ZI_TYPE["SZ"] = 0] = "SZ";
        JU_ZI_TYPE[JU_ZI_TYPE["ZX"] = 1] = "ZX";
        JU_ZI_TYPE[JU_ZI_TYPE["SX"] = 2] = "SX";
        JU_ZI_TYPE[JU_ZI_TYPE["ZY"] = 3] = "ZY";
        JU_ZI_TYPE[JU_ZI_TYPE["LX"] = 4] = "LX";
        JU_ZI_TYPE[JU_ZI_TYPE["SB"] = 5] = "SB";
        JU_ZI_TYPE[JU_ZI_TYPE["DJ"] = 6] = "DJ";
        JU_ZI_TYPE[JU_ZI_TYPE["SJXL"] = 7] = "SJXL";
        JU_ZI_TYPE[JU_ZI_TYPE["SXD"] = 8] = "SXD";
        JU_ZI_TYPE[JU_ZI_TYPE["SEWZ"] = 9] = "SEWZ";
        JU_ZI_TYPE[JU_ZI_TYPE["SJ"] = 10] = "SJ";
    })(JU_ZI_TYPE = juzi.JU_ZI_TYPE || (juzi.JU_ZI_TYPE = {}));
    juzi.JUZIList = [JU_ZI_TYPE.SZ, JU_ZI_TYPE.ZX, JU_ZI_TYPE.SX, JU_ZI_TYPE.ZY, JU_ZI_TYPE.LX, JU_ZI_TYPE.SB, JU_ZI_TYPE.DJ, JU_ZI_TYPE.SJXL, JU_ZI_TYPE.SXD, JU_ZI_TYPE.SEWZ, JU_ZI_TYPE.SJ];
    var JuZiGuanLi = (function () {
        function JuZiGuanLi() {
        }
        return JuZiGuanLi;
    }());
    juzi.JuZiGuanLi = JuZiGuanLi;
    __reflect(JuZiGuanLi.prototype, "juzi.JuZiGuanLi");
})(juzi || (juzi = {}));
//# sourceMappingURL=JuZiGuanLi.js.map