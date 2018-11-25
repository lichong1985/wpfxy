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

    //---------------------背景光--------------------
    //红光
    public hg: bj.HongGuang;

    //广告
    public gg: egret.Bitmap = null;
    //分享
    public fx: egret.Bitmap = null;

    //商店
    public shop: egret.Bitmap = null;

    //媒体奖励
    public mrlb: egret.Bitmap = null;

    //奖励类型  1 广告  2 分享  3新手礼包
    public jl_type: number = 0;





    constructor() {
        super();
        this.initTest();
        // this.initGuanka();
        this.sjjl();
        this.initShop();
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
        this.initBJG();

        this.gg = new egret.Bitmap(RES.getRes("gg"));
        this.fx = new egret.Bitmap(RES.getRes("fx"));
        this.shop = new egret.Bitmap(RES.getRes("shop"));
        this.mrlb = new egret.Bitmap(RES.getRes("mrlb"));

    }

    public initShop() {
        if (this.jl_type == 3) {
            this.mrlb.x = Tools.getPhoneW() * 0.15 + 1000;
            this.mrlb.y = Tools.getPhoneH() * 0.7 + 1000;
            this.addChild(this.mrlb);
        }
        if (this.jl_type == 2) {
            this.fx.x = Tools.getPhoneW() * 0.15 + 1000;
            this.fx.y = Tools.getPhoneH() * 0.7 + 1000;
            this.addChild(this.fx);
        }
        if (this.jl_type == 1) {
            this.gg.x = Tools.getPhoneW() * 0.15 + 1000;
            this.gg.y = Tools.getPhoneH() * 0.7 + 1000;
            this.addChild(this.gg);
        }
        this.shop.x = Tools.getPhoneW() * 0.75 + 1000;
        this.shop.y = Tools.getPhoneH() * 0.71 + 1000;
        this.addChild(this.shop);

    }

    public initBars() {
        this.dpBar = new bar.DunBar(this);
        this.hhBar = new bar.HuiHeBar(this);
        // this.gzBar = new bar.GuaZaiBar(this);
        this.timeBar = new bar.TimeBar(this);
        // this.djBar = new bar.DengJiBar(this);
        this.zzBar = new bar.ZhongJianTiShiBar(this);
    }

    public initBJG() {
        this.hg = new bj.HongGuang(this);
    }

    public upSomeThing() {
        super.upSomeThing();
        this.timeBar.upup();

        // if ((egret.getTimer() - this.up_mark) > this.up_jg) {
        //     if (this.bcgl.is_next) {
        //         this.bcgl.nextBo();
        //         this.bcgl.addFc(this);
        //     }


        //     this.bcgl.upSomeThing();

        //     this.up_mark = egret.getTimer();
        // }

        this.upShop();
        if (this.jl_type == 3) {
            this.upMR();
        }
        if (this.jl_type == 1) {
            this.upsp();
        }
        if (this.jl_type == 2) {
            this.upfx();
        }


    }

    //--------------------------------------商店相关----------------------------------------------
    //商店碰撞检测
    public upShop() {
        if (!this.move_point) {
            return;
        }
        var rect1: egret.Rectangle = this.sk.hx.getBounds();
        var rect2: egret.Rectangle = this.shop.getBounds();

        rect1.x = this.move_point.x
        rect1.y = this.move_point.y;
        rect2.x = this.shop.x;
        rect2.y = this.shop.y;

        let sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_shop = true;

            //商店事件
        } else {
            this.is_shop = false;
        }
    }


    //幸运礼包
    public upMR() {
        if (!this.move_point) {
            return;
        }
        var rect1: egret.Rectangle = this.sk.hx.getBounds();
        var rect2: egret.Rectangle = this.mrlb.getBounds();

        rect1.x = this.move_point.x
        rect1.y = this.move_point.y;
        rect2.x = this.mrlb.x;
        rect2.y = this.mrlb.y;

        let sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_jl = true;

            //商店每日礼包事件
        } else {
            this.is_jl = false;
        }
    }


    //观看视频 碰撞
    public upsp() {
        if (!this.move_point) {
            return;
        }
        var rect1: egret.Rectangle = this.sk.hx.getBounds();
        var rect2: egret.Rectangle = this.gg.getBounds();

        rect1.x = this.move_point.x
        rect1.y = this.move_point.y;
        rect2.x = this.gg.x;
        rect2.y = this.gg.y;

        let sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_jl = true;

            //观看广告事件
        } else {
            this.is_jl = false;
        }
    }

    //分享 碰撞
    public upfx() {
        if (!this.move_point) {
            return;
        }
        var rect1: egret.Rectangle = this.sk.hx.getBounds();
        var rect2: egret.Rectangle = this.fx.getBounds();

        rect1.x = this.move_point.x
        rect1.y = this.move_point.y;
        rect2.x = this.fx.x;
        rect2.y = this.fx.y;

        let sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_jl = true;

            //分享事件
        } else {
            this.is_jl = false;
        }
    }
    //-------------------------------------------------------------------------------------

    //-----------------随机奖励----------------------------------------
    //随机奖励
    public sjjl() {
        let r = Tools.GetRandomNum(1, 25);
        if (r <= 10) {
            this.jl_type = 1;
            return;
        }

        if (r > 10 && r <= 20) {
            this.jl_type = 2;
            return;
        }
        this.jl_type = 3;
    }


    //抖屏
    public dou_ping() {
        let x = this.x;
        let y = this.y;

        egret.Tween.get(this).to({ "x": x + 5, "y": y - 5 }, 50).to({ "x": x - 5, "y": y + 5 }, 50).to({ "x": x + 5, "y": y - 5 }, 50).to({ "x": x - 5, "y": y + 5 }, 50).call(this.gui_wei, this, [x, y]);

    }

    //归位
    public gui_wei(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    //去掉光线
    public removeXin(shp: egret.Shape) {
        if (shp.parent) {
            this.removeChild(shp);
        }
    }






}