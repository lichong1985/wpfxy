var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var user;
(function (user) {
    // let d = new Date().getTime();
    // this.bitmap.texture = RES.getRes(name);
    var UserInfo = (function () {
        function UserInfo() {
        }
        //获取最大随机数
        UserInfo.getmax = function () {
            for (var i = 0; i < UserInfo.indx_number.length; i++) {
                if (UserInfo.add_number < UserInfo.indx_number[i]) {
                    return i - 1;
                }
            }
            return 9;
        };
        //保存金币
        UserInfo.saveJinBi = function (n) {
            UserInfo.all_number = n;
        };
        //保存天梯图
        UserInfo.saveTianTi = function (n) {
            UserInfo.wuqi_shengji_tianti[n] += 1;
        };
        UserInfo.add_number = 18; //拢共够买了几次
        UserInfo.indx_number = [-1, -1, -1, -1, 2, 4, 6, 8, 10, 12]; //够买次数对应开放的武器数量
        UserInfo.mei_ri_jiangli_time = 0; //每日奖励领取时间
        UserInfo.mei_ri_jiangli_time_cd = 1000 * 60 * 5; //奖励领取间隔 目前是 5个小时一次
        UserInfo.wuqi_shengji_tianti = [0, 1, 2, 0, 5, 0, 6, 0, 0, 0]; //武器升级天梯图
        //当前的总金币数量
        UserInfo.all_number = 1000;
        return UserInfo;
    }());
    user.UserInfo = UserInfo;
    __reflect(UserInfo.prototype, "user.UserInfo");
})(user || (user = {}));
//# sourceMappingURL=UserInfo.js.map