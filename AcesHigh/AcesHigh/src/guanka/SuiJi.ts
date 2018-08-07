module guanqia {


    //随机句子
    export function juzi_suiji(): juzi.JuZiGuanLi {
        let num = suiji.GetRandomNum(0, 10);
        //上中模式
        if (num == juzi.JU_ZI_TYPE.SZ) {

        }
        return null;
    }

    //随机句子
    export function getJz(): juzi.JuZiGuanLi {
        let jz: juzi.JuZiGuanLi = new juzi.JuZiGuanLi(1);
        let size = FC_Console.all_list.length;
        let one = FC_Console.all_list[suiji.GetRandomNum(0, size)]


        return jz;
    }


}