module Tools {

    //p2  坐标 转 白鹭 坐标
    export function p2TOegretPoitn(p: egret.Point): egret.Point {
        return egret.Point.create(p.x * Physics.factor, scene.battle_sceneH - p.y * Physics.factor);
    }

    // 白鹭 坐标 转 p2 坐标ßß
    export function egretTOp2(p: egret.Point): egret.Point {
        return egret.Point.create(p.x / Physics.factor, (scene.battle_sceneH - p.y) / Physics.factor);
    }

    //比率
    export function bilv(xx: number, xy: number, base: number): egret.Point {
        let bl: number = 1;

        let bx: number;
        let by: number;
        if (xx < 0) {
            bx = base * -1;
        }

        if (xx > 0) {
            bx = base;
        }
        if (xx == 0) {
            xx = 0.001
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
            bl = Math.abs(xy) / Math.abs(xx)
            return egret.Point.create(bx, by * bl);
        }

        if (Math.abs(xy) > Math.abs(xx)) {
            bl = Math.abs(xx) / Math.abs(xy)
            return egret.Point.create(bx * bl, by);
        }

        if (Math.abs(xy) == Math.abs(xx)) {

            return egret.Point.create(bx, by);
        }


    }

    //格子坐标转 物理坐标
    export function gridTop2(x: number, y: number): egret.Point {
        let ex = x * 100 + 50;
        let ey = y * 100 + 50;
        return egret.Point.create(ex / Physics.factor, (scene.battle_sceneH - ey) / Physics.factor);
    }

    //格子坐标转 屏幕坐标
    export function gridToEgret(x: number, y: number): egret.Point {

        return egret.Point.create((x * 100 + 50), (y * 100 + 50));
    }
}