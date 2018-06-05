module GameConstant {
    //阵营
    export enum ZHEN_YING {
        WO_JUN = 0,//敌军
        DI_JUN = 1,//我军
        ZHONG_LI = 2// 陨石 废甲等
    }

    //碰撞组
    export let WO_JUN: number = Math.pow(2, 1);
    export let DI_JUN: number = Math.pow(2, 2);
    export let ZHONG_LI: number = Math.pow(2, 3);

    export let hearList: Array<mokuai.MoKuaiBase>;
    export let mark: number = 0;


    export function diaoluo(fc: feichuan.FeiChuanBase) {

        //将飞船分解列表 清空
        fc.updataFenJie();
        let map = fc.moKuaiList;
        mark = 0;
        let hx: mokuai.MoKuaiBase;
        //普通飞船
        if (fc.fc_type == feichuan.FC_TYPE.DIJI) {

            hx = fc.hx;
            //标记核心
            if (hx) {
                hx.mark_number = mark;
            }

        }
        //残骸
        if (fc.fc_type == feichuan.FC_TYPE.CANHAI) {
            hx = markCanHai(fc);
        }

        //拓扑
        tuopu(map, hx, fc);
        // 染色 删除
        dell(map, fc)
    }

    //标记残骸 虚拟核心
    function markCanHai(fc: feichuan.FeiChuanBase): mokuai.MoKuaiBase {
        for (let i = 0; i < fc.moKuaiList.length; i++) {
            for (let j = 0; j < fc.moKuaiList[i].length; j++) {
                if (fc.moKuaiList[i][j]) {

                    fc.moKuaiList[i][j].mark_number = mark;
                    return fc.moKuaiList[i][j];
                }
            }
        }
    }

    //删除掉落
    function dellDiaoluo(fc: feichuan.FeiChuanBase, mark: number) {
        for (let i = 1; i < mark; i++) {

        }
    }

    //飞船矩阵拓扑
    function tuopu(map: Array<Array<mokuai.MoKuaiBase>>, hx: mokuai.MoKuaiBase, fc: feichuan.FeiChuanBase) {
        if (!hx) {
            //将所有节点标记为 1
            for (let h = 0; h < map.length; h++) {
                for (let w = 0; w < map[h].length; w++) {
                    if (map[h][w]) {
                        map[h][w].mark_number = 1;
                    }
                }
            }
            return;
        }
        hearList = new Array<mokuai.MoKuaiBase>();
        hearList.push(hx);
        //主题 抽离出来
        while (hearList.length > 0) {
            zhixing(map, hearList.shift(), fc);
        }

        //残骸
        for (let i = 0; i < 10; i++) {
            if (!hasMark(map, fc)) {
                break;
            }
        }

    }

    function dell(map: Array<Array<mokuai.MoKuaiBase>>, fc: feichuan.FeiChuanBase) {
        for (let h = 0; h < map.length; h++) {
            for (let w = 0; w < map[h].length; w++) {
                if (map[h][w]) {
                    //将船体模块添加到分解列表 并从船体上删除
                    if (map[h][w].mark_number > 0) {
                        fc.fen_jie[map[h][w].mark_number].push(map[h][w]);
                        fc.removeShape(map[h][w].boxShape);
                        fc.battle_scene.removeChild(map[h][w]);
                        map[h][w] = null;
                        continue;
                    }
                    //重新标记
                    map[h][w].mark_number = -1;
                }
            }
        }
    }

    function hasMark(map: Array<Array<mokuai.MoKuaiBase>>, fc: feichuan.FeiChuanBase): boolean {
        mark++;

        hearList = new Array<mokuai.MoKuaiBase>();
        let b: boolean = false;
        for (let h = 0; h < map.length; h++) {
            for (let w = 0; w < map[h].length; w++) {
                if (map[h][w] && map[h][w].mark_number == -1) {
                    map[h][w].mark_number = mark;
                    hearList.push(map[h][w])
                    b = true;
                    break;
                }
            }
            if (b) {
                break;
            }
        }

        while (hearList.length > 0) {
            zhixing(map, hearList.shift(), fc);
        }


        return b;
    }


    //做标记  当前herd节点的 拓扑
    function zhixing(map: Array<Array<mokuai.MoKuaiBase>>, jd: mokuai.MoKuaiBase, fc: feichuan.FeiChuanBase) {
        let w = jd.moKuaiPost.x;
        let h = jd.moKuaiPost.y;

        let hh: number;
        let ww: number;

        //上
        hh = h - 1;
        ww = w;
        hhww(map, mark, hh, ww, fc);
        //下
        hh = h + 1;
        ww = w;
        hhww(map, mark, hh, ww, fc);
        //左
        hh = h;
        ww = w - 1;
        hhww(map, mark, hh, ww, fc);

        //右
        hh = h;
        ww = w + 1;
        hhww(map, mark, hh, ww, fc);
    }

    function hhww(map: Array<Array<mokuai.MoKuaiBase>>, mark: number, hh: number, ww: number, fc: feichuan.FeiChuanBase) {
        if (hh >= 0 &&
            ww >= 0 &&
            hh < map.length &&
            ww < map[0].length
        ) {
            if (map[hh][ww] && map[hh][ww].mark_number == -1) {
                map[hh][ww].mark_number = mark;
                //将拓扑加入herd列表
                hearList.push(map[hh][ww]);
            }
        }
    }

    //检测飞船模块数量 并删除
    export function chackMoKuaiNumber(fc: feichuan.FeiChuanBase): boolean {
        let is_save: boolean = false;
        for (let h = 0; h < fc.moKuaiList.length; h++) {
            for (let w = 0; w < fc.moKuaiList[h].length; w++) {
                if (fc.moKuaiList[h][w]) {
                    is_save = true;
                }
            }
        }
        if (!is_save) {
            let inx = fc.battle_scene.dijis.indexOf(fc);
            fc.battle_scene.dijis.splice(inx);
            fc.battle_scene.world.removeBody(fc);
            fc = null;
            return false;
        }
        return true;
    }


}