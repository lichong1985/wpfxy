module zidan {


    export class ZiDanBase extends p2.Body {
        // 碰撞组
        public collGroup: number
        //碰撞 mask
        public collMask: number;
        //阵营
        public zhenying: GameConstant.ZHEN_YING;
        //武器类型
        public wqt: wuqi.WUQI_TYPE;

        public bitmap: egret.Bitmap;

        public is_kick: boolean = true;
        public is_coll: boolean = true;


        constructor(zhenying: GameConstant.ZHEN_YING, mass: number, wqt: wuqi.WUQI_TYPE) {
            super({ mass: mass })
            this.zhenying = zhenying;
            this.wqt = wqt;
            this.initColl();
            this.initZidan();
        }

        public initZidan() {
            let box: p2.Box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
            this.addShape(box);
            box.collisionMask = this.collMask;
            box.collisionGroup = this.collGroup;
        }


        //初始化碰撞参数
        public initColl() {
            if (this.zhenying == GameConstant.ZHEN_YING.WO_JUN) {
                this.collGroup = GameConstant.WO_JUN;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI;
            }

            if (this.zhenying == GameConstant.ZHEN_YING.DI_JUN) {
                this.collGroup = GameConstant.DI_JUN;
                this.collMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI;
            }

            if (this.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                this.collGroup = GameConstant.ZHONG_LI;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI | GameConstant.WO_JUN;
            }
        }


        public updata() {

        }
    }
}