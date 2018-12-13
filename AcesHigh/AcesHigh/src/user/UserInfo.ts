module user {
    // let d = new Date().getTime();
    // this.bitmap.texture = RES.getRes(name);


    export class UserInfo {

        public static add_number: number = 18;//拢共够买了几次
        public static indx_number: number[] = [-1, -1, -1, -1, 2, 4, 6, 8, 10, 12];//够买次数对应开放的武器数量
        public static mei_ri_jiangli_time: number = 0;//每日奖励领取时间
        public static mei_ri_jiangli_time_cd: number = 1000 * 60 * 5;//奖励领取间隔 目前是 5个小时一次

        public static wuqi_shengji_tianti: number[] = [0, 1, 2, 0, 5, 0, 6, 0, 0, 0];//武器升级天梯图


        //当前的总金币数量
        public static all_number: number = 1000;

        //获取最大随机数
        public static getmax(): number {
            for (let i = 0; i < UserInfo.indx_number.length; i++) {
                if (UserInfo.add_number < UserInfo.indx_number[i]) {
                    return i - 1;
                }
            }
            return 9;
        }


        //保存金币
        public static saveJinBi(n: number) {
            UserInfo.all_number = n;
        }


        //保存天梯图
        public static saveTianTi(n: number) {
            UserInfo.wuqi_shengji_tianti[n] += 1;
        }

    }
}