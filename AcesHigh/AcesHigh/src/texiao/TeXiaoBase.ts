module texiao {
    export class TeXiaoBase {
        //特效贴图文件
        public bit: egret.Bitmap;
        constructor(bit_name: string) {
            this.bit = new egret.Bitmap(RES.getRes(bit_name));
        }

        //执行特效
        public goto() {

        }
    }
}