module suiji {
    //随机核心
    export enum SJ_HE_XIN {
        HU_DUN,//护盾
        ZI_YU,//自愈
        JI_SU,//极速
    }

    //随机颜色
    export enum SJ_YAN_SE {
        WU_QI,//武器
        ZHUANG_JIA,//装甲
        RAN_LIAO,//燃料
    }
    export let HXS: SJ_HE_XIN[] = [SJ_HE_XIN.HU_DUN, SJ_HE_XIN.ZI_YU, SJ_HE_XIN.JI_SU];
    export let YSS: SJ_YAN_SE[] = [SJ_YAN_SE.WU_QI, SJ_YAN_SE.ZHUANG_JIA, SJ_YAN_SE.RAN_LIAO];
    export let LVS: number[] = [1, 2, 3, 4, 5];
    export let DIAO_LUO_GAI_LV: number = 20;

    //核心掉落权重
    export let HX_QUN_ZHONG: number[] = [30, 30, 30];
    export let HX_QUN_ZHONG_ALL: number = 90
    //颜色权重
    export let YS_QUN_ZHONG: number[] = [2, 80, 3];
    export let YS_QUN_ZHONG_ALL: number = 85;
    //等级权重、
    export let LV_QUN_ZHONG: number[] = [50, 30, 10, 5, 100];
    export let LV_QUN_ZHONG_ALL: number = 195;

    //燃料等急权重
    export let RL_LV_QZ: number[] = [50, 30, 10];
    export let RL_LV_QZ_ALL: number = 90;






    //随机核心
    export function suiji_hexin(): SJ_HE_XIN {
        let qz = suiji.GetRandomNum(0, suiji.HX_QUN_ZHONG_ALL);
        return suiji.HXS[suiji.getQuanZhongKey(qz, suiji.HX_QUN_ZHONG)];
    }

    //随机颜色
    export function suiji_yanse(): SJ_YAN_SE {
        let qz = suiji.GetRandomNum(0, suiji.YS_QUN_ZHONG_ALL);
        return suiji.YSS[suiji.getQuanZhongKey(qz, suiji.YS_QUN_ZHONG)];

    }
    // 随机该模块是否是掉落模块
    export function isDiaoLuoMoKuai(): boolean {
        let g = suiji.GetRandomNum(0, suiji.DIAO_LUO_GAI_LV);
        return g == 1;
    }

    //随机等级
    export function suiji_level(type: suiji.SJ_YAN_SE): number {
        if (type == suiji.SJ_YAN_SE.RAN_LIAO) {
            let key = suiji.GetRandomNum(0, RL_LV_QZ_ALL);
            return LVS[getQuanZhongKey(key, RL_LV_QZ)]
        }

        let qz = suiji.GetRandomNum(0, suiji.LV_QUN_ZHONG_ALL)
        return suiji.LVS[suiji.getQuanZhongKey(qz, suiji.LV_QUN_ZHONG)];
    }

    /**
     * 生成范围随机数
     * @Min 最小值
     * @Max 最大值
     */
    export function GetRandomNum(Min, Max): number {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }

    //返回权重下标
    export function getQuanZhongKey(num: number, qz: number[]): number {
        let all: number = 0;
        let inx: number = 0;
        for (let i of qz) {
            all += i;
            if (num < all) {
                return inx;
            }
            inx++;
        }
        return 0;
    }

}