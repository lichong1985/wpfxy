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
var mokuai;
(function (mokuai) {
    // 约束方向枚举
    var ConstraintDirect;
    (function (ConstraintDirect) {
        ConstraintDirect[ConstraintDirect["TOP"] = 0] = "TOP";
        ConstraintDirect[ConstraintDirect["BOTTOM"] = 1] = "BOTTOM";
        ConstraintDirect[ConstraintDirect["LEFT"] = 2] = "LEFT";
        ConstraintDirect[ConstraintDirect["RIGHT"] = 3] = "RIGHT";
    })(ConstraintDirect = mokuai.ConstraintDirect || (mokuai.ConstraintDirect = {}));
    //模块体积类型
    var BODY_SHAPE_TYPE;
    (function (BODY_SHAPE_TYPE) {
        BODY_SHAPE_TYPE[BODY_SHAPE_TYPE["NANO"] = 0] = "NANO";
        BODY_SHAPE_TYPE[BODY_SHAPE_TYPE["SIMPLE"] = 1] = "SIMPLE";
        BODY_SHAPE_TYPE[BODY_SHAPE_TYPE["FF"] = 2] = "FF";
        BODY_SHAPE_TYPE[BODY_SHAPE_TYPE["NN"] = 3] = "NN"; //3乘3
    })(BODY_SHAPE_TYPE = mokuai.BODY_SHAPE_TYPE || (mokuai.BODY_SHAPE_TYPE = {}));
    //模块类型
    var MO_KUAI_TYPE;
    (function (MO_KUAI_TYPE) {
        MO_KUAI_TYPE[MO_KUAI_TYPE["HE_XIN"] = 0] = "HE_XIN";
        MO_KUAI_TYPE[MO_KUAI_TYPE["ZHUANG_JIA"] = 1] = "ZHUANG_JIA";
        MO_KUAI_TYPE[MO_KUAI_TYPE["WU_QI"] = 2] = "WU_QI";
        MO_KUAI_TYPE[MO_KUAI_TYPE["CAN_HAI"] = 3] = "CAN_HAI"; //残骸
    })(MO_KUAI_TYPE = mokuai.MO_KUAI_TYPE || (mokuai.MO_KUAI_TYPE = {}));
    //体型与尺寸
    mokuai.SIMPLE_SIZE = 16;
    mokuai.FF_SIZE = 16 * 2;
    mokuai.NN_SIZE = 16 * 3;
    mokuai.NANO_SIZE_PH = 8 / 50;
    mokuai.SIMPLE_SIZE_PH = 16 / 50;
    mokuai.FF_SIZE_PH = 16 * 2 / 50;
    mokuai.NN_SIZE_PH = 16 * 3 / 50;
    mokuai.M_SIZE = [mokuai.SIMPLE_SIZE, mokuai.FF_SIZE, mokuai.NN_SIZE];
    mokuai.M_SIZE_PH = [mokuai.NANO_SIZE_PH, mokuai.SIMPLE_SIZE_PH, mokuai.FF_SIZE_PH, mokuai.NN_SIZE_PH];
    //模块基类  
    var MoKuaiBase = (function (_super) {
        __extends(MoKuaiBase, _super);
        function MoKuaiBase(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, RES.getRes(bitName)) || this;
            /**
             * 队列标记
             */
            _this.mark_number = -1;
            //是否冲herd中移除
            _this.rm_herd = false;
            //模块当前等级
            _this.mk_level = 1;
            //当前等级剩余耐打次数
            _this.dk_now = 1;
            //相对距离
            _this.relativeDistance = egret.Point.create(0, 0);
            //---------------------掉落相关
            //是否是掉落模块
            _this.is_diao_luo = false;
            _this.shapeType = shapeType;
            _this.moKuaiPost = moKuaiPost;
            // this.bodySize = bodySize;
            _this.fc = fc;
            _this.bitName = bitName;
            //初始化锚点
            _this.initAnch();
            return _this;
            //初始化相对距离
            // this.initRelativeDis();
            // 更新模块位置
            // this.UpdataPosition(wroldPointAch);
        }
        //初始化锚点
        MoKuaiBase.prototype.initAnch = function () {
            this.anchorOffsetX = this.width * 0.5;
            this.anchorOffsetY = this.height * 0.5;
        };
        /**
         * 初始化模块位置
         */
        MoKuaiBase.prototype.UpdataPosition = function (p) {
            this.x = p.x + this.relativeDistance.x;
            this.y = p.y + this.relativeDistance.y;
        };
        MoKuaiBase.prototype.updata = function () {
        };
        //模块碰撞检测
        MoKuaiBase.prototype.coll = function (hit) {
            this.dk_now = this.dk_now - hit;
            if (this.dk_now <= 0) {
                this.mk_level--;
                //换皮
                if (this.mk_level > 0) {
                    if (this.mk_level == 4) {
                        this.texture = RES.getRes("op_zj_pt_level_4_png");
                        this.bitName = "op_zj_pt_level_4_png";
                    }
                    if (this.mk_level == 3) {
                        this.texture = RES.getRes("op_zj_pt_level_3_png");
                        this.bitName = "op_zj_pt_level_3_png";
                    }
                    if (this.mk_level == 2) {
                        this.texture = RES.getRes("op_zj_pt_level_2_png");
                        this.bitName = "op_zj_pt_level_2_png";
                    }
                    if (this.mk_level == 1) {
                        this.texture = RES.getRes("op_zj_pt_level_1_png");
                        this.bitName = "op_zj_pt_level_1_png";
                    }
                }
                this.dk_now = this.mk_level;
            }
            if (this.mk_level <= 0 && this.dk_now <= 0) {
                //已经被销毁
                return true;
            }
            return false;
        };
        //设置装甲等级
        MoKuaiBase.prototype.setMkLevel = function (level) {
            this.mk_level = level;
            this.dk_now = level;
        };
        //移除缓动动画
        MoKuaiBase.prototype.dell = function (DD) { this.fc.battle_scene.removeChild(DD); DD = null; };
        MoKuaiBase.prototype.jihui_texiao = function () {
            var b = new egret.Bitmap(RES.getRes(this.bitName));
            b.x = this.x;
            b.y = this.y;
            this.fc.battle_scene.addChild(b);
            b.rotation = this.rotation;
            b.anchorOffsetX = b.width * 0.5;
            b.anchorOffsetY = b.height * 0.5;
            var r = b.rotation + 361;
            egret.Tween.get(b).to({ "alpha": 0.9, "rotation": r }, 800).call(this.dell, this, [b]);
        };
        //击中特效
        MoKuaiBase.prototype.jiZhong_texiao = function () {
            if (this.mk_level == 5) {
                this.texture = RES.getRes("op_zj_pt_jz_level_5_jz_png");
            }
            if (this.mk_level == 4) {
                this.texture = RES.getRes("op_zj_pt_jz_level_4_jz_png");
            }
            if (this.mk_level == 3) {
                this.texture = RES.getRes("op_zj_pt_jz_level_3_jz_png");
            }
            if (this.mk_level == 2) {
                this.texture = RES.getRes("op_zj_pt_jz_level_2_jz_png");
            }
            if (this.mk_level == 1) {
                this.texture = RES.getRes("op_zj_pt_jz_level_1_jz_png");
            }
            this.alpha = 0.5;
            egret.Tween.get(this).to({ "alpha": 1 }, 250).to({ "alpha": 0.3 }, 250).call(this.shan_shuo, this);
        };
        //闪烁
        MoKuaiBase.prototype.shan_shuo = function () {
            this.alpha = 1;
            this.texture = RES.getRes(this.bitName);
        };
        return MoKuaiBase;
    }(egret.Bitmap));
    mokuai.MoKuaiBase = MoKuaiBase;
    __reflect(MoKuaiBase.prototype, "mokuai.MoKuaiBase");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=MoKuaiBase.js.map