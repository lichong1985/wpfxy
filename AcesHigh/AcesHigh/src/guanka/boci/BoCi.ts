module boci {

    //波次的 句子
    // 1.上中结构
    // 2.中心结构
    // 3.上下结构
    // 4.左右结构
    // 5螺旋交替
    // 6四边结构
    // 7单机制霸
    // 8双机巡逻
    // 9三兄弟
    // 10四个二五仔
    // 11.四角结构
    export enum BO_CI_TYPE {
        SZ,//上中结构
    }
    export class BoCi {
        //当前波次是否有激光武器
        public is_jiguang: boolean;
        //是否有跟踪单武器
        public is_gen_zong: boolean;
        //是否有矩阵武器
        public is_ju_zhen: boolean;
        //是否有尾部武器
        public is_wei_bu: boolean;
        //句子管理
        public jz: juzi.JuZiGuanLi;
        public scene: scene.SceneBase;
        constructor(scene: scene.SceneBase) {
            this.scene = scene;
        }
        //初始化句子
        public initJuzi() {
            this.jz = new juzi.SiXiongDiJuzi(1, this.scene);
            this.jz.initFcInfo();
        }


    }
}