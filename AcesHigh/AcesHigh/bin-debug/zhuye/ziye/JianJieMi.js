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
var zy;
(function (zy) {
    var JianJieMi = (function (_super) {
        __extends(JianJieMi, _super);
        function JianJieMi(z) {
            var _this = _super.call(this, z) || this;
            _this.kai_shi = new egret.TextField(); //开始
            _this.init();
            return _this;
        }
        JianJieMi.prototype.init = function () {
            this.initKaiShi();
        };
        JianJieMi.prototype.initKaiShi = function () {
            this.kai_shi.textFlow = new Array(
            // { text: "简介 ", style: { "textColor": 0xEDFFF9 } },
            { text: "\n" }, { text: "这是一款，策略射击类游戏。游戏的终极目标只有一个 ,", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "收集太阳能晶体（通过击毁外星生物获得）强化飞船武器系统，", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "从而在战斗中获得更多分数霸榜好友圈。是不是很刺激！！！（咳咳）", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "故事发生在2048年冬天，太阳系闯入了大量未知生物。", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "它们漂浮在太空中以吸食太阳能为生，", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "随着它们不间断的吸食,太阳逐渐暗淡下去，", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "地球终日笼罩在黄昏色的阳光下。", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "要不了多久太阳便会熄灭，于是人类为了守卫太阳系，", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "决定发起一次总攻彻底赶走这些外星生物，", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "这次总攻代号叫做“黎明”。", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "对了观看广告以及分享可以加快游戏进程记得试一试呦", style: { "textColor": 0xEDFFF9, "size": 15 } });
            this.kai_shi.lineSpacing = 10;
            this.addChild(this.kai_shi);
            this.kai_shi.x = Tools.getPhoneW() * 0.2;
            this.kai_shi.y = Tools.getPhoneH() * 0.01;
            // this.kai_shi.x = this.kai_shi.y = 150;
            this.kai_shi.border = true;
            this.kai_shi.wordWrap = true;
            this.kai_shi.multiline = true;
            this.addChild(this.kai_shi);
        };
        return JianJieMi;
    }(zy.ziyeMi));
    zy.JianJieMi = JianJieMi;
    __reflect(JianJieMi.prototype, "zy.JianJieMi");
})(zy || (zy = {}));
//# sourceMappingURL=JianJieMi.js.map