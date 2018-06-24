module djwq {
    //直射类武器
    export class KaiHuaWuqi extends DJWQBase {
        private small_cd: number = 2000;
        private mark_small_time: number = 0;
        //每次发射的数量
        public shu_liang: number = 0;
        public shu_liang_mark: number = 5;



        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.KAI_HUA);
            this.cd = 500;
            this.shu_liang_mark = 5;
            this.shu_liang = this.shu_liang_mark;
            this.sudu = 1.2;
        }

        //射击
        public fashe(angel: number, suke: shuke.ShuKe, now: number) {

            if ((now - this.mark_small_time) > this.small_cd) {
                if (this.shu_liang > 0) {

                    let angle: number = this.fc.angle
                    let liliang = egret.Point.create(0, this.sudu);
                    this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
                    this.shu_liang--;
                } else {
                    this.mark_small_time = now + this.small_cd;
                    this.shu_liang = this.shu_liang_mark;
                }
            }

        }
    }
}