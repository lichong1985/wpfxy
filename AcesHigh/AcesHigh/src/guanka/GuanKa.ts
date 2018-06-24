class Guanka {

    //每波飞船的数据
    public bos: any[][][];
    public scene: scene.SceneBase;


    constructor(scene: scene.SceneBase) {
        this.scene = scene;
        this.init();
    }
    public init() {
        this.bos = [
            //第一波
            [
                //第一回合
                [ { nowP: egret.Point.create(1300, 800), toP: egret.Point.create(1300, 1200), sName: "6_1_json" }],
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
        ]
    }
}