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
var juzi;
(function (juzi) {
    //方阵队列机队
    var FangZhenJuzi = (function (_super) {
        __extends(FangZhenJuzi, _super);
        function FangZhenJuzi(nan_du) {
            var _this = _super.call(this, nan_du) || this;
            //0是占位符 机队 横向 和纵向的数量
            _this.kuan = [0, 4, 5, 6, 7, 7];
            _this.hou = [0, 2, 3, 4, 5, 6];
            return _this;
        }
        FangZhenJuzi.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(1, "wei_1");
            this.fc_w = this.fc_info.width;
            this.fc_h = this.fc_info.height;
            this.jg_w = Math.floor(30 / this.kuan[this.nan_du]);
            this.zx_w = Math.round(this.jg_w / 3);
        };
        //添加飞机到 战场
        FangZhenJuzi.prototype.addFc = function (scene) {
            var w = this.kuan[this.nan_du];
            var h = this.hou[this.nan_du];
            for (var x = 0; x < w; x++) {
                for (var y = 0; y < h; y++) {
                    var fc = new feichuan.JuZhenJidui(scene, this.fc_info, egret.Point.create(x * this.jg_w + this.zx_w, (-this.fc_info.height - 2) * y), egret.Point.create(x * this.jg_w + this.zx_w, (this.fc_info.height + 2) * (h - y)));
                    scene.dijis.push(fc);
                    // egret.log("SSSSLLLLLL:" + scene.dijis.length);
                }
            }
        };
        return FangZhenJuzi;
    }(juzi.JuZiGuanLi));
    juzi.FangZhenJuzi = FangZhenJuzi;
    __reflect(FangZhenJuzi.prototype, "juzi.FangZhenJuzi");
})(juzi || (juzi = {}));
//# sourceMappingURL=FangZhenJuzi.js.map