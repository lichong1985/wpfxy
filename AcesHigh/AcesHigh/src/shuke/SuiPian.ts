module shuke {
    export class SuiPian extends egret.Bitmap {

        //角度
        public degree: number = 0;
        //半径
        public radius: number = 0;


        //目标点
        public pt: egret.Point
        public pp: egret.Point

        public m: number = 0;
        public t: number = 0;

        constructor(name: string, pp: egret.Point) {
            super(RES.getRes(name));
            this.pp = pp;
            this.x = pp.x;
            this.y = pp.y;
            this.init();
        }

        public init() {
            this.anchorOffsetX = this.width * 0.5;
            this.anchorOffsetY = this.height * 0.5;

            //缩放
            let scale = Tools.GetRandomNum(1, 3);
            this.scaleX = scale;
            this.scaleY = scale;
            this.radius = Tools.GetRandomNum(50, 200);
            this.degree = Tools.GetRandomNum(1, 360);
            this.t = Tools.GetRandomNum(30, 100);
            this.pt = egret.Point.polar(this.radius, this.degree * Math.PI / 180);
            this.alpha = 0.5;
        }

        public too() {
            egret.Tween.get(this).to({ "x": this.x + this.pt.x, "y": this.y + this.pt.y }, 200).call(this.zhuan, this);
        }

        //转
        public zhuan() {
            this.m++;
            if (this.m >= 20) {
                this.dell();
                return;
            }
            this.degree += 5;
            this.pt = egret.Point.polar(this.radius, this.degree * Math.PI / 180);
            egret.Tween.get(this).to({ "x": this.pp.x + this.pt.x, "y": this.pp.y + this.pt.y }, this.t).call(this.zhuan, this);

        }

        //移除缓动动画
        public dell() {
            if (this.parent) {
                let p = this.parent
                p.removeChild(this);
            }
        }



    }
}