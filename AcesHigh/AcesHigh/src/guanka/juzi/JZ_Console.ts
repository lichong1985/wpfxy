module JZ_Console {
    export interface get_jz_info {
        (): juzi.JuZiGuanLi
    }

    export let juzi_info: get_jz_info[] = [function (): juzi.JuZiGuanLi { return new juzi.LuanZouJuzi(1) }, function (): juzi.JuZiGuanLi { return new juzi.FangZhenJuzi(1) }];
}