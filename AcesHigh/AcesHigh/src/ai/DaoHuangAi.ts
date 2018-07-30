module ai {
    export class DaoHuangAi extends AiBase {
        //角速度
        public xs: number = 1;
        //当前旋转方向
        public xuan_zhuan_fang_xiang: ai.ZHUAN_XIANG;
        public is_chick: boolean = false;//是否完成
        public is_upFX: boolean = true;//是否更新旋转方向
        constructor(fc: feichuan.FeiChuanBase) {
            super(fc);
        }
        public doUpData(time: number) {
            super.doUpData(time);
            //判断飞船目的地
            if (!this.fc.toPoint) {
                return;
            }

            let angle: number = Math.atan2((this.fc.toPoint.y - this.fc.position[1]), (this.fc.toPoint.x - this.fc.position[0])) + Math.PI * 0.5
            let zx = (Math.PI + 1.57);
            let js = this.xs;



            //画重点
            if (this.fc.angle > zx) {
                this.fc.angle = this.fc.angle - 2 * Math.PI;
            }
            //连续画重点
            if (this.fc.angle < -Math.PI * 0.5) {
                this.fc.angle = zx;
            }
            //角度差距
            let jc = Math.abs(this.fc.angle - angle);
            //转向递减
            if (jc < 1) {
                js = this.xs * jc;
                if (js < 0.1) {
                    js = 0.1;
                }

            }
            if (jc < 0.1) {
                this.fc.angularVelocity = 0;
                if (!this.is_chick) {
                    this.fc.ztj.mT = zhuangtaiji.ZT_TYPE.MIAO_ZHUN_OVER;
                    this.is_chick = true;
                }
                this.is_upFX = true;
                return;
            }


            if (angle >= 0 && this.fc.angle >= 0) {
                if (Math.abs(angle - this.fc.angle) < Math.PI) {
                    if (angle < this.fc.angle) {
                        this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise
                    } else {
                        this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise

                    }
                } else {
                    if (angle < this.fc.angle) {
                        this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise
                    } else {
                        this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                    }
                }
            }

            if (angle < 0 && this.fc.angle >= 0) {
                if (Math.abs(angle) + this.fc.angle < Math.PI) {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise
                } else {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                }

            }

            if (this.fc.angle < 0 && angle >= 0) {
                if (Math.abs(angle) + this.fc.angle < Math.PI) {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise
                } else {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                }

            }

            if (this.fc.angle < 0 && angle < 0) {
                if (this.fc.angle < angle) {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise
                } else {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise
                }


            }

            if (this.is_upFX) {
                //顺时针
                if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Clockwise) {
                    this.fc.angularVelocity = -js;
                }
                if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Anti_clockwise) {
                    this.fc.angularVelocity = js;
                }
                this.is_upFX = false;
            }
        }

    }
}