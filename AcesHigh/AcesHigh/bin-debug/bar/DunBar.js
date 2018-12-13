var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bar;
(function (bar) {
    //  盾牌
    var DunBar = (function () {
        function DunBar(scene) {
            //当前盾牌数量
            this.d_number = 1;
            this.scene = scene;
            this.init();
        }
        DunBar.prototype.init = function () {
            // this.dun_1 = new egret.Bitmap(RES.getRes("dp"));
            // this.scene.addChildAt(this.dun_1, 100);
            // this.dun_1.x = Tools.getPhoneW() * 0.8 + 1000;
            // this.dun_1.y = 1010;
            // this.dun_2 = new egret.Bitmap(RES.getRes("dp"));
            // this.scene.addChildAt(this.dun_2, 100);
            // this.dun_2.x = Tools.getPhoneW() * 0.85 + 1000;
            // this.dun_2.y = 1010;
            // this.dun_3 = new egret.Bitmap(RES.getRes("dp"));
            // this.scene.addChildAt(this.dun_3, 100);
            // this.dun_3.x = Tools.getPhoneW() * 0.9 + 1000;
            // this.dun_3.y = 1010;
        };
        //减血
        DunBar.prototype.jian = function () {
            // egret.Tween.get(target,{loop:true}).to({ alpha: 0}, 200).to({ alpha: 1}, 200);
            this.d_number--;
            if (this.d_number <= 0) {
                this.d_number = 0;
                this.scene.sk.sui_lie();
            }
            //第一个盾牌变红闪烁
            if (this.d_number == 2 && this.dun_1.alpha != 0) {
                this.dun_1.texture = RES.getRes("dp_h");
                egret.Tween.get(this.dun_1).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100);
                return;
            }
            if (this.d_number == 1 && this.dun_2.alpha != 0) {
                this.dun_2.texture = RES.getRes("dp_h");
                egret.Tween.get(this.dun_2).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100);
                return;
            }
            // if (this.d_number == 0 && this.dun_3.alpha != 0) {
            //     this.dun_3.texture = RES.getRes("dp_h");
            //     egret.Tween.get(this.dun_3).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100);
            //     return;
            // }
        };
        //加血
        DunBar.prototype.jia = function () {
            if (this.d_number == 3) {
                return;
            }
            if (this.d_number == 2) {
                this.dun_1.texture = RES.getRes("dp_b");
                egret.Tween.get(this.dun_1).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).call(this.huan, this, [1]);
                this.d_number++;
                return;
            }
            if (this.d_number == 1) {
                this.dun_2.texture = RES.getRes("dp_b");
                egret.Tween.get(this.dun_2).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).call(this.huan, this, [2]);
                this.d_number++;
                return;
            }
        };
        DunBar.prototype.huan = function (d) {
            if (d == 1) {
                this.dun_1.texture = RES.getRes("dp");
            }
            if (d == 2) {
                this.dun_2.texture = RES.getRes("dp");
            }
            if (d == 3) {
                this.dun_3.texture = RES.getRes("dp");
            }
        };
        return DunBar;
    }());
    bar.DunBar = DunBar;
    __reflect(DunBar.prototype, "bar.DunBar");
})(bar || (bar = {}));
//# sourceMappingURL=DunBar.js.map