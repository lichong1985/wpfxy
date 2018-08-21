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
        function JuZiGuanLi(nan_du) {
            //全地图可以放下  每个 格子大小约等于一个 飞机的方块 
            this.MAX_NUMBER = 30 * 50;
            this.fc_list = new Array();
            this.fc_info_list = new Array();
            //当前句子 是否通过
            this.is_next = false;
            this.nan_du = nan_du;
        }
        //初始化飞机 数量
        JuZiGuanLi.prototype.randomNum = function () {
            return suiji.GetRandomNum(1, 5);
        };
        //获取随机飞船信息
        JuZiGuanLi.prototype.getandomFc = function () {
            var i = suiji.GetRandomNum(0, (FC_Console.all_list.length - 1));
            return FC_Console.all_list[i];
        };
        // 初始化飞船信息
        JuZiGuanLi.prototype.initFcInfo = function () {
            var num = this.randomNum();
            num += 1;
            // num = 1;
            for (var i = 0; i < num; i++) {
                var info = this.getandomFc();
                this.fc_info_list.push(this.getandomFc());
            }
        };
        //刷新相关
        JuZiGuanLi.prototype.upSomeThing = function () {
        };
        //添加飞机到 战场
        JuZiGuanLi.prototype.addFc = function (scene) {
            for (var _i = 0, _a = this.fc_info_list; _i < _a.length; _i++) {
                var info = _a[_i];
                info.reRandomPos();
                var fc = new feichuan.XiaoBing(scene, info);
                scene.dijis.push(fc);
            }
        };
        return JuZiGuanLi;
    }());
    juzi.JuZiGuanLi = JuZiGuanLi;
    __reflect(JuZiGuanLi.prototype, "juzi.JuZiGuanLi");
})(juzi || (juzi = {}));
//# sourceMappingURL=JuZiGuanLi.js.map