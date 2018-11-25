module zy {
    export class JianJieMi extends ziyeMi {
        public kai_shi: egret.TextField = new egret.TextField();//开始
        constructor(z: ZhuYe) {
            super(z);
            this.init();

        }

        public init() {
            this.initKaiShi();
        }

        public initKaiShi() {
            this.kai_shi.textFlow = new Array<egret.ITextElement>(
                // { text: "简介 ", style: { "textColor": 0xEDFFF9 } },
                { text: "\n" },
                { text: "这是一款，策略射击类游戏。游戏的终极目标只有一个 ,", style: { "textColor": 0xEDFFF9, "size": 15 } },
                { text: "\n" },
                { text: "收集太阳能晶体（通过击毁外星生物获得）强化飞船武器系统，", style: { "textColor": 0xEDFFF9, "size": 15 } },
                { text: "\n" },
                { text: "从而在战斗中获得更多分数霸榜好友圈。是不是很刺激！！！（咳咳）", style: { "textColor": 0xEDFFF9, "size": 15 } },
                { text: "\n" },
                { text: "故事发生在2048年冬天，太阳系闯入了大量未知生物。", style: { "textColor": 0xEDFFF9, "size": 15 } },
                { text: "\n" },
                { text: "它们漂浮在太空中以吸食太阳能为生，", style: { "textColor": 0xEDFFF9, "size": 15 } },
                { text: "\n" },
                { text: "随着它们不间断的吸食,太阳逐渐暗淡下去，", style: { "textColor": 0xEDFFF9, "size": 15 } },
                { text: "\n" },
                { text: "地球终日笼罩在黄昏色的阳光下。", style: { "textColor": 0xEDFFF9, "size": 15 } },
                { text: "\n" },
                { text: "要不了多久太阳便会熄灭，于是人类为了守卫太阳系，", style: { "textColor": 0xEDFFF9, "size": 15 } },
                { text: "\n" },
                { text: "决定发起一次总攻彻底赶走这些外星生物，", style: { "textColor": 0xEDFFF9, "size": 15 } },
                { text: "\n" },
                { text: "这次总攻代号叫做“黎明”。", style: { "textColor": 0xEDFFF9, "size": 15 } },
                { text: "\n" },
                { text: "对了观看广告以及分享可以加快游戏进程记得试一试呦", style: { "textColor": 0xEDFFF9, "size": 15 } },
            )

            this.kai_shi.lineSpacing = 10;
            this.addChild(this.kai_shi);
            this.kai_shi.x = Tools.getPhoneW() * 0.2;
            this.kai_shi.y = Tools.getPhoneH() * 0.01;

            // this.kai_shi.x = this.kai_shi.y = 150;
            this.kai_shi.border = true;

            this.kai_shi.wordWrap = true;
            this.kai_shi.multiline = true;
            this.addChild(this.kai_shi);




        }

    }
}