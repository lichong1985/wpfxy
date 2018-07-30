module feichuan {
    export class FeiChuanInfo {
        public height: number;
        public width: number;
        public data: number[];
        public zhuang_jia_nan_du: number;
        public wu_qi_nan_du: number;
        public fc_type: number;
        public ti_ji: number;
        public wu_qi_shu_liang: number;
        public file_name: string;
        public is_ji_guang: boolean;
        public is_gen_zong: boolean;
        public is_ju_zhen: boolean;
        public is_san_dan: boolean;
        public is_wei_bu: boolean;
        public tiles: string[];
        //出生点
        public chu_sheng_pos: egret.Point;

        //目标点
        public target_pos: egret.Point;
        constructor() {

        }

        // public getGW(): number {
        //     return parseInt(this.width / 2.5);
        // }

        //重置坐标
        public reRandomPos() {
            this.random_cs_Pos();
            this.random_target();
        }
        //随机目标点
        public random_target() {
            let x: number;
            let y: number;

            x = suiji.GetRandomNum(0, 30);
            y = suiji.GetRandomNum(0, 50);
            this.target_pos = egret.Point.create(x, y);
        }
        //随机出生点
        public random_cs_Pos() {
            let fx = suiji.randomFangXiang();
            let x: number;
            let y: number;
            //上
            if (fx == 1) {
                x = suiji.GetRandomNum(-5, 35);
                y = suiji.GetRandomNum(-5, -1);

            }
            //下
            if (fx == 2) {
                x = suiji.GetRandomNum(-5, 35);
                y = suiji.GetRandomNum(51, 55);
            }
            //左
            if (fx == 3) {
                x = suiji.GetRandomNum(-5, -1);
                y = suiji.GetRandomNum(0, 50);

            }
            //右
            if (fx == 4) {
                x = suiji.GetRandomNum(31, 35);
                y = suiji.GetRandomNum(0, 50);
            }

            this.chu_sheng_pos = egret.Point.create(x, y);
        }
    }
}