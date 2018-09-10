module fjztj {
    //飞机状态机
    export class FjZTJ extends zhuangtaiji.ZhuangTaiJiBase {
        public fc: feichuan.FeiChuanBase;
        //标记当前路点
        public step_mark: number = 0;
        //有限状态机 列表
        public zt_list: Array<zhuangtaiji.ZhuangTaiJiInfoBean> = new Array<zhuangtaiji.ZhuangTaiJiInfoBean>();

        //当前关卡信息 
        public info: zhuangtaiji.ZhuangTaiJiInfoBean;
        //是否循环
        public is_loop: boolean = true;

        //已经循环过
        public looped: boolean = false;
        //等待时间
        public wate_time: number;




        constructor() {
            super();
        }

        //进步器
        public upStep(time: number) {
            super.upStep(time);
        }

        //添加有限状态机 因子
        public addInfo(info: zhuangtaiji.ZhuangTaiJiInfoBean) {
            this.zt_list.push(info);
        }

        public nextStep(sleep_time: number) {

            this.sleep(sleep_time);
            //清空
            this.fc.moveAI = null;
            this.fc.mzAI = null;
            this.fc.gjAI = null;

            //0 检查
            if (this.step_mark >= this.zt_list.length) {
                this.mT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.gjT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.info = null;
                return;
            }
            //1 设置 
            this.info = this.zt_list[this.step_mark];
            //过滤不参与循环的设置
            while (!this.info.is_loop && this.looped) {
                this.step_mark++;
                this.info = this.zt_list[this.step_mark];
            }

            egret.log(">>>>>>>>>>>>>>:" + this.info.mb+" -- "+this.info.is_loop)
            this.mT = this.info.mT;
            this.mzT = this.info.mZ;
            this.gjT = this.info.gjT;
            this.fc.upToPoint(this.info.pos);
            // this.fc.damping = this.info.zn;
            //2 更新
            this.step_mark++;
            if (this.step_mark >= this.zt_list.length && this.is_loop) {
                this.step_mark = 0;
                this.looped = true;
            }
        }


        //返回下一个 节点信息
        public getNextInfo(): zhuangtaiji.ZhuangTaiJiInfoBean {
            if (this.step_mark < this.zt_list.length) {
                return this.zt_list[(this.step_mark + 1)];
            }

            if (this.step_mark >= this.zt_list.length && this.is_loop) {
                return this.zt_list[0];
            }

            if (this.step_mark >= this.zt_list.length && !this.is_loop) {
                return null;
            }
        }


    }
}