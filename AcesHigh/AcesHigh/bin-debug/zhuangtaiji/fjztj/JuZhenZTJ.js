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
    var JuZhenZTJ = (function (_super) {
        __extends(JuZhenZTJ, _super);
        function JuZhenZTJ(fc) {
            var _this = _super.call(this) || this;
            _this.fc = fc;
            _this.mT = zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING;
            _this.gjT = zhuangtaiji.ZT_TYPE.NULL_T;
            _this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
            return _this;
        }
        //进步器
        JuZhenZTJ.prototype.upStep = function (time) {
            _super.prototype.upStep.call(this, time);
            //休眠判定
            if (this.isSleep()) {
                return;
            }
            //检测移动状态并赋值 ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING) {
                if (!this.fc.moveAI) {
                    // this.fc.moveAI = new ai.TaiKongSingoMoveAi(this.fc, zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, -1);
                }
            }
            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.fc.moveAI = null;
            }
        };
        return JuZhenZTJ;
    }(fjztj.FjZTJ));
    fjztj.JuZhenZTJ = JuZhenZTJ;
    __reflect(JuZhenZTJ.prototype, "fjztj.JuZhenZTJ");
})(fjztj || (fjztj = {}));
//# sourceMappingURL=JuZhenZTJ.js.map