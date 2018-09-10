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
    //场景位移限制
    scene.scene_wy_limit = 200;
    //位移生效百分比
    scene.scene_wy_bfb = 0.2;
    //物理世界 屏幕范围
    scene.p2_zuo = 10;
    scene.p2_shang = 60;
    scene.p2_you = 45;
    scene.p2_xia = 37;
    var SceneBase = (function (_super) {
        __extends(SceneBase, _super);
        function SceneBase() {
            var _this = _super.call(this) || this;
            // 物理世界坐标位移 
            _this.p2_wy_x = 0;
            _this.p2_wy_y = 0;
            //-----------guanka-------------------------
            //当前进行到第几波
            _this.nowBo = 0;
            //当前第几回合
            _this.nowHeiHe = 0;
            //当前波总回合数量
            _this.allHeiHe = 0;
            //当前回合 剩余的 飞机数量
            _this.lastFeiJi = 0;
            //是否可以添加回合内的飞机
            _this.add_hh_fc = true;
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
            this.removeZiDanBodyList = new Array();
            this.ovzRemoveZiDanBodyList = new Array();
            this.shouShangFeiChuanList = new Array();
            this.canHais = new Array();
            this.zidanList = new Array();
            this.removeDLList = new Array();
        };
        //创建碰撞检测函数
        SceneBase.prototype.initcoll = function () {
            var s = this;
            this.world.on('beginContact', function (evt) {
                //如果碰撞没有子弹 则退出
                // if (!(evt.bodyB instanceof zidan.ZiDanBase) && !(evt.bodyA instanceof zidan.ZiDanBase)) {
                //     return;
                // }
                //---------------------------------------------
                //--------------掉落道具------------------
                if (evt.bodyA instanceof diaoluo.DiaoLuo) {
                    var dl = evt.bodyA;
                    var sk = evt.bodyB;
                    dl.collNum--;
                    if (dl.collNum == 0) {
                        s.removeDLList.push(dl);
                    }
                }
                if (evt.bodyB instanceof diaoluo.DiaoLuo) {
                    var dl = evt.bodyB;
                    var sk = evt.bodyA;
                    dl.collNum--;
                    if (dl.collNum == 0) {
                        s.removeDLList.push(dl);
                    }
                }
                //-----------------------子弹与 地方碰撞----------------
                //根据碰撞次数 减少耐久
                if (evt.bodyB instanceof zidan.ZiDanBase || evt.bodyA instanceof zidan.ZiDanBase) {
                    var m = evt.bodyB instanceof zidan.ZiDanBase ? evt.bodyB : evt.bodyA;
                    var zd = m;
                    zd.collNumber--;
                }
                if (evt.bodyB instanceof feichuan.FeiChuanBase || evt.bodyA instanceof feichuan.FeiChuanBase) {
                    var m = evt.bodyB instanceof feichuan.FeiChuanBase ? evt.bodyB : evt.bodyA;
                    var oh = evt.bodyB instanceof feichuan.FeiChuanBase ? evt.bodyA : evt.bodyB;
                    var ogzd = oh;
                    var fc = m;
                    if (fc.zhenying == GameConstant.ZHEN_YING.DI_JUN || fc.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                        if (oh instanceof zidan.ZiDanBase) {
                            //检测碰撞点 并且标记好在循环外删除
                            if (ogzd.is_first) {
                                // fc.checkCollision(oh.displays[0].x, oh.displays[0].y, ogzd.hitNumber);
                                var mk = fc.jia_ce_peng_zhuang_dian(oh.displays[0].x, oh.displays[0].y);
                                fc.shang_hai(mk, ogzd.hitNumber);
                                if (ogzd instanceof zidan.ChangDingZiDan) {
                                    var cd = ogzd;
                                    cd.chuan_jia(mk, fc);
                                }
                                if (ogzd instanceof zidan.ZhongChuiZiDan) {
                                    var cd = ogzd;
                                    cd.chuan_jia(mk, fc);
                                }
                                ogzd.is_first = false;
                            }
                        }
                    }
                    //只有当 碰撞参数等于0的时候才添加到 删除列表
                    if (ogzd.collNumber == 0) {
                        s.removeZiDanBodyList.push(ogzd);
                    }
                }
                //------------------------------------------------------
            });
        };
        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        SceneBase.prototype.onEnterFrame = function () {
            this.chackColl();
            this.chackFeiChuan();
            this.p2Updata();
            this.upSomeThing();
            this.updataIsInWorld();
            this.updataWuQi();
        };
        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        //刷新子弹
        SceneBase.prototype.updataZidan = function () {
            for (var _i = 0, _a = this.zidanList; _i < _a.length; _i++) {
                var zd = _a[_i];
                if (zd.is_updata) {
                    zd.updata();
                }
            }
        };
        //更新飞船武器
        SceneBase.prototype.updataWuQi = function () {
            var now = egret.getTimer();
            for (var _i = 0, _a = this.dijis; _i < _a.length; _i++) {
                var fc = _a[_i];
                var i = 0;
                if (fc.wuqiList.length > 0) {
                    for (var _b = 0, _c = fc.wuqiList; _b < _c.length; _b++) {
                        var wq = _c[_b];
                        if (wq) {
                            i++;
                            wq.updata_wq(fc.angle, this.sk, now);
                        }
                    }
                }
            }
        };
        //检测场景内的残骸列表 是否在有效区域内
        SceneBase.prototype.updataIsInWorld = function () {
            for (var _i = 0, _a = this.canHais; _i < _a.length; _i++) {
                var fc = _a[_i];
                //如果是残骸的话检测 坐标 并且删除
                if (fc.position[1] < 30) {
                    this.removeTheFcInTheGame(fc);
                }
            }
        };
        SceneBase.prototype.upSomeThing = function () {
        };
        /**
         * 物理世界循环外 删除子弹
         */
        SceneBase.prototype.chackColl = function () {
            //子弹
            var size = this.removeZiDanBodyList.length;
            for (var i = 0; i < size; i++) {
                var m = this.removeZiDanBodyList.pop();
                if (!m) {
                    continue;
                }
                var zd = m;
                //没有碰撞次数后删除子弹
                if (zd.collNumber <= 0) {
                    var d = zd.displays[0];
                    if (d) {
                        if (d.parent) {
                            zd.texiao();
                            // this.removeChild(d);
                        }
                    }
                    //移除约束
                    zd.removeYueShu();
                    this.world.removeBody(zd);
                    zd = null;
                }
            }
            //子弹
            size = this.ovzRemoveZiDanBodyList.length;
            for (var i = 0; i < size; i++) {
                var m = this.ovzRemoveZiDanBodyList.pop();
                if (!m) {
                    continue;
                }
                var zd = m;
                //没有碰撞次数后删除子弹
                var d = zd.displays[0];
                if (d) {
                    if (d.parent) {
                        this.removeChild(d);
                    }
                }
                //移除约束
                zd.removeYueShu();
                this.world.removeBody(zd);
                zd = null;
            }
            //掉落道具
            size = this.removeDLList.length;
            for (var i = 0; i < size; i++) {
                var dl = this.removeDLList.pop();
                if (!dl) {
                    continue;
                }
                //添加道具
                this.sk.addMoKuai(dl);
                var d = dl.displays[0];
                if (d) {
                    if (d.parent) {
                        this.removeChild(d);
                    }
                }
                this.world.removeBody(dl);
                dl = null;
            }
        };
        //检测飞船
        SceneBase.prototype.chackFeiChuan = function () {
            //遍历受伤飞船列表
            for (var i = 0; i < this.shouShangFeiChuanList.length; i++) {
                var f = this.shouShangFeiChuanList.pop();
                //遍历受伤模块
                for (var j = 0; j < f.removeMoKuai.length; j++) {
                    var m = f.removeMoKuai.pop();
                    //移除小方块 颜色以及 形状
                    f.removeShape(m.boxShape);
                    this.removeChild(m);
                    f.mokuai_size--;
                    //查看该模块是否掉落道具
                    if (m.is_diao_luo) {
                        this.diao_luo_dao_ju(m);
                    }
                }
                //掉落检测
                if (!GameConstant.chackMoKuaiNumber(f)) {
                    return;
                }
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
            //进入 物理引擎前 计算偏移量
            this.updataSKNow();
            this.world.step(60 / 1000);
            var l = this.world.bodies.length;
            for (var i = 0; i < l; i++) {
                var boxBody = this.world.bodies[i];
                //添加偏移量
                if (this.sk_p2_now && !(boxBody instanceof shuke.ShuKe)) {
                    boxBody.position[0] = boxBody.position[0] + this.sk_p2_now.x;
                    boxBody.position[1] = boxBody.position[1] + this.sk_p2_now.y;
                }
                if (boxBody instanceof shuke.ShuKe) {
                    var i_1 = boxBody;
                    for (var _i = 0, _a = i_1.wuqiList; _i < _a.length; _i++) {
                        var wq = _a[_i];
                        wq.updata_wq(boxBody.angle, this.sk, egret.getTimer());
                    }
                }
                //掉落控制
                if (boxBody instanceof diaoluo.DiaoLuo) {
                    var dl = boxBody;
                    dl.updata();
                    //todo删除
                }
                if (boxBody instanceof zidan.ZiDanBase) {
                    var zd = boxBody;
                    if (zd.is_updata) {
                        zd.updata();
                    }
                    //c超出边界移除子弹
                    if (zd.position[1] > scene.p2_shang) {
                        this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    if (zd.position[1] < scene.p2_xia) {
                        this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    if (zd.position[0] > scene.p2_you) {
                        this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    if (zd.position[0] < scene.p2_zuo) {
                        this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    //超过15秒删除
                    if ((egret.getTimer() - zd.mark_time) > zd.sheng_ming_zhou_qi) {
                        if (!zd.isAddRem) {
                            zd.isAddRem = true;
                            zd.removeTeXiao();
                        }
                        // this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    //速度==0
                    if (zd.velocity[0] == 0 && zd.velocity[1] == 0) {
                        // this.ovzRemoveZiDanBodyList.push(zd);
                    }
                }
                if (boxBody instanceof canhai.CanHai) {
                }
                if (boxBody instanceof shuke.ShuKe) {
                    boxBody.velocity = [0, 0];
                }
                if (boxBody instanceof feichuan.XiaoBing) {
                }
                if (boxBody instanceof feichuan.FeiChuanBase) {
                    var i_2 = boxBody;
                    i_2.updataSomeThing();
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
            //退出物理引擎后 需要标记偏移量
            this.updataSKBefor();
        };
        //设置 sk上一帧坐标
        SceneBase.prototype.updataSKBefor = function () {
            if (this.sk_p2_befor) {
                this.sk_p2_befor.x = this.sk.position[0];
                this.sk_p2_befor.y = this.sk.position[1];
                return;
            }
            this.sk_p2_befor = egret.Point.create(this.sk.position[0], this.sk.position[1]);
        };
        //设置 sk 当前坐标偏移
        SceneBase.prototype.updataSKNow = function () {
            if (!this.sk_p2_befor) {
                return;
            }
            if (!this.sk_p2_now) {
                this.sk_p2_now = egret.Point.create(0, 0);
            }
            this.sk_p2_now.x = (this.sk_p2_befor.x - this.sk.position[0]) * 0.02;
            this.sk_p2_now.y = (this.sk_p2_befor.y - this.sk.position[1]) * 0.02;
            // egret.log("WWWWWWWWWWWWWWWWWWWWWWWW:"+this.sk_p2_now.x+"__"+this.sk_p2_now.y)
        };
        //掉落道具
        SceneBase.prototype.diao_luo_dao_ju = function (mk) {
            var dl = new diaoluo.DiaoLuo(this, mk.diao_luo_type, mk.dl_lv, Tools.egretTOp2(egret.Point.create(mk.x, mk.y)), mk.dl_wq_type);
            this.world.addBody(dl);
            this.addChild(dl.displays[0]);
            dl.loop();
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
        //根据suke的位置 移动战斗场景
        SceneBase.prototype.weiyi = function (pp) {
            //左上角 
            var min_w = scene.scene_anch_x - scene.scene_wy_limit;
            var min_h = scene.scene_anch_y - scene.scene_wy_limit;
            //右下角
            var max_w = scene.scene_anch_x + scene.scene_wy_limit + this.stage.stageWidth;
            var max_h = scene.scene_anch_y + scene.scene_wy_limit + this.stage.stageHeight;
            //屏幕宽高
            var pw = this.stage.stageWidth * 0.5;
            var ph = this.stage.stageHeight * 0.5;
            //中心
            var c_x = scene.scene_anch_x + pw;
            var c_y = scene.scene_anch_y + ph;
            //左上角x 坐标
            var zs_x = 0;
            if (pp.x < c_x) {
                zs_x = this.x + (c_x - pp.x);
                zs_x = zs_x > max_w ? max_w : zs_x;
                this.x = zs_x;
            }
            if (pp.x > scene.scene_anch_x + pw) {
            }
        };
        //适用于已经被测底打光的 飞船
        SceneBase.prototype.removeTheFcInTheGame = function (fc) {
            //从敌机列表中
            if (fc.fc_type == feichuan.FC_TYPE.DIJI) {
                var inx = this.dijis.indexOf(fc, 0);
                if (inx > -1) {
                    this.dijis.splice(inx, 1);
                }
            }
            //从残骸列表中
            if (fc.fc_type == feichuan.FC_TYPE.CANHAI) {
                var inx = this.canHais.indexOf(fc);
                this.canHais.splice(inx);
            }
            var size = fc.moKuaiList.length;
            this.world.removeBody(fc);
            for (var j = 0; j < size; j++) {
                var m = fc.moKuaiList[j].length;
                for (var i = 0; i < m; i++) {
                    if (fc.moKuaiList[j][i]) {
                        this.removeChild(fc.moKuaiList[j][i]);
                    }
                    fc.moKuaiList[j][i] = null;
                }
            }
            fc = null;
        };
        return SceneBase;
    }(egret.DisplayObjectContainer));
    scene.SceneBase = SceneBase;
    __reflect(SceneBase.prototype, "scene.SceneBase");
})(scene || (scene = {}));
//# sourceMappingURL=SceneBase.js.map