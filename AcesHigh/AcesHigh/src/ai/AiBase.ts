module ai {
    export enum AI_TYPE {
        xuan_zhuan, //旋转类型
        miao_zhun,//瞄准类型
    }

    //位置
    export enum WEI_ZHI {
        ZS = 0,//左上
        ZX = 1,//左下
        YS = 2,//右下
        YX = 3,//右上
    }

    //转向
    export enum ZHUAN_XIANG {
        Clockwise = 0,//顺时针
        Anti_clockwise = 1,//逆时针


    }
    export class AiBase {
        //场景管理器
        public sceneConsole: scene.SceneBase;
        //苏克
        public suke: shuke.ShuKe;

        public fc: feichuan.FeiChuanBase

        //是否停止ai
        public hang_up: boolean = false;

        //时间标记
        public time_mark: number;
        constructor(fc: feichuan.FeiChuanBase) {
            this.fc = fc;
            this.sceneConsole = fc.battle_scene;
            this.suke = this.sceneConsole.sk;

        }
        //场景刷新器
        public doUpData(time: number) {

        }


    }
}