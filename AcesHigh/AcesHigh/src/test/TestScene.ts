class TestScene extends scene.SceneBase {

    //飞船结构图
    public fc: Array<Array<mokuai.MoKuaiBase>>;
    public guanka: Guanka = new Guanka(this);
    public static instance: TestScene = null;
    //波次管理
    public bcgl: guanqia.BoCiGuanLi;
    //场景更新相关
    public up_jg: number = 1000;
    public up_mark: number = 0;
    constructor() {
        super();
        this.initTest();
        this.initGuanka();
    }

    public static getInstance(): TestScene {
        if (TestScene.instance == null) {
            TestScene.instance = new TestScene();
        }
        return TestScene.instance;
    }

    public initGuanka() {
        this.bcgl = new guanqia.BoCiGuanLi(this);
    }



    public initTest() {
        let wp = egret.Point.create(1200, 1200);
        //背景
        let bg: test.TestGrid = new test.TestGrid();
        bg.x = 0;
        bg.y = 0;
        this.addChild(bg);


        let sk: shuke.ShuKe = new shuke.ShuKe(this);
        this.sk = sk;

    }

    public upSomeThing() {
        // egret.log("LLLLLLLLLLLLLLLLL:"+suiji.GetRandomNum(0, 11))
        super.upSomeThing();

        if ((egret.getTimer() - this.up_mark) > this.up_jg) {
            if (this.bcgl.is_next) {
                this.bcgl.nextBo();
                this.bcgl.addFc(this);
            }


            this.bcgl.upSomeThing();

            this.up_mark = egret.getTimer();
        }

    }






}