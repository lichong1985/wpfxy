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
    var QuYuZTJ = (function (_super) {
        __extends(QuYuZTJ, _super);
        function QuYuZTJ(fc) {
            var _this = _super.call(this) || this;
            //选罗路线
            _this.lu_xian = new Array();
            _this.fc = fc;
            _this.mT = zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING;
            _this.xzT = zhuangtaiji.ZT_TYPE.NULL_T;
            _this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
            return _this;
        }
        //进步器
        QuYuZTJ.prototype.upStep = function (time) {
            _super.prototype.upStep.call(this, time);
            //休眠判定
            if (this.isSleep()) {
                return;
            }
            //进场状态
            if (this.mT == zhuangtaiji.ZT_TYPE.JIN_CHANG) {
                if (this.fc.moveAI == null) {
                    this.fc.moveAI = new ai.TaiKongSingoMoveAi(this.fc, zhuangtaiji.ZT_TYPE.JIN_CHANG_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                }
            }
            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.JIN_CHANG_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.fc.moveAI = null;
            }
        };
        //添加坐标点
        QuYuZTJ.prototype.addPos = function (x, y) {
            this.lu_xian.push(Tools.gridTop2(x, y));
        };
        return QuYuZTJ;
    }(fjztj.FjZTJ));
    fjztj.QuYuZTJ = QuYuZTJ;
    __reflect(QuYuZTJ.prototype, "fjztj.QuYuZTJ");
})(fjztj || (fjztj = {}));
//# sourceMappingURL=QuYuZTJ.js.map