module scene {
    //战斗场景宽
    export const battle_sceneW: number = 4000;
    //战斗场景高
    export const battle_sceneH: number = 4000;

    //场景加载位置
    export const scene_anch_x: number = 1000;
    export const scene_anch_y: number = 1000;

    //场景位移限制
    export const scene_wy_limit: number = 200;
    //位移生效百分比
    export const scene_wy_bfb: number = 0.2;



    export abstract class SceneBase extends egret.DisplayObjectContainer {
        public world: p2.World;
        public sk: shuke.ShuKe;
        public dijis: Array<feichuan.FeiChuanBase>;
        public removeBodyList: Array<p2.Body>;
        public removeFeiChuan: Array<feichuan.FeiChuanBase>;

        // 物理世界坐标位移 
        public p2_wy_x: number = 0;
        public p2_wy_y: number = 0;

        //苏克上一贞坐标
        public sk_p2_befor: egret.Point;
        //苏克当前贞偏移量
        public sk_p2_now: egret.Point;

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
        }

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
                if (!GameConstant.chackMoKuaiNumber(f)) {
                    return;
                }
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
            //进入 物理引擎前 计算偏移量
            this.updataSKNow();

            this.world.step(60 / 1000);
            var l: number = this.world.bodies.length;
            for (var i: number = 0; i < l; i++) {
                var boxBody: p2.Body = this.world.bodies[i];

                //添加偏移量
                if (this.sk_p2_now && !(boxBody instanceof shuke.ShuKe)) {
                    boxBody.position[0] = boxBody.position[0] + this.sk_p2_now.x;
                    boxBody.position[1] = boxBody.position[1] + this.sk_p2_now.y;
                }

                if (boxBody instanceof shuke.ShuKe) {
                    let i = <shuke.ShuKe>boxBody;
                    for (let wq of i.wuqiList) {
                        wq.updata_wq(boxBody.angle);
                    }
                }

                if (boxBody instanceof canhai.CanHai) {

                }

                if (boxBody instanceof feichuan.FeiChuanBase) {
                    let i = <feichuan.FeiChuanBase>boxBody;
                    i.updataSomeThing();
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

            //退出物理引擎后 需要标记偏移量
            this.updataSKBefor();
        }


        //设置 sk上一帧坐标
        private updataSKBefor() {

            if (this.sk_p2_befor) {
                this.sk_p2_befor.x = this.sk.position[0];
                this.sk_p2_befor.y = this.sk.position[1];
                return;
            }

            this.sk_p2_befor = egret.Point.create(this.sk.position[0], this.sk.position[1]);
        }

        //设置 sk 当前坐标偏移
        private updataSKNow() {
            if (!this.sk_p2_befor) {
                return;
            }
            if (!this.sk_p2_now) {
                this.sk_p2_now = egret.Point.create(0, 0);
            }
            this.sk_p2_now.x = (this.sk_p2_befor.x - this.sk.position[0]) * 0.1
            this.sk_p2_now.y = (this.sk_p2_befor.y - this.sk.position[1]) * 0.1
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

        //根据suke的位置 移动战斗场景
        private weiyi(pp: egret.Point) {

            //左上角 
            let min_w = scene.scene_anch_x - scene.scene_wy_limit;
            let min_h = scene.scene_anch_y - scene.scene_wy_limit;

            //右下角
            let max_w = scene.scene_anch_x + scene.scene_wy_limit + this.stage.stageWidth;
            let max_h = scene.scene_anch_y + scene.scene_wy_limit + this.stage.stageHeight;


            //屏幕宽高
            let pw = this.stage.stageWidth * 0.5;
            let ph = this.stage.stageHeight * 0.5;

            //中心
            let c_x = scene.scene_anch_x + pw;
            let c_y = scene.scene_anch_y + ph;


            //左上角x 坐标
            let zs_x: number = 0;
            if (pp.x < c_x) {
                zs_x = this.x + (c_x - pp.x);
                zs_x = zs_x > max_w ? max_w : zs_x;
                this.x = zs_x;
            }
            if (pp.x > scene.scene_anch_x + pw) {

            }
        }

    }
}