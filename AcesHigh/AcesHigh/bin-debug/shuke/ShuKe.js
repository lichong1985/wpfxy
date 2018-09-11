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
            var _this = _super.call(this, battle_scene, egret.Point.create(5, 45), GameConstant.ZHEN_YING.WO_JUN) || this;
            _this.fc_type = feichuan.FC_TYPE.SUKE;
            _this.initSuKe();
            return _this;
        }
        //添加模块
        ShuKe.prototype.addMoKuai = function (dl) {
            if (!dl) {
                return;
            }
            var t = -1;
            var x;
            var y;
            //获取碰撞点
            var mk = this.jia_ce_peng_zhuang_dian(dl.displays[0].x, dl.displays[0].y);
            if (!mk) {
                return;
            }
            // 燃料相关操作
            if (dl.dl_type == suiji.SJ_YAN_SE.RAN_LIAO) {
                return;
            }
            // egret.log("****掉落数据***********:" + dl.dl_type + "_" + dl.wq_type + "_" + dl.lv);
            x = mk.moKuaiPost.x;
            y = mk.moKuaiPost.y;
            // //添加模块
            if (Math.abs(mk.x - dl.bitmap.x) > Math.abs(mk.y - dl.bitmap.y)) {
                //右
                if (dl.bitmap.x > mk.x) {
                    x = mk.moKuaiPost.x + 1;
                    t = 4;
                }
                else {
                    //左
                    x = mk.moKuaiPost.x - 1;
                    t = 3;
                }
            }
            else {
                //上
                if (dl.bitmap.y < mk.y) {
                    y = mk.moKuaiPost.y - 1;
                    t = 1;
                }
                else {
                    //下
                    y = mk.moKuaiPost.y + 1;
                    t = 2;
                }
            }
            //越界过滤
            if (x < 0 || y < 0 || x >= this.W || y >= this.H) {
                return;
            }
            //如果该节点已经有模块
            if (this.moKuaiList[y][x]) {
                var p = this.kuosan(x, y);
                if (p) {
                    x = p.x;
                    y = p.y;
                }
            }
            var hx;
            //装甲
            if (dl.dl_type == suiji.SJ_YAN_SE.ZHUANG_JIA) {
                if (dl.lv == 1) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_1", this);
                }
                if (dl.lv == 2) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_2", this);
                }
                if (dl.lv == 3) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_3", this);
                }
                if (dl.lv == 4) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_4", this);
                }
                if (dl.lv == 5) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_5", this);
                }
            }
            if (dl.dl_type == suiji.SJ_YAN_SE.WU_QI) {
                //普通
                if (dl.wq_type == suiji.WQ_TYPE[0]) {
                    hx = new wuqi.PuTongDan(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, wuqi.WUQI_TYPE.PU_TONG, this);
                }
                //散弹
                if (dl.wq_type == suiji.WQ_TYPE[1]) {
                    hx = new wjwq.SanDanWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //导弹
                if (dl.wq_type == suiji.WQ_TYPE[2]) {
                    hx = new wjwq.DaoDanWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //激光
                if (dl.wq_type == suiji.WQ_TYPE[3]) {
                    hx = new wjwq.JiGuangWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //炮台
                if (dl.wq_type == suiji.WQ_TYPE[4]) {
                    hx = new wjwq.PaoTaiWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //鱼雷
                if (dl.wq_type == suiji.WQ_TYPE[5]) {
                    hx = new wjwq.YuLeiWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //螺旋
                if (dl.wq_type == suiji.WQ_TYPE[6]) {
                    hx = new wjwq.LuoXuanWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //长钉
                if (dl.wq_type == suiji.WQ_TYPE[7]) {
                    hx = new wjwq.ChangDingWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //重锤
                if (dl.wq_type == suiji.WQ_TYPE[8]) {
                    hx = new wjwq.ZhongChuiWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                var wq = hx;
                hx.setMkLevel(dl.lv);
                this.wuqiList.push(wq);
            }
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
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
            var p = Tools.p2TOegretPoitn(egret.Point.create(this.position[0], this.position[1]));
            if (this.battle_scene.dijis[0]) {
                var a = Math.atan2((this.battle_scene.dijis[0].position[1] - this.position[1]), (this.battle_scene.dijis[0].position[0] - this.position[0])) + Math.PI * 0.5;
                // a = a % (Math.PI * 2);
                // let angle = Math.atan2((this.fc.position[1] - this.position[1]), (this.fc.position[0] - this.position[0]))
                // egret.log("aaa??:" + a);
            }
        };
        //扩散
        ShuKe.prototype.kuosan = function (x, y) {
            if (this.chick((y - 1), (x - 1))) {
                return egret.Point.create((x - 1), (y - 1));
            }
            if (this.chick((y - 1), x)) {
                return egret.Point.create((x), (y - 1));
            }
            if (this.chick((y - 1), (x + 1))) {
                return egret.Point.create((x + 1), (y - 1));
            }
            //----------------------------
            if (this.chick(y, (x - 1))) {
                return egret.Point.create((x - 1), (y));
            }
            if (this.chick(y, (x + 1))) {
                return egret.Point.create((x + 1), (y));
            }
            //--------------------------
            if (this.chick((y + 1), (x - 1))) {
                return egret.Point.create((x - 1), (y + 1));
            }
            if (this.chick((y + 1), x)) {
                return egret.Point.create((x), (y + 1));
            }
            if (this.chick((y + 1), (x + 1))) {
                return egret.Point.create((x + 1), (y + 1));
            }
            //=============================================================
            if (this.chick((y - 2), (x - 2))) {
                return egret.Point.create((x - 2), (y - 2));
            }
            if (this.chick((y - 2), (x - 1))) {
                return egret.Point.create((x - 1), (y - 2));
            }
            if (this.chick((y - 2), (x))) {
                return egret.Point.create((x), (y - 2));
            }
            if (this.chick((y - 2), (x + 1))) {
                return egret.Point.create((x + 1), (y - 2));
            }
            if (this.chick((y - 2), (x + 2))) {
                return egret.Point.create((x + 2), (y - 2));
            }
            //----------------------------------
            if (this.chick((y - 1), (x - 2))) {
                return egret.Point.create((x - 2), (y - 1));
            }
            if (this.chick((y - 1), (x + 2))) {
                return egret.Point.create((x + 2), (y - 1));
            }
            //--------------------------------
            if (this.chick(y, (x - 2))) {
                return egret.Point.create((x - 2), (y));
            }
            if (this.chick(y, (x + 2))) {
                return egret.Point.create((x + 2), (y));
            }
            //-----------------------------
            if (this.chick((y + 1), (x - 2))) {
                return egret.Point.create((x - 2), (y + 1));
            }
            if (this.chick((y + 1), (x + 2))) {
                return egret.Point.create((x + 2), (y + 1));
            }
            //--------------------------------------------
            if (this.chick((y + 2), (x - 2))) {
                return egret.Point.create((x - 2), (y + 2));
            }
            if (this.chick((y + 2), (x - 1))) {
                return egret.Point.create((x - 1), (y + 2));
            }
            if (this.chick((y + 2), x)) {
                return egret.Point.create((x), (y + 2));
            }
            if (this.chick((y + 2), (x + 1))) {
                return egret.Point.create((x + 1), (y + 2));
            }
            if (this.chick((y + 2), (x + 2))) {
                return egret.Point.create((x + 2), (y + 2));
            }
            return null;
        };
        ShuKe.prototype.chick = function (x, y) {
            if (x < 0 || y < 0 || x >= this.W || y >= this.H) {
                return false;
            }
            return true;
        };
        return ShuKe;
    }(feichuan.FeiChuanBase));
    shuke.ShuKe = ShuKe;
    __reflect(ShuKe.prototype, "shuke.ShuKe");
})(shuke || (shuke = {}));
//# sourceMappingURL=ShuKe.js.map