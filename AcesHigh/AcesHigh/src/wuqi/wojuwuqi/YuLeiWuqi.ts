module wjwq {
    export class YuLeiWuqi extends wuqi.WuQiBase {
        private small_cd: number = 5000;
        private mark_small_time: number = 0;
        //每次发射的数量
        public shu_liang: number = 0;
        public shu_liang_mark: number = 5;


        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, fc: feichuan.FeiChuanBase, level: number) {
            super(mokaiPos, shType, "us_wq_6", wuqi.WUQI_TYPE.YU_LEI, fc);
            this.level = level;
            this.cd = 800;
            this.shu_liang_mark += level;
            this.shu_liang = this.shu_liang_mark;


        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            now = egret.getTimer();
            //发射鱼雷
            if ((now - this.mark_small_time) > this.small_cd) {
                if (this.shu_liang > 0) {
                    //发射子弹

                    this.diu(this.wuqi_type, egret.Point.create(0, 0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0);
                } else {
                    this.mark_small_time = now + this.small_cd;
                    this.shu_liang = this.shu_liang_mark;
                }
                this.shu_liang--;
            }
        }
    }

}   