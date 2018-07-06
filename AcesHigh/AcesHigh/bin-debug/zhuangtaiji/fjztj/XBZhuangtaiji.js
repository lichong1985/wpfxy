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
var fjztj;
(function (fjztj) {
    var XBZhuangtaiji = (function (_super) {
        __extends(XBZhuangtaiji, _super);
        function XBZhuangtaiji(fc) {
            var _this = _super.call(this) || this;
            _this.fc = fc;
            _this.mT = zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING;
            _this.xzT = zhuangtaiji.ZT_TYPE.NULL_T;
            _this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
            return _this;
        }
        //进步器
        XBZhuangtaiji.prototype.upStep = function (time) {
            _super.prototype.upStep.call(this, time);
            //检测移动状态并赋值 ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING) {
                if (!this.fc.moveAI) {
                    this.fc.moveAI = new ai.SingoMoveToAi(this.fc);
                }
            }
            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {
                if (!this.fc.moveAI || !(this.fc.moveAI instanceof ai.ZuoYouLuanDongAI)) {
                    this.fc.moveAI = new ai.ZuoYouLuanDongAI(this.fc);
                }
            }
        };
        return XBZhuangtaiji;
    }(fjztj.FjZTJ));
    fjztj.XBZhuangtaiji = XBZhuangtaiji;
    __reflect(XBZhuangtaiji.prototype, "fjztj.XBZhuangtaiji");
})(fjztj || (fjztj = {}));
//# sourceMappingURL=XBZhuangtaiji.js.map