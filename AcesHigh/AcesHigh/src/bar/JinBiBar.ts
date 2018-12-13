module bar {
    export class JinBiBar {
        public scene: scene.SceneBase;
        //晶体图标
        public jing: egret.Bitmap;
        //个
        public ge: egret.Bitmap;
        //十
        public shi: egret.Bitmap;
        //百
        public bai: egret.Bitmap;
        //千
        public qian: egret.Bitmap;
        //万
        public wan: egret.Bitmap;

        //当前所有的数
        public all_number: number = 17865;

        //是否需要变更
        public is_chang: boolean = false;

        //  红色RGB
        public hong: number[] = [251, 17, 57];
        //白色RGB
        public white: number[] = [237, 255, 249];





        //个个位置对应的数
        public ge_numb: number = 0;
        public shi_numb: number = 0;
        public bai_numb: number = 0;
        public qian_numb: number = 0;
        public wan_numb: number = 0;

        public ge_numb_old: number = 0;
        public shi_numb_old: number = 0;
        public bai_numb_old: number = 0;
        public qian_numb_old: number = 0;
        public wan_numb_old: number = 0;


        public ge_mark: number = 1;
        public shi_mark: number = 1;
        public bai_mark: number = 1;
        public qian_mark: number = 1;
        public wan_mark: number = 1;

        public is_ge: boolean = false;
        public is_shi: boolean = false;
        public is_bai: boolean = false;
        public is_qian: boolean = false;
        public is_wan: boolean = false;



        constructor(scene: scene.SceneBase, all: number) {
            this.scene = scene;
            this.all_number = all;
            this.renumber();
            this.initNumber();
        }

        public initNumber() {
            this.ge = new egret.Bitmap(RES.getRes(this.ge_numb + ""));
            this.shi = new egret.Bitmap(RES.getRes(this.shi_numb + ""));
            this.bai = new egret.Bitmap(RES.getRes(this.bai_numb + ""));
            this.qian = new egret.Bitmap(RES.getRes(this.qian_numb + ""));
            this.wan = new egret.Bitmap(RES.getRes(this.wan_numb + ""));
            this.jing = new egret.Bitmap(RES.getRes("jt"));

            this.ge.y = Tools.getPhoneH() * 0.02 + 1000;
            this.shi.y = Tools.getPhoneH() * 0.02 + 1000;
            this.bai.y = Tools.getPhoneH() * 0.02 + 1000;
            this.qian.y = Tools.getPhoneH() * 0.02 + 1000;
            this.wan.y = Tools.getPhoneH() * 0.02 + 1000;
            this.jing.y = Tools.getPhoneH() * 0.02 + 1000;

            this.wan.x = Tools.getPhoneW() * 0.4 + 1000;
            this.qian.x = Tools.getPhoneW() * 0.43 + 1000;
            this.bai.x = Tools.getPhoneW() * 0.46 + 1000;
            this.shi.x = Tools.getPhoneW() * 0.49 + 1000;
            this.ge.x = Tools.getPhoneW() * 0.52 + 1000;
            this.jing.x = Tools.getPhoneW() * 0.55 + 1000;




            this.scene.addChild(this.ge);
            this.scene.addChild(this.shi);
            this.scene.addChild(this.bai);
            this.scene.addChild(this.qian);
            this.scene.addChild(this.wan);
            this.scene.addChild(this.jing);

        }


        //刷新数字
        public renumber() {
            this.wan_numb = Math.floor(this.all_number / 10000);
            this.qian_numb = Math.floor(this.all_number % 10000 / 1000);
            this.bai_numb = Math.floor(this.all_number % 1000 / 100);
            this.shi_numb = Math.floor(this.all_number % 100 / 10);
            this.ge_numb = Math.floor(this.all_number % 10);
            this.is_chang = true;
            this.is_ge = true;
            this.is_shi = true;
            this.is_bai = true;
            this.is_qian = true;
            this.is_wan = true;

        }

        //加钱
        public addAllNumb(n: number) {
            this.all_number += n;
            user.UserInfo.saveJinBi(this.all_number);
            this.renumber();
        }
        //减钱
        public jianAllNumb(n: number): boolean {
            if (this.all_number < n) {
                //TODO 特效 
                this.texiao();
                return false;
            }

            this.all_number -= n;
            user.UserInfo.saveJinBi(this.all_number);
            this.renumber();
            return true;
        }
        //特效
        public texiao() {


            egret.Tween.get(this.ge).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50);
            egret.Tween.get(this.shi).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50);
            egret.Tween.get(this.bai).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50);
            egret.Tween.get(this.qian).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50);
            egret.Tween.get(this.wan).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50);


        }

        //刷新数字
        public updata() {
            // if (!this.is_chang) {
            //     return;
            // }

            // this.is_chang = false;
            if (this.is_ge)
                this.upge();
            if (this.is_shi)
                this.upshi();
            if (this.is_bai)
                this.upbai();
            if (this.is_qian)
                this.upqian();
            if (this.is_wan)
                this.upwan();

        }

        //更新个位数
        public upge() {
            //不变 退出
            if (this.ge_numb == this.ge_numb_old && this.ge_mark == 0) {
                this.ge_mark = 1;
                this.is_ge = false;
                return;
            }
            if (this.ge_numb == this.ge_numb_old) {
                this.ge_mark--;
            }

            this.ge_numb_old++;
            this.ge_numb_old = this.ge_numb_old % 10;
            this.ge.texture = RES.getRes(this.ge_numb_old + "");
            egret.Tween.get(this.ge).to({ "scaleY": 1.5 }, 50).to({ "scaleY": 1 }, 50);
        }

        //更新十位数
        public upshi() {
            //不变 退出
            if (this.shi_numb == this.shi_numb_old && this.shi_mark == 0) {
                this.shi_mark = 1;
                this.is_shi = false;
                return;
            }

            if (this.shi_numb == this.shi_numb_old) {
                this.shi_mark--;
            }

            this.shi_numb_old++;
            this.shi_numb_old = this.shi_numb_old % 10;
            this.shi.texture = RES.getRes(this.shi_numb_old + "");
            egret.Tween.get(this.shi).to({ "scaleY": 1.5 }, 50).to({ "scaleY": 1 }, 50);
        }

        //更新白位数
        public upbai() {
            //不变 退出
            if (this.bai_numb == this.bai_numb_old && this.bai_mark == 0) {
                this.bai_mark = 1;
                this.is_bai = false;
                return;
            }

            if (this.bai_numb == this.bai_numb_old) {
                this.bai_mark--;
            }

            this.bai_numb_old++;
            this.bai_numb_old = this.bai_numb_old % 10;
            this.bai.texture = RES.getRes(this.bai_numb_old + "");
            egret.Tween.get(this.bai).to({ "scaleY": 1.5 }, 50).to({ "scaleY": 1 }, 50);
        }

        //更新白位数
        public upqian() {
            //不变 退出
            if (this.qian_numb == this.qian_numb_old && this.qian_mark == 0) {
                this.qian_mark = 1;
                this.is_qian = false;
                return;
            }

            if (this.qian_numb == this.qian_numb_old) {
                this.qian_mark--;
            }

            this.qian_numb_old++;
            this.qian_numb_old = this.qian_numb_old % 10;
            this.qian.texture = RES.getRes(this.qian_numb_old + "");
            egret.Tween.get(this.qian).to({ "scaleY": 1.5 }, 50).to({ "scaleY": 1 }, 50);
        }

        //更新白位数
        public upwan() {
            //不变 退出
            if (this.wan_numb == this.wan_numb_old && this.wan_mark == 0) {
                this.wan_mark = 1;
                this.is_wan = false;
                return;
            }

            if (this.wan_numb == this.wan_numb_old) {
                this.wan_mark--;
            }

            this.wan_numb_old++;
            this.wan_numb_old = this.wan_numb_old % 10;
            this.wan.texture = RES.getRes(this.wan_numb_old + "");
            egret.Tween.get(this.wan).to({ "scaleY": 1.5 }, 50).to({ "scaleY": 1 }, 50);
        }



    }
}