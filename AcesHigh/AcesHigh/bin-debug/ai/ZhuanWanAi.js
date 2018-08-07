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
var ai;
(function (ai) {
    var ZhuanXiang = (function (_super) {
        __extends(ZhuanXiang, _super);
        function ZhuanXiang(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.xs = 0.5;
            _this.fc.angularDamping = 0.9;
            return _this;
        }
        //场景刷新器
        ZhuanXiang.prototype.doUpData = function (time) {
            if (!this.hang_up) {
                if (this.fc.p2_target) {
                    var angle = Math.atan2((this.fc.p2_target.y - this.fc.position[1]), (this.fc.p2_target.x - this.fc.position[0])) + Math.PI * 0.5;
                    var zx = (Math.PI + 1.57);
                    //画重点
                    if (this.fc.angle > zx) {
                        this.fc.angle = this.fc.angle - 2 * Math.PI;
                    }
                    //连续画重点
                    if (this.fc.angle < -Math.PI * 0.5) {
                        this.fc.angle = zx;
                    }
                    if (angle >= 0 && this.fc.angle >= 0) {
                        if (Math.abs(angle - this.fc.angle) < Math.PI) {
                            if (angle < this.fc.angle) {
                                this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                            }
                            else {
                                this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                            }
                        }
                        else {
                            if (angle < this.fc.angle) {
                                this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                            }
                            else {
                                this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                            }
                        }
                    }
                    if (angle < 0 && this.fc.angle >= 0) {
                        if (Math.abs(angle) + this.fc.angle < Math.PI) {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                        }
                        else {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                        }
                    }
                    if (this.fc.angle < 0 && angle >= 0) {
                        if (Math.abs(angle) + this.fc.angle < Math.PI) {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                        }
                        else {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                        }
                    }
                    if (this.fc.angle < 0 && angle < 0) {
                        if (this.fc.angle < angle) {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                        }
                        else {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                        }
                    }
                    // //是否处于悬停状态
                    //顺时针
                    if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Clockwise) {
                        if (Math.abs(this.fc.angle - angle) > 0.1) {
                            this.fc.angularVelocity = -this.xs;
                        }
                    }
                    if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Anti_clockwise) {
                        if (Math.abs(this.fc.angle - angle) > 0.1) {
                            this.fc.angularVelocity = this.xs;
                        }
                    }
                    // egret.log("AAAAAAAAAAAAAAA:" + this.fc.angle + "___" + angle + "___" + this.xuan_zhuan_fang_xiang);
                }
            }
        };
        return ZhuanXiang;
    }(ai.AiBase));
    ai.ZhuanXiang = ZhuanXiang;
    __reflect(ZhuanXiang.prototype, "ai.ZhuanXiang");
})(ai || (ai = {}));
//# sourceMappingURL=ZhuanWanAi.js.map