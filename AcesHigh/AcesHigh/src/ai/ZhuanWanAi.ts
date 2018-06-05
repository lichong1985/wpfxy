module ai {
    export class ZhuanXiang extends ai.AiBase {
        public xs: number = 0.5;
        //当前旋转方向
        public xuan_zhuan_fang_xiang: ai.ZHUAN_XIANG;
        constructor(fc: feichuan.FeiChuanBase) {
            super(fc);
            this.fc.angularDamping = 0.9;
        }

        //场景刷新器
        public doUpData(time: number) {
            if (!this.hang_up) {
                if (this.fc.p2_target) {

                    let angle: number = Math.atan2((this.fc.p2_target.y - this.fc.position[1]), (this.fc.p2_target.x - this.fc.position[0])) + Math.PI * 0.5
                    let zx = (Math.PI + 1.57);


                    //画重点
                    if (this.fc.angle > zx) {
                        this.fc.angle = this.fc.angle - 2 * Math.PI;
                    }
                    //连续画重点
                    if (this.fc.angle < -Math.PI * 0.5) {
                        this.fc.angle = zx;
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


                    // //是否处于悬停状态

                    //顺时针
                    if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Clockwise) {
                        if (Math.abs(this.fc.angle - angle) > 0.1) {
                            this.fc.angularVelocity = -this.xs;
                        }
                    }
                    if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Anti_clockwise) {
                        if (Math.abs(this.fc.angle - angle) > 0.1) {
                            this.fc.angularVelocity = this.xs;
                        }
                    }


                    // egret.log("AAAAAAAAAAAAAAA:" + this.fc.angle + "___" + angle + "___" + this.xuan_zhuan_fang_xiang);
                }
            }
        }
    }



}