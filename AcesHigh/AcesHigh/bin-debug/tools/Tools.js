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
})(Tools || (Tools = {}));
//# sourceMappingURL=Tools.js.map