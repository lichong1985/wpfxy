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



        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, name: string, wuqii_type: WUQI_TYPE, fc: feichuan.FeiChuanBase) {
            super(mokaiPos, shType, name, fc);
            this.moKuaiType = mokuai.MO_KUAI_TYPE.WU_QI;
            this.wuqi_type = wuqii_type;
        }


        public updata_wq(angel: number, suke: shuke.ShuKe, now: number) {
            this.updata();

            if ((now - this.mark_time) > this.cd) {
                this.mark_time = now;
                this.fashe(angel, suke, now);
                return;
            }

        }
        public updata() {

        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {

        }

        //送出子弹
        public diu(w_t: WUQI_TYPE, v: egret.Point, zy: GameConstant.ZHEN_YING, angle: number) {

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



            zd.angle = angle;
            this.fc.battle_scene.world.addBody(zd);
            this.fc.battle_scene.addChild(zd.bitmap);
            let p: egret.Point = Tools.egretTOp2(egret.Point.create(this.x, this.y))
            zd.position[0] = p.x;
            zd.position[1] = p.y;
            zd.velocity = [v.x, v.y];

            zd.yue_shu();
        }
    }
}