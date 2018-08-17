var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ai;
(function (ai) {
    var AI_TYPE;
    (function (AI_TYPE) {
        AI_TYPE[AI_TYPE["xuan_zhuan"] = 0] = "xuan_zhuan";
        AI_TYPE[AI_TYPE["miao_zhun"] = 1] = "miao_zhun";
    })(AI_TYPE = ai.AI_TYPE || (ai.AI_TYPE = {}));
    //位置
    var WEI_ZHI;
    (function (WEI_ZHI) {
        WEI_ZHI[WEI_ZHI["ZS"] = 0] = "ZS";
        WEI_ZHI[WEI_ZHI["ZX"] = 1] = "ZX";
        WEI_ZHI[WEI_ZHI["YS"] = 2] = "YS";
        WEI_ZHI[WEI_ZHI["YX"] = 3] = "YX";
        WEI_ZHI[WEI_ZHI["NN"] = 4] = "NN";
    })(WEI_ZHI = ai.WEI_ZHI || (ai.WEI_ZHI = {}));
    //转向
    var ZHUAN_XIANG;
    (function (ZHUAN_XIANG) {
        ZHUAN_XIANG[ZHUAN_XIANG["Clockwise"] = 0] = "Clockwise";
        ZHUAN_XIANG[ZHUAN_XIANG["Anti_clockwise"] = 1] = "Anti_clockwise";
    })(ZHUAN_XIANG = ai.ZHUAN_XIANG || (ai.ZHUAN_XIANG = {}));
    var AiBase = (function () {
        function AiBase(fc, mT, gj, mZ) {
            //是否停止ai
            this.hang_up = false;
            //单次状态 持续时间
            this.jian_ge = 10 * 1000;
            //误差
            this.wu_cha = 0.2;
            this.fc = fc;
            this.sceneConsole = fc.battle_scene;
            this.suke = this.sceneConsole.sk;
            this.mT_over = mT;
            this.gj_over = gj;
            this.mZ_over = mZ;
            this.time_mark = egret.getTimer();
            this.mu_biao_wz_X = this.js_wz(this.fc.position[0], this.fc.toPoint.x);
            this.mu_biao_wz_Y = this.js_wz(this.fc.position[1], this.fc.toPoint.y);
        }
        AiBase.prototype.init = function () {
        };
        //目标 相对 你的位置
        AiBase.prototype.js_wz = function (you, to) {
            if (to > you) {
                if ((to - you) < 0.1) {
                    return 2;
                }
                return 3;
            }
            if (you > to) {
                if ((you - to) < 0.1) {
                    return 2;
                }
                return 1;
            }
            return 2;
        };
        AiBase.prototype.updata_ai = function (now) {
            //到时没有达成任务 退出
            if ((egret.getTimer() - this.time_mark) > this.jian_ge) {
                // this.upOver();
            }
            this.doUpData(now);
        };
        //场景刷新器
        AiBase.prototype.doUpData = function (time) {
        };
        AiBase.prototype.upOver = function () {
            if (this.mT_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.mT = this.mT_over;
            }
            if (this.gj_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.gjT = this.gj_over;
            }
            if (this.mZ_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.mzT = this.mZ_over;
            }
        };
        //---------------判断是否到达目的地----------------
        AiBase.prototype.is_x_over = function () {
            //左边
            // if (this.mu_biao_wz_X == 1 && Math.abs(this.fc.position[0] - this.fc.toPoint.x) < this.wu_cha) {
            if (this.mu_biao_wz_X == 1 && this.fc.position[0] < this.fc.toPoint.x) {
                return true;
            }
            //中
            if (this.mu_biao_wz_X == 2) {
                return true;
            }
            //右
            if (this.mu_biao_wz_X == 3 && this.fc.position[0] > this.fc.toPoint.x) {
                return true;
            }
            return false;
        };
        AiBase.prototype.is_y_over = function () {
            //左边
            if (this.mu_biao_wz_Y == 1 && this.fc.position[1] < this.fc.toPoint.y) {
                return true;
            }
            //中
            if (this.mu_biao_wz_Y == 2) {
                return true;
            }
            //右
            if (this.mu_biao_wz_Y == 3 && this.fc.position[1] > this.fc.toPoint.y) {
                return true;
            }
            return false;
        };
        return AiBase;
    }());
    ai.AiBase = AiBase;
    __reflect(AiBase.prototype, "ai.AiBase");
})(ai || (ai = {}));
//# sourceMappingURL=AiBase.js.map