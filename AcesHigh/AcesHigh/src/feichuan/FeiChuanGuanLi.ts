module FC_Console {
    //按体积区分
    export let boss_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();
    export let da_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();
    export let zhong_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();
    export let xiao_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();
    export let wei_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();
    //所有飞船
    export let all_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();

    //按飞船形状 飞船类型 1.宽体 2.纵向 3.旋转 4.正面耐打 5.通用

    export let kuan_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();
    export let zong_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();
    export let xuan_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();
    export let nai_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();
    export let tong_list: Array<feichuan.FeiChuanInfo> = new Array<feichuan.FeiChuanInfo>();






    export function addFcInfo(info: feichuan.FeiChuanInfo) {
        if (info.ti_ji == 5) {
            boss_list.push(info);
        }

        if (info.ti_ji == 4) {
            da_list.push(info);
        }

        if (info.ti_ji == 3) {
            zhong_list.push(info);
        }

        if (info.ti_ji == 2) {
            xiao_list.push(info);
        }

        if (info.ti_ji == 1) {
            wei_list.push(info);
        }

        if (info.fc_type == 1) {
            kuan_list.push(info)
        }

        if (info.fc_type == 2) {
            zong_list.push(info)
        }

        if (info.fc_type == 3) {
            xuan_list.push(info)
        }

        if (info.fc_type == 4) {
            nai_list.push(info)
        }

        if (info.fc_type == 5) {
            tong_list.push(info)
        }



        all_list.push(info);

    }
}