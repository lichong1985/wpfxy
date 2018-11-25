module zy {
    export class ZhuYe extends egret.DisplayObjectContainer {
        // public fen_xiang: egret.TextField = new egret.TextField();//分享
        public gu_shi_bei_jing: egret.TextField = new egret.TextField();//故事背景
        public ren_wu: egret.TextField = new egret.TextField();//任务
        public kai_shi: egret.TextField = new egret.TextField();//开始
        public wu_qi: egret.TextField = new egret.TextField();//武器
        public chou_jiang: egret.TextField = new egret.TextField();//抽奖
        public da_shang: egret.TextField = new egret.TextField();//打赏
        // public vio: egret.TextField = new egret.TextField();//vip
        public pai_hang: egret.TextField = new egret.TextField();//排行


        //子页面
        public zym: ziyeMi = null;

        //main
        public mian: eui.UILayer;



        constructor(mian: eui.UILayer) {
            super();
            this.init();
            this.mian = mian;
        }

        public init() {
            this.width = Tools.getPhoneW();
            this.height = Tools.getPhoneH();
            let bg: BeiJing = new BeiJing();
            bg.x = 0;
            bg.y = 0;
            this.addChild(bg);


            // this.initFenXiang();
            this.initYouXiBeiJing();
            this.iniRenWu();
            this.initKaiShi();
            this.initWuQi();
            this.initChouJiang();
            this.initdashang();
            // this.initVIP();
            this.initPaiHang();
        }


        //初始化分享
        // public initFenXiang() {
        //     this.fen_xiang.textFlow = new Array<egret.ITextElement>(
        //         { text: "分享", style: { underline: true, "textColor": 0xEDFFF9 } })

        //     this.fen_xiang.lineSpacing = 20;
        //     this.addChild(this.fen_xiang);
        //     this.fen_xiang.x = Tools.getPhoneW() * 0.01
        //     this.fen_xiang.y = Tools.getPhoneH() * 0.1;
        // }

        //简介
        public initYouXiBeiJing() {
            this.gu_shi_bei_jing.textFlow = new Array<egret.ITextElement>(
                { text: "简介", style: { underline: true, "textColor": 0xEDFFF9 } })

            this.gu_shi_bei_jing.lineSpacing = 20;
            this.addChild(this.gu_shi_bei_jing);
            this.gu_shi_bei_jing.x = Tools.getPhoneW() * 0.01
            this.gu_shi_bei_jing.y = Tools.getPhoneH() * 0.15;

            //添加点击事件
            this.gu_shi_bei_jing.touchEnabled = true;
            this.gu_shi_bei_jing.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jianjieOnT, this);
        }

        public jianjieOnT() {

            egret.Tween.get(this.gu_shi_bei_jing).to({ "scaleX": 1.1, "scaleY": 1.1 }, 100).to({ "scaleX": 1, "scaleY": 1 }, 100);
            this.rem_zi();
            this.zym = new JianJieMi(this);
            this.addChild(this.zym);


        }
        //任务
        public iniRenWu() {
            this.ren_wu.textFlow = new Array<egret.ITextElement>(
                { text: "任务", style: { underline: true, "textColor": 0xEDFFF9 } })

            this.ren_wu.lineSpacing = 20;
            this.addChild(this.ren_wu);
            this.ren_wu.x = Tools.getPhoneW() * 0.01
            this.ren_wu.y = Tools.getPhoneH() * 0.2;
        }
        //开始
        public initKaiShi() {
            this.kai_shi.textFlow = new Array<egret.ITextElement>(
                { text: "开始", style: { underline: true, "textColor": 0xEDFFF9 } })

            this.kai_shi.lineSpacing = 20;
            this.addChild(this.kai_shi);
            this.kai_shi.x = Tools.getPhoneW() * 0.01
            this.kai_shi.y = Tools.getPhoneH() * 0.25;
            //添加点击事件
            this.kai_shi.touchEnabled = true;
            this.kai_shi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kaishiOnT, this);



        }

        public kaishiOnT() {

            egret.Tween.get(this.kai_shi).to({ "scaleX": 1.1, "scaleY": 1.1 }, 100).to({ "scaleX": 1, "scaleY": 1 }, 100);
            this.rem_zi();
            this.zym = new kaishiMi(this);
            this.addChild(this.zym);


        }
        //武器
        public initWuQi() {
            this.wu_qi.textFlow = new Array<egret.ITextElement>(
                { text: "武器", style: { underline: true, "textColor": 0xEDFFF9 } })

            this.wu_qi.lineSpacing = 20;
            this.addChild(this.wu_qi);
            this.wu_qi.x = Tools.getPhoneW() * 0.01
            this.wu_qi.y = Tools.getPhoneH() * 0.3;
        }
        //初始抽奖
        public initChouJiang() {
            this.chou_jiang.textFlow = new Array<egret.ITextElement>(
                { text: "抽奖", style: { underline: true, "textColor": 0xEDFFF9 } })

            this.chou_jiang.lineSpacing = 20;
            this.addChild(this.chou_jiang);
            this.chou_jiang.x = Tools.getPhoneW() * 0.01
            this.chou_jiang.y = Tools.getPhoneH() * 0.35;
        }
        //打赏
        public initdashang() {
            this.da_shang.textFlow = new Array<egret.ITextElement>(
                { text: "打赏", style: { underline: true, "textColor": 0xEDFFF9 } })

            this.da_shang.lineSpacing = 20;
            this.addChild(this.da_shang);
            this.da_shang.x = Tools.getPhoneW() * 0.01
            this.da_shang.y = Tools.getPhoneH() * 0.4;
        }
        //vip
        // public initVIP() {
        //     this.vio.textFlow = new Array<egret.ITextElement>(
        //         { text: "终身VIP", style: { underline: true, "textColor": 0xEDFFF9 } })

        //     this.vio.lineSpacing = 20;
        //     this.addChild(this.vio);
        //     this.vio.x = Tools.getPhoneW() * 0.01
        //     this.vio.y = Tools.getPhoneH() * 0.45;
        // }
        //排行
        public initPaiHang() {
            this.pai_hang.textFlow = new Array<egret.ITextElement>(
                { text: "排行", style: { underline: true, "textColor": 0xEDFFF9 } })

            this.pai_hang.lineSpacing = 20;
            this.addChild(this.pai_hang);
            this.pai_hang.x = Tools.getPhoneW() * 0.01
            this.pai_hang.y = Tools.getPhoneH() * 0.5;
        }




        //结束界面 移除相关绑定
        public end() {

        }
        //切换界面 
        public qie() {
            let testSen: TestScene = new TestScene();
            this.mian.stage.removeChild(this);
            this.mian.stage.addChild(testSen)
            testSen.x = -scene.scene_anch_x;
            testSen.y = -scene.scene_anch_y;
        }

        //移除子页面
        public rem_zi() {
            if (!this.zym) {
                return;
            }

            if (!this.zym.parent) {
                this.zym = null;
                return;
            }
            this.zym.parent.removeChild(this.zym);
            this.zym = null;
        }

    }




}