module Tools {
    //屏幕宽30个格子
    export let GE_ZI_NUM_W: number = 30;
    //屏幕高50个格子
    export let GE_ZI_NUM_H: number = 50;


    //p2  坐标 转 白鹭 坐标
    export function p2TOegretPoitn(p: egret.Point): egret.Point {
        return egret.Point.create(p.x * Physics.factor, scene.battle_sceneH - p.y * Physics.factor);
    }

    // 白鹭 坐标 转 p2 坐标
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
        let w_base = getPhoneW() / GE_ZI_NUM_W;
        let h_base = getPhoneH() / GE_ZI_NUM_H;
        let ex = x * w_base + w_base * 0.5 + 1000;
        let ey = y * h_base + h_base * 0.5 + 1000;

        return egret.Point.create(ex / Physics.factor, (scene.battle_sceneH - ey) / Physics.factor);
    }

    //格子坐标转 屏幕坐标
    export function gridToEgret(x: number, y: number): egret.Point {

        let w_base = getPhoneW() / GE_ZI_NUM_W;
        let h_base = getPhoneH() / GE_ZI_NUM_H;

        return egret.Point.create((x * w_base + w_base * 0.5 + 1000), (y * h_base + h_base * 0.5 + 1000));
    }

    //获取设备分辨率宽
    export function getPhoneW(): number {
        // return document.documentElement.clientWidth;
        //egret.MainContext.instance.stage.stageWidth和egret.MainContext.instance.stage.stageHeight 
        // egret.log("WWWWWWWWWWWWWWWWW:" + document.documentElement.clientWidth + " -- " + egret.MainContext.instance.stage.stageWidth + " -- " + Main.W);
        return egret.MainContext.instance.stage.stageWidth;
    }

    //获取设备分辨率高
    export function getPhoneH(): number {
        // return document.documentElement.clientHeight;
        // egret.log("HHHHHHHHHHHHHHHHH:" + document.documentElement.clientHeight + " -- " + egret.MainContext.instance.stage.stageHeight + " -- " + Main.H);
        return egret.MainContext.instance.stage.stageHeight;
    }

    //求两个点之间的向量
    export function xiangliang(from: egret.Point, to: egret.Point, sd: number): egret.Point {
        let jl = egret.Point.distance(to, from);
        let pi = sd / jl;

        let rx = (to.x - from.x) * pi;
        let ry = (to.y - from.y) * pi;
        return egret.Point.create(rx, ry);

    }

    //生成随机数
    export function GetRandomNum(Min, Max): number {
        let Range: number = Max - Min;
        let Rand: number = Math.random();
        return (Min + Math.round(Rand * Range));
    }
}