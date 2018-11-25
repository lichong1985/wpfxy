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
var fjztj;
(function (fjztj) {
    //飞机状态机
    var FjZTJ = (function (_super) {
        __extends(FjZTJ, _super);
        function FjZTJ() {
            var _this = _super.call(this) || this;
            //标记当前路点
            _this.step_mark = 0;
            //有限状态机 列表
            _this.zt_list = new Array();
            //是否循环
            _this.is_loop = true;
            //已经循环过
            _this.looped = false;
            return _this;
        }
        //进步器
        FjZTJ.prototype.upStep = function (time) {
            _super.prototype.upStep.call(this, time);
        };
        //添加有限状态机 因子
        FjZTJ.prototype.addInfo = function (info) {
            this.zt_list.push(info);
        };
        FjZTJ.prototype.nextStep = function (sleep_time) {
            this.sleep(sleep_time);
            //清空
            this.fc.moveAI = null;
            this.fc.mzAI = null;
            this.fc.gjAI = null;
            //0 检查
            if (this.step_mark >= this.zt_list.length) {
                this.mT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.gjT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.info = null;
                return;
            }
            //1 设置 
            this.info = this.zt_list[this.step_mark];
            //过滤不参与循环的设置
            while (!this.info.is_loop && this.looped) {
                this.step_mark++;
                this.info = this.zt_list[this.step_mark];
            }
            // egret.log(">>>>>>>>>>>>>>:" + this.info.mb + " -- " + this.info.is_loop + "||" + Tools.getPhoneW() + " -- " + Tools.getPhoneH());
            this.mT = this.info.mT;
            this.mzT = this.info.mZ;
            this.gjT = this.info.gjT;
            this.fc.upToPoint(this.info.pos);
            // this.fc.damping = this.info.zn;
            //2 更新
            this.step_mark++;
            if (this.step_mark >= this.zt_list.length && this.is_loop) {
                this.step_mark = 0;
                this.looped = true;
            }
        };
        //返回下一个 节点信息
        FjZTJ.prototype.getNextInfo = function () {
            if (this.step_mark < this.zt_list.length) {
                return this.zt_list[(this.step_mark + 1)];
            }
            if (this.step_mark >= this.zt_list.length && this.is_loop) {
                return this.zt_list[0];
            }
            if (this.step_mark >= this.zt_list.length && !this.is_loop) {
                return null;
            }
        };
        return FjZTJ;
    }(zhuangtaiji.ZhuangTaiJiBase));
    fjztj.FjZTJ = FjZTJ;
    __reflect(FjZTJ.prototype, "fjztj.FjZTJ");
})(fjztj || (fjztj = {}));
//# sourceMappingURL=FjZTJ.js.map