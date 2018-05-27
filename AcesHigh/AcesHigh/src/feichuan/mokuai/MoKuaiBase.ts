module mokuai {
    // 约束方向枚举
    export enum ConstraintDirect {
        TOP,
        BOTTOM,
        LEFT,
        RIGHT
    }

    //模块体积类型
    export enum BODY_SHAPE_TYPE {
        SIMPLE = 0,// 单个
        FF = 1,//2乘2
        NN = 2 //3乘3
    }
    //模块类型
    export enum MO_KUAI_TYPE {
        HE_XIN,      //核心
        ZHUANG_JIA,   //装甲
        WU_QI,        //武器
        CAN_HAI       //残骸
    }


    //体型与尺寸
    export const SIMPLE_SIZE: number = 16;
    export const FF_SIZE: number = 16 * 2;
    export const NN_SIZE: number = 16 * 3;

    export const SIMPLE_SIZE_PH: number = 16 / 50;
    export const FF_SIZE_PH: number = 16 * 2 / 50;
    export const NN_SIZE_PH: number = 16 * 3 / 50;

    export const M_SIZE: number[] = [SIMPLE_SIZE, FF_SIZE, NN_SIZE]
    export const M_SIZE_PH: number[] = [SIMPLE_SIZE_PH, FF_SIZE_PH, NN_SIZE_PH]

    //模块基类  
    export class MoKuaiBase extends egret.Bitmap {

        //体型类型
        public shapeType: mokuai.BODY_SHAPE_TYPE;
        /**
         * 飞船世界坐标 （锚点中间）
         */
        public wroldPointAch: egret.Point;

        /**
         * 模块在飞船内所在坐标
         */
        public moKuaiPost: egret.Point;

        /**
         * 模块类型
         */
        public moKuaiType: mokuai.MO_KUAI_TYPE;
        //形状
        public boxShape: p2.Box;

        /**
         * 队列标记
         */
        public mark_number: number = -1;
        //是否冲herd中移除
        public rm_herd: boolean = false;

        /**
         * 联合体的大小
         */
        // public bodySize: egret.Point;
        //标记当前位置
        public markPoint: egret.Point;



        //相对距离
        public relativeDistance: egret.Point = egret.Point.create(0, 0);

        public fc: feichuan.FeiChuanBase;

        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(RES.getRes(bitName))
            this.shapeType = shapeType;
            this.moKuaiPost = moKuaiPost;
            // this.bodySize = bodySize;
            this.fc = fc;


            //初始化锚点
            this.initAnch();

            //初始化相对距离
            // this.initRelativeDis();

            // 更新模块位置
            // this.UpdataPosition(wroldPointAch);
        }

        //初始化相对距离
        // public initRelativeDis() {
        //     let rx, ry: number
        //     //偶数
        //     //x

        //     rx = this.moKuaiPost.x - (this.bodySize.x / 2) * mokuai.M_SIZE[this.shapeType];
        //     if (rx < 0) {
        //         rx += mokuai.M_SIZE[this.shapeType] * 0.5
        //     }
        //     if (rx > 0) {
        //         rx -= mokuai.M_SIZE[this.shapeType] * 0.5
        //     }

        //     this.relativeDistance.x = rx;


        //     //----------------------------------
        //     //y

        //     ry = this.moKuaiPost.y - (this.bodySize.y / 2) * mokuai.M_SIZE[this.shapeType];
        //     if (ry < 0) {
        //         ry += mokuai.M_SIZE[this.shapeType] * 0.5
        //     }
        //     if (ry > 0) {
        //         ry -= mokuai.M_SIZE[this.shapeType] * 0.5
        //     }

        //     this.relativeDistance.y = ry;


        //     //奇数--------------------------------
        //     //x

        // }



        //初始化锚点
        public initAnch() {
            this.anchorOffsetX = this.width * 0.5;
            this.anchorOffsetY = this.height * 0.5;
        }

        /**
         * 初始化模块位置
         */
        public UpdataPosition(p: egret.Point) {
            this.x = p.x + this.relativeDistance.x;
            this.y = p.y + this.relativeDistance.y;
        }

        public updata() {

        }

    }
}