var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var zhuangtaiji;
(function (zhuangtaiji) {
    var ZhuangTaiJiInfoBean = (function () {
        //目标坐标  三种状态机类型 以及参数 达成成后休眠时间  
        function ZhuangTaiJiInfoBean(pos, mT, mZ, gjT, mT_xs, mZ_xs, gjT_xs, move_time, sleep_time, mb, is_loop) {
            //是否参与循环
            this.is_loop = true;
            this.pos = Tools.gridTop2(pos.x, pos.y);
            this.mT = mT;
            this.mZ = mZ;
            this.gjT = gjT;
            this.mT_xs = mT_xs;
            this.mZ_xs = mZ_xs;
            this.gjT_xs = gjT_xs;
            this.move_time = move_time;
            this.sleep_time = sleep_time;
            this.mb = mb;
            if (is_loop) {
                this.is_loop = false;
            }
            else {
                this.is_loop = true;
            }
        }
        return ZhuangTaiJiInfoBean;
    }());
    zhuangtaiji.ZhuangTaiJiInfoBean = ZhuangTaiJiInfoBean;
    __reflect(ZhuangTaiJiInfoBean.prototype, "zhuangtaiji.ZhuangTaiJiInfoBean");
})(zhuangtaiji || (zhuangtaiji = {}));
//# sourceMappingURL=ZhuangTaiJiInfoBean.js.map