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
            this.jz = new juzi.SanXiongDiManDongJZ(1, this.scene);
            // this.jz = new juzi.ShuangJiJiaoChaXuanZHuan(1, this.scene);
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