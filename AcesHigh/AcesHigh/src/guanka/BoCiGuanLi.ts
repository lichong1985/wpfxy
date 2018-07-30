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
        //当前波次
        public bc_now: boci.BoCi;
        //是否进行下一个关卡
        public is_next = true;

        constructor() {

        }

        //下一波
        public nextBo() {
            this.is_next = false;
            this.bociNum++;
            //1 
            this.bc_now = new boci.BoCi();
            this.bc_now.initJuzi();

        }

        public addFc(scene: scene.SceneBase) {
            egret.log("SSSSSSSSSSSSSSS:" + this.bc_now.jz.fc_info_list.length);
            for (let info of this.bc_now.jz.fc_info_list) {
                info.reRandomPos();
                let fc = new feichuan.XiaoBing(scene,
                    info);

                scene.dijis.push(fc);
            }
        }

        //随机相关
        public upSomeThing() {
            if (TestScene.getInstance().dijis.length <= 0) {
                this.is_next = true;
            }
        }
    }
}