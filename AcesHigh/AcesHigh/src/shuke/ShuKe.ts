module shuke {
    export class ShuKe extends feichuan.FeiChuanBase {

        public yun_tu: number[][];
        constructor(battle_scene: scene.SceneBase) {
            super(battle_scene, egret.Point.create(1500, 1550), GameConstant.ZHEN_YING.WO_JUN)
            this.fc_type = feichuan.FC_TYPE.SUKE;
            this.initSuKe();
        }



        //初始化云图
        public initYunTU() {
            this.yun_tu =
                [
                    [1, 2, 2, 2, 3],

                ]
        }


        private initSuKe() {
            this.initYunTU();
            this.initPro(this.yun_tu);
        }

        public updataPos() {
            super.updataPos();
        }

    }
}