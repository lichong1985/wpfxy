module mokuai {
    //普通装甲
    export let lv_1: any = { "r": 236, "g": 255, "b": 249 };
    export let lv_2: any = { "r": 168, "g": 174, "b": 159 };
    export let lv_3: any = { "r": 129, "g": 146, "b": 179 };
    export let lv_4: any = { "r": 14, "g": 84, "b": 158 };
    export let lv_5: any = { "r": 31, "g": 100, "b": 99 };
    export let lv_6: any = { "r": 32, "g": 89, "b": 68 };

    let lvs: any[] = [null, mokuai.lv_1, mokuai.lv_2, mokuai.lv_2, mokuai.lv_3, mokuai.lv_3, mokuai.lv_4, mokuai.lv_4, mokuai.lv_5, mokuai.lv_5, mokuai.lv_6, mokuai.lv_6]


    //残骸
    export let lv_1_ch: any = { "r": 233, "g": 104, "b": 6 };
    export let lv_2_ch: any = { "r": 235, "g": 59, "b": 7 };
    export let lv_3_ch: any = { "r": 174, "g": 27, "b": 4 };

    let lvs_ch: any[] = [null, mokuai.lv_1_ch, mokuai.lv_2_ch, mokuai.lv_3_ch]


    //武器
    export let wq_1: any = { "r": 33, "g": 255, "b": 105 };
    export let wq_2: any = { "r": 79, "g": 157, "b": 255 };
    export let wq_3: any = { "r": 33, "g": 255, "b": 105 };
    export let wq_4: any = { "r": 101, "g": 255, "b": 173 };
    export let wq_5: any = { "r": 130, "g": 35, "b": 204 };

    let wqs: any[] = [null, wq_1, wq_2, wq_3, wq_4, wq_5]

    //返回普通装甲渐变色
    export function getRGB_PT(pi: number, level: number): any {

        let base = lvs[level];
        let r = Math.floor(Math.abs(lv_1.r - base.r) * pi) + base.r
        let g = Math.floor(Math.abs(lv_1.g - base.g) * pi) + base.g
        let b = Math.floor(Math.abs(lv_1.b - base.b) * pi) + base.b

        return { "r": r, "g": g, "b": b };
    }

    //返回残骸装甲渐变色
    export function getRGB_CH(pi: number, level: number): any {

        let base = lvs_ch[level];
        let r = Math.floor(Math.abs(lv_1_ch.r - base.r) * pi) + base.r
        let g = Math.floor(Math.abs(lv_1_ch.g - base.g) * pi) + base.g
        let b = Math.floor(Math.abs(lv_1_ch.b - base.b) * pi) + base.b


        return { "r": r, "g": g, "b": b };
    }

    //返回武器渐变色
    export function getRGB_WQ(pi: number, level: number): any {

        let base = wqs[level];
        let r = Math.floor(Math.abs(lv_1_ch.r - base.r) * pi) + base.r
        let g = Math.floor(Math.abs(lv_1_ch.g - base.g) * pi) + base.g
        let b = Math.floor(Math.abs(lv_1_ch.b - base.b) * pi) + base.b


        return { "r": r, "g": g, "b": b };
    }

}