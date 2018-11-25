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
var zidan;
(function (zidan) {
    var DaoDanZiDan = (function (_super) {
        __extends(DaoDanZiDan, _super);
        //----------------------
        function DaoDanZiDan(scene, zhenying, mass, fc) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.DAO_DAN) || this;
            //跟踪弹生效时间
            _this.gz_time = 10000;
            _this.sudu = 8;
            //导弹启动时间
            _this.qi_dong = 300;
            _this.is_go = false;
            _this.f = 0.001;
            //----------------------拐弯用-------------------
            //一半
            _this.yi_ban = Math.PI * 0.5;
            _this.guai_wan_jiao_du = Math.PI / 4;
            _this.guai_wan_jiao_du_b = Math.PI / 6;
            _this.guai_wan_num = 4;
            _this.guai_wan_num_mark = 0;
            _this.guai_wan_jiao_du_mark = Math.PI;
            _this.pi = 1;
            //计算一次
            _this.js = true;
            //到达指定角度 自动导航
            _this.zd = false;
            _this.cishu = 0;
            _this.initPT();
            _this.is_updata = true;
            _this.damping = 0;
            _this.fc = fc;
            _this.bit_name = "us_zd_3";
            _this.sudu = 3;
            _this.angularVelocity = 5;
            return _this;
        }
        DaoDanZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_3"));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.displays = [this.bitmap];
        };
        DaoDanZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            // this.sudu += 0.1;
            if ((egret.getTimer() - this.mark_time) > this.gz_time) {
                this.is_updata = false;
                return;
            }
            if (!this.fc) {
                return;
            }
            if ((egret.getTimer() - this.mark_time) < this.qi_dong) {
                _super.prototype.weiyi.call(this, this.bit_name);
                this.force = [0, this.f];
                return;
            }
            this.is_go = true;
            if ((egret.getTimer() - (this.mark_time + this.qi_dong)) < this.qi_dong && this.is_go) {
                _super.prototype.weiyi.call(this, this.bit_name);
                this.force = [0, this.f];
                return;
            }
            if (this.js) {
                this.js = false;
                if (this.fc.position[0] > this.position[0]) {
                    this.pi = -1;
                }
            }
            this.zhidao();
            if (!this.zd) {
                var sx_1 = Math.sin(this.guai_wan_jiao_du_mark) * this.sudu;
                var sy_1 = Math.cos(this.guai_wan_jiao_du_mark) * this.sudu;
                sy_1 = sy_1 * -1;
                this.angularVelocity = 5;
                this.velocity = [sx_1, sy_1];
                this.weiyi(this.bit_name);
                return;
            }
            var angle = this.jisuan_jiaodu();
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            this.angularVelocity = 5;
            this.velocity = [sx, sy];
            this.weiyi(this.bit_name);
        };
        //制导
        DaoDanZiDan.prototype.zhidao = function () {
            if (this.guai_wan_num_mark < this.guai_wan_num) {
                this.guai_wan_num_mark++;
                return;
            }
            this.guai_wan_num_mark = Math.PI;
            //目标角度
            var tig = this.jisuan_jiaodu();
            //角度差
            var jdc = Math.abs(Math.abs(this.guai_wan_jiao_du_mark) - Math.abs(tig));
            if (Math.abs(jdc) < this.guai_wan_jiao_du) {
                this.zd = true;
                return;
            }
            this.guai_wan_jiao_du_mark += (this.guai_wan_jiao_du * this.pi);
            this.guai_wan_jiao_du_mark = this.guai_wan_jiao_du_mark % (Math.PI * 2);
        };
        //计算角度
        DaoDanZiDan.prototype.jisuan_jiaodu = function () {
            if (this.fc == null) {
                return 0;
            }
            if (this.fc.hx == null) {
                return 0;
            }
            var hx = Tools.egretTOp2(egret.Point.create(this.fc.hx.x, this.fc.hx.y));
            var angle = Math.atan2((hx.y - this.position[1]), (hx.x - this.position[0])) + this.yi_ban;
            if (angle < 0) {
                return Math.PI * 2 + angle;
            }
            return angle;
        };
        DaoDanZiDan.prototype.weiyi = function (name) {
            this.wyMark = egret.getTimer();
            var b = new egret.Bitmap(RES.getRes(name));
            b.anchorOffsetX = this.bitmap.width * 0.5;
            b.anchorOffsetY = this.bitmap.height * 0.5;
            b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = this.bitmap.x;
            b.y = this.bitmap.y;
            b.scaleX = 0.5;
            b.scaleY = 0.5;
            this.scene.addChild(b);
            b.alpha = 0.8;
            egret.Tween.get(b).to({ "alpha": 0.1 }, 250).call(this.dell, this, [b]);
        };
        return DaoDanZiDan;
    }(zidan.ZiDanBase));
    zidan.DaoDanZiDan = DaoDanZiDan;
    __reflect(DaoDanZiDan.prototype, "zidan.DaoDanZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=DaoDanZiDan.js.map