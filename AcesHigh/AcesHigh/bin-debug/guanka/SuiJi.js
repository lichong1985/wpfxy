var guanqia;
(function (guanqia) {
    //随机句子
    function juzi_suiji() {
        var num = suiji.GetRandomNum(0, 10);
        //上中模式
        if (num == juzi.JU_ZI_TYPE.SZ) {
            return new juzi.ShangZhongJuzi();
        }
        return null;
    }
    guanqia.juzi_suiji = juzi_suiji;
})(guanqia || (guanqia = {}));
//# sourceMappingURL=SuiJi.js.map