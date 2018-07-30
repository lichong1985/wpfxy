var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var feichuan;
(function (feichuan) {
    var FeiChuanInfo = (function () {
        function FeiChuanInfo() {
        }
        // public getGW(): number {
        //     return parseInt(this.width / 2.5);
        // }
        //重置坐标
        FeiChuanInfo.prototype.reRandomPos = function () {
            this.random_cs_Pos();
            this.random_target();
        };
        //随机目标点
        FeiChuanInfo.prototype.random_target = function () {
            var x;
            var y;
            x = suiji.GetRandomNum(0, 30);
            y = suiji.GetRandomNum(0, 50);
            this.target_pos = egret.Point.create(x, y);
        };
        //随机出生点
        FeiChuanInfo.prototype.random_cs_Pos = function () {
            var fx = suiji.randomFangXiang();
            var x;
            var y;
            //上
            if (fx == 1) {
                x = suiji.GetRandomNum(-5, 35);
                y = suiji.GetRandomNum(-5, -1);
            }
            //下
            if (fx == 2) {
                x = suiji.GetRandomNum(-5, 35);
                y = suiji.GetRandomNum(51, 55);
            }
            //左
            if (fx == 3) {
                x = suiji.GetRandomNum(-5, -1);
                y = suiji.GetRandomNum(0, 50);
            }
            //右
            if (fx == 4) {
                x = suiji.GetRandomNum(31, 35);
                y = suiji.GetRandomNum(0, 50);
            }
            this.chu_sheng_pos = egret.Point.create(x, y);
        };
        return FeiChuanInfo;
    }());
    feichuan.FeiChuanInfo = FeiChuanInfo;
    __reflect(FeiChuanInfo.prototype, "feichuan.FeiChuanInfo");
})(feichuan || (feichuan = {}));
//# sourceMappingURL=FeiChuanInfo.js.map