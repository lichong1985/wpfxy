module zidan {
    export class DaoDanZiDan extends zidan.ZiDanBase {
        //跟踪弹生效时间
        public gz_time: number = 10000;
        public fc: feichuan.FeiChuanBase;
        public sudu: number = 5;
        //导弹启动时间
        public qi_dong = 300;
        public is_go = false;
        public f: number = 0.001;


        //----------------------拐弯用-------------------
        //一半
        public yi_ban = Math.PI * 0.5;

        public guai_wan_jiao_du: number = Math.PI / 4;
        public guai_wan_jiao_du_b: number = Math.PI / 6;
        public guai_wan_num: number = 4;
        public guai_wan_num_mark: number = 0;
        public guai_wan_jiao_du_mark: number = Math.PI;



        public pi: number = 1;

        //计算一次
        public js: boolean = true;

        //到达指定角度 自动导航
        public zd: boolean = false;

        public cishu: number = 0;
        //----------------------
        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number, fc: feichuan.FeiChuanBase) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.DAO_DAN);
            this.initPT();
            this.is_updata = true;
            this.damping = 0;
            this.fc = fc;
            this.bit_name = "us_zd_3";
            this.sudu = 3;
            this.angularVelocity = 5;



        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_3"))
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.displays = [this.bitmap];
        }

        public updata() {
            super.updata();
            // this.sudu += 0.1;
            egret.log("SSSSSSSSSSSSSSSSS:" + this.sudu);

            if ((egret.getTimer() - this.mark_time) > this.gz_time) {
                this.is_updata = false;
                return;
            }
            if (!this.fc) {
                return;
            }
            if ((egret.getTimer() - this.mark_time) < this.qi_dong) {

                super.weiyi(this.bit_name);
                this.force = [0, this.f];
                return;
            }
            this.is_go = true;
            if ((egret.getTimer() - (this.mark_time + this.qi_dong)) < this.qi_dong && this.is_go) {
                super.weiyi(this.bit_name);
                this.force = [0, this.f];
                return;
            }

            if (this.js) {
                this.js = false;
                if (this.fc.position[0] > this.position[0]) {
                    this.pi = -1;
                }
            }


            this.zhidao();
            if (!this.zd) {
                let sx = Math.sin(this.guai_wan_jiao_du_mark) * this.sudu;
                let sy = Math.cos(this.guai_wan_jiao_du_mark) * this.sudu;
                sy = sy * -1;
                this.angularVelocity = 5;
                this.velocity = [sx, sy];
                this.weiyi(this.bit_name);
                return;
            }



            let angle: number = Math.atan2((this.fc.position[1] - this.position[1]), (this.fc.position[0] - this.position[0])) + this.yi_ban;

            let sx = Math.sin(angle) * this.sudu;
            let sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            this.angularVelocity = 5;
            this.velocity = [sx, sy];
            this.weiyi(this.bit_name);

        }

        //制导
        public zhidao() {
            if (this.guai_wan_num_mark < this.guai_wan_num) {
                this.guai_wan_num_mark++;
                return;
            }
            this.guai_wan_num_mark = Math.PI;
            //目标角度
            let tig = this.jisuan_jiaodu();

            //角度差
            let jdc = Math.abs(Math.abs(this.guai_wan_jiao_du_mark) - Math.abs(tig));
            if (Math.abs(jdc) < this.guai_wan_jiao_du) {
                this.zd = true;
                return;
            }

            this.guai_wan_jiao_du_mark += (this.guai_wan_jiao_du * this.pi);
            this.guai_wan_jiao_du_mark = this.guai_wan_jiao_du_mark % (Math.PI * 2);

        }

        //计算角度
        public jisuan_jiaodu(): number {
            let angle = Math.atan2((this.fc.position[1] - this.position[1]), (this.fc.position[0] - this.position[0])) + this.yi_ban;
            if (angle < 0) {
                return Math.PI * 2 + angle;
            }

            return angle;
        }













        public weiyi(name: string) {
            this.wyMark = egret.getTimer();
            let b: egret.Bitmap = new egret.Bitmap(RES.getRes(name));
            b.anchorOffsetX = this.bitmap.width * 0.5;
            b.anchorOffsetY = this.bitmap.height * 0.5;

            b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = this.bitmap.x;
            b.y = this.bitmap.y;
            b.scaleX = 0.5;
            b.scaleY = 0.5;
            this.scene.addChild(b);
            b.alpha = 0.8;
            egret.Tween.get(b).to({ "alpha": 0.1 }, 250).call(this.dell, this, [b]);

        }



        // public texiao() {
        //     this.bitmap.scaleX = 0.8;
        //     this.bitmap.scaleY = 0.8;
        //     this.bitmap.alpha = 0.8
        //     egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 800).call(super.dell, this, [this.bitmap]);

        // }

    }
}