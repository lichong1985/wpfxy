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
var scene;
(function (scene) {
    //战斗场景宽
    scene.battle_sceneW = 4000;
    //战斗场景高
    scene.battle_sceneH = 4000;
    //场景加载位置
    scene.scene_anch_x = 1000;
    scene.scene_anch_y = 1000;
    var SceneBase = (function (_super) {
        __extends(SceneBase, _super);
        function SceneBase() {
            var _this = _super.call(this) || this;
            _this._distance = new egret.Point();
            _this._skP = new egret.Point();
            _this.init();
            _this.initcoll();
            return _this;
        }
        SceneBase.prototype.init = function () {
            this.width = scene.battle_sceneW;
            this.height = scene.battle_sceneH;
            this.world = new p2.World();
            // this.world.sleepMode = p2.World.BODY_SLEEPING;
            this.world.gravity = [0, 0];
            this.addShuKeListener();
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.dijis = new Array();
            this.removeBodyList = new Array();
            this.removeFeiChuan = new Array();
        };
        SceneBase.prototype.initcoll = function () {
            var s = this;
            this.world.on('beginContact', function (evt) {
                if (evt.bodyB instanceof zidan.PuTongZiDan || evt.bodyA instanceof zidan.PuTongZiDan) {
                    var m = evt.bodyB instanceof zidan.PuTongZiDan ? evt.bodyB : evt.bodyA;
                    var zd = m;
                    if (zd.is_kick) {
                        s.removeBodyList.push(zd);
                    }
                }
                if (evt.bodyB instanceof feichuan.FeiChuanBase || evt.bodyA instanceof feichuan.FeiChuanBase) {
                    var m = evt.bodyB instanceof feichuan.FeiChuanBase ? evt.bodyB : evt.bodyA;
                    var oh = evt.bodyB instanceof feichuan.FeiChuanBase ? evt.bodyA : evt.bodyB;
                    var fc = m;
                    if (fc.zhenying == GameConstant.ZHEN_YING.DI_JUN || fc.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                        if (oh instanceof zidan.ZiDanBase) {
                            var ogzd = oh;
                            //碰撞只会出发一次
                            if (ogzd.is_coll) {
                                fc.checkCollision(oh.displays[0].x, oh.displays[0].y);
                                ogzd.is_coll = false;
                            }
                        }
                    }
                }
            });
        };
        SceneBase.prototype.onEnterFrame = function () {
            this.chackColl();
            this.chackFeiChuan();
            this.p2Updata();
            // this.dijiUpdata();
        };
        // public dijiUpdata() {
        //     for (let d of this.dijis) {
        //         d.upPot();
        //     }
        // }
        /**
         * 碰撞检测并移除刚体
         */
        SceneBase.prototype.chackColl = function () {
            var size = this.removeBodyList.length;
            for (var i = 0; i < size; i++) {
                var zd = this.removeBodyList.pop();
                if (zd.is_kick) {
                    zd.is_kick = false;
                    var d = zd.displays[0];
                    if (d) {
                        this.removeChild(d);
                    }
                    this.world.removeBody(zd);
                }
            }
        };
        //检测飞船
        SceneBase.prototype.chackFeiChuan = function () {
            for (var i = 0; i < this.removeFeiChuan.length; i++) {
                var f = this.removeFeiChuan.pop();
                for (var j = 0; j < f.removeMoKuai.length; j++) {
                    var m = f.removeMoKuai.pop();
                    f.removeShape(m.boxShape);
                    this.removeChild(m);
                    f.mokuai_size--;
                }
                //掉落检测
                GameConstant.diaoluo(f);
                //判断飞船是否被清除
                if (f) {
                    if (f.mokuai_size > 0) {
                        f.fenJie();
                    }
                }
            }
        };
        SceneBase.prototype.p2Updata = function () {
            // egret.log("PPPPPPPPPPPPPP")
            this.world.step(60 / 1000);
            var l = this.world.bodies.length;
            for (var i = 0; i < l; i++) {
                var boxBody = this.world.bodies[i];
                // if (boxBody instanceof test.TestFeiChuan) {
                //     let i = <test.TestFeiChuan>boxBody;
                //     i.testUp();
                //     continue;
                // }
                if (boxBody instanceof shuke.ShuKe) {
                    var i_1 = boxBody;
                    for (var _i = 0, _a = i_1.wuqiList; _i < _a.length; _i++) {
                        var wq = _a[_i];
                        wq.updata_wq(boxBody.angle);
                    }
                }
                if (boxBody instanceof canhai.CanHai) {
                    // egret.log("CCCCCCCCCCCCCCCCCCCC")
                }
                if (boxBody instanceof feichuan.FeiChuanBase) {
                    var i_2 = boxBody;
                    i_2.updataPos();
                    continue;
                }
                var box = boxBody.displays[0];
                if (box) {
                    var p = Tools.p2TOegretPoitn(egret.Point.create(boxBody.position[0], boxBody.position[1]));
                    box.x = p.x;
                    box.y = p.y;
                    box.rotation = 360 - boxBody.angle * 180 / Math.PI;
                }
            }
        };
        //添加测试场景
        SceneBase.prototype.addShuKeListener = function () {
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        };
        SceneBase.prototype.mouseUp = function (evt) {
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        };
        SceneBase.prototype.mouseDown = function (evt) {
            this._distance.x = evt.stageX;
            this._distance.y = evt.stageY;
            this._skP.x = this.sk.position[0];
            this._skP.y = this.sk.position[1];
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        };
        SceneBase.prototype.mouseMove = function (evt) {
            var pp = egret.Point.create((evt.stageX - this._distance.x) / Physics.factor, -(evt.stageY - this._distance.y) / Physics.factor);
            this.sk.position[0] = this._skP.x + pp.x;
            this.sk.position[1] = this._skP.y + pp.y;
        };
        return SceneBase;
    }(egret.DisplayObjectContainer));
    scene.SceneBase = SceneBase;
    __reflect(SceneBase.prototype, "scene.SceneBase");
})(scene || (scene = {}));
//# sourceMappingURL=SceneBase.js.map