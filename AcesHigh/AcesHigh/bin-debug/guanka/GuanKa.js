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
            [
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 15), sName: "1_1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 15), sName: "1_2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_9_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_9_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_1_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_2_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_3_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_4_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_5_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_6_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_7_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_8_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_9_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_1_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_2_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_3_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_4_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_5_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_6_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_7_json" }],
                [{ nowP: egret.Point.create(15, -2), toP: egret.Point.create(15, 10), sName: "10_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "11_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "12_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "13_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "14_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_m2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_s_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_m_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "9_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_m_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_m_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_s_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_s_json" }],
            ],
            //第一波
            [
                //第一回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_m2_json" }],
                //第二回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_m3_json" }],
                //第三回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_m2_json" }],
            ],
            //第二波
            [
                //第一回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_m3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_m2_json" }],
            ],
            //第三波
            [
                //第一回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_m3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_m2_json" }],
            ],
            //第四波
            [
                //第一回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_m3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_m2_json" }],
            ]
        ];
    };
    return Guanka;
}());
__reflect(Guanka.prototype, "Guanka");
//# sourceMappingURL=GuanKa.js.map