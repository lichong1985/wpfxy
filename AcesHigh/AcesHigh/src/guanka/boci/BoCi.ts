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

            //------------test---------------------
            // this.jz = new juzi.Test1(1, this.scene);
            //-------------------------------------
            // this.jz = new juzi.ChaoDaLuoXuanJZ(1, this.scene);//超大一螺旋
            // this.jz = new juzi.ShuangJiJieZouRaoFeiJZ(1, this.scene);//双击节奏绕飞 
            // this.jz = new juzi.BoSiMaoJiaXuanZhuanJZ(1, this.scene);//波斯猫 加 旋转
            // this.jz = new juzi.DanJiSanDanChangTiaoJZ(1, this.scene)//散弹两侧长条
            // this.jz = new juzi.DaWuJZ(1, this.scene);//大五
            // this.jz = new juzi.SiXiongDiShuangGenZongJZ(1, this.scene);//四兄弟 双跟踪
            // this.jz = new juzi.DaSiJZ(1, this.scene); //大四
            //20
            // this.jz = new juzi.DanJiRaoFeiJZ(1, this.scene);//单机机队绕飞
            // this.jz = new juzi.ShuangXuanZHuanFeiDanJZ(1, this.scene);// 双旋转 四射
            // this.jz = new juzi.ShuangJiDuiJiaoXianXuanZhuanJZ(1, this.scene);//双机对角线 加旋转
            // this.jz = new juzi.ShuangJiShangXiaJZ(1, this.scene);//双机上下
            // this.jz = new juzi.DaSan(1, this.scene);//大 3 武器多
            // this.jz = new juzi.ShuangKuanTiJiaXuanZhuanJUZI(1, this.scene);//双宽体 旋转
            // this.jz = new juzi.ShuangQianHouDanXuanZhuanJUZI(1, this.scene);//双前后加旋转
            // this.jz = new juzi.ShuangJiXuanTingSheJiJUZI(1, this.scene);//双机悬停散弹
            // this.jz = new juzi.SanDanJiDuiXuanZhuanJZ(1, this.scene);//散弹机队螺旋
            // this.jz = new juzi.DaErJZ(1, this.scene);//大二 散弹
            //10
            // this.jz = new juzi.SiXiongDiJZ(1, this.scene);//四兄弟
            // this.jz = new juzi.Xiao62XunLuoGonJiJZ(1, this.scene);//顶部 加 机队
            // this.jz = new juzi.DaYiXiaoDiJZ(1, this.scene);//大一小弟
            // this.jz = new juzi.DaYiJZ(1, this.scene);//大一 单机
            // this.jz = new juzi.KaoJinLiKaiJz(1, this.scene);//靠近离开机队
            // this.jz = new juzi.YiPaiSheJiJZ(1, this.scene); //一排射击
            // this.jz = new juzi.DanJiGenZongDanJZ(1, this.scene);//单机（章鱼）跟踪弹
            // this.jz = new juzi.LiangXiongDiBuKaiQiangJZ(1, this.scene);//两兄弟行走不开枪
            // this.jz = new juzi.SanXiongDiManDongJZ(1, this.scene);//三兄弟
            // this.jz = new juzi.ShuangJiJiaoChaXuanZHuan(1, this.scene);//双机交叉 旋转
            this.jz.initFcInfo();
        }

        public randonGuzi() {

        }


    }
}