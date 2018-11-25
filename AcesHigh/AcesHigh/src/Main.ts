//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {

    public zhuye: zy.ZhuYe;
    private testSen: TestScene;
    public _distance: egret.Point = new egret.Point();

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.loadResource();


    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            await this.stage.removeChild(loadingView);
            this.addTestScene();
        }
        catch (e) {
            console.error(e);
        }
    }



    //添加测试场景
    public addTestScene() {

        //初始化所有飞船
        let fc_list = RES.getRes("all_fc_json");
        for (let fc of fc_list) {
            let info = new feichuan.FeiChuanInfo();
            info.data = fc.layers[0].data;
            info.fc_type = fc.layers[0].fc_type;
            info.file_name = fc.layers[0].file_name;
            info.height = fc.layers[0].height;
            info.is_gen_zong = fc.layers[0].is_gen_zong;
            info.is_ji_guang = fc.layers[0].is_ji_guang;
            info.is_ju_zhen = fc.layers[0].is_ju_zhen;
            info.is_san_dan = fc.layers[0].is_san_dan;
            info.is_wei_bu = fc.layers[0].is_wei_bu;
            info.ti_ji = fc.layers[0].ti_ji;
            info.width = fc.layers[0].width;
            info.wu_qi_nan_du = fc.layers[0].wu_qi_nan_du;
            info.wu_qi_shu_liang = fc.layers[0].wu_qi_shu_liang;
            info.zhuang_jia_nan_du = fc.layers[0].zhuang_jia_nan_du;
            let size = fc.tiles.length;
            info.tiles = new Array(size);
            //图片
            for (let i = 0; i < size; i++) {
                info.tiles[i] = fc.tiles[i].image.split(".")[0];
            }
            FC_Console.addFcInfo(info);


        }
        this.testSen = new TestScene();
        this.testSen = TestScene.getInstance();
        this.stage.addChild(this.testSen)
        this.testSen.x = -scene.scene_anch_x;
        this.testSen.y = -scene.scene_anch_y;
        // this.addZhuYe();

    }

    public addZhuYe() {
        if (!this.zhuye) {
            this.zhuye = new zy.ZhuYe(this);
        }
        this.stage.addChild(this.zhuye)
        this.zhuye.x = 0;
        this.zhuye.y = 0;
    }








}
