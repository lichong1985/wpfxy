class TestScene extends scene.SceneBase {

    //飞船结构图
    public fc: Array<Array<mokuai.MoKuaiBase>>;
    constructor() {
        super();
        this.initTest();
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

        let fc: test.TestFeiChuan = new test.TestFeiChuan(this);
        this.dijis.push(fc)





    }






}