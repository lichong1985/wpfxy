module ai {
    /**
     * 实时瞄准 ai
     */
    export class ShiShiMiaoZhunAi extends AiBase {
        constructor(fc: feichuan.FeiChuanBase) {
            super(fc);

        }
        public doUpData(time: number) {
            if (!this.hang_up) {
                super.doUpData(time);
                let angle: number = Math.atan2((this.suke.position[1] - this.fc.position[1]), (this.suke.position[0] - this.fc.position[0])) + Math.PI * 0.5
                this.fc.angle = angle;
            }
        }
    }
}