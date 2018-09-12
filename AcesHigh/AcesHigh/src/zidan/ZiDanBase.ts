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
        public bit_name: string;
        public scene: scene.SceneBase;
        //尾翼cd
        public wyCD: number = 15;
        public wyMark: number = 0;
        public wyName: string;



        public is_updata: boolean = false;

        //碰撞次数
        public collNumber: number = 1;
        //攻击力
        public hitNumber: number = 1;
        //是否是第一次碰撞
        public is_first: boolean = true;

        //发射标记时间
        public mark_time: number = egret.getTimer();
        //生命周期
        public sheng_ming_zhou_qi: number = 10000;

        //是否添加的移除列表
        public isAddRem: boolean = false;

        public yueShulist: Array<p2.DistanceConstraint>;

        public level: number;


        constructor(scene: scene.SceneBase, zhenying: GameConstant.ZHEN_YING, mass: number, wqt: wuqi.WUQI_TYPE) {
            super({ mass: mass })
            this.zhenying = zhenying;
            this.wqt = wqt;
            this.scene = scene;
            this.yueShulist = new Array<p2.DistanceConstraint>();
            this.initColl();
            this.initZidan();

        }

        public initZidan() {
            let box: p2.Box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO] });
            this.addShape(box);
            box.collisionMask = this.collMask;
            box.collisionGroup = this.collGroup;
        }

        //约束
        public yue_shu() {

        }


        //初始化碰撞参数
        public initColl() {
            if (this.zhenying == GameConstant.ZHEN_YING.WO_JUN_ZIDAN) {
                this.collGroup = GameConstant.WO_JUN_ZIDAN;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.DI_JUN_ZIDAN) {
                this.collGroup = GameConstant.DI_JUN_ZIDAN;
                this.collMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI;
            }
            // if (this.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
            //     this.collGroup = GameConstant.ZHONG_LI;
            //     this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI | GameConstant.WO_JUN | GameConstant.WO_JUN_ZIDAN | GameConstant.DI_JUN_ZIDAN;
            // }
        }

        public texiao() {
            this.dell(this.bitmap);
        }

        //移除特效（超时时移除）
        public removeTeXiao() {
            this.addRemove();
        }

        public addRemove() {
            this.scene.ovzRemoveZiDanBodyList.push(this);
        }


        //移除缓动动画
        public dell(DD: egret.DisplayObject) {
            if (DD) {
                if (DD.parent) {
                    egret.Tween.removeTweens(DD);
                    this.scene.removeChild(DD);
                }
            }
            DD = null;

        }


        //移除约束(所有子弹删除的时候 都要尝试)
        public removeYueShu() {
            if (this.yueShulist.length <= 0) {
                return;
            }

            let size = this.yueShulist.length;
            for (let i = 0; i < size; i++) {
                let ys = this.yueShulist.pop();
                this.scene.world.removeConstraint(ys);
            }
        }

        public updata() {

        }

        //添加尾翼
        public weiyi(name: string) {
            if (egret.getTimer() - this.wyMark < this.wyCD && this.bitmap != null) {
                return;
            }
            this.wyMark = egret.getTimer();
            let b: egret.Bitmap = new egret.Bitmap(RES.getRes(name));
            b.anchorOffsetX = this.bitmap.width * 0.5;
            b.anchorOffsetY = this.bitmap.height * 0.5;

            b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = this.bitmap.x;
            b.y = this.bitmap.y;
            b.scaleX = 0.4;
            b.scaleY = 0.5;
            this.scene.addChild(b);
            b.alpha = 0.5;
            egret.Tween.get(b).to({ "alpha": 0.1 }, 110).call(this.dell, this, [b]);

        }

        //检测 节点是否可以被击中
        public chickThePost(x: number, y: number, fc: feichuan.FeiChuanBase) {
            if (x < 0) {
                return;
            }
            if (y < 0) {
                return;
            }

            if (x >= fc.moKuaiList[0].length) {
                return;
            }

            if (y >= fc.moKuaiList.length) {
                return;
            }
            fc.shang_hai(fc.moKuaiList[y][x], this.hitNumber);
        }
    }
}