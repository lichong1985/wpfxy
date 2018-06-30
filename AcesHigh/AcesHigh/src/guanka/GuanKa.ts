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
                [{ nowP: egret.Point.create(1300, 800), toP: egret.Point.create(1300, 1200), sName: "5_m2_json" }],
                //第二回合
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "1_m3_json" }],
                //第三回合
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "2_m2_json" }],
            ],
            //第二波
            [
                //第一回合
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "2_m3_json" }],
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "3_m2_json" }],
            ],

            //第三波
            [
                //第一回合
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "3_m3_json" }],
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "4_m2_json" }],
            ]

            ,

            //第四波
            [
                //第一回合
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "4_m3_json" }],
                [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "5_m2_json" }],
                // [{ nowP: egret.Point.create(1100, 800), toP: egret.Point.create(1100, 1200), sName: "5_m3_json" }],

            ]
        ]
    }
}