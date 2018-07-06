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
var shuke;
(function (shuke) {
    var ShuKe = (function (_super) {
        __extends(ShuKe, _super);
        function ShuKe(battle_scene) {
            var _this = _super.call(this, battle_scene, egret.Point.create(scene.scene_anch_x + 640 * 0.5, 2100), GameConstant.ZHEN_YING.WO_JUN) || this;
            _this.fc_type = feichuan.FC_TYPE.SUKE;
            _this.initSuKe();
            return _this;
        }
        //添加模块
        ShuKe.prototype.addMoKuai = function (dl) {
            if (!dl) {
                return;
            }
            var x;
            var y;
            //获取碰撞点
            var mk = this.jia_ce_peng_zhuang_dian(dl.displays[0].x, dl.displays[0].y);
            if (!mk) {
                return;
            }
            // 燃料相关操作
            if (dl.dl_type == suiji.SJ_YAN_SE.RAN_LIAO || dl.dl_type == suiji.SJ_YAN_SE.WU_QI) {
                return;
            }
            //上
            // if (dl.bitmap.y < mk.y) {
            //     if (!this.moKuaiList[mk.moKuaiPost.y - 1][mk.moKuaiPost.x]) {
            //         x = mk.moKuaiPost.x;
            //         y = mk.moKuaiPost.y - 1;
            //     }
            // }
            x = mk.moKuaiPost.x;
            y = mk.moKuaiPost.y;
            // //添加模块
            if (Math.abs(mk.x - dl.bitmap.x) > Math.abs(mk.y - dl.bitmap.y)) {
                //右
                if (dl.bitmap.x > mk.x) {
                    x = mk.moKuaiPost.x + 1;
                }
                else {
                    //左
                    x = mk.moKuaiPost.x - 1;
                }
            }
            else {
                //上
                if (dl.bitmap.y < mk.y) {
                    y = mk.moKuaiPost.y - 1;
                }
                else {
                    //下
                    y = mk.moKuaiPost.y + 1;
                }
            }
            var hx;
            //装甲
            if (dl.dl_type == suiji.SJ_YAN_SE.ZHUANG_JIA) {
                if (dl.lv == 1) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "zj_us_level_1_png", this);
                }
                if (dl.lv == 2) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "zj_us_level_2_png", this);
                }
                if (dl.lv == 3) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "zj_us_level_3_png", this);
                }
                if (dl.lv == 4) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "zj_us_level_4_png", this);
                }
                if (dl.lv == 5) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "zj_us_level_5_png", this);
                }
            }
            egret.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK:" + x + "_" + y);
            5;
            // hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "zj_us_level_1_png", this);
            hx.setMkLevel(1);
            var hpp = Physics.getRelativeDistance(egret.Point.create(this.W, this.H), egret.Point.create(x, y), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
            var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
            box.collisionGroup = this.collGroup;
            box.collisionMask = this.collMask;
            this.addShape(box, [hpp.x, hpp.y]);
            this.moKuaiList[y][x] = hx;
            hx.boxShape = box;
            this.battle_scene.addChildAt(hx, 5);
            this.mokuai_size++;
        };
        //初始化云图
        ShuKe.prototype.initYunTU = function () {
            this.yun_tu =
                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ];
            this.W = this.yun_tu[0].length;
            this.H = this.yun_tu.length;
            // this.yun_tu =
            // [
            //     [1, 2, 2, 2, 3]
            // ]
        };
        ShuKe.prototype.initSuKe = function () {
            this.initYunTU();
            this.initPro(this.yun_tu);
        };
        ShuKe.prototype.updataPos = function () {
            _super.prototype.updataPos.call(this);
        };
        return ShuKe;
    }(feichuan.FeiChuanBase));
    shuke.ShuKe = ShuKe;
    __reflect(ShuKe.prototype, "shuke.ShuKe");
})(shuke || (shuke = {}));
//# sourceMappingURL=ShuKe.js.map