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
    //掉落概率
    export let DIAO_LUO_GAI_LV: number = 20;

    //核心掉落权重
    export let HX_QUN_ZHONG: number[] = [30, 30, 30];
    export let HX_QUN_ZHONG_ALL: number = 90
    //颜色权重
    export let YS_QUN_ZHONG: number[] = [40, 80, 3];
    export let YS_QUN_ZHONG_ALL: number = 123;
    //等级权重、
    export let LV_QUN_ZHONG: number[] = [50, 30, 10, 5, 100];
    export let LV_QUN_ZHONG_ALL: number = 195;

    //燃料等急权重
    export let RL_LV_QZ: number[] = [50, 30, 10];
    export let RL_LV_QZ_ALL: number = 90;

    //武器信息
    export let WQ_TYPE: wuqi.WUQI_TYPE[] = [wuqi.WUQI_TYPE.PU_TONG, wuqi.WUQI_TYPE.SAN_DAN, wuqi.WUQI_TYPE.DAO_DAN, wuqi.WUQI_TYPE.SHE_XIAN, wuqi.WUQI_TYPE.DING_XIANG, wuqi.WUQI_TYPE.YU_LEI, wuqi.WUQI_TYPE.LUO_XUAN, wuqi.WUQI_TYPE.CHANG_DING, wuqi.WUQI_TYPE.ZHONG_CHUI];
    //武器权重
    export let WQ_TYPE_QZ: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    export let WQ_TYPE_QZ_ALL: number = 9;





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


    //随机武器
    export function suiji_wuqi(): wuqi.WUQI_TYPE {
        let key = suiji.GetRandomNum(0, WQ_TYPE_QZ_ALL);
        return WQ_TYPE[getQuanZhongKey(key, suiji.WQ_TYPE_QZ)];
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

    //随机方向 上下左右 1234
    export function randomFangXiang(): number {
        return GetRandomNum(1, 4);
    }


    //返回随机坐标 简单
    export function randomTargetPos_simple(): egret.Point {
        let x: number;
        let y: number;
        x = GetRandomNum(0, 30);
        y = GetRandomNum(0, 50)
        egret.log("随机坐标：" + x + "_" + y)
        return egret.Point.create(x, y);
    }
    //返回随机坐标 困难
    export function randomTargetPos_hard(): egret.Point {
        let x: number;
        let y: number;
        x = GetRandomNum(-3, 33);
        y = GetRandomNum(-3, 53)
        return egret.Point.create(x, y);
    }

}