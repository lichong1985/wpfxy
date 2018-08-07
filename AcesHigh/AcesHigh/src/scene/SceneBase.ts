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
    //物理世界 屏幕范围
    export const p2_zuo: number = 10;
    export const p2_shang: number = 60;
    export const p2_you: number = 45;
    export const p2_xia: number = 37;





    export abstract class SceneBase extends egret.DisplayObjectContainer {
        public world: p2.World;
        public sk: shuke.ShuKe;
        //所有敌机列表
        public dijis: Array<feichuan.FeiChuanBase>;
        //需要被移除的刚体列表（目前只作用与子弹 ）
        public removeZiDanBodyList: Array<p2.Body>;
        //只要出现就移除列表
        public ovzRemoveZiDanBodyList: Array<p2.Body>;
        //受伤的飞船列表
        public shouShangFeiChuanList: Array<feichuan.FeiChuanBase>;
        //残骸列表
        public canHais: Array<feichuan.FeiChuanBase>;

        // 物理世界坐标位移 
        public p2_wy_x: number = 0;
        public p2_wy_y: number = 0;

        //苏克上一贞坐标
        public sk_p2_befor: egret.Point;
        //苏克当前贞偏移量
        public sk_p2_now: egret.Point;

        //-----------guanka-------------------------
        //当前进行到第几波
        public nowBo: number = 0;
        //当前第几回合
        public nowHeiHe: number = 0;
        //当前波总回合数量
        public allHeiHe: number = 0;
        //当前回合 剩余的 飞机数量
        public lastFeiJi: number = 0;
        //是否可以添加回合内的飞机
        public add_hh_fc: boolean = true;
        //+++++++++++++++++++++++++++++++++++++++++

        //up子弹
        public zidanList: Array<zidan.ZiDanBase>;

        //++++++++++++++++++++道具掉落++++++++++++++++++
        //
        public removeDLList: Array<diaoluo.DiaoLuo>;

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
            this.removeZiDanBodyList = new Array<p2.Body>();
            this.ovzRemoveZiDanBodyList = new Array<p2.Body>();
            this.shouShangFeiChuanList = new Array<feichuan.FeiChuanBase>();
            this.canHais = new Array<canhai.CanHai>();
            this.zidanList = new Array<zidan.ZiDanBase>();
            this.removeDLList = new Array<diaoluo.DiaoLuo>();
        }

        //创建碰撞检测函数
        public initcoll() {
            let s: scene.SceneBase = this;
            this.world.on('beginContact', function (evt) {

                //如果碰撞没有子弹 则退出
                // if (!(evt.bodyB instanceof zidan.ZiDanBase) && !(evt.bodyA instanceof zidan.ZiDanBase)) {
                //     return;
                // }


                //---------------------------------------------

                //--------------掉落道具------------------
                if (evt.bodyA instanceof diaoluo.DiaoLuo) {
                    let dl = <diaoluo.DiaoLuo>evt.bodyA;
                    let sk = <shuke.ShuKe>evt.bodyB;
                    dl.collNum--;
                    if (dl.collNum == 0) {
                        s.removeDLList.push(dl);
                    }

                }

                if (evt.bodyB instanceof diaoluo.DiaoLuo) {
                    let dl = <diaoluo.DiaoLuo>evt.bodyB;
                    let sk = <shuke.ShuKe>evt.bodyA;
                    dl.collNum--;
                    if (dl.collNum == 0) {
                        s.removeDLList.push(dl);
                    }


                }

                //-----------------------子弹与 地方碰撞----------------

                //根据碰撞次数 减少耐久
                if (evt.bodyB instanceof zidan.ZiDanBase || evt.bodyA instanceof zidan.ZiDanBase) {

                    let m = evt.bodyB instanceof zidan.ZiDanBase ? evt.bodyB : evt.bodyA
                    let zd = <zidan.ZiDanBase>m;
                    zd.collNumber--;
                }
                if (evt.bodyB instanceof feichuan.FeiChuanBase || evt.bodyA instanceof feichuan.FeiChuanBase) {
                    let m = evt.bodyB instanceof feichuan.FeiChuanBase ? evt.bodyB : evt.bodyA
                    let oh: p2.Body = evt.bodyB instanceof feichuan.FeiChuanBase ? evt.bodyA : evt.bodyB
                    let ogzd = <zidan.ZiDanBase>oh;
                    let fc = <feichuan.FeiChuanBase>m;
                    if (fc.zhenying == GameConstant.ZHEN_YING.DI_JUN || fc.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                        if (oh instanceof zidan.ZiDanBase) {
                            //检测碰撞点 并且标记好在循环外删除
                            if (ogzd.is_first) {
                                // fc.checkCollision(oh.displays[0].x, oh.displays[0].y, ogzd.hitNumber);
                                let mk = fc.jia_ce_peng_zhuang_dian(oh.displays[0].x, oh.displays[0].y);
                                fc.shang_hai(mk, ogzd.hitNumber);
                                if (ogzd instanceof zidan.ChangDingZiDan) {
                                    let cd = <zidan.ChangDingZiDan>ogzd;
                                    cd.chuan_jia(mk, fc);
                                }

                                if (ogzd instanceof zidan.ZhongChuiZiDan) {
                                    let cd = <zidan.ZhongChuiZiDan>ogzd;
                                    cd.chuan_jia(mk, fc);
                                }
                                ogzd.is_first = false;
                            }
                        }
                    }
                    //只有当 碰撞参数等于0的时候才添加到 删除列表
                    if (ogzd.collNumber == 0) {

                        s.removeZiDanBodyList.push(ogzd)
                    }
                }
                //------------------------------------------------------
            });
        }

        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        public onEnterFrame() {
            this.chackColl();
            this.chackFeiChuan();
            this.p2Updata();
            this.upSomeThing();
            this.updataIsInWorld();
            this.updataWuQi();

        }
        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

        //刷新子弹
        public updataZidan() {
            for (let zd of this.zidanList) {
                if (zd.is_updata) {
                    zd.updata();
                }
            }
        }

        //更新飞船武器
        public updataWuQi() {
            let now = egret.getTimer();
            for (let fc of this.dijis) {
                let i = 0;
                for (let wq of fc.wuqiList) {
                    if (wq) {
                        i++;
                        wq.updata_wq(fc.angle, this.sk, now);
                    }
                }
            }
        }

        //检测场景内的残骸列表 是否在有效区域内
        public updataIsInWorld() {
            for (let fc of this.canHais) {
                //如果是残骸的话检测 坐标 并且删除
                if (fc.position[1] < 30) {
                    this.removeTheFcInTheGame(fc)
                }

            }
        }

        public upSomeThing() {

        }

        /**
         * 物理世界循环外 删除子弹
         */
        public chackColl() {
            //子弹
            let size = this.removeZiDanBodyList.length;
            for (let i = 0; i < size; i++) {
                let m = this.removeZiDanBodyList.pop();
                if (!m) {
                    continue;
                }
                let zd = <zidan.ZiDanBase>m;

                //没有碰撞次数后删除子弹
                if (zd.collNumber <= 0) {
                    let d = zd.displays[0];
                    if (d) {
                        if (d.parent) {
                            zd.texiao();
                            // this.removeChild(d);
                        }
                    }

                    //移除约束
                    zd.removeYueShu();
                    this.world.removeBody(zd);
                    zd = null;
                }
            }

            //子弹
            size = this.ovzRemoveZiDanBodyList.length;
            for (let i = 0; i < size; i++) {
                let m = this.ovzRemoveZiDanBodyList.pop();
                if (!m) {
                    continue;
                }
                let zd = <zidan.ZiDanBase>m;

                //没有碰撞次数后删除子弹

                let d = zd.displays[0];
                if (d) {
                    if (d.parent) {
                        this.removeChild(d);
                    }
                }
                //移除约束
                zd.removeYueShu();
                this.world.removeBody(zd);
                zd = null;

            }



            //掉落道具
            size = this.removeDLList.length;
            for (let i = 0; i < size; i++) {
                let dl = this.removeDLList.pop();
                if (!dl) {
                    continue;
                }
                //添加道具
                this.sk.addMoKuai(dl);

                let d = dl.displays[0];
                if (d) {
                    if (d.parent) {
                        this.removeChild(d);
                    }
                }
                this.world.removeBody(dl);
                dl = null;

            }



        }


        //检测飞船
        public chackFeiChuan() {
            //遍历受伤飞船列表
            for (let i = 0; i < this.shouShangFeiChuanList.length; i++) {
                let f: feichuan.FeiChuanBase = this.shouShangFeiChuanList.pop();
                //遍历受伤模块
                for (let j = 0; j < f.removeMoKuai.length; j++) {
                    let m = f.removeMoKuai.pop();
                    //移除小方块 颜色以及 形状
                    f.removeShape(m.boxShape);
                    this.removeChild(m);
                    f.mokuai_size--;

                    //查看该模块是否掉落道具
                    if (m.is_diao_luo) {
                        this.diao_luo_dao_ju(m);
                    }
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
                        wq.updata_wq(boxBody.angle, this.sk, egret.getTimer());
                    }
                }

                //掉落控制
                if (boxBody instanceof diaoluo.DiaoLuo) {
                    let dl = <diaoluo.DiaoLuo>boxBody;
                    dl.updata();
                    //todo删除
                }

                if (boxBody instanceof zidan.ZiDanBase) {
                    let zd = <zidan.ZiDanBase>boxBody;
                    if (zd.is_updata) {
                        zd.updata();
                    }

                    //c超出边界移除子弹
                    if (zd.position[1] > scene.p2_shang) {
                        this.ovzRemoveZiDanBodyList.push(zd)
                    }

                    if (zd.position[1] < scene.p2_xia) {
                        this.ovzRemoveZiDanBodyList.push(zd);
                    }


                    if (zd.position[0] > scene.p2_you) {
                        this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    if (zd.position[0] < scene.p2_zuo) {
                        this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    //超过15秒删除
                    if ((egret.getTimer() - zd.mark_time) > zd.sheng_ming_zhou_qi) {
                        if (!zd.isAddRem) {
                            zd.isAddRem = true;
                            zd.removeTeXiao();
                        }
                        // this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    //速度==0
                    if (zd.velocity[0] == 0 && zd.velocity[1] == 0) {
                        // this.ovzRemoveZiDanBodyList.push(zd);

                    }

                }

                if (boxBody instanceof canhai.CanHai) {
                }
                if (boxBody instanceof shuke.ShuKe) {
                    boxBody.velocity = [0, 0];
                }
                if (boxBody instanceof feichuan.XiaoBing) {
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
            this.sk_p2_now.x = (this.sk_p2_befor.x - this.sk.position[0]) * 0.02
            this.sk_p2_now.y = (this.sk_p2_befor.y - this.sk.position[1]) * 0.02

            // egret.log("WWWWWWWWWWWWWWWWWWWWWWWW:"+this.sk_p2_now.x+"__"+this.sk_p2_now.y)
        }


        //掉落道具
        public diao_luo_dao_ju(mk: mokuai.MoKuaiBase) {
            let dl = new diaoluo.DiaoLuo(this, mk.diao_luo_type, mk.dl_lv, Tools.egretTOp2(egret.Point.create(mk.x, mk.y)), mk.dl_wq_type);
            this.world.addBody(dl);
            this.addChild(dl.displays[0]);
            dl.loop();
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


        //适用于已经被测底打光的 飞船
        public removeTheFcInTheGame(fc: feichuan.FeiChuanBase) {
            //从敌机列表中
            if (fc.fc_type == feichuan.FC_TYPE.DIJI) {
                let inx = this.dijis.indexOf(fc, 0);
                if (inx > -1) {
                    this.dijis.splice(inx, 1);
                }
            }

            //从残骸列表中
            if (fc.fc_type == feichuan.FC_TYPE.CANHAI) {
                let inx = this.canHais.indexOf(fc);
                this.canHais.splice(inx);
            }
            let size = fc.moKuaiList.length;
            this.world.removeBody(fc);
            for (let j = 0; j < size; j++) {
                let m = fc.moKuaiList[j].length;
                for (let i = 0; i < m; i++) {
                    if (fc.moKuaiList[j][i]) {
                        this.removeChild(fc.moKuaiList[j][i]);
                    }
                    fc.moKuaiList[j][i] = null;
                }
            }


            fc = null;
        }

    }
}