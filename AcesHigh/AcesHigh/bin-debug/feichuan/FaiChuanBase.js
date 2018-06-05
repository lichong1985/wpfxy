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
var feichuan;
(function (feichuan) {
    var FC_TYPE;
    (function (FC_TYPE) {
        FC_TYPE[FC_TYPE["SUKE"] = 0] = "SUKE";
        FC_TYPE[FC_TYPE["DIJI"] = 1] = "DIJI";
        FC_TYPE[FC_TYPE["CANHAI"] = 2] = "CANHAI";
    })(FC_TYPE = feichuan.FC_TYPE || (feichuan.FC_TYPE = {}));
    /**
     * 飞船基础类
     */
    var FeiChuanBase = (function (_super) {
        __extends(FeiChuanBase, _super);
        //TODO: 通过配置文件来加载
        function FeiChuanBase(battle_scene, egretWorldPoint, zhenying) {
            var _this = _super.call(this, { mass: 1 }) || this;
            //当前模块数量
            _this.mokuai_size = 0;
            //核心列表
            _this.heXinList = new Array();
            //装甲列表
            _this.zhuangJaList = new Array();
            //ai 列表 
            _this.ais = new Array();
            _this.egretWorldPoint = egretWorldPoint;
            _this.battle_scene = battle_scene;
            _this.zhenying = zhenying;
            _this.initPhPost();
            _this.initColl();
            return _this;
        }
        //初始化飞船
        FeiChuanBase.prototype.initJson = function (res) {
            var js = RES.getRes(res);
            //读取飞船的宽高
            this.W = js.layers[0].width;
            this.H = js.layers[0].height;
            this.initList(this.H, this.W);
            var data = js.layers[0].data;
            //初始化模块
            this.moKuaiList = new Array(this.H);
            var i = 0;
            for (var h = 0; h < this.H; h++) {
                this.moKuaiList[h] = new Array(this.W);
                for (var w = 0; w < this.W; w++) {
                    //读取节点信息
                    if (data[i] == 0) {
                        i++;
                        continue;
                    }
                    var bitName = js.tiles[data[i] - 1].image.replace(".", "_");
                    var hx = void 0;
                    if (bitName == "ship6-81_png") {
                        hx = new mokuai.DongLiHeXin(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        this.hx = hx;
                    }
                    else {
                        hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                    }
                    var hpp = Physics.getRelativeDistance(egret.Point.create(this.W, this.H), egret.Point.create(w, h), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
                    var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
                    box.collisionGroup = this.collGroup;
                    box.collisionMask = this.collMask;
                    this.addShape(box, [hpp.x, hpp.y]);
                    this.moKuaiList[h][w] = hx;
                    hx.boxShape = box;
                    this.battle_scene.addChild(hx);
                    this.mokuai_size++;
                    i++;
                }
            }
            this.battle_scene.world.addBody(this);
        };
        //初始化碰撞参数
        FeiChuanBase.prototype.initColl = function () {
            if (this.zhenying == GameConstant.ZHEN_YING.WO_JUN) {
                this.collGroup = GameConstant.WO_JUN;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.DI_JUN) {
                this.collGroup = GameConstant.DI_JUN;
                this.collMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                this.collGroup = GameConstant.ZHONG_LI;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI | GameConstant.WO_JUN;
            }
        };
        //设置物理世界坐标 
        FeiChuanBase.prototype.initPhPost = function () {
            var pos = Tools.egretTOp2(this.egretWorldPoint);
            this.position[0] = pos.x;
            this.position[1] = pos.y;
        };
        FeiChuanBase.prototype.initList = function (h, w) {
            this.moKuaiList = new Array();
            for (var i = 0; i < h; i++) {
                this.moKuaiList.push(new Array(w));
            }
            this.wuqiList = new Array();
            this.removeMoKuai = new Array();
        };
        FeiChuanBase.prototype.updataFenJie = function () {
            this.fen_jie = new Array();
            for (var i = 0; i < 10; i++) {
                this.fen_jie.push([]);
            }
        };
        //更新坐标以及角度
        FeiChuanBase.prototype.updataPos = function () {
            var h = this.moKuaiList.length;
            var w = this.moKuaiList[0].length;
            if (this instanceof shuke.ShuKe) {
                this.angle = 0;
            }
            for (var i = 0; i < h; i++) {
                for (var j = 0; j < w; j++) {
                    if (!this.moKuaiList[i][j]) {
                        continue;
                    }
                    var boxBody = this.moKuaiList[i][j].boxShape;
                    var dis = this.moKuaiList[i][j];
                    var an = Math.PI / 180 * 360 - this.angle;
                    // let an: number = this.angle;
                    /**
                     *     |-
                     *  R= | cos(a)     sin(a)
                     *     | -sin(a)    cos(a)
                     *     |-
                     */
                    var rx = Math.cos(an) * boxBody.position[0] + Math.sin(an) * boxBody.position[1];
                    var ry = -Math.sin(an) * boxBody.position[0] + Math.cos(an) * boxBody.position[1];
                    var p = Tools.p2TOegretPoitn(egret.Point.create(rx + this.position[0], ry + this.position[1]));
                    // egret.log("RRRRRRRRRRRR:" + p.x, +"_" + p.y)
                    dis.x = p.x;
                    dis.y = p.y;
                    dis.markPoint = p;
                    dis.rotation = 360 - this.angle * 180 / Math.PI;
                }
            }
        };
        FeiChuanBase.prototype.updataSomeThing = function () {
            this.updataPos();
            this.updataAI();
        };
        //更新ai
        FeiChuanBase.prototype.updataAI = function () {
            for (var _i = 0, _a = this.ais; _i < _a.length; _i++) {
                var a = _a[_i];
                a.doUpData(egret.getTimer());
            }
        };
        FeiChuanBase.prototype.getMokWorldpos = function (p) {
            var an = Math.PI / 180 * 360 - this.angle;
            var rx = Math.cos(an) * p.x + Math.sin(an) * p.y;
            var ry = -Math.sin(an) * p.x + Math.cos(an) * p.y;
            return egret.Point.create(rx + this.position[0], ry + this.position[1]);
        };
        /**
         * 初始化 配置文件
         */
        FeiChuanBase.prototype.initPro = function (yun_tu) {
            var s = egret.Point.create(yun_tu[0].length, yun_tu.length);
            this.initList(yun_tu.length, yun_tu[0].length);
            for (var h = 0; h < yun_tu.length; h++) {
                for (var w = 0; w < yun_tu[0].length; w++) {
                    this.initMokuai(yun_tu[h][w], h, w, s);
                }
            }
            this.battle_scene.world.addBody(this);
        };
        //创建模块
        FeiChuanBase.prototype.initMokuai = function (type, h, w, chang_kuan) {
            var hx;
            if (type == 3) {
                hx = new wuqi.PuTongDan(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "lan_dian_png", wuqi.WUQI_TYPE.PU_TONG, this);
                var wq = hx;
                this.wuqiList.push(wq);
            }
            if (type == 2) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "hong_dian_png", this);
            }
            if (type == 1) {
                hx = new mokuai.DongLiHeXin(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "huang_dian_png", this);
                this.hx = hx;
            }
            if (type == 0) {
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
        //检测飞船碰撞点 将飞船上的碰撞点 标记 并且纪录到 删除列表里  在循环外删除
        FeiChuanBase.prototype.checkCollision = function (x, y) {
            var xw = 1000;
            var yh = 1000;
            var zm;
            //遍历个个节点 检测 是否被碰撞
            for (var h = 0; h < this.moKuaiList.length; h++) {
                for (var w = 0; w < this.moKuaiList[h].length; w++) {
                    var z = this.moKuaiList[h][w];
                    if (z) {
                        var c1 = Math.abs(z.x - x);
                        var c2 = Math.abs(z.y - y);
                        if ((c1 + c2) < (xw + yh)) {
                            xw = c1;
                            yh = c2;
                            zm = z;
                        }
                    }
                }
            }
            //将节点标记  之后在碰撞循环外清空
            this.moKuaiList[zm.moKuaiPost.y][zm.moKuaiPost.x] = null;
            this.battle_scene.removeFeiChuan.push(this);
            this.removeMoKuai.push(zm);
            //如果该模块是 核心 则整体删除
            if (zm instanceof mokuai.DongLiHeXin) {
                this.hx = null;
            }
        };
        //删除模块
        FeiChuanBase.prototype.dellMokuai = function () {
            for (var i = 0; i < this.removeMoKuai.length; i++) {
                var n = this.removeMoKuai.pop();
                this.moKuaiList[n.moKuaiPost.y][n.moKuaiPost.x] = null;
                this.removeShape(n.boxShape);
                this.battle_scene.removeChild(n);
            }
        };
        //分解船体创建新船体
        FeiChuanBase.prototype.fenJie = function () {
            var h = this.fen_jie.length;
            for (var i = 0; i < h; i++) {
                var ch = this.fen_jie.pop();
                var w = ch.length;
                //默认十乘十 检测每个维度 是否有东西
                var b = false;
                for (var _i = 0, ch_1 = ch; _i < ch_1.length; _i++) {
                    var m = ch_1[_i];
                    if (m) {
                        b = true;
                    }
                }
                if (b) {
                    var chhƒ = new canhai.CanHai(this, ch);
                }
            }
        };
        //添加ai
        FeiChuanBase.prototype.addAI = function (ai) {
            this.ais.push(ai);
        };
        return FeiChuanBase;
    }(p2.Body));
    feichuan.FeiChuanBase = FeiChuanBase;
    __reflect(FeiChuanBase.prototype, "feichuan.FeiChuanBase");
})(feichuan || (feichuan = {}));
//# sourceMappingURL=FaiChuanBase.js.map