module wjwq {
    export class PaoTaiWuqi extends wuqi.WuQiBase {
        private small_cd: number = 1000;
        private mark_small_time: number = 0;
        //每次发射的数量
        public shu_liang: number = 0;
        public shu_liang_mark: number = 5;

        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, fc: feichuan.FeiChuanBase, level: number) {

            super(mokaiPos, shType, "us_wq_5", wuqi.WUQI_TYPE.DING_XIANG, fc);
            this.level = level;
            this.shu_liang_mark = level;
            this.cd = 2000;
            this.sudu = 9;
            this.lianji = level
            this.lianji_mark = this.lianji;
        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            // if ((now - this.mark_small_time) > this.small_cd) {
            //     if (this.shu_liang > 0) {
            let zj = this.mark_tiaget();

            if (zj && zj.hx) {
                let angel = this.getAngel(zj);
                let liliang = this.getLiliang(zj, angel);
                //发射子弹
                super.fashe(angel, suke, now);
                this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.WO_JUN_ZIDAN, angel);
            }
            //     this.shu_liang--;
            // } else {
            //     this.mark_small_time = now + this.small_cd;
            //     this.shu_liang = this.shu_liang_mark;
            // }
            // }
        }



        //计算角度
        public getAngel(zj: feichuan.FeiChuanBase): number {

            let hx: egret.Point = Tools.egretTOp2(egret.Point.create(zj.hx.x, zj.hx.y));
            let wq: egret.Point = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            return Math.atan2((hx.y - wq.y), (hx.x - wq.x)) + Math.PI * 0.5
        }

        //标记最近的飞船
        public mark_tiaget(): feichuan.FeiChuanBase {
            let zj: feichuan.FeiChuanBase;
            let jl = -1;
            for (let ff of this.fc.battle_scene.dijis) {


                if (!ff) {
                    return;
                }

                if (!ff.hx) {
                    return;
                }
                

                if (!zj) {
                    zj = ff;
                    if (ff.hx) {
                        jl = egret.Point.distance(egret.Point.create(ff.hx.x, ff.hx.y),
                            egret.Point.create(this.fc.pt.x, this.fc.pt.y));
                    }
                    continue;
                }
                //根据 距离判断先打哪个飞机
                let ju_li = egret.Point.distance(egret.Point.create(ff.hx.x, ff.hx.y), egret.Point.create(this.fc.pt.x, this.fc.pt.y));
                if (ju_li < jl) {
                    zj = ff;
                }
            }
            if (zj) {

                return zj;
            }
            return null;
        }

        // 获取设计向量
        public getLiliang(zj: feichuan.FeiChuanBase, angle: number): egret.Point {
            if (zj) {
                let sx = Math.sin(angle) * this.sudu;
                let sy = Math.cos(angle) * this.sudu;
                sy *= -1;
                let liliang = egret.Point.create(sx, sy);
                return liliang;
            }
            return null;
        }




    }
}