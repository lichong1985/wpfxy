module ai {
    export class MiaoZhun extends AiBase {
        public xs: number;
        //当前旋转方向
        public xuan_zhuan_fang_xiang: ai.ZHUAN_XIANG;
        public is_xuan_ting: boolean = false;//是否悬停
        constructor(fc: feichuan.FeiChuanBase, xs: number) {
            super(fc);
            this.xs = xs;
        }

        public doUpData(time: number) {
            if (!this.hang_up) {
                super.doUpData(time)

                let angle: number = Math.atan2((this.suke.position[1] - this.fc.position[1]), (this.suke.position[0] - this.fc.position[0])) + Math.PI * 0.5
                let zx = (Math.PI + 1.57);

                // 


                //画重点
                if (this.fc.angle > zx) {
                    this.fc.angle = this.fc.angle - 2 * Math.PI;
                }
                //连续画重点
                if (this.fc.angle < -Math.PI * 0.5) {
                    this.fc.angle = zx;
                }
                if (Math.abs(this.fc.angle - angle) < 0.3) {
                    return;
                }

                egret.log("YYYYYYYYYYYYYYY:" + (this.fc.angle) + "_____" + angle + " || " + Math.abs(this.fc.angle - angle));

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


                // //是否处于悬停状态
                if (!this.is_xuan_ting) {
                    //顺时针
                    if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Clockwise) {
                        this.fc.angularVelocity = -this.xs;
                    }
                    if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Anti_clockwise) {
                        this.fc.angularVelocity = this.xs;
                    }
                }
            }
        }
    }
}