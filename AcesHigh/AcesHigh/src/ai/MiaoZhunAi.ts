module ai {
    export class MiaoZhun extends AiBase {
        //角速度
        public xs: number = 4;
        //当前旋转方向
        public xuan_zhuan_fang_xiang: ai.ZHUAN_XIANG;
        //需要转到的角度
        public angle: number = 0;
        public xs_hu: number = 1;
        //飞船实际需要面准的部位
        public jian_tou: number = -Math.PI * 0.5;
        constructor(fc: feichuan.FeiChuanBase, mt: zhuangtaiji.ZT_TYPE, xz: zhuangtaiji.ZT_TYPE, mz: zhuangtaiji.ZT_TYPE) {
            super(fc, mt, xz, mz);
        }

        public doUpData(time: number) {
            super.doUpData(time);
            //角度测算

            this.angle = Math.atan2((this.fc.battle_scene.sk.position[1] - this.fc.position[1]), (this.fc.battle_scene.sk.position[0] - this.fc.position[0]));
            this.angle = this.angle % (Math.PI * 2);
            if (this.angle < 0) {
                this.angle = Math.PI * 2 + this.angle;
            }


            let fcAng = this.fc.angle + this.jian_tou;
            //规范化角度数值
            fcAng = fcAng % (Math.PI * 2);
            if (fcAng < 0) {
                fcAng = Math.PI * 2 + fcAng;
            }

            let js = this.xs;

            //角度差距
            let jc = Math.abs(fcAng - this.angle);
            jc = jc % (Math.PI * 2);
            //方向计算

            if (fcAng >= this.angle) {
                if (jc > Math.PI) {
                    this.xs_hu = 1;
                } else {
                    this.xs_hu = -1;
                }

            }
            if (fcAng < this.angle) {
                if (jc > Math.PI) {
                    this.xs_hu = -1;
                } else {
                    this.xs_hu = 1;
                }
            }


            let pi = jc / Math.PI;
            js = this.xs * pi;

            if (jc < 0.05) {
                this.fc.angularVelocity = 0;
                return;
            }

            this.fc.angularVelocity = this.xs_hu * js;

        }
    }
}