var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Guanka = (function () {
    function Guanka(scene) {
        this.scene = scene;
        this.init();
    }
    Guanka.prototype.init = function () {
        this.bos = [
            //第一波
            [
                //第一回合
                [{ nowP: egret.Point.create(1300, 800), toP: egret.Point.create(1300, 1200), sName: "6_1_json" }],
                //第二回合
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "6_1_json" }, { nowP: egret.Point.create(1300, 800), toP: egret.Point.create(1300, 1200), sName: "6_1_json" }],
                //第三回合
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "6_1_json" }, { nowP: egret.Point.create(1300, 800), toP: egret.Point.create(1300, 1200), sName: "6_1_json" }],
            ],
            //第二波
            [
                //第一回合
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "6_1_json" }, { nowP: egret.Point.create(1300, 800), toP: egret.Point.create(1300, 1200), sName: "6_1_json" }],
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "6_1_json" }, { nowP: egret.Point.create(1300, 800), toP: egret.Point.create(1300, 1200), sName: "6_1_json" }],
            ],
            //第三波
            [
                //第一回合
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "6_1_json" }, { nowP: egret.Point.create(1300, 800), toP: egret.Point.create(1300, 1200), sName: "6_1_json" }],
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "6_1_json" }, { nowP: egret.Point.create(1300, 800), toP: egret.Point.create(1300, 1200), sName: "6_1_json" }],
            ]
        ];
    };
    return Guanka;
}());
__reflect(Guanka.prototype, "Guanka");
//# sourceMappingURL=GuanKa.js.map