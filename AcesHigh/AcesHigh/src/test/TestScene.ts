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
    //---------------------bar----------------------
    //盾牌相关
    public dpBar: bar.DunBar;
    //回合
    public hhBar: bar.HuiHeBar;
    //挂载
    public gzBar: bar.GuaZaiBar;
    //时间
    public timeBar: bar.TimeBar;
    //核心等级
    public djBar: bar.DengJiBar;
    //中间
    public zzBar: bar.ZhongJianTiShiBar;


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
        let bg: test.TestGrid = new test.TestGrid(this);
        bg.x = 0;
        bg.y = 0;
        this.addChild(bg);



        let sk: shuke.ShuKe = new shuke.ShuKe(this);
        this.sk = sk;

        this.initBars();


    }

    public initBars() {
        this.dpBar = new bar.DunBar(this);
        this.hhBar = new bar.HuiHeBar(this);
        // this.gzBar = new bar.GuaZaiBar(this);
        this.timeBar = new bar.TimeBar(this);
        // this.djBar = new bar.DengJiBar(this);
        this.zzBar = new bar.ZhongJianTiShiBar(this);
    }

    public upSomeThing() {
        // egret.log("LLLLLLLLLLLLLLLLL:"+suiji.GetRandomNum(0, 11))
        super.upSomeThing();
        this.timeBar.upup();

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