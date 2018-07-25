module guanqia {


    //随机句子
    export function juzi_suiji(): juzi.JuZiGuanLi {
        let num = suiji.GetRandomNum(0, 10);
        //上中模式
        if (num == juzi.JU_ZI_TYPE.SZ) {
            return new juzi.ShangZhongJuzi();
        }
        return null;
    }


}