module ai {
    export class XuanZhuanJian extends AiBase {
        constructor(fc: feichuan.FeiChuanBase, xs: number) {
            super(fc, null, null, null);
            this.fc.angularDamping = xs;
        }


    }
}