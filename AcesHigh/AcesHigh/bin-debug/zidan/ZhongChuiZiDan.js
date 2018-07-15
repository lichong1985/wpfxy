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
    var ZhongChuiZiDan = (function (_super) {
        __extends(ZhongChuiZiDan, _super);
        function ZhongChuiZiDan(scene, zhenying, mass, level) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.lv_1 = [[-1, 0], [1, 0], [0, -1]];
            _this.lv_3 = [[-2, 0], [2, 0], [-1, -1], [1, -1], [0, -2]];
            _this.lv_5 = [[-3, 0], [3, 0], [-2, -1], [2, -1], [-1, -2], [1, -2], [0, -3]];
            _this.initPT();
            _this.collNumber = 1;
            _this.bit_name = "us_zd_9_png";
            _this.bitmap.anchorOffsetX = _this.bitmap.width * 0.5;
            _this.bitmap.anchorOffsetY = _this.bitmap.height * 0.5;
            _this.bitmap.scaleX = 0.5;
            _this.bitmap.scaleY = 0.5;
            _this.is_updata = true;
            _this.level = level;
            return _this;
        }
        ZhongChuiZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_9_png"));
            this.damping = 0;
            this.displays = [this.bitmap];
        };
        //穿甲
        ZhongChuiZiDan.prototype.chuan_jia = function (mok, fc) {
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
                this.loop_level(x, y, true, true, fc);
            }
            //左
            if (mok.rotation < -45 && mok.rotation > -135) {
                this.loop_level(x, y, false, false, fc);
            }
            //右
            if (mok.rotation > 45 && mok.rotation < 135) {
                this.loop_level(x, y, false, true, fc);
            }
            //后
            if (mok.rotation < -135 || mok.rotation > 135) {
                this.loop_level(x, y, true, false, fc);
            }
        };
        ZhongChuiZiDan.prototype.loop_level = function (x, y, isX, isAdd, fc) {
            if (this.level >= 1) {
                this.loopJs(x, y, isX, isAdd, fc, this.lv_1);
            }
            if (this.level >= 3) {
                this.loopJs(x, y, isX, isAdd, fc, this.lv_3);
            }
            if (this.level >= 5) {
                this.loopJs(x, y, isX, isAdd, fc, this.lv_5);
            }
        };
        //循环溅射
        ZhongChuiZiDan.prototype.loopJs = function (x, y, isX, isAdd, fc, ps) {
            for (var _i = 0, ps_1 = ps; _i < ps_1.length; _i++) {
                var p = ps_1[_i];
                if (isX) {
                    if (isAdd) {
                        this.chickThePost(x + p[0], y + p[1], fc);
                    }
                    else {
                        this.chickThePost(x + p[0], y - p[1], fc);
                    }
                }
                if (!isX) {
                    if (isAdd) {
                        this.chickThePost(x + p[1], y + p[0], fc);
                    }
                    else {
                        this.chickThePost(x - p[1], y + p[0], fc);
                    }
                }
            }
        };
        //检测 节点是否可以被击中
        ZhongChuiZiDan.prototype.chickThePost = function (x, y, fc) {
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
        ZhongChuiZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            _super.prototype.weiyi.call(this, this.bit_name);
        };
        ZhongChuiZiDan.prototype.texiao = function () {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8;
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(_super.prototype.dell, this, [this.bitmap]);
        };
        return ZhongChuiZiDan;
    }(zidan.ZiDanBase));
    zidan.ZhongChuiZiDan = ZhongChuiZiDan;
    __reflect(ZhongChuiZiDan.prototype, "zidan.ZhongChuiZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=ZhongChuiZiDan.js.map