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
        NANO,
        SIMPLE,// 单个
        FF,//2乘2
        NN   //3乘3
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

    export const NANO_SIZE_PH: number = 8 / 50;
    export const SIMPLE_SIZE_PH: number = 16 / 50;
    export const FF_SIZE_PH: number = 16 * 2 / 50;
    export const NN_SIZE_PH: number = 16 * 3 / 50;



    export const M_SIZE: number[] = [SIMPLE_SIZE, FF_SIZE, NN_SIZE]
    export const M_SIZE_PH: number[] = [NANO_SIZE_PH, SIMPLE_SIZE_PH, FF_SIZE_PH, NN_SIZE_PH]

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

        //模块当前等级
        public mk_level: number = 1;
        //当前等级剩余耐打次数
        public dk_now: number = 1;


        //相对距离
        public relativeDistance: egret.Point = egret.Point.create(0, 0);

        public fc: feichuan.FeiChuanBase;

        public bitName: string;

        constructor(moKuaiPost: egret.Point, shapeType: mokuai.BODY_SHAPE_TYPE, bitName: string, fc: feichuan.FeiChuanBase) {
            super(RES.getRes(bitName))
            this.shapeType = shapeType;
            this.moKuaiPost = moKuaiPost;
            // this.bodySize = bodySize;
            this.fc = fc;
            this.bitName = bitName;


            //初始化锚点
            this.initAnch();

            //初始化相对距离
            // this.initRelativeDis();

            // 更新模块位置
            // this.UpdataPosition(wroldPointAch);
        }




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

        //模块碰撞检测
        public coll(hit: number): boolean {
            this.dk_now = this.dk_now - hit;
            if (this.dk_now <= 0) {
                this.mk_level--;
                //换皮
                if (this.mk_level > 0) {
                    if (this.mk_level == 4) {
                        this.texture = RES.getRes("zj_level_4_png");
                        this.bitName = "zj_level_4_png";
                    }
                    if (this.mk_level == 3) {
                        this.texture = RES.getRes("zj_level_3_png");
                        this.bitName = "zj_level_3_png";

                    }
                    if (this.mk_level == 2) {
                        this.texture = RES.getRes("zj_level_2_png");
                        this.bitName = "zj_level_2_png";

                    }
                    if (this.mk_level == 1) {
                        this.texture = RES.getRes("zj_level_1_png");
                        this.bitName = "zj_level_1_png";

                    }

                }
                this.dk_now = this.mk_level;
            }


            if (this.mk_level <= 0 && this.dk_now <= 0) {
                //已经被销毁
                return true;
            }

            return false;
        }

        //设置装甲等级
        public setMkLevel(level: number) {
            this.mk_level = level;
            this.dk_now = level;
        }

        //移除缓动动画
        public dell(DD: egret.DisplayObject) { this.fc.battle_scene.removeChild(DD); DD = null; }


        public jihui_texiao() {
            let b = new egret.Bitmap(RES.getRes(this.bitName))
            b.x = this.x;
            b.y = this.y;
            this.fc.battle_scene.addChild(b);
            b.rotation = this.rotation;
            b.anchorOffsetX = b.width * 0.5;
            b.anchorOffsetY = b.height * 0.5;
            let r = b.rotation + 361;
            egret.Tween.get(b).to({ "alpha": 0.9, "rotation": r }, 800).call(this.dell, this, [b]);

        }
        //击中特效
        public jiZhong_texiao() {
            this.texture = RES.getRes("hong_dian_png");
            this.alpha = 0.5
            egret.Tween.get(this).to({ "alpha": 1 }, 250).to({ "alpha": 0.3 }, 250).call(this.shan_shuo, this);
        }
        //闪烁
        public shan_shuo() {
            this.alpha = 1;
            this.texture = RES.getRes(this.bitName);

        }

    }
}