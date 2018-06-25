module djwq {
    enum JG_TYPE {
        WU,//无状态
        ZHAO,//照射状态
        GONG,//攻击状态 
        TIAO_ZHENG,//调整状态
    }
    //直射类武器
    export class JiGuangWuqi extends DJWQBase {
        public kuan: number = 10;
        public G_kuan: number = 4;
        public zt: JG_TYPE;
        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.JI_GUANG);
            this.cd = 100;
            this.sudu = 25;
            this.zt = JG_TYPE.WU;
        }

        //射击
        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            // egret.log("XXXXXXXX:" + this.fc.battle_scene.canHais.length);
            if (this.zt == JG_TYPE.TIAO_ZHENG) {
                return;
            }
            //没有状态时候 发起照射
            if (this.zt == JG_TYPE.WU) {
                let shp: egret.Shape = new egret.Shape();
                shp.graphics.lineStyle(this.kuan, 0xffff00);
                shp.graphics.moveTo(this.x, this.y);
                shp.graphics.lineTo(this.x, (this.y + 1000));
                shp.graphics.endFill();
                shp.alpha = 0.5;
                this.fc.battle_scene.addChild(shp);
                let ff = this.fc

                egret.Tween.get(shp).to({ "alpha": 0.1 }, 600)
                    .call(this.rmJG_zhao, this, [ff, shp]).call(this.t, this, [JG_TYPE.ZHAO]);
                this.zt = JG_TYPE.TIAO_ZHENG;
                this.fc.battle_scene.sk.ji_guang_peng_zhuang(this.x, this.y);
            }

            if (this.zt == JG_TYPE.ZHAO) {
                let shp: egret.Shape = new egret.Shape();
                shp.graphics.lineStyle(this.G_kuan, 0xffff00);
                shp.graphics.moveTo(this.x, this.y);
                shp.graphics.lineTo(this.x, (this.y + 1000));
                shp.graphics.endFill();
                this.fc.battle_scene.addChild(shp);
                let ff = this.fc
                shp.alpha = 0.7;
                egret.Tween.get(shp).to({ "alpha": 0.9 }, 400)
                    .call(this.rmJG_gong, this, [ff, shp]).wait(2000).call(this.t, this, [JG_TYPE.WU]);
                this.zt = JG_TYPE.TIAO_ZHENG;
            }

        }

        //移除激光
        public rmJG_zhao(fc: feichuan.FeiChuanBase, shp: egret.Shape) {
            fc.battle_scene.removeChild(shp);
        }

        public rmJG_gong(fc: feichuan.FeiChuanBase, shp: egret.Shape) {
            fc.battle_scene.removeChild(shp);
        }

        public t(zt: JG_TYPE) {
            this.zt = zt;
        }
    }
}