module Tools {

    //p2  坐标 转 白鹭 坐标
    export function p2TOegretPoitn(p: egret.Point): egret.Point {
        return egret.Point.create(p.x * Physics.factor, scene.battle_sceneH - p.y * Physics.factor);
    }

    // 白鹭 坐标 转 p2 坐标ßß
    export function egretTOp2(p: egret.Point): egret.Point {
        return egret.Point.create(p.x / Physics.factor, (scene.battle_sceneH - p.y) / Physics.factor);
    }
}