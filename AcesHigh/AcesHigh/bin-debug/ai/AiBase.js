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
    })(WEI_ZHI = ai.WEI_ZHI || (ai.WEI_ZHI = {}));
    //转向
    var ZHUAN_XIANG;
    (function (ZHUAN_XIANG) {
        ZHUAN_XIANG[ZHUAN_XIANG["Clockwise"] = 0] = "Clockwise";
        ZHUAN_XIANG[ZHUAN_XIANG["Anti_clockwise"] = 1] = "Anti_clockwise";
    })(ZHUAN_XIANG = ai.ZHUAN_XIANG || (ai.ZHUAN_XIANG = {}));
    var AiBase = (function () {
        function AiBase(fc, mT, xZ, mZ) {
            //是否停止ai
            this.hang_up = false;
            //间隔
            this.jian_ge = 50;
            this.mark_time = 0;
            this.fc = fc;
            this.sceneConsole = fc.battle_scene;
            this.suke = this.sceneConsole.sk;
            this.mT_over = mT;
            this.xZ_over = xZ;
            this.mZ_over = mZ;
        }
        AiBase.prototype.updata_ai = function (now) {
            if ((now - this.mark_time) > this.jian_ge) {
                this.mark_time = now;
                this.doUpData(now);
            }
        };
        //场景刷新器
        AiBase.prototype.doUpData = function (time) {
        };
        AiBase.prototype.upOver = function () {
            if (this.mT_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.mT = this.mT_over;
            }
            if (this.xZ_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.xzT = this.xZ_over;
            }
            if (this.mZ_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.mzT = this.mZ_over;
            }
        };
        return AiBase;
    }());
    ai.AiBase = AiBase;
    __reflect(AiBase.prototype, "ai.AiBase");
})(ai || (ai = {}));
//# sourceMappingURL=AiBase.js.map