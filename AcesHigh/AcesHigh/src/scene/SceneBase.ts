module scene {
    //战斗场景宽
    export const battle_sceneW: number = 4000;
    //战斗场景高
    export const battle_sceneH: number = 4000;

    //场景加载位置
    export const scene_anch_x: number = 1000;
    export const scene_anch_y: number = 1000;



    export abstract class SceneBase extends egret.DisplayObjectContainer {
        public world: p2.World;
        public sk: shuke.ShuKe;
        public dijis: Array<feichuan.FeiChuanBase>;
        public removeBodyList: Array<p2.Body>;
        public removeFeiChuan: Array<feichuan.FeiChuanBase>;

        constructor() {
            super()
            this.init();
            this.initcoll();
        }

        public init() {
            this.width = scene.battle_sceneW;
            this.height = scene.battle_sceneH;
            this.world = new p2.World();
            // this.world.sleepMode = p2.World.BODY_SLEEPING;
            this.world.gravity = [0, 0];
            this.addShuKeListener();
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.dijis = new Array<feichuan.FeiChuanBase>();
            this.removeBodyList = new Array<p2.Body>();
            this.removeFeiChuan = new Array<feichuan.FeiChuanBase>();


        }

        public initcoll() {

            let s: scene.SceneBase = this;

            this.world.on('beginContact', function (evt) {

                if (evt.bodyB instanceof zidan.PuTongZiDan || evt.bodyA instanceof zidan.PuTongZiDan) {
                    let m = evt.bodyB instanceof zidan.PuTongZiDan ? evt.bodyB : evt.bodyA
                    let zd = <zidan.PuTongZiDan>m;
                    if (zd.is_kick) {
                        s.removeBodyList.push(zd)
                    }
                }

                if (evt.bodyB instanceof feichuan.FeiChuanBase || evt.bodyA instanceof feichuan.FeiChuanBase) {
                    let m = evt.bodyB instanceof feichuan.FeiChuanBase ? evt.bodyB : evt.bodyA
                    let oh: p2.Body = evt.bodyB instanceof feichuan.FeiChuanBase ? evt.bodyA : evt.bodyB
                    let fc = <feichuan.FeiChuanBase>m;
                    if (fc.zhenying == GameConstant.ZHEN_YING.DI_JUN || fc.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                        if (oh instanceof zidan.ZiDanBase) {
                            let ogzd = <zidan.ZiDanBase>oh;
                            //碰撞只会出发一次
                            if (ogzd.is_coll) {
                                fc.checkCollision(oh.displays[0].x, oh.displays[0].y);
                                ogzd.is_coll = false;
                            }
                        }
                    }
                }


            });



        }


        public onEnterFrame() {
            this.chackColl();
            this.chackFeiChuan();
            this.p2Updata();
            // this.dijiUpdata();
        }
        // public dijiUpdata() {
        //     for (let d of this.dijis) {
        //         d.upPot();
        //     }
        // }

        /**
         * 碰撞检测并移除刚体
         */
        public chackColl() {
            let size = this.removeBodyList.length;
            for (let i = 0; i < size; i++) {
                let zd = <zidan.PuTongZiDan>this.removeBodyList.pop();
                if (zd.is_kick) {
                    zd.is_kick = false;
                    let d = zd.displays[0];
                    if (d) {
                        this.removeChild(d);
                    }
                    this.world.removeBody(zd);
                }
            }
        }

        //检测飞船
        public chackFeiChuan() {
            for (let i = 0; i < this.removeFeiChuan.length; i++) {
                let f: feichuan.FeiChuanBase = this.removeFeiChuan.pop();

                for (let j = 0; j < f.removeMoKuai.length; j++) {
                    let m = f.removeMoKuai.pop();
                    f.removeShape(m.boxShape);
                    this.removeChild(m);
                    f.mokuai_size--;
                }
                //掉落检测
                GameConstant.diaoluo(f)
                //判断飞船是否被清除
                if (f) {
                    if (f.mokuai_size > 0) {
                        f.fenJie();
                    }
                }
            }
        }

        public p2Updata() {
            // egret.log("PPPPPPPPPPPPPP")

            this.world.step(60 / 1000);
            var l: number = this.world.bodies.length;
            for (var i: number = 0; i < l; i++) {
                var boxBody: p2.Body = this.world.bodies[i];
                // if (boxBody instanceof test.TestFeiChuan) {
                //     let i = <test.TestFeiChuan>boxBody;
                //     i.testUp();
                //     continue;
                // }

                if (boxBody instanceof shuke.ShuKe) {
                    let i = <shuke.ShuKe>boxBody;
                    for (let wq of i.wuqiList) {
                        wq.updata_wq(boxBody.angle);
                    }
                }

                if (boxBody instanceof canhai.CanHai) {
                    // egret.log("CCCCCCCCCCCCCCCCCCCC")
                }

                if (boxBody instanceof feichuan.FeiChuanBase) {
                    let i = <feichuan.FeiChuanBase>boxBody;
                    i.updataPos();
                    continue;
                }

                var box: egret.DisplayObject = boxBody.displays[0];
                if (box) {
                    let p: egret.Point = Tools.p2TOegretPoitn(egret.Point.create(boxBody.position[0], boxBody.position[1]))
                    box.x = p.x;
                    box.y = p.y;
                    box.rotation = 360 - boxBody.angle * 180 / Math.PI;
                }
            }
        }






        public _distance: egret.Point = new egret.Point();

        public _skP: egret.Point = new egret.Point();
        //添加测试场景
        public addShuKeListener() {

            this.touchEnabled = true
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);

        }

        private mouseUp(evt: egret.TouchEvent) {
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        }

        private mouseDown(evt: egret.TouchEvent) {

            this._distance.x = evt.stageX;
            this._distance.y = evt.stageY;
            this._skP.x = this.sk.position[0];
            this._skP.y = this.sk.position[1];
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        }

        private mouseMove(evt: egret.TouchEvent) {
            let pp = egret.Point.create((evt.stageX - this._distance.x) / Physics.factor, -(evt.stageY - this._distance.y) / Physics.factor)
            this.sk.position[0] = this._skP.x + pp.x
            this.sk.position[1] = this._skP.y + pp.y

        }

    }
}