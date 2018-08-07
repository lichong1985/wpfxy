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
            // 是否到达目的地
            _this.is_Tirget = false;
            //瞄准攻击 开始时间标记
            _this.miao_zhun_mark = 0;
            //瞄准攻击时间限制
            _this.miao_zhun_limit = 15 * 1000;
            _this.fc = fc;
            _this.mT = zhuangtaiji.ZT_TYPE.DAO_HANG;
            _this.xzT = zhuangtaiji.ZT_TYPE.NULL_T;
            _this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
            return _this;
        }
        //进步器
        XBZhuangtaiji.prototype.upStep = function (time) {
            _super.prototype.upStep.call(this, time);
            //休眠判定
            if (this.isSleep()) {
                return;
            }
            //检测移动状态并赋值 ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING) {
                if (!this.fc.moveAI) {
                    this.fc.moveAI = new ai.TaiKongSingoMoveAi(this.fc, zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                }
            }
            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.MIAO_ZHUN;
                this.fc.moveAI = null;
                this.miao_zhun_mark = egret.getTimer();
            }
            //旋转类
            if (this.mT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN) {
            }
            //旋转结束
            if (this.mT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_OVER) {
            }
            //瞄准
            if (this.mT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN) {
                if (!this.fc.mzAI) {
                    this.fc.mzAI = new ai.MiaoZhun(this.fc, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                }
                //瞄准时间到了
                if ((egret.getTimer() - this.miao_zhun_mark) > this.miao_zhun_limit) {
                    this.mT = zhuangtaiji.ZT_TYPE.MIAO_ZHUN_OVER;
                }
            }
            //瞄准结束
            if (this.mT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.DAO_HANG;
                this.fc.mzAI = null;
            }
            //导航开始
            if (this.mT == zhuangtaiji.ZT_TYPE.DAO_HANG) {
                if (!this.fc.mzAI) {
                    this.fc.reLoadToPoint(suiji.randomTargetPos_simple());
                    this.fc.mzAI = new ai.DaoHuangAi(this.fc, zhuangtaiji.ZT_TYPE.DAO_HANG_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                }
            }
            //导航结束
            if (this.mT == zhuangtaiji.ZT_TYPE.DAO_HANG_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING;
                this.fc.mzAI = null;
            }
        };
        return XBZhuangtaiji;
    }(fjztj.FjZTJ));
    fjztj.XBZhuangtaiji = XBZhuangtaiji;
    __reflect(XBZhuangtaiji.prototype, "fjztj.XBZhuangtaiji");
})(fjztj || (fjztj = {}));
//# sourceMappingURL=XBZhuangtaiji.js.map