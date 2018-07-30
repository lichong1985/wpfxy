module quyu {
    export class QuYu {
        //该区域纵向占领的格子数量
        public gao: number;
        //横向格子数量
        public kuan: number;
        //飞船列表
        public fc_list: Array<feichuan.FeiChuanBase> = new Array<feichuan.FeiChuanBase>();
        public constructor() {

        }
        //初始化飞船
        public initFc() {
            
        }
    }
}