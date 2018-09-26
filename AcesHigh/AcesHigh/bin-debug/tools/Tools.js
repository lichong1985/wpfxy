var Tools;
(function (Tools) {
    //屏幕宽30个格子
    Tools.GE_ZI_NUM_W = 30;
    //屏幕高50个格子
    Tools.GE_ZI_NUM_H = 50;
    //p2  坐标 转 白鹭 坐标
    function p2TOegretPoitn(p) {
        return egret.Point.create(p.x * Physics.factor, scene.battle_sceneH - p.y * Physics.factor);
    }
    Tools.p2TOegretPoitn = p2TOegretPoitn;
    // 白鹭 坐标 转 p2 坐标
    function egretTOp2(p) {
        return egret.Point.create(p.x / Physics.factor, (scene.battle_sceneH - p.y) / Physics.factor);
    }
    Tools.egretTOp2 = egretTOp2;
    //比率
    function bilv(xx, xy, base) {
        var bl = 1;
        var bx;
        var by;
        if (xx < 0) {
            bx = base * -1;
        }
        if (xx > 0) {
            bx = base;
        }
        if (xx == 0) {
            xx = 0.001;
        }
        if (xy == 0) {
            xy = 0.001;
        }
        if (xy < 0) {
            by = base * -1;
        }
        if (xy > 0) {
            by = base;
        }
        if (Math.abs(xx) > Math.abs(xy)) {
            bl = Math.abs(xy) / Math.abs(xx);
            return egret.Point.create(bx, by * bl);
        }
        if (Math.abs(xy) > Math.abs(xx)) {
            bl = Math.abs(xx) / Math.abs(xy);
            return egret.Point.create(bx * bl, by);
        }
        if (Math.abs(xy) == Math.abs(xx)) {
            return egret.Point.create(bx, by);
        }
    }
    Tools.bilv = bilv;
    //格子坐标转 物理坐标
    function gridTop2(x, y) {
        var w_base = getPhoneW() / Tools.GE_ZI_NUM_W;
        var h_base = getPhoneH() / Tools.GE_ZI_NUM_H;
        var ex = x * w_base + w_base * 0.5 + 1000;
        var ey = y * h_base + h_base * 0.5 + 1000;
        return egret.Point.create(ex / Physics.factor, (scene.battle_sceneH - ey) / Physics.factor);
    }
    Tools.gridTop2 = gridTop2;
    //格子坐标转 屏幕坐标
    function gridToEgret(x, y) {
        var w_base = getPhoneW() / Tools.GE_ZI_NUM_W;
        var h_base = getPhoneH() / Tools.GE_ZI_NUM_H;
        return egret.Point.create((x * w_base + w_base * 0.5 + 1000), (y * h_base + h_base * 0.5 + 1000));
    }
    Tools.gridToEgret = gridToEgret;
    //获取设备分辨率宽
    function getPhoneW() {
        // return document.documentElement.clientWidth;
        return 640;
    }
    Tools.getPhoneW = getPhoneW;
    //获取设备分辨率高
    function getPhoneH() {
        // return document.documentElement.clientHeight;
        return 1136;
    }
    Tools.getPhoneH = getPhoneH;
    //求两个点之间的向量
    function xiangliang(from, to, sd) {
        var jl = egret.Point.distance(to, from);
        var pi = sd / jl;
        var rx = (to.x - from.x) * pi;
        var ry = (to.y - from.y) * pi;
        return egret.Point.create(rx, ry);
    }
    Tools.xiangliang = xiangliang;
    //生成随机数
    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }
    Tools.GetRandomNum = GetRandomNum;
})(Tools || (Tools = {}));
//# sourceMappingURL=Tools.js.map