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
var canhai;
(function (canhai) {
    var CanHai = (function (_super) {
        __extends(CanHai, _super);
        function CanHai(zhuji, yuntu) {
            var _this = _super.call(this, zhuji.battle_scene, egret.Point.create(500, 500), GameConstant.ZHEN_YING.ZHONG_LI) || this;
            _this.fc_type = feichuan.FC_TYPE.CANHAI;
            _this.yuntu = yuntu;
            _this.zhuji = zhuji;
            _this.initCanhai();
            return _this;
            // this.zhenying = GameConstant.ZHONG_LI
        }
        //初始化残骸
        CanHai.prototype.initCanhai = function () {
            var ly = 100;
            var lx = 100;
            var hx = 0;
            var hy = 0;
            for (var _i = 0, _a = this.yuntu; _i < _a.length; _i++) {
                var p = _a[_i];
                if (p) {
                    if (p.moKuaiPost.x < lx) {
                        lx = p.moKuaiPost.x;
                    }
                    if (p.moKuaiPost.y < ly) {
                        ly = p.moKuaiPost.y;
                    }
                    if (p.moKuaiPost.x > hx) {
                        hx = p.moKuaiPost.x;
                    }
                    if (p.moKuaiPost.y > hy) {
                        hy = p.moKuaiPost.y;
                    }
                }
            }
            var hm = hy - ly + 1;
            var wm = hx - lx + 1;
            var yt = new Array();
            for (var h = 0; h <= hm; h++) {
                yt[h] = new Array();
                for (var w = 0; w <= wm; w++) {
                    yt[h].push(0);
                }
            }
            for (var _b = 0, _c = this.yuntu; _b < _c.length; _b++) {
                var p = _c[_b];
                yt[p.moKuaiPost.y - ly][p.moKuaiPost.x - lx] = p.mk_level;
            }
            this.initChanHai(yt);
            //初始化中心坐标
            var m = this.yuntu[0];
            var o = this.moKuaiList[m.moKuaiPost.y - ly][m.moKuaiPost.x - lx];
            var an = Math.PI / 180 * 360 - this.zhuji.angle;
            /**
            *     |-
            *  R= | cos(a)     sin(a)
            *     | -sin(a)    cos(a)
            *     |-
            */
            var rx = Math.cos(an) * (m.boxShape.position[0] - o.boxShape.position[0]) + Math.sin(an) * (m.boxShape.position[1] - o.boxShape.position[1]);
            var ry = -Math.sin(an) * (m.boxShape.position[0] - o.boxShape.position[0]) + Math.cos(an) * (m.boxShape.position[1] - o.boxShape.position[1]);
            this.position[0] = (this.zhuji.position[0] + rx);
            this.position[1] = (this.zhuji.position[1] + ry);
            this.angle = this.zhuji.angle;
        };
        CanHai.prototype.initChanHai = function (yun_tu) {
            var s = egret.Point.create(yun_tu[0].length, yun_tu.length);
            this.initList(yun_tu.length, yun_tu[0].length);
            for (var h = 0; h < yun_tu.length; h++) {
                for (var w = 0; w < yun_tu[0].length; w++) {
                    this.initMK(yun_tu[h][w], h, w, s);
                }
            }
            this.battle_scene.world.addBody(this);
        };
        CanHai.prototype.initMK = function (level, h, w, chang_kuan) {
            var hx;
            if (level == 1) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_1_ch_png", this);
            }
            if (level == 2) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_2_ch_png", this);
            }
            if (level == 3) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_3_ch_png", this);
            }
            if (level == 4) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_4_ch_png", this);
            }
            if (level == 5) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_5_ch_png", this);
            }
            if (level == 0) {
                return;
            }
            var hpp = Physics.getRelativeDistance(chang_kuan, egret.Point.create(w, h), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
            var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
            box.collisionGroup = this.collGroup;
            box.collisionMask = this.collMask;
            this.addShape(box, [hpp.x, hpp.y]);
            this.moKuaiList[h][w] = hx;
            hx.boxShape = box;
            this.battle_scene.addChild(hx);
            this.mokuai_size++;
        };
        CanHai.prototype.updataSomeThing = function () {
            _super.prototype.updataSomeThing.call(this);
        };
        return CanHai;
    }(feichuan.FeiChuanBase));
    canhai.CanHai = CanHai;
    __reflect(CanHai.prototype, "canhai.CanHai");
})(canhai || (canhai = {}));
//# sourceMappingURL=CanHai.js.map