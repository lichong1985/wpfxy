var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var zidan;
(function (zidan) {
    var YuLeiZiDan = (function (_super) {
        __extends(YuLeiZiDan, _super);
        function YuLeiZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.YU_LEI) || this;
            _this.collNumber = 1;
            _this.bit_name = "us_zd_6";
            _this.is_updata = true;
            _this.sheng_ming_zhou_qi = 10000;
            _this.initPT();
            return _this;
        }
        YuLeiZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_6"));
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.damping = 0;
            this.displays = [this.bitmap];
            this.angularDamping = 0;
            this.damping = 0;
            this.loop();
        };
        YuLeiZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            this.velocity = [0, 0.2];
            this.angularVelocity = 4;
        };
        //穿甲相关
        YuLeiZiDan.prototype.chuan_jia = function (mok, fc) {
            if (!mok || !fc) {
                return;
            }
            //碰撞点
            var x = mok.moKuaiPost.x;
            var y = mok.moKuaiPost.y;
            this.chickThePost(x + 1, y, fc);
            this.chickThePost(x + 2, y, fc);
            this.chickThePost(x - 1, y, fc);
            this.chickThePost(x - 2, y, fc);
            this.chickThePost(x, y + 1, fc);
            this.chickThePost(x, y + 2, fc);
            this.chickThePost(x, y - 1, fc);
            this.chickThePost(x, y - 2, fc);
            this.chickThePost(x - 1, y - 1, fc);
            this.chickThePost(x + 1, y - 1, fc);
            this.chickThePost(x - 1, y + 1, fc);
            this.chickThePost(x + 1, y + 1, fc);
        };
        //循环特效
        YuLeiZiDan.prototype.loop = function () {
            var tw = egret.Tween.get(this.bitmap, { loop: true });
            tw.to({ "scaleX": 2.2, "scaleY": 2.2, "alpha": 0.8 }, 50).to({ "alpha": 1, "scaleX": 1, "scaleY": 1 }, 180);
        };
        YuLeiZiDan.prototype.removeTeXiao = function () {
            egret.Tween.removeTweens(this.bitmap);
            var tw = egret.Tween.get(this.bitmap);
            tw.to({ "scaleX": 3, "scaleY": 3, "alpha": 0.3 }, 800).call(this.addRemove, this);
        };
        return YuLeiZiDan;
    }(zidan.ZiDanBase));
    zidan.YuLeiZiDan = YuLeiZiDan;
    __reflect(YuLeiZiDan.prototype, "zidan.YuLeiZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=YuLeiZiDan.js.map