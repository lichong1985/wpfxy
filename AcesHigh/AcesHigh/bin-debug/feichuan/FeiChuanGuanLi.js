var FC_Console;
(function (FC_Console) {
    //按体积区分
    FC_Console.boss_list = new Array();
    FC_Console.da_list = new Array();
    FC_Console.zhong_list = new Array();
    FC_Console.xiao_list = new Array();
    FC_Console.wei_list = new Array();
    //所有飞船
    FC_Console.all_list = new Array();
    //按飞船形状 飞船类型 1.宽体 2.纵向 3.旋转 4.正面耐打 5.通用
    FC_Console.kuan_list = new Array();
    FC_Console.zong_list = new Array();
    FC_Console.xuan_list = new Array();
    FC_Console.nai_list = new Array();
    FC_Console.tong_list = new Array();
    function addFcInfo(info) {
        if (info.ti_ji == 5) {
            FC_Console.boss_list.push(info);
        }
        if (info.ti_ji == 4) {
            FC_Console.da_list.push(info);
        }
        if (info.ti_ji == 3) {
            FC_Console.zhong_list.push(info);
        }
        if (info.ti_ji == 2) {
            FC_Console.xiao_list.push(info);
        }
        if (info.ti_ji == 1) {
            FC_Console.wei_list.push(info);
        }
        if (info.fc_type == 1) {
            FC_Console.kuan_list.push(info);
        }
        if (info.fc_type == 2) {
            FC_Console.zong_list.push(info);
        }
        if (info.fc_type == 3) {
            FC_Console.xuan_list.push(info);
        }
        if (info.fc_type == 4) {
            FC_Console.nai_list.push(info);
        }
        if (info.fc_type == 5) {
            FC_Console.tong_list.push(info);
        }
        FC_Console.all_list.push(info);
    }
    FC_Console.addFcInfo = addFcInfo;
})(FC_Console || (FC_Console = {}));
//# sourceMappingURL=FeiChuanGuanLi.js.map