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

        public numberList: Array<number> = new Array<number>();
        constructor(scene: scene.SceneBase) {
            this.scene = scene;
            this.init();
        }

        public init() {
            for (let i = 1; i <= 43; i++) {
                this.numberList.push(i);
            }

        }

        //下一波
        public next() {
            let max = this.numberList.length;
            let min = 0;
            let numb: number = Tools.GetRandomNum(min, max);
            numb = 51;
            this.jz = this.getJZ(numb);
            this.jz.initFcInfo();
            //移除指定节点
            var index = this.numberList.indexOf(numb, 0);
            if (index > -1) {
                this.numberList.splice(index, 1);
            }

        }

        public getJZ(numb: number): juzi.JuZiGuanLi {

            if (numb == 1) { return new juzi.SanXuanZhanDaoPianJZ(1, this.scene) }
            if (numb == 2) { return new juzi.ChaoDaWuJZ(1, this.scene) }
            if (numb == 3) { return new juzi.SiJiRaoQuanXuanZhuanJZ(1, this.scene) }
            if (numb == 4) { return new juzi.ChaoDaSanXuanZhanJZ(1, this.scene) }
            if (numb == 5) { return new juzi.PuTongDanXuanZhanDaGeJZ(1, this.scene) }
            if (numb == 6) { return new juzi.ShiZiXuanZhuanLianXuSheJiJZ(1, this.scene) }
            if (numb == 7) { return new juzi.SanDaGeJiGuangXuanZhuanJZ(1, this.scene) }
            if (numb == 8) { return new juzi.ShiZiXuanZhanSanDanJZ(1, this.scene) }
            if (numb == 9) { return new juzi.SanSanDanDingWeiJZ(1, this.scene) }
            if (numb == 10) { return new juzi.DanJiSanDanGenZongJZ(1, this.scene) }
            if (numb == 11) { return new juzi.JuZhanZiDanJiaXuanZhanJZ(1, this.scene) }
            if (numb == 12) { return new juzi.SanMaZaiJZ(1, this.scene) }
            if (numb == 13) { return new juzi.ChaoDaKuanTiJZ(1, this.scene) }
            if (numb == 14) { return new juzi.ShuangJiRaoLuoXuanFeiJZ(1, this.scene) }
            if (numb == 15) { return new juzi.ShuangDuiJiaoJiaXuanZhuanJZ(1, this.scene) }
            if (numb == 16) { return new juzi.SanBianYiXuanZhuanJZ(1, this.scene) }
            if (numb == 17) { return new juzi.ChaoDaLuoXuanJZ(1, this.scene) }
            if (numb == 18) { return new juzi.ShuangJiJieZouRaoFeiJZ(1, this.scene) }
            if (numb == 19) { return new juzi.BoSiMaoJiaXuanZhuanJZ(1, this.scene) }
            if (numb == 20) { return new juzi.DanJiSanDanChangTiaoJZ(1, this.scene) }
            if (numb == 21) { return new juzi.DaWuJZ(1, this.scene) }
            if (numb == 22) { return new juzi.SiXiongDiShuangGenZongJZ(1, this.scene) }
            if (numb == 23) { return new juzi.DaSiJZ(1, this.scene) }
            if (numb == 24) { return new juzi.DanJiRaoFeiJZ(1, this.scene) }
            if (numb == 25) { return new juzi.ShuangXuanZHuanFeiDanJZ(1, this.scene) }
            if (numb == 26) { return new juzi.ShuangJiDuiJiaoXianXuanZhuanJZ(1, this.scene) }
            if (numb == 27) { return new juzi.ShuangJiShangXiaJZ(1, this.scene) }
            if (numb == 28) { return new juzi.DaSan(1, this.scene) }
            if (numb == 29) { return new juzi.ShuangKuanTiJiaXuanZhuanJUZI(1, this.scene) }
            if (numb == 30) { return new juzi.ShuangQianHouDanXuanZhuanJUZI(1, this.scene) }
            if (numb == 31) { return new juzi.ShuangJiXuanTingSheJiJUZI(1, this.scene) }
            if (numb == 32) { return new juzi.SanDanJiDuiXuanZhuanJZ(1, this.scene) }
            if (numb == 33) { return new juzi.DaErJZ(1, this.scene) }
            if (numb == 34) { return new juzi.SiXiongDiJZ(1, this.scene) }
            if (numb == 35) { return new juzi.Xiao62XunLuoGonJiJZ(1, this.scene) }
            if (numb == 36) { return new juzi.DaYiXiaoDiJZ(1, this.scene) }
            if (numb == 37) { return new juzi.DaYiJZ(1, this.scene) }
            if (numb == 38) { return new juzi.KaoJinLiKaiJz(1, this.scene) }
            if (numb == 39) { return new juzi.YiPaiSheJiJZ(1, this.scene) }
            if (numb == 40) { return new juzi.DanJiGenZongDanJZ(1, this.scene) }
            if (numb == 41) { return new juzi.LiangXiongDiBuKaiQiangJZ(1, this.scene) }
            if (numb == 42) { return new juzi.SanXiongDiManDongJZ(1, this.scene) }
            if (numb == 43) { return new juzi.ShuangJiJiaoChaXuanZHuan(1, this.scene) }
            if (numb == 51) { return new juzi.Test1(1, this.scene) }
            return null;
        }
        //初始化句子
        public initJuzi() {

            //------------test---------------------
            // this.jz = new juzi.Test1(1, this.scene);
            //-------------------------------------
            // this.jz = new juzi.SanXuanZhanDaoPianJZ(1, this.scene);//三旋转刀片
            // this.jz = new juzi.ChaoDaWuJZ(1, this.scene);//超大五
            // this.jz = new juzi.SiJiRaoQuanXuanZhuanJZ(1, this.scene);//四机绕旋转
            //40
            // this.jz = new juzi.ChaoDaSanXuanZhanJZ(1,this.scene);//超大三旋转
            // this.jz = new juzi.PuTongDanXuanZhanDaGeJZ(1, this.scene);//普通子弹旋转
            // this.jz = new juzi.ShiZiXuanZhuanLianXuSheJiJZ(1, this.scene);//十字旋转 连续设计
            // this.jz = new juzi.SanDaGeJiGuangXuanZhuanJZ(1, this.scene);//三大哥  激光 旋转
            // this.jz = new juzi.ShiZiXuanZhanSanDanJZ(1, this.scene);//十字旋转散弹
            // this.jz = new juzi.SanSanDanDingWeiJZ(1, this.scene);//三散弹定位
            // this.jz = new juzi.DanJiSanDanGenZongJZ(1, this.scene);//单机散弹 跟踪
            // this.jz = new juzi.JuZhanZiDanJiaXuanZhanJZ(1, this.scene);//矩阵子弹 旋转
            this.jz = new juzi.SanMaZaiJZ(1, this.scene);//三马仔
            // this.jz = new juzi.ChaoDaKuanTiJZ(1, this.scene);//超大宽体
            //30
            // this.jz = new juzi.ShuangJiRaoLuoXuanFeiJZ(1, this.scene);//双机绕螺旋飞
            // this.jz = new juzi.ShuangDuiJiaoJiaXuanZhuanJZ(1, this.scene);//双对角 旋转
            // this.jz = new juzi.SanBianYiXuanZhuanJZ(1, this.scene);// 三变异 旋转
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