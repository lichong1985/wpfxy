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
    var ChangDingZiDan = (function (_super) {
        __extends(ChangDingZiDan, _super);
        //跟踪弹生效时间
        function ChangDingZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.DAO_DAN) || this;
            _this.initPT();
            _this.bit_name = "us_zd_8_png";
            return _this;
        }
        ChangDingZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_8_png"));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        //穿甲
        ChangDingZiDan.prototype.chuan_jia = function (mok, fc) {
            egret.log("GGGGGGGGGGGGGGGGGGGGGGGGGGG:" + mok.rotation);
            //碰撞点
            var x = mok.moKuaiPost.x;
            var y = mok.moKuaiPost.y;
            //
            //
            //  -180    飞船    180
            //
            //
            if (fc.moKuaiList[y - 1][x] != null) {
                fc.shang_hai(fc.moKuaiList[y - 1][x], 1);
            }
            if (fc.moKuaiList[y - 2][x] != null) {
                fc.shang_hai(fc.moKuaiList[y - 2][x], 1);
            }
            if (fc.moKuaiList[y - 3][x] != null) {
                fc.shang_hai(fc.moKuaiList[y - 3][x], 1);
            }
        };
        ChangDingZiDan.prototype.texiao = function () {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8;
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(_super.prototype.dell, this, [this.bitmap]);
        };
        return ChangDingZiDan;
    }(zidan.ZiDanBase));
    zidan.ChangDingZiDan = ChangDingZiDan;
    __reflect(ChangDingZiDan.prototype, "zidan.ChangDingZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=ChangDingZiDan.js.map