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
        function ChangDingZiDan(scene, zhenying, mass, level) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.DAO_DAN) || this;
            //溅射数量
            _this.jsNumb = 3;
            _this.initPT();
            _this.bit_name = "us_zd_8_png";
            if (level >= 3) {
                _this.jsNumb = 4;
            }
            if (level == 5) {
                _this.jsNumb = 5;
            }
            _this.is_updata = true;
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
            if (!mok || !fc) {
                return;
            }
            //碰撞点
            var x = mok.moKuaiPost.x;
            var y = mok.moKuaiPost.y;
            //
            //
            //  -180    飞船    180
            //
            //
            //正
            if (mok.rotation > -45 && mok.rotation < 45) {
                this.loopJs(x, y, false, false, fc);
                egret.log("正正正正正正正正正正正正正正正正正正正");
            }
            //左
            if (mok.rotation < -45 && mok.rotation > -135) {
                this.loopJs(x, y, true, true, fc);
                egret.log("左左左左左左左左左左左左左左左左左左");
            }
            //右
            if (mok.rotation > 45 && mok.rotation < 135) {
                this.loopJs(x, y, true, false, fc);
                egret.log("右右右右右右右右右右右右右右右右右右");
            }
            //后
            if (mok.rotation < -135 || mok.rotation > 135) {
                this.loopJs(x, y, false, true, fc);
                egret.log("后后后后后后后后后后后后后后后后后后后");
            }
        };
        //循环溅射
        ChangDingZiDan.prototype.loopJs = function (x, y, isX, isAdd, fc) {
            for (var i = 1; i <= this.jsNumb; i++) {
                if (isX) {
                    if (isAdd) {
                        this.chickThePost(x + i, y, fc);
                    }
                    else {
                        this.chickThePost(x - i, y, fc);
                    }
                }
                if (!isX) {
                    if (isAdd) {
                        this.chickThePost(x, y + i, fc);
                    }
                    else {
                        this.chickThePost(x, y - i, fc);
                    }
                }
            }
        };
        //检测 节点是否可以被击中
        ChangDingZiDan.prototype.chickThePost = function (x, y, fc) {
            if (x < 0) {
                return;
            }
            if (y < 0) {
                return;
            }
            if (x >= fc.moKuaiList[0].length) {
                return;
            }
            if (y >= fc.moKuaiList.length) {
                return;
            }
            fc.shang_hai(fc.moKuaiList[y][x], this.hitNumber);
        };
        ChangDingZiDan.prototype.texiao = function () {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8;
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(_super.prototype.dell, this, [this.bitmap]);
        };
        ChangDingZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            this.force = [0, 0.0005];
        };
        return ChangDingZiDan;
    }(zidan.ZiDanBase));
    zidan.ChangDingZiDan = ChangDingZiDan;
    __reflect(ChangDingZiDan.prototype, "zidan.ChangDingZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=ChangDingZiDan.js.map