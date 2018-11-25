var mokuai;
(function (mokuai) {
    //普通装甲
    mokuai.lv_1 = { "r": 236, "g": 255, "b": 249 };
    mokuai.lv_2 = { "r": 168, "g": 174, "b": 159 };
    mokuai.lv_3 = { "r": 129, "g": 146, "b": 179 };
    mokuai.lv_4 = { "r": 14, "g": 84, "b": 158 };
    mokuai.lv_5 = { "r": 31, "g": 100, "b": 99 };
    mokuai.lv_6 = { "r": 32, "g": 89, "b": 68 };
    var lvs = [null, mokuai.lv_1, mokuai.lv_2, mokuai.lv_2, mokuai.lv_3, mokuai.lv_3, mokuai.lv_4, mokuai.lv_4, mokuai.lv_5, mokuai.lv_5, mokuai.lv_6, mokuai.lv_6];
    //残骸
    mokuai.lv_1_ch = { "r": 233, "g": 104, "b": 6 };
    mokuai.lv_2_ch = { "r": 235, "g": 59, "b": 7 };
    mokuai.lv_3_ch = { "r": 174, "g": 27, "b": 4 };
    var lvs_ch = [null, mokuai.lv_1_ch, mokuai.lv_2_ch, mokuai.lv_3_ch];
    //武器
    mokuai.wq_1 = { "r": 33, "g": 255, "b": 105 };
    mokuai.wq_2 = { "r": 79, "g": 157, "b": 255 };
    mokuai.wq_3 = { "r": 33, "g": 255, "b": 105 };
    mokuai.wq_4 = { "r": 101, "g": 255, "b": 173 };
    mokuai.wq_5 = { "r": 130, "g": 35, "b": 204 };
    var wqs = [null, mokuai.wq_1, mokuai.wq_2, mokuai.wq_3, mokuai.wq_4, mokuai.wq_5];
    //返回普通装甲渐变色
    function getRGB_PT(pi, level) {
        var base = lvs[level];
        var r = Math.floor(Math.abs(mokuai.lv_1.r - base.r) * pi) + base.r;
        var g = Math.floor(Math.abs(mokuai.lv_1.g - base.g) * pi) + base.g;
        var b = Math.floor(Math.abs(mokuai.lv_1.b - base.b) * pi) + base.b;
        return { "r": r, "g": g, "b": b };
    }
    mokuai.getRGB_PT = getRGB_PT;
    //返回残骸装甲渐变色
    function getRGB_CH(pi, level) {
        var base = lvs_ch[level];
        var r = Math.floor(Math.abs(mokuai.lv_1_ch.r - base.r) * pi) + base.r;
        var g = Math.floor(Math.abs(mokuai.lv_1_ch.g - base.g) * pi) + base.g;
        var b = Math.floor(Math.abs(mokuai.lv_1_ch.b - base.b) * pi) + base.b;
        return { "r": r, "g": g, "b": b };
    }
    mokuai.getRGB_CH = getRGB_CH;
    //返回武器渐变色
    function getRGB_WQ(pi, level) {
        var base = wqs[level];
        var r = Math.floor(Math.abs(mokuai.lv_1_ch.r - base.r) * pi) + base.r;
        var g = Math.floor(Math.abs(mokuai.lv_1_ch.g - base.g) * pi) + base.g;
        var b = Math.floor(Math.abs(mokuai.lv_1_ch.b - base.b) * pi) + base.b;
        return { "r": r, "g": g, "b": b };
    }
    mokuai.getRGB_WQ = getRGB_WQ;
})(mokuai || (mokuai = {}));
//# sourceMappingURL=Flilter.js.map