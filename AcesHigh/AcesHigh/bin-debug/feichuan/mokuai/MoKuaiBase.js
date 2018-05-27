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
        BODY_SHAPE_TYPE[BODY_SHAPE_TYPE["SIMPLE"] = 0] = "SIMPLE";
        BODY_SHAPE_TYPE[BODY_SHAPE_TYPE["FF"] = 1] = "FF";
        BODY_SHAPE_TYPE[BODY_SHAPE_TYPE["NN"] = 2] = "NN"; //3乘3
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
    mokuai.SIMPLE_SIZE_PH = 16 / 50;
    mokuai.FF_SIZE_PH = 16 * 2 / 50;
    mokuai.NN_SIZE_PH = 16 * 3 / 50;
    mokuai.M_SIZE = [mokuai.SIMPLE_SIZE, mokuai.FF_SIZE, mokuai.NN_SIZE];
    mokuai.M_SIZE_PH = [mokuai.SIMPLE_SIZE_PH, mokuai.FF_SIZE_PH, mokuai.NN_SIZE_PH];
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
            //相对距离
            _this.relativeDistance = egret.Point.create(0, 0);
            _this.shapeType = shapeType;
            _this.moKuaiPost = moKuaiPost;
            // this.bodySize = bodySize;
            _this.fc = fc;
            //初始化锚点
            _this.initAnch();
            return _this;
            //初始化相对距离
            // this.initRelativeDis();
            // 更新模块位置
            // this.UpdataPosition(wroldPointAch);
        }
        //初始化相对距离
        // public initRelativeDis() {
        //     let rx, ry: number
        //     //偶数
        //     //x
        //     rx = this.moKuaiPost.x - (this.bodySize.x / 2) * mokuai.M_SIZE[this.shapeType];
        //     if (rx < 0) {
        //         rx += mokuai.M_SIZE[this.shapeType] * 0.5
        //     }
        //     if (rx > 0) {
        //         rx -= mokuai.M_SIZE[this.shapeType] * 0.5
        //     }
        //     this.relativeDistance.x = rx;
        //     //----------------------------------
        //     //y
        //     ry = this.moKuaiPost.y - (this.bodySize.y / 2) * mokuai.M_SIZE[this.shapeType];
        //     if (ry < 0) {
        //         ry += mokuai.M_SIZE[this.shapeType] * 0.5
        //     }
        //     if (ry > 0) {
        //         ry -= mokuai.M_SIZE[this.shapeType] * 0.5
        //     }
        //     this.relativeDistance.y = ry;
        //     //奇数--------------------------------
        //     //x
        // }
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
        return MoKuaiBase;
    }(egret.Bitmap));
    mokuai.MoKuaiBase = MoKuaiBase;
    __reflect(MoKuaiBase.prototype, "mokuai.MoKuaiBase");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=MoKuaiBase.js.map