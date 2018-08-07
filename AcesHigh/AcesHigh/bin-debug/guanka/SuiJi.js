var guanqia;
(function (guanqia) {
    //随机句子
    function juzi_suiji() {
        var num = suiji.GetRandomNum(0, 10);
        //上中模式
        if (num == juzi.JU_ZI_TYPE.SZ) {
        }
        return null;
    }
    guanqia.juzi_suiji = juzi_suiji;
    //随机句子
    function getJz() {
        var jz = new juzi.JuZiGuanLi(1);
        var size = FC_Console.all_list.length;
        var one = FC_Console.all_list[suiji.GetRandomNum(0, size)];
        return jz;
    }
    guanqia.getJz = getJz;
})(guanqia || (guanqia = {}));
//# sourceMappingURL=SuiJi.js.map