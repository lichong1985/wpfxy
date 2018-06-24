module wuqi {
    export enum WUQI_TYPE {
        PU_TONG = 0,//普通武器
        ZHI_SHE = 1,//直射
        JI_GUANG = 2,//激光
        DAO_DAN = 3,//导弹
        DA_PAO = 4,//大炮
        ZHI_DAO_JI_GUANG = 5,//制导激光
        CHUAN_JIA_DAN = 6,//穿甲弹
        YUN_BAO_DAN = 7,//云爆弹
        DING_WEI = 8,//定位子弹
        JIAN_SU = 9,//减速武器
        KAI_HUA = 10,//开花弹
    }
    export class WuQiBase extends mokuai.MoKuaiBase {
        //武器类型
        public wuqi_type: WUQI_TYPE;
        //武器攻击cd 单位毫秒
        public cd: number = 1000;

        //时间标记 上一次攻击的时间
        public mark_time: number = 0;

        //速度
        public sudu: number = 5;



        constructor(mokaiPos: egret.Point, shType: mokuai.BODY_SHAPE_TYPE, name: string, wuqii_type: WUQI_TYPE, fc: feichuan.FeiChuanBase) {
            super(mokaiPos, shType, name, fc);
            this.moKuaiType = mokuai.MO_KUAI_TYPE.WU_QI;
            this.wuqi_type = wuqii_type;
        }


        public updata_wq(angel: number, suke: shuke.ShuKe, now: number) {
            super.updata();

            if ((now - this.mark_time) > this.cd) {
                this.mark_time = now;
                this.fashe(angel, suke, now);
                return;
            }

        }

        public fashe(angel: number, suke: shuke.ShuKe, now: number) {

        }

        //送出子弹
        public diu(w_t: WUQI_TYPE, v: egret.Point, zy: GameConstant.ZHEN_YING, angle: number) {

            // egret.log("DDDDDDDDDDDDDDDDDDDDDDDDDDD:" + w_t + " || (" + v.x + "," + v.y + ")  || " + zy);
            let zd: zidan.ZiDanBase;
            if (w_t == WUQI_TYPE.ZHI_SHE) {
                zd = new zidan.ZhiSheZhiDan(zy, 0.0001);
            }

            if (w_t == WUQI_TYPE.DING_WEI) {
                zd = new zidan.DingWeiZidan(zy, 0.0001);
            }
            if (w_t == WUQI_TYPE.JIAN_SU) {
                zd = new zidan.JianSuZiDan(zy, 0.0001);
            }
            if (w_t == WUQI_TYPE.KAI_HUA) {
                // zd = new zidan.KaiHuaZiDan(zy, 0.0001);
                zd = new zidan.GenZongZiDan(zy, 0.0001, this.fc.battle_scene.sk);

            }

            zd.angle = angle;
            this.fc.battle_scene.world.addBody(zd);
            this.fc.battle_scene.addChild(zd.bitmap);
            let p: egret.Point = Tools.egretTOp2(egret.Point.create(this.x, this.y))
            zd.position[0] = p.x;
            zd.position[1] = p.y;
            zd.velocity = [v.x, v.y];
        }
    }
}