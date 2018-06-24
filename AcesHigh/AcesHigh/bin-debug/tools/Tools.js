var Tools;
(function (Tools) {
    //p2  坐标 转 白鹭 坐标
    function p2TOegretPoitn(p) {
        return egret.Point.create(p.x * Physics.factor, scene.battle_sceneH - p.y * Physics.factor);
    }
    Tools.p2TOegretPoitn = p2TOegretPoitn;
    // 白鹭 坐标 转 p2 坐标ßß
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
})(Tools || (Tools = {}));
//# sourceMappingURL=Tools.js.map