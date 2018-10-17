var GameConstant;
(function (GameConstant) {
    //阵营
    var ZHEN_YING;
    (function (ZHEN_YING) {
        ZHEN_YING[ZHEN_YING["WO_JUN"] = 0] = "WO_JUN";
        ZHEN_YING[ZHEN_YING["DI_JUN"] = 1] = "DI_JUN";
        ZHEN_YING[ZHEN_YING["ZHONG_LI"] = 2] = "ZHONG_LI";
        ZHEN_YING[ZHEN_YING["WO_JUN_ZIDAN"] = 3] = "WO_JUN_ZIDAN";
        ZHEN_YING[ZHEN_YING["DI_JUN_ZIDAN"] = 4] = "DI_JUN_ZIDAN";
        ZHEN_YING[ZHEN_YING["DIAO_LUO"] = 5] = "DIAO_LUO";
    })(ZHEN_YING = GameConstant.ZHEN_YING || (GameConstant.ZHEN_YING = {}));
    //碰撞组
    GameConstant.XING_XING = Math.pow(2, 0); //不与任何组碰撞˝
    GameConstant.WO_JUN = Math.pow(2, 1);
    GameConstant.DI_JUN = Math.pow(2, 2);
    GameConstant.ZHONG_LI = Math.pow(2, 3);
    GameConstant.WO_JUN_ZIDAN = Math.pow(2, 4);
    GameConstant.DI_JUN_ZIDAN = Math.pow(2, 5);
    GameConstant.DIAO_LUO = Math.pow(2, 6);
    GameConstant.mark = 0;
    function diaoluo(fc) {
        //将飞船分解列表 清空
        fc.updataFenJie();
        var map = fc.moKuaiList;
        GameConstant.mark = 0;
        var hx;
        //普通飞船
        if (fc.fc_type == feichuan.FC_TYPE.DIJI) {
            hx = fc.hx;
            //标记核心
            if (hx) {
                hx.mark_number = GameConstant.mark;
            }
        }
        //残骸
        if (fc.fc_type == feichuan.FC_TYPE.CANHAI) {
            hx = markCanHai(fc);
        }
        //拓扑
        tuopu(map, hx, fc);
        // 染色 删除
        dell(map, fc);
        //如果敌机被击毁移除敌机
        if (fc.fc_type == feichuan.FC_TYPE.DIJI) {
            if (fc.hx == null) {
                fc.battle_scene.removeTheFcInTheGame(fc);
            }
        }
    }
    GameConstant.diaoluo = diaoluo;
    //标记残骸 虚拟核心
    function markCanHai(fc) {
        for (var i = 0; i < fc.moKuaiList.length; i++) {
            for (var j = 0; j < fc.moKuaiList[i].length; j++) {
                if (fc.moKuaiList[i][j]) {
                    fc.moKuaiList[i][j].mark_number = GameConstant.mark;
                    return fc.moKuaiList[i][j];
                }
            }
        }
    }
    //删除掉落
    function dellDiaoluo(fc, mark) {
        for (var i = 1; i < mark; i++) {
        }
    }
    //飞船矩阵拓扑
    function tuopu(map, hx, fc) {
        if (!hx) {
            //将所有节点标记为 1
            for (var h = 0; h < map.length; h++) {
                for (var w = 0; w < map[h].length; w++) {
                    if (map[h][w]) {
                        map[h][w].mark_number = 1;
                    }
                }
            }
            return;
        }
        GameConstant.hearList = new Array();
        GameConstant.hearList.push(hx);
        //主题 抽离出来
        while (GameConstant.hearList.length > 0) {
            zhixing(map, GameConstant.hearList.shift(), fc);
        }
        //残骸
        for (var i = 0; i < 10; i++) {
            if (!hasMark(map, fc)) {
                break;
            }
        }
    }
    function dell(map, fc) {
        for (var h = 0; h < map.length; h++) {
            for (var w = 0; w < map[h].length; w++) {
                if (map[h][w]) {
                    //将船体模块添加到分解列表 并从船体上删除
                    if (map[h][w].mark_number > 0) {
                        //如果是武器 则移除
                        if (map[h][w] instanceof wuqi.WuQiBase) {
                            fc.removeWuQi(map[h][w]);
                        }
                        //如果有道具需要掉落
                        if (map[h][w].is_diao_luo) {
                            fc.battle_scene.diao_luo_dao_ju(map[h][w]);
                        }
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
    function hasMark(map, fc) {
        GameConstant.mark++;
        GameConstant.hearList = new Array();
        var b = false;
        for (var h = 0; h < map.length; h++) {
            for (var w = 0; w < map[h].length; w++) {
                if (map[h][w] && map[h][w].mark_number == -1) {
                    map[h][w].mark_number = GameConstant.mark;
                    GameConstant.hearList.push(map[h][w]);
                    b = true;
                    break;
                }
            }
            if (b) {
                break;
            }
        }
        while (GameConstant.hearList.length > 0) {
            zhixing(map, GameConstant.hearList.shift(), fc);
        }
        return b;
    }
    //做标记  当前herd节点的 拓扑
    function zhixing(map, jd, fc) {
        var w = jd.moKuaiPost.x;
        var h = jd.moKuaiPost.y;
        var hh;
        var ww;
        //上
        hh = h - 1;
        ww = w;
        hhww(map, GameConstant.mark, hh, ww, fc);
        //下
        hh = h + 1;
        ww = w;
        hhww(map, GameConstant.mark, hh, ww, fc);
        //左
        hh = h;
        ww = w - 1;
        hhww(map, GameConstant.mark, hh, ww, fc);
        //右
        hh = h;
        ww = w + 1;
        hhww(map, GameConstant.mark, hh, ww, fc);
    }
    function hhww(map, mark, hh, ww, fc) {
        if (hh >= 0 &&
            ww >= 0 &&
            hh < map.length &&
            ww < map[0].length) {
            if (map[hh][ww] && map[hh][ww].mark_number == -1) {
                map[hh][ww].mark_number = mark;
                //将拓扑加入herd列表
                GameConstant.hearList.push(map[hh][ww]);
            }
        }
    }
    //检测飞船模块数量 并删除
    function chackMoKuaiNumber(fc) {
        var is_save = false;
        for (var h = 0; h < fc.moKuaiList.length; h++) {
            for (var w = 0; w < fc.moKuaiList[h].length; w++) {
                if (fc.moKuaiList[h][w]) {
                    is_save = true;
                }
            }
        }
        if (!is_save) {
            fc.battle_scene.removeTheFcInTheGame(fc);
            return false;
        }
        return true;
    }
    GameConstant.chackMoKuaiNumber = chackMoKuaiNumber;
})(GameConstant || (GameConstant = {}));
//# sourceMappingURL=GameConstant.js.map