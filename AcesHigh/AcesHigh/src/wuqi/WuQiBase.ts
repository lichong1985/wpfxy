module wuqi {
    export enum WUQI_TYPE {
        PU_TONG,//普通武器
        ZHI_SHE,//直射
        JI_GUANG,//激光
        DAO_DAN,//导弹
        DA_PAO,//大炮
        ZHI_DAO_JI_GUANG,//制导激光
        CHUAN_JIA_DAN,//穿甲弹
        YUN_BAO_DAN,//云爆弹
        DING_WEI,//定位子弹
        JIAN_SU,//减速武器
        KAI_HUA,//开花弹
        GEN_ZHONG,//跟踪
        SAN_DAN,//散弹
        SHE_XIAN,//射线
        DING_XIANG,//定向
        YU_LEI,//鱼雷
        LUO_XUAN,//螺旋
        CHANG_DING,//长钉
        ZHONG_CHUI,//重锤
        DJ_SAN_DAN,//敌军散弹


    }


    export class WuQiBase extends mokuai.MoKuaiBase {
        //武器类型
        public wuqi_type: WUQI_TYPE;
        //武器攻击cd 单位毫秒
        public cd: number = 2000;

        //时间标记 上一次攻击的时间
        public mark_time: number = 0;

        //速度
        public sudu: number = 5;

        //武器等级
        public level: number = 1;

        //目标飞船
        public tiaget_fc: feichuan.FeiChuanBase;

        //特效贴图
        public tx: egret.Bitmap;

        //螺旋角度
        public lx: number = 0;


        //连击次数
        public lianji: number = 1;
        public lianji_mark: number = 1;

        //伤害相关
        public hit: number = 5;

        //升级特效显示次数
        public sj_number = 0;

        public jia_hao: number = 100;





        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, name: string, wuqii_type: WUQI_TYPE, fc: feichuan.FeiChuanBase) {
            super(mokaiPos, shType, name, fc);
            this.moKuaiType = mokuai.MO_KUAI_TYPE.WU_QI;
            this.wuqi_type = wuqii_type;

            // this.tx = new egret.Bitmap(RES.getRes(name));
            // this.tx.anchorOffsetX = this.width * 0.5;
            // this.tx.anchorOffsetY = this.height * 0.5;
            this.lianji_mark = this.lianji;


        }




        public updata_wq(angel: number, suke: shuke.ShuKe, now: number) {
            this.updata();
            this.lx += 0.1;
            if ((now - this.mark_time) > this.cd && this.fc.zhenying == GameConstant.ZHEN_YING.WO_JUN) {
                // this.mark_time = now;
                this.fashe(angel, suke, now);
                return;
            }

        }
        public updata() {
            if (egret.getTimer() > this.jia_hao) {
                this.jia_hao = egret.getTimer() + 100;
                if (this.sj_number > 0) {
                    this.shengjiTexiao();
                }
            }

        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {
            this.fasheTeXiao();
            this.mark_time += 200;
            this.lianji_mark--;
            if (this.lianji_mark <= 0) {
                this.mark_time = now;
                this.lianji_mark = this.lianji;
            }
        }

        //发射特效
        public fasheTeXiao() {
            let tw = egret.Tween.get(this);
            tw.to({ "scaleX": 2.2, "scaleY": 2.2, "alpha": 0.8 }, 100).call(this.huizhi);

        }
        //升级特效
        public shengjiTexiao() {

            let name: string = "";
            if (this.level == 1) {
                name = "bai_j"
            }
            if (this.level == 2) {
                name = "lv_j"
            }
            if (this.level == 3) {
                name = "lan_j"
            }
            if (this.level == 4) {
                name = "zi_j"
            }
            if (this.level >= 5) {
                name = "cheng_j"
            }

            let jia = new egret.Bitmap(RES.getRes(name));
            jia.anchorOffsetX = jia.width * 0.5;
            jia.anchorOffsetY = jia.height * 0.5;
            jia.x = this.x;
            jia.y = this.y;
            this.fc.battle_scene.addChild(jia);
            jia.scaleX

            egret.Tween.get(jia).to({ "alpha": 0, "scaleX": 3, "scaleY": 3 }, 1000).call(function (j: egret.Bitmap) {
                if (j.parent) {
                    j.parent.removeChild(j);
                }
            }, this, [jia])

            this.sj_number--;


        }
        //特效回执
        public huizhi() {
            this.scaleX = 1;
            this.scaleY = 1;
            this.alpha = 1;
        }

        //送出子弹
        public diu(w_t: WUQI_TYPE, v: egret.Point, zy: GameConstant.ZHEN_YING, angle: number): zidan.ZiDanBase {

            let zd: zidan.ZiDanBase;
            if (w_t == WUQI_TYPE.ZHI_SHE) {
                zd = new zidan.ZhiSheZhiDan(this.fc.battle_scene, zy, 0.001);
            }

            if (w_t == WUQI_TYPE.DING_WEI) {
                zd = new zidan.DingWeiZidan(this.fc.battle_scene, zy, 0.0001);
            }
            if (w_t == WUQI_TYPE.JIAN_SU) {
                zd = new zidan.JianSuZiDan(this.fc.battle_scene, zy, 0.0001);
            }
            if (w_t == WUQI_TYPE.KAI_HUA) {
                zd = new zidan.KaiHuaZiDan(this.fc.battle_scene, zy, 0.0001);

            }
            if (w_t == WUQI_TYPE.GEN_ZHONG) {
                zd = new zidan.GenZongZiDan(this.fc.battle_scene, zy, 0.0001, this.fc.battle_scene.sk);
            }

            if (w_t == wuqi.WUQI_TYPE.SAN_DAN) {
                zd = new zidan.SanDanZiDan(this.fc.battle_scene, zy, 0.0001);
            }

            if (w_t == wuqi.WUQI_TYPE.DAO_DAN) {
                zd = new zidan.DaoDanZiDan(this.fc.battle_scene, zy, 0.0001, this.tiaget_fc);
            }
            if (w_t == wuqi.WUQI_TYPE.DING_XIANG) {
                zd = new zidan.DingXiangZiDan(this.fc.battle_scene, zy, 0.0001);
            }

            if (w_t == wuqi.WUQI_TYPE.YU_LEI) {
                zd = new zidan.YuLeiZiDan(this.fc.battle_scene, zy, 0.0001);
            }

            if (w_t == wuqi.WUQI_TYPE.LUO_XUAN) {
                zd = new zidan.LuoXuanZiDan(this.fc.battle_scene, zy, 0.0001);
            }

            if (w_t == wuqi.WUQI_TYPE.CHANG_DING) {
                zd = new zidan.ChangDingZiDan(this.fc.battle_scene, zy, 0.0001, this.level);
            }
            if (w_t == wuqi.WUQI_TYPE.ZHONG_CHUI) {
                zd = new zidan.ZhongChuiZiDan(this.fc.battle_scene, zy, 0.0001, this.level);
            }
            if (w_t == wuqi.WUQI_TYPE.DJ_SAN_DAN) {
                zd = new zidan.DJSanDanZiDan(this.fc.battle_scene, zy, 0.0001);
            }



            zd.angle = angle;
            this.fc.battle_scene.world.addBody(zd);
            this.fc.battle_scene.addChild(zd.bitmap);
            let p: egret.Point = Tools.egretTOp2(egret.Point.create(this.x, this.y))
            zd.position[0] = p.x;
            zd.position[1] = p.y;
            zd.velocity = [v.x, v.y];
            zd.hitNumber = this.hit;
            zd.yue_shu();
            return zd;
        }
    }
}