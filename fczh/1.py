
import os
import io
import json
 
L=[]
data=[]
def file_name(file_dir): 
     for root, dirs, files in os.walk(file_dir):
        for file in files:
            if os.path.splitext(file)[1] == '.json':
                L.append(os.path.join(root, file))




def main():
    print("kaishi")
    file_name("/Users/macadmin/Desktop/wpfxy/wpfxy/fczh")
    for f in L:
        print(f)
        file = io.open(f,'r',encoding='utf-8')
        s = json.load(file)
        # json_str = json.dumps(s)
        data.append(s)
        file.close()
    print(data)
    file = io.open('/Users/macadmin/Desktop/wpfxy/wpfxy/all_fc.json','w',encoding='utf-8')
    file.write(unicode(json.dumps(data, ensure_ascii=False)))
    file.close()


if __name__ == '__main__':
    main()