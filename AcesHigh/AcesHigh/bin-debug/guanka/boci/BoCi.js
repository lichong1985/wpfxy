var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var boci;
(function (boci) {
    //波次的 句子
    // 1.上中结构
    // 2.中心结构
    // 3.上下结构
    // 4.左右结构
    // 5螺旋交替
    // 6四边结构
    // 7单机制霸
    // 8双机巡逻
    // 9三兄弟
    // 10四个二五仔
    // 11.四角结构
    var BO_CI_TYPE;
    (function (BO_CI_TYPE) {
        BO_CI_TYPE[BO_CI_TYPE["SZ"] = 0] = "SZ";
    })(BO_CI_TYPE = boci.BO_CI_TYPE || (boci.BO_CI_TYPE = {}));
    var BoCi = (function () {
        function BoCi(scene) {
            this.scene = scene;
        }
        //初始化句子
        BoCi.prototype.initJuzi = function () {
            //------------test---------------------
            // this.jz = new juzi.Test1(1, this.scene);
            //-------------------------------------
            //30
            this.jz = new juzi.ShuangJiRaoLuoXuanFeiJZ(1, this.scene);
            // this.jz = new juzi.ShuangDuiJiaoJiaXuanZhuanJZ(1, this.scene);//双对角 旋转
            // this.jz = new juzi.SanBianYiXuanZhuanJZ(1, this.scene);// 三变异 旋转
            // this.jz = new juzi.ChaoDaLuoXuanJZ(1, this.scene);//超大一螺旋
            // this.jz = new juzi.ShuangJiJieZouRaoFeiJZ(1, this.scene);//双击节奏绕飞 
            // this.jz = new juzi.BoSiMaoJiaXuanZhuanJZ(1, this.scene);//波斯猫 加 旋转
            // this.jz = new juzi.DanJiSanDanChangTiaoJZ(1, this.scene)//散弹两侧长条
            // this.jz = new juzi.DaWuJZ(1, this.scene);//大五
            // this.jz = new juzi.SiXiongDiShuangGenZongJZ(1, this.scene);//四兄弟 双跟踪
            // this.jz = new juzi.DaSiJZ(1, this.scene); //大四
            //20
            // this.jz = new juzi.DanJiRaoFeiJZ(1, this.scene);//单机机队绕飞
            // this.jz = new juzi.ShuangXuanZHuanFeiDanJZ(1, this.scene);// 双旋转 四射
            // this.jz = new juzi.ShuangJiDuiJiaoXianXuanZhuanJZ(1, this.scene);//双机对角线 加旋转
            // this.jz = new juzi.ShuangJiShangXiaJZ(1, this.scene);//双机上下
            // this.jz = new juzi.DaSan(1, this.scene);//大 3 武器多
            // this.jz = new juzi.ShuangKuanTiJiaXuanZhuanJUZI(1, this.scene);//双宽体 旋转
            // this.jz = new juzi.ShuangQianHouDanXuanZhuanJUZI(1, this.scene);//双前后加旋转
            // this.jz = new juzi.ShuangJiXuanTingSheJiJUZI(1, this.scene);//双机悬停散弹
            // this.jz = new juzi.SanDanJiDuiXuanZhuanJZ(1, this.scene);//散弹机队螺旋
            // this.jz = new juzi.DaErJZ(1, this.scene);//大二 散弹
            //10
            // this.jz = new juzi.SiXiongDiJZ(1, this.scene);//四兄弟
            // this.jz = new juzi.Xiao62XunLuoGonJiJZ(1, this.scene);//顶部 加 机队
            // this.jz = new juzi.DaYiXiaoDiJZ(1, this.scene);//大一小弟
            // this.jz = new juzi.DaYiJZ(1, this.scene);//大一 单机
            // this.jz = new juzi.KaoJinLiKaiJz(1, this.scene);//靠近离开机队
            // this.jz = new juzi.YiPaiSheJiJZ(1, this.scene); //一排射击
            // this.jz = new juzi.DanJiGenZongDanJZ(1, this.scene);//单机（章鱼）跟踪弹
            // this.jz = new juzi.LiangXiongDiBuKaiQiangJZ(1, this.scene);//两兄弟行走不开枪
            // this.jz = new juzi.SanXiongDiManDongJZ(1, this.scene);//三兄弟
            // this.jz = new juzi.ShuangJiJiaoChaXuanZHuan(1, this.scene);//双机交叉 旋转
            this.jz.initFcInfo();
        };
        BoCi.prototype.randonGuzi = function () {
        };
        return BoCi;
    }());
    boci.BoCi = BoCi;
    __reflect(BoCi.prototype, "boci.BoCi");
})(boci || (boci = {}));
//# sourceMappingURL=BoCi.js.map