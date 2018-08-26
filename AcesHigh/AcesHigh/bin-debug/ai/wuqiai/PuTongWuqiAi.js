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
var ai;
(function (ai) {
    var PuTongWuqiAi = (function (_super) {
        __extends(PuTongWuqiAi, _super);
        //射几次数标记
        function PuTongWuqiAi(fc, mt, xz, mz, wuqiInfo) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.wuqiInfo = wuqiInfo;
            return _this;
        }
        PuTongWuqiAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            // let size = this.wuqiInfo.length;
            for (var _i = 0, _a = this.wuqiInfo; _i < _a.length; _i++) {
                var info = _a[_i];
                if ((time - info.da_ge_mark) > info.da_jian_ge && info.da_num_mark < info.da_num) {
                    //目标达成结束
                    if (info.da_num_mark <= info.da_num) {
                        info.is_xiao = true;
                    }
                    info.da_ge_mark = time;
                    info.da_num_mark++;
                }
                this.sheji(time, info);
            }
        };
        //射击
        PuTongWuqiAi.prototype.sheji = function (time, info) {
            if (info.xiao_num_mark >= info.xiao_num) {
                info.is_xiao = false;
                info.xiao_num_mark = 0;
            }
            var wuqiList;
            if (info.wq_type == 1) {
                wuqiList = this.fc.pt1_wuqiList;
            }
            if (info.wq_type == 16) {
                wuqiList = this.fc.pth_wuqiList;
            }
            if (info.wq_type == 2) {
                wuqiList = this.fc.jg1_wuqiList;
            }
            if (info.wq_type == 3) {
                wuqiList = this.fc.gz1_wuqiList;
            }
            if (info.wq_type == 4) {
                wuqiList = this.fc.js1_wuqiList;
            }
            if (info.wq_type == 5) {
                wuqiList = this.fc.sd1_wuqiList;
            }
            if ((time - info.xiao_ge_mark) > info.xiao_jian_ge && info.xiao_num_mark < info.xiao_num && info.is_xiao) {
                //射击
                for (var _i = 0, wuqiList_1 = wuqiList; _i < wuqiList_1.length; _i++) {
                    var w = wuqiList_1[_i];
                    //发射
                    w.sudu = info.she_su;
                    w.fashe(null, null, time);
                }
                info.xiao_num_mark++;
                info.xiao_ge_mark = time;
            }
        };
        return PuTongWuqiAi;
    }(ai.AiBase));
    ai.PuTongWuqiAi = PuTongWuqiAi;
    __reflect(PuTongWuqiAi.prototype, "ai.PuTongWuqiAi");
})(ai || (ai = {}));
//# sourceMappingURL=PuTongWuqiAi.js.map