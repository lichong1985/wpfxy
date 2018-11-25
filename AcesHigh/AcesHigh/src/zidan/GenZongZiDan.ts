module zidan {
    export class GenZongZiDan extends zidan.ZiDanBase {
        //跟踪弹生效时间
        public gz_time: number = 10000;
        public suke: shuke.ShuKe;
        public sudu: number = 2;
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

        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number, suke: shuke.ShuKe) {
            super(scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG);
            this.initPT();
            this.is_updata = true;
            this.damping = 0;
            this.suke = suke;
            this.bit_name = "op_wq_3";

        }
        public initPT() {
            this.bitmap = new egret.Bitmap(RES.getRes("op_wq_3"))
            this.damping = 0;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        }

        public updata() {
            super.updata();

            if ((egret.getTimer() - this.mark_time) > this.gz_time) {
                this.is_updata = false;
                return;
            }



            if (this.js) {
                this.js = false;
                if (this.suke.position[0] > this.position[0]) {
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



            let angle: number = this.jisuan_jiaodu();


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
            let angle = Math.atan2((this.suke.position[1] - this.position[1]), (this.suke.position[0] - this.position[0])) + this.yi_ban;
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

    }
}