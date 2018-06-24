class TestScene extends scene.SceneBase {

    //飞船结构图
    public fc: Array<Array<mokuai.MoKuaiBase>>;
    public guanka: Guanka = new Guanka(this);
    constructor() {
        super();
        this.initTest();
        this.initGuanka();
    }

    public initGuanka() {
        this.nowBo = 0;
        this.nowHeiHe = 0;
        this.allHeiHe = this.guanka.bos[this.nowBo].length;



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

        // let fc = new feichuan.XiaoBing(this, egret.Point.create(1200, 1300), egret.Point.create(1500, 800), "6_1_json")

        // let fc: test.TestFeiChuan = new test.TestFeiChuan(this);
        // this.dijis.push(fc)

    }

    public upSomeThing() {
        super.upSomeThing();

        //刚刚开场
        if (this.add_hh_fc) {
            //重置
            this.add_hh_fc = false;

            for (let i = 0; i < this.guanka.bos[this.nowBo][this.nowHeiHe].length; i++) {
                //添加飞船到战场
                let fc = new feichuan.XiaoBing(this, this.guanka.bos[this.nowBo][this.nowHeiHe][i].nowP, this.guanka.bos[this.nowBo][this.nowHeiHe][i].toP, this.guanka.bos[this.nowBo][this.nowHeiHe][i].sName)
                // fc.addAI(new ai.MiaoZhun(fc, 0.5));
                fc.addAI(new ai.ZuoYouLuanDongAI(fc));
                // fc.damping = 0.5;

                this.dijis.push(fc);
            }
            this.lastFeiJi = this.guanka.bos[this.nowBo][this.nowHeiHe].length;
            //回合数增加
            this.nowHeiHe++;
            //如果回合数移除则 波数增加 并且重置回合数
            if (this.nowHeiHe >= this.guanka.bos[this.nowBo].length) {
                this.nowBo++;
                this.nowHeiHe = 0;
            }

        }

        //本回合飞机都打没了
        if (this.lastFeiJi <= 0) {
            this.add_hh_fc = true;
        }
    }






}