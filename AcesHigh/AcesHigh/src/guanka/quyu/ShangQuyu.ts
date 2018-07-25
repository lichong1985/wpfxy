module quyu {
    export class ShangQuyu extends QuYu {
        //可以在上部区域实用的类型
        public FCS: guanqia.FC_TYPE[] = [guanqia.FC_TYPE.CHUAN_DUI, guanqia.FC_TYPE.KUAN_TI, guanqia.FC_TYPE.NAI_DA, guanqia.FC_TYPE.TONG_YONG];
        public constructor() {
            super();
        }

        public initFc() {
            super.initFc();

        }

    }
}