var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bar;
(function (bar) {
    var TimeBar = (function () {
        function TimeBar(scene) {
            this.y = 1050;
            this.pi = 20;
            //当前剩余时间
            this.now_time = 0;
            //标记时间
            this.mark_time = 0;
            this.x = Tools.getPhoneW() * 0.01 + 1000;
            this.scene = scene;
            this.initUI();
        }
        TimeBar.prototype.initUI = function () {
            this.wz = new egret.Bitmap(RES.getRes("z"));
            this.scene.addChildAt(this.wz, 100);
            this.wz.y = this.y;
            this.wz.x = this.x + this.pi * 0;
            this.y += 10;
            this.w2 = new egret.Bitmap(RES.getRes("1"));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.wz.width + this.x + this.wz.width * 0.5;
            this.w3 = new egret.Bitmap(RES.getRes("sd"));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.wz.width + this.x + this.wz.width * 0.6 + 1 * this.w2.width;
            this.w4 = new egret.Bitmap(RES.getRes("5"));
            this.scene.addChildAt(this.w4, 100);
            this.w4.y = this.y;
            this.w4.x = this.wz.width + this.x + this.wz.width * 0.5 + 2 * this.w2.width;
            this.w5 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w5, 100);
            this.w5.y = this.y;
            this.w5.x = this.wz.width + this.x + this.wz.width * 0.6 + 3 * this.w2.width;
        };
        //设置数值
        TimeBar.prototype.setNumber = function (s) {
            if (s < 0) {
                return;
            }
            var l2 = Math.floor(s / 60);
            var m = s % 60;
            var l5 = Math.floor(m / 10);
            var l6 = m % 10;
            this.w2.texture = RES.getRes(l2 + "");
            this.w4.texture = RES.getRes(l5 + "");
            this.w5.texture = RES.getRes(l6 + "");
        };
        //设置标记时间
        TimeBar.prototype.setMark = function (s) {
            this.mark_time = s;
            this.now_time = this.mark_time - egret.getTimer();
        };
        //更新秒表
        TimeBar.prototype.upup = function () {
            var n = this.mark_time - egret.getTimer();
            if (this.now_time - n > 1000) {
                this.now_time = n;
                this.setNumber(Math.floor(this.now_time / 1000));
            }
        };
        return TimeBar;
    }());
    bar.TimeBar = TimeBar;
    __reflect(TimeBar.prototype, "bar.TimeBar");
})(bar || (bar = {}));
//# sourceMappingURL=TimeBar.js.map