var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var djwq;
(function (djwq) {
    var JG_TYPE;
    (function (JG_TYPE) {
        JG_TYPE[JG_TYPE["WU"] = 0] = "WU";
        JG_TYPE[JG_TYPE["ZHAO"] = 1] = "ZHAO";
        JG_TYPE[JG_TYPE["GONG"] = 2] = "GONG";
        JG_TYPE[JG_TYPE["TIAO_ZHENG"] = 3] = "TIAO_ZHENG";
    })(JG_TYPE || (JG_TYPE = {}));
    //直射类武器
    var JiGuangWuqi = (function (_super) {
        __extends(JiGuangWuqi, _super);
        function JiGuangWuqi(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.JI_GUANG) || this;
            _this.kuan = 10;
            _this.G_kuan = 4;
            _this.cd = 100;
            _this.sudu = 25;
            _this.zt = JG_TYPE.WU;
            return _this;
        }
        //射击
        JiGuangWuqi.prototype.fashe = function (angel, suke, now) {
            // egret.log("XXXXXXXX:" + this.fc.battle_scene.canHais.length);
            if (this.zt == JG_TYPE.TIAO_ZHENG) {
                return;
            }
            //没有状态时候 发起照射
            if (this.zt == JG_TYPE.WU) {
                var shp = new egret.Shape();
                shp.graphics.lineStyle(this.kuan, 0xffff00);
                shp.graphics.moveTo(this.x, this.y);
                shp.graphics.lineTo(this.x, (this.y + 1000));
                shp.graphics.endFill();
                shp.alpha = 0.5;
                this.fc.battle_scene.addChild(shp);
                var ff = this.fc;
                egret.Tween.get(shp).to({ "alpha": 0.1 }, 600)
                    .call(this.rmJG_zhao, this, [ff, shp]).call(this.t, this, [JG_TYPE.ZHAO]);
                this.zt = JG_TYPE.TIAO_ZHENG;
                this.fc.battle_scene.sk.ji_guang_peng_zhuang(this.x, this.y);
            }
            if (this.zt == JG_TYPE.ZHAO) {
                var shp = new egret.Shape();
                shp.graphics.lineStyle(this.G_kuan, 0xffff00);
                shp.graphics.moveTo(this.x, this.y);
                shp.graphics.lineTo(this.x, (this.y + 1000));
                shp.graphics.endFill();
                this.fc.battle_scene.addChild(shp);
                var ff = this.fc;
                shp.alpha = 0.7;
                egret.Tween.get(shp).to({ "alpha": 0.9 }, 400)
                    .call(this.rmJG_gong, this, [ff, shp]).wait(2000).call(this.t, this, [JG_TYPE.WU]);
                this.zt = JG_TYPE.TIAO_ZHENG;
            }
        };
        //移除激光
        JiGuangWuqi.prototype.rmJG_zhao = function (fc, shp) {
            fc.battle_scene.removeChild(shp);
        };
        JiGuangWuqi.prototype.rmJG_gong = function (fc, shp) {
            fc.battle_scene.removeChild(shp);
        };
        JiGuangWuqi.prototype.t = function (zt) {
            this.zt = zt;
        };
        return JiGuangWuqi;
    }(djwq.DJWQBase));
    djwq.JiGuangWuqi = JiGuangWuqi;
    __reflect(JiGuangWuqi.prototype, "djwq.JiGuangWuqi");
})(djwq || (djwq = {}));
//# sourceMappingURL=JiGuangWuqi.js.map