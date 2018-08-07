var suiji;
(function (suiji) {
    //随机核心
    var SJ_HE_XIN;
    (function (SJ_HE_XIN) {
        SJ_HE_XIN[SJ_HE_XIN["HU_DUN"] = 0] = "HU_DUN";
        SJ_HE_XIN[SJ_HE_XIN["ZI_YU"] = 1] = "ZI_YU";
        SJ_HE_XIN[SJ_HE_XIN["JI_SU"] = 2] = "JI_SU";
    })(SJ_HE_XIN = suiji.SJ_HE_XIN || (suiji.SJ_HE_XIN = {}));
    //随机颜色
    var SJ_YAN_SE;
    (function (SJ_YAN_SE) {
        SJ_YAN_SE[SJ_YAN_SE["WU_QI"] = 0] = "WU_QI";
        SJ_YAN_SE[SJ_YAN_SE["ZHUANG_JIA"] = 1] = "ZHUANG_JIA";
        SJ_YAN_SE[SJ_YAN_SE["RAN_LIAO"] = 2] = "RAN_LIAO";
    })(SJ_YAN_SE = suiji.SJ_YAN_SE || (suiji.SJ_YAN_SE = {}));
    suiji.HXS = [SJ_HE_XIN.HU_DUN, SJ_HE_XIN.ZI_YU, SJ_HE_XIN.JI_SU];
    suiji.YSS = [SJ_YAN_SE.WU_QI, SJ_YAN_SE.ZHUANG_JIA, SJ_YAN_SE.RAN_LIAO];
    suiji.LVS = [1, 2, 3, 4, 5];
    //掉落概率
    suiji.DIAO_LUO_GAI_LV = 20;
    //核心掉落权重
    suiji.HX_QUN_ZHONG = [30, 30, 30];
    suiji.HX_QUN_ZHONG_ALL = 90;
    //颜色权重
    suiji.YS_QUN_ZHONG = [40, 80, 3];
    suiji.YS_QUN_ZHONG_ALL = 123;
    //等级权重、
    suiji.LV_QUN_ZHONG = [50, 30, 10, 5, 100];
    suiji.LV_QUN_ZHONG_ALL = 195;
    //燃料等急权重
    suiji.RL_LV_QZ = [50, 30, 10];
    suiji.RL_LV_QZ_ALL = 90;
    //武器信息
    suiji.WQ_TYPE = [wuqi.WUQI_TYPE.PU_TONG, wuqi.WUQI_TYPE.SAN_DAN, wuqi.WUQI_TYPE.DAO_DAN, wuqi.WUQI_TYPE.SHE_XIAN, wuqi.WUQI_TYPE.DING_XIANG, wuqi.WUQI_TYPE.YU_LEI, wuqi.WUQI_TYPE.LUO_XUAN, wuqi.WUQI_TYPE.CHANG_DING, wuqi.WUQI_TYPE.ZHONG_CHUI];
    //武器权重
    suiji.WQ_TYPE_QZ = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    suiji.WQ_TYPE_QZ_ALL = 9;
    //随机核心
    function suiji_hexin() {
        var qz = suiji.GetRandomNum(0, suiji.HX_QUN_ZHONG_ALL);
        return suiji.HXS[suiji.getQuanZhongKey(qz, suiji.HX_QUN_ZHONG)];
    }
    suiji.suiji_hexin = suiji_hexin;
    //随机颜色
    function suiji_yanse() {
        var qz = suiji.GetRandomNum(0, suiji.YS_QUN_ZHONG_ALL);
        return suiji.YSS[suiji.getQuanZhongKey(qz, suiji.YS_QUN_ZHONG)];
    }
    suiji.suiji_yanse = suiji_yanse;
    // 随机该模块是否是掉落模块
    function isDiaoLuoMoKuai() {
        var g = suiji.GetRandomNum(0, suiji.DIAO_LUO_GAI_LV);
        return g == 1;
    }
    suiji.isDiaoLuoMoKuai = isDiaoLuoMoKuai;
    //随机等级
    function suiji_level(type) {
        if (type == suiji.SJ_YAN_SE.RAN_LIAO) {
            var key = suiji.GetRandomNum(0, suiji.RL_LV_QZ_ALL);
            return suiji.LVS[getQuanZhongKey(key, suiji.RL_LV_QZ)];
        }
        var qz = suiji.GetRandomNum(0, suiji.LV_QUN_ZHONG_ALL);
        return suiji.LVS[suiji.getQuanZhongKey(qz, suiji.LV_QUN_ZHONG)];
    }
    suiji.suiji_level = suiji_level;
    //随机武器
    function suiji_wuqi() {
        var key = suiji.GetRandomNum(0, suiji.WQ_TYPE_QZ_ALL);
        return suiji.WQ_TYPE[getQuanZhongKey(key, suiji.WQ_TYPE_QZ)];
    }
    suiji.suiji_wuqi = suiji_wuqi;
    /**
     * 生成范围随机数
     * @Min 最小值
     * @Max 最大值
     */
    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }
    suiji.GetRandomNum = GetRandomNum;
    //返回权重下标
    function getQuanZhongKey(num, qz) {
        var all = 0;
        var inx = 0;
        for (var _i = 0, qz_1 = qz; _i < qz_1.length; _i++) {
            var i = qz_1[_i];
            all += i;
            if (num < all) {
                return inx;
            }
            inx++;
        }
        return 0;
    }
    suiji.getQuanZhongKey = getQuanZhongKey;
    //随机方向 上下左右 1234
    function randomFangXiang() {
        return GetRandomNum(1, 4);
    }
    suiji.randomFangXiang = randomFangXiang;
    //返回随机坐标 简单
    function randomTargetPos_simple() {
        var x;
        var y;
        x = GetRandomNum(0, 30);
        y = GetRandomNum(0, 50);
        egret.log("随机坐标：" + x + "_" + y);
        return egret.Point.create(x, y);
    }
    suiji.randomTargetPos_simple = randomTargetPos_simple;
    //返回随机坐标 困难
    function randomTargetPos_hard() {
        var x;
        var y;
        x = GetRandomNum(-3, 33);
        y = GetRandomNum(-3, 53);
        return egret.Point.create(x, y);
    }
    suiji.randomTargetPos_hard = randomTargetPos_hard;
})(suiji || (suiji = {}));
//# sourceMappingURL=SuiJiBase.js.map