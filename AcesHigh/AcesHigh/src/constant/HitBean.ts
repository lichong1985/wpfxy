module bean {
    export class HitBean {
        public mk: mokuai.MoKuaiBase;
        public hitNumb: number;
        constructor(mk: mokuai.MoKuaiBase, hitNumb: number) {
            this.mk = mk;
            this.hitNumb = hitNumb;
        }
    }
}