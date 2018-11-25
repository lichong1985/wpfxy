module wjwq {
    export class LuoXuanWuqi extends wuqi.WuQiBase {

        public zd1: zidan.LuoXuanZiDan = null;
        public zd2: zidan.LuoXuanZiDan = null;
        public zd3: zidan.LuoXuanZiDan = null;
        public zd4: zidan.LuoXuanZiDan = null;
        public zd5: zidan.LuoXuanZiDan = null;

        //当前螺旋子弹的数量
        public zd_number: number = 0;

        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, fc: feichuan.FeiChuanBase, level: number) {
            super(mokaiPos, shType, "us_wq_7", wuqi.WUQI_TYPE.LUO_XUAN, fc);
            this.level = level;
            this.cd = 5000;


        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            super.fashe(angel, suke, now);
            if (this.level < 3 && this.zd_number == 3) {
                return;
            }

            if (this.level < 5 && this.zd_number == 4) {
                return;
            }

            if (this.zd_number == 5) {
                return;
            }
            let zd = this.diu(this.wuqi_type, egret.Point.create(0, 0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0);
            //添加子弹
            this.addZD(<zidan.LuoXuanZiDan>zd);
        }

        public removeZD(n: number) {
            this.zd_number--;
            if (n == 1) {
                this.zd1 = null;
            }

            if (n == 2) {
                this.zd2 = null;
            }

            if (n == 3) {
                this.zd3 = null;
            }

            if (n == 4) {
                this.zd4 = null;
            }

            if (n == 5) {
                this.zd5 = null;
            }
        }



        //添加子弹
        public addZD(zd: zidan.LuoXuanZiDan) {
            this.zd_number++;
            if (this.zd1 == null) {
                this.zd1 = zd;
                this.zd1.hao_ma = 1;
                this.zd1.wu = this;
                this.zd1.wz = 0;
                return;
            }

            if (this.zd2 == null) {
                this.zd2 = zd;
                this.zd2.hao_ma = 2;
                this.zd2.wu = this;
                this.zd2.wz = this.getAngle();
                return;
            }

            if (this.zd3 == null) {
                this.zd3 = zd;
                this.zd3.hao_ma = 3;
                this.zd3.wu = this;
                this.zd3.wz = this.getAngle() * 2;
                return;
            }

            if (this.level >= 3) {
                if (this.zd4 == null) {
                    this.zd4 = zd;
                    this.zd4.hao_ma = 4;
                    this.zd4.wu = this;
                    this.zd4.wz = this.getAngle() * 3;
                    return;
                }
            }

            if (this.level == 5) {
                if (this.zd5 == null) {
                    this.zd5 = zd;
                    this.zd5.hao_ma = 5;
                    this.zd5.wu = this;
                    this.zd5.wz = this.getAngle() * 4;
                    return;
                }
            }



        }

        public getAngle(): number {

            if (this.level >= 3 && this.level < 5) {
                return Math.PI * 2 / 4
            }

            if (this.level == 5) {
                return Math.PI * 2 / 5
            }
            return Math.PI * 2 / 3
        }
    }
}   