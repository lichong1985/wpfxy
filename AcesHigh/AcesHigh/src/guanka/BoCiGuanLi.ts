module guanqia {
    export enum FC_TYPE {
        KUAN_TI,//宽体
        XUAN_ZHUAN,//旋转
        YIN_SHEN,//隐身
        NAI_DA,//耐打
        ZONG_XING,//纵向
        CHUAN_DUI,//船队
        TONG_YONG,//通用
    }
    export class BoCiGuanLi {
        //当前波次
        public bociNum: number = 0;
        constructor() {

        }

        //下一波
        public nextBo() {
            this.bociNum++;
            //1 

        }
    }
}