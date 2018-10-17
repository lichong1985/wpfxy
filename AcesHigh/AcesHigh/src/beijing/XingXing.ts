module bj {
    export class XingXing extends p2.Body {
        public bitmap: egret.Bitmap;
        public name: string;
        public sf: number;//缩放
        public tm: number;//透明
        public zl: number;//种类（主要是 速度 层级相关 1速度 最慢  5速度最快）
        public w: number;//地图宽
        public h: number;//地图高

        public rx: number;  //随机的x轴坐标
        public ry: number = 900;  //随机的y轴坐标

        public is_jiasu: boolean = false;



        //rt 位置随机的类型 1 全图随机 2 x方向随机
        constructor(zl: number, rt: number) {
            super({ mass: 1 })
            this.name = "xx1";
            this.sf = Tools.GetRandomNum(5, 10) * 0.1;
            this.tm = Tools.GetRandomNum(5, 10) * 0.1;
            this.zl = zl;
            this.w = Tools.getPhoneW();
            this.h = Tools.getPhoneH();
            this.rx = Tools.GetRandomNum(0, this.w) + 1000;
            if (rt == 1) {
                this.ry = Tools.GetRandomNum(0, this.h) + 1000;
            }
            this.initZidan();

        }

        public initZidan() {
            let box: p2.Box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO] });
            this.addShape(box);
            box.collisionMask = GameConstant.XING_XING;
            box.collisionGroup = GameConstant.WO_JUN;

            this.bitmap = new egret.Bitmap(RES.getRes(this.name))
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = this.sf;
            this.bitmap.scaleY = this.sf;
            this.bitmap.alpha = this.tm;
            this.displays = [this.bitmap];
            let p = Tools.egretTOp2(egret.Point.create(this.rx, this.ry));
            this.position = [p.x, p.y];
            this.velocity = [0, -this.zl];
        }

        //重新回到顶点
        public reTop() {
            this.rx = Tools.GetRandomNum(0, this.w) + 1000;
            this.ry = 900;
            let p = Tools.egretTOp2(egret.Point.create(this.rx, this.ry));
            this.position = [p.x, p.y];

        }

        public jiasu() {
            this.velocity = [0, -this.zl * 8];
            egret.log("++++++++++++++++++++")
        }

        public jiansu() {
            this.velocity = [0, -this.zl];
        }

    }
}