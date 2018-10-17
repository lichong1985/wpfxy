module wjwq {
    export class DaoDanWuqi extends wuqi.WuQiBase {
        private small_cd: number = 2000;
        private mark_small_time: number = 0;
        //每次发射的数量
        public shu_liang: number = 0;
        public shu_liang_mark: number = 1;

        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, fc: feichuan.FeiChuanBase, level: number) {
            super(mokaiPos, shType, "us_wq_3", wuqi.WUQI_TYPE.DAO_DAN, fc);
            this.level = level;
            // this.shu_liang_mark = level;
            this.cd = 150;

        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            if ((now - this.mark_small_time) > this.small_cd) {
                if (this.shu_liang > 0) {
                    let angle: number = this.fc.angle
                    let liliang = egret.Point.create(0, -5);
                    if (this.mark_tiaget()) {
                        super.fashe(angel, suke, now);
                        this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.WO_JUN_ZIDAN, angle);
                    }
                    this.shu_liang--;
                } else {
                    this.mark_small_time = now + this.small_cd;
                    this.shu_liang = this.shu_liang_mark;
                }
            }
        }


        //标记最近的飞船
        public mark_tiaget(): boolean {
            let zj: feichuan.FeiChuanBase;
            let jl = -1;
            for (let ff of this.fc.battle_scene.dijis) {
                if (!zj) {
                    zj = ff;
                    if (ff.hx) {
                        jl = egret.Point.distance(egret.Point.create(ff.hx.x, ff.hx.y), egret.Point.create(this.fc.hx.x, this.fc.hx.y));
                    }
                    continue;
                }

                if (!ff.hx) {

                }
                if (!ff.hx.x) {

                }
                //根据 距离判断先打哪个飞机
                let ju_li = egret.Point.distance(egret.Point.create(ff.hx.x, ff.hx.y), egret.Point.create(this.fc.hx.x, this.fc.hx.y));
                if (ju_li < jl) {
                    zj = ff;
                }
            }
            if (zj) {
                this.tiaget_fc = zj;
                return true;
            }
            return false;
        }




    }
}