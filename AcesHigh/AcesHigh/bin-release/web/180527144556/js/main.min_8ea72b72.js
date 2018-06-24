var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(o,a){function s(t){try{h(n.next(t))}catch(e){a(e)}}function r(t){try{h(n["throw"](t))}catch(e){a(e)}}function h(t){t.done?o(t.value):new i(function(e){e(t.value)}).then(s,r)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(o)throw new TypeError("Generator is already executing.");for(;h;)try{if(o=1,a&&(s=a[2&i[0]?"return":i[0]?"throw":"next"])&&!(s=s.call(a,i[1])).done)return s;switch(a=0,s&&(i=[0,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,a=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){h.label=i[1];break}if(6===i[0]&&h.label<s[1]){h.label=s[1],s=i;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(i);break}s[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(n){i=[6,n],a=0}finally{o=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var o,a,s,r,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},mokuai;!function(t){var e;!function(t){t[t.TOP=0]="TOP",t[t.BOTTOM=1]="BOTTOM",t[t.LEFT=2]="LEFT",t[t.RIGHT=3]="RIGHT"}(e=t.ConstraintDirect||(t.ConstraintDirect={}));var i;!function(t){t[t.SIMPLE=0]="SIMPLE",t[t.FF=1]="FF",t[t.NN=2]="NN"}(i=t.BODY_SHAPE_TYPE||(t.BODY_SHAPE_TYPE={}));var n;!function(t){t[t.HE_XIN=0]="HE_XIN",t[t.ZHUANG_JIA=1]="ZHUANG_JIA",t[t.WU_QI=2]="WU_QI",t[t.CAN_HAI=3]="CAN_HAI"}(n=t.MO_KUAI_TYPE||(t.MO_KUAI_TYPE={})),t.SIMPLE_SIZE=16,t.FF_SIZE=32,t.NN_SIZE=48,t.SIMPLE_SIZE_PH=.32,t.FF_SIZE_PH=.64,t.NN_SIZE_PH=.96,t.M_SIZE=[t.SIMPLE_SIZE,t.FF_SIZE,t.NN_SIZE],t.M_SIZE_PH=[t.SIMPLE_SIZE_PH,t.FF_SIZE_PH,t.NN_SIZE_PH];var o=function(t){function e(e,i,n,o){var a=t.call(this,RES.getRes(n))||this;return a.mark_number=-1,a.rm_herd=!1,a.relativeDistance=egret.Point.create(0,0),a.shapeType=i,a.moKuaiPost=e,a.fc=o,a.initAnch(),a}return __extends(e,t),e.prototype.initAnch=function(){this.anchorOffsetX=.5*this.width,this.anchorOffsetY=.5*this.height},e.prototype.UpdataPosition=function(t){this.x=t.x+this.relativeDistance.x,this.y=t.y+this.relativeDistance.y},e.prototype.updata=function(){},e}(egret.Bitmap);t.MoKuaiBase=o,__reflect(o.prototype,"mokuai.MoKuaiBase")}(mokuai||(mokuai={}));var zidan;!function(t){var e=function(t){function e(e,i,n){var o=t.call(this,{mass:i})||this;return o.is_kick=!0,o.is_coll=!0,o.zhenying=e,o.wqt=n,o.initColl(),o.initZidan(),o}return __extends(e,t),e.prototype.initZidan=function(){var t=new p2.Box({width:mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE],height:mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]});this.addShape(t),t.collisionMask=this.collMask,t.collisionGroup=this.collGroup},e.prototype.initColl=function(){this.zhenying==GameConstant.ZHEN_YING.WO_JUN&&(this.collGroup=GameConstant.WO_JUN,this.collMask=GameConstant.DI_JUN|GameConstant.ZHONG_LI),this.zhenying==GameConstant.ZHEN_YING.DI_JUN&&(this.collGroup=GameConstant.DI_JUN,this.collMask=GameConstant.WO_JUN|GameConstant.ZHONG_LI),this.zhenying==GameConstant.ZHEN_YING.ZHONG_LI&&(this.collGroup=GameConstant.ZHONG_LI,this.collMask=GameConstant.DI_JUN|GameConstant.ZHONG_LI|GameConstant.WO_JUN)},e.prototype.updata=function(){},e}(p2.Body);t.ZiDanBase=e,__reflect(e.prototype,"zidan.ZiDanBase")}(zidan||(zidan={}));var feichuan;!function(t){var e;!function(t){t[t.SUKE=0]="SUKE",t[t.DIJI=1]="DIJI",t[t.CANHAI=2]="CANHAI"}(e=t.FC_TYPE||(t.FC_TYPE={}));var i=function(t){function e(e,i,n){var o=t.call(this,{mass:1})||this;return o.mokuai_size=0,o.heXinList=new Array,o.zhuangJaList=new Array,o.egretWorldPoint=i,o.battle_scene=e,o.zhenying=n,o.initPhPost(),o.initColl(),o}return __extends(e,t),e.prototype.initColl=function(){this.zhenying==GameConstant.ZHEN_YING.WO_JUN&&(this.collGroup=GameConstant.WO_JUN,this.collMask=GameConstant.DI_JUN|GameConstant.ZHONG_LI),this.zhenying==GameConstant.ZHEN_YING.DI_JUN&&(this.collGroup=GameConstant.DI_JUN,this.collMask=GameConstant.WO_JUN|GameConstant.ZHONG_LI),this.zhenying==GameConstant.ZHEN_YING.ZHONG_LI&&(this.collGroup=GameConstant.ZHONG_LI,this.collMask=GameConstant.DI_JUN|GameConstant.ZHONG_LI|GameConstant.WO_JUN)},e.prototype.initPhPost=function(){var t=Tools.egretTOp2(this.egretWorldPoint);this.position[0]=t.x,this.position[1]=t.y},e.prototype.initList=function(t,e){this.moKuaiList=new Array;for(var i=0;t>i;i++)this.moKuaiList.push(new Array(e));this.wuqiList=new Array,this.removeMoKuai=new Array},e.prototype.updataFenJie=function(){this.fen_jie=new Array;for(var t=0;10>t;t++)this.fen_jie.push([])},e.prototype.updataPos=function(){var t=this.moKuaiList.length,e=this.moKuaiList[0].length;this instanceof shuke.ShuKe&&(this.angle=0);for(var i=0;t>i;i++)for(var n=0;e>n;n++)if(this.moKuaiList[i][n]){var o=this.moKuaiList[i][n].boxShape,a=this.moKuaiList[i][n],s=Math.PI/180*360-this.angle,r=Math.cos(s)*o.position[0]+Math.sin(s)*o.position[1],h=-Math.sin(s)*o.position[0]+Math.cos(s)*o.position[1],u=Tools.p2TOegretPoitn(egret.Point.create(r+this.position[0],h+this.position[1]));a.x=u.x,a.y=u.y,a.markPoint=u,a.rotation=360-180*this.angle/Math.PI}},e.prototype.getMokWorldpos=function(t){var e=Math.PI/180*360-this.angle,i=Math.cos(e)*t.x+Math.sin(e)*t.y,n=-Math.sin(e)*t.x+Math.cos(e)*t.y;return egret.Point.create(i+this.position[0],n+this.position[1])},e.prototype.initPro=function(t){var e=egret.Point.create(t[0].length,t.length);this.initList(t.length,t[0].length);for(var i=0;i<t.length;i++)for(var n=0;n<t[0].length;n++)this.initMokuai(t[i][n],i,n,e);this.battle_scene.world.addBody(this)},e.prototype.initMokuai=function(t,e,i,n){var o;if(3==t){o=new wuqi.PuTongDan(egret.Point.create(i,e),mokuai.BODY_SHAPE_TYPE.SIMPLE,"lan_dian_png",wuqi.WUQI_TYPE.PU_TONG,this);var a=o;this.wuqiList.push(a)}if(2==t&&(o=new zhuangjia.PuTongZhuangJia(egret.Point.create(i,e),mokuai.BODY_SHAPE_TYPE.SIMPLE,"hong_dian_png",this)),1==t&&(o=new mokuai.DongLiHeXin(egret.Point.create(i,e),mokuai.BODY_SHAPE_TYPE.SIMPLE,"huang_dian_png",this),this.hx=o),0!=t){var s=Physics.getRelativeDistance(n,egret.Point.create(i,e),mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]),r=new p2.Box({width:mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE],height:mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]});r.collisionGroup=this.collGroup,r.collisionMask=this.collMask,this.addShape(r,[s.x,s.y]),this.moKuaiList[e][i]=o,o.boxShape=r,this.battle_scene.addChild(o),this.mokuai_size++}},e.prototype.checkCollision=function(t,e){for(var i,n=1e3,o=1e3,a=0;a<this.moKuaiList.length;a++)for(var s=0;s<this.moKuaiList[a].length;s++){var r=this.moKuaiList[a][s];if(r){var h=Math.abs(r.x-t),u=Math.abs(r.y-e);n+o>h+u&&(n=h,o=u,i=r)}}this.moKuaiList[i.moKuaiPost.y][i.moKuaiPost.x]=null,this.battle_scene.removeFeiChuan.push(this),this.removeMoKuai.push(i)},e.prototype.dellMokuai=function(){for(var t=0;t<this.removeMoKuai.length;t++){var e=this.removeMoKuai.pop();this.moKuaiList[e.moKuaiPost.y][e.moKuaiPost.x]=null,this.removeShape(e.boxShape),this.battle_scene.removeChild(e)}},e.prototype.fenJie=function(){for(var t=this.fen_jie.length,e=0;t>e;e++){for(var i=this.fen_jie.pop(),n=(i.length,!1),o=0,a=i;o<a.length;o++){var s=a[o];s&&(n=!0)}if(n){new canhai.CanHai(this,i)}}},e}(p2.Body);t.FeiChuanBase=i,__reflect(i.prototype,"feichuan.FeiChuanBase")}(feichuan||(feichuan={}));var zhuangjia;!function(t){var e=function(t){function e(e,i,n,o){var a=t.call(this,e,i,n,o)||this;return a.moKuaiType=mokuai.MO_KUAI_TYPE.ZHUANG_JIA,a}return __extends(e,t),e}(mokuai.MoKuaiBase);t.ZhuangJiaBase=e,__reflect(e.prototype,"zhuangjia.ZhuangJiaBase")}(zhuangjia||(zhuangjia={}));var scene;!function(t){t.battle_sceneW=4e3,t.battle_sceneH=4e3,t.scene_anch_x=1e3,t.scene_anch_y=1e3;var e=function(e){function i(){var t=e.call(this)||this;return t._distance=new egret.Point,t._skP=new egret.Point,t.init(),t.initcoll(),t}return __extends(i,e),i.prototype.init=function(){this.width=t.battle_sceneW,this.height=t.battle_sceneH,this.world=new p2.World,this.world.gravity=[0,0],this.addShuKeListener(),this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this),this.dijis=new Array,this.removeBodyList=new Array,this.removeFeiChuan=new Array},i.prototype.initcoll=function(){var t=this;this.world.on("beginContact",function(e){if(e.bodyB instanceof zidan.PuTongZiDan||e.bodyA instanceof zidan.PuTongZiDan){var i=e.bodyB instanceof zidan.PuTongZiDan?e.bodyB:e.bodyA,n=i;n.is_kick&&t.removeBodyList.push(n)}if(e.bodyB instanceof feichuan.FeiChuanBase||e.bodyA instanceof feichuan.FeiChuanBase){var i=e.bodyB instanceof feichuan.FeiChuanBase?e.bodyB:e.bodyA,o=e.bodyB instanceof feichuan.FeiChuanBase?e.bodyA:e.bodyB,a=i;if((a.zhenying==GameConstant.ZHEN_YING.DI_JUN||a.zhenying==GameConstant.ZHEN_YING.ZHONG_LI)&&o instanceof zidan.ZiDanBase){var s=o;s.is_coll&&(a.checkCollision(o.displays[0].x,o.displays[0].y),s.is_coll=!1)}}})},i.prototype.onEnterFrame=function(){this.chackColl(),this.chackFeiChuan(),this.p2Updata()},i.prototype.chackColl=function(){for(var t=this.removeBodyList.length,e=0;t>e;e++){var i=this.removeBodyList.pop();if(i.is_kick){i.is_kick=!1;var n=i.displays[0];n&&this.removeChild(n),this.world.removeBody(i)}}},i.prototype.chackFeiChuan=function(){for(var t=0;t<this.removeFeiChuan.length;t++){for(var e=this.removeFeiChuan.pop(),i=0;i<e.removeMoKuai.length;i++){var n=e.removeMoKuai.pop();e.removeShape(n.boxShape),this.removeChild(n),e.mokuai_size--}GameConstant.diaoluo(e),e&&e.mokuai_size>0&&e.fenJie()}},i.prototype.p2Updata=function(){this.world.step(.06);for(var t=this.world.bodies.length,e=0;t>e;e++){var i=this.world.bodies[e];if(i instanceof shuke.ShuKe)for(var n=i,o=0,a=n.wuqiList;o<a.length;o++){var s=a[o];s.updata_wq(i.angle)}if(i instanceof canhai.CanHai,i instanceof feichuan.FeiChuanBase){var r=i;r.updataPos()}else{var h=i.displays[0];if(h){var u=Tools.p2TOegretPoitn(egret.Point.create(i.position[0],i.position[1]));h.x=u.x,h.y=u.y,h.rotation=360-180*i.angle/Math.PI}}}},i.prototype.addShuKeListener=function(){this.touchEnabled=!0,this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this),this.addEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this)},i.prototype.mouseUp=function(t){this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},i.prototype.mouseDown=function(t){this._distance.x=t.stageX,this._distance.y=t.stageY,this._skP.x=this.sk.position[0],this._skP.y=this.sk.position[1],this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},i.prototype.mouseMove=function(t){var e=egret.Point.create((t.stageX-this._distance.x)/Physics.factor,-(t.stageY-this._distance.y)/Physics.factor);this.sk.position[0]=this._skP.x+e.x,this.sk.position[1]=this._skP.y+e.y},i}(egret.DisplayObjectContainer);t.SceneBase=e,__reflect(e.prototype,"scene.SceneBase")}(scene||(scene={}));var wuqi;!function(t){var e;!function(t){t[t.PU_TONG=0]="PU_TONG",t[t.SAN_DAN=1]="SAN_DAN",t[t.JI_GUANG=2]="JI_GUANG",t[t.DAO_DAN=3]="DAO_DAN",t[t.DA_PAO=4]="DA_PAO",t[t.ZHI_DAO_JI_GUANG=5]="ZHI_DAO_JI_GUANG",t[t.CHUAN_JIA_DAN=6]="CHUAN_JIA_DAN",t[t.YUN_BAO_DAN=7]="YUN_BAO_DAN"}(e=t.WUQI_TYPE||(t.WUQI_TYPE={}));var i=function(t){function e(e,i,n,o,a){var s=t.call(this,e,i,n,a)||this;return s.cd=1e3,s.mark_time=0,s.sudu=5,s}return __extends(e,t),e.prototype.updata_wq=function(e){t.prototype.updata.call(this);var i=egret.getTimer();i-this.mark_time>this.cd&&(this.mark_time=i,this.fashe(e))},e.prototype.fashe=function(t){},e}(mokuai.MoKuaiBase);t.WuQiBase=i,__reflect(i.prototype,"wuqi.WuQiBase")}(wuqi||(wuqi={}));var GameConstant;!function(t){function e(e){if(e.mokuai_size<=0){var o=e.battle_scene.dijis.indexOf(e);return e.battle_scene.dijis.splice(o),e.battle_scene.world.removeBody(e),void(e=null)}e.updataFenJie();var a=e.moKuaiList;t.mark=0;var s;if(e.fc_type==feichuan.FC_TYPE.DIJI&&(s=e.hx,s.mark_number=t.mark),e.fc_type==feichuan.FC_TYPE.CANHAI)for(var r=0;r<e.moKuaiList.length;r++)for(var h=0;h<e.moKuaiList[r].length;h++)e.moKuaiList[r][h]&&(s=e.moKuaiList[r][h],e.moKuaiList[r][h].mark_number=t.mark);i(a,s,e),n(a,e)}function i(e,i,n){for(t.hearList=new Array,t.hearList.push(i);t.hearList.length>0;)a(e,t.hearList.shift(),n);for(var s=0;10>s&&o(e,n);s++);}function n(t,e){for(var i=0;i<t.length;i++)for(var n=0;n<t[i].length;n++)if(t[i][n]){if(t[i][n].mark_number>0){e.fen_jie[t[i][n].mark_number].push(t[i][n]),e.removeShape(t[i][n].boxShape),e.battle_scene.removeChild(t[i][n]),t[i][n]=null;continue}t[i][n].mark_number=-1}}function o(e,i){t.mark++,t.hearList=new Array;for(var n=!1,o=0;o<e.length;o++){for(var s=0;s<e[o].length;s++)if(e[o][s]&&-1==e[o][s].mark_number){e[o][s].mark_number=t.mark,t.hearList.push(e[o][s]),n=!0;break}if(n)break}for(;t.hearList.length>0;)a(e,t.hearList.shift(),i);return n}function a(e,i,n){var o,a,r=i.moKuaiPost.x,h=i.moKuaiPost.y;o=h-1,a=r,s(e,t.mark,o,a,n),o=h+1,a=r,s(e,t.mark,o,a,n),o=h,a=r-1,s(e,t.mark,o,a,n),o=h,a=r+1,s(e,t.mark,o,a,n)}function s(e,i,n,o,a){n>=0&&o>=0&&n<e.length&&o<e[0].length&&e[n][o]&&-1==e[n][o].mark_number&&(e[n][o].mark_number=i,t.hearList.push(e[n][o]))}var r;!function(t){t[t.WO_JUN=0]="WO_JUN",t[t.DI_JUN=1]="DI_JUN",t[t.ZHONG_LI=2]="ZHONG_LI"}(r=t.ZHEN_YING||(t.ZHEN_YING={})),t.WO_JUN=Math.pow(2,1),t.DI_JUN=Math.pow(2,2),t.ZHONG_LI=Math.pow(2,3),t.mark=0,t.diaoluo=e}(GameConstant||(GameConstant={}));var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function n(n){e.call(i,n,t)}if(RES.hasRes(t)){var o=RES.getRes(t);o?n(o):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._distance=new egret.Point,e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.loadResource()},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,RES.loadGroup("testLoad",0,t)];case 2:return i.sent(),[4,this.stage.removeChild(t)];case 3:return i.sent(),this.addTestScene(),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.addTestScene=function(){this.testSen=new TestScene,this.stage.addChild(this.testSen),this.testSen.x=-scene.scene_anch_x,this.testSen.y=-scene.scene_anch_y},e}(eui.UILayer);__reflect(Main.prototype,"Main");var zhuangjia;!function(t){var e=function(t){function e(e,i,n,o){var a=t.call(this,e,i,n,o)||this;return a.number=3,a}return __extends(e,t),e.prototype.Defense=function(){return this.markNumber--,this.markNumber<=0?!1:!0},e}(t.ZhuangJiaBase);t.PuTongZhuangJia=e,__reflect(e.prototype,"zhuangjia.PuTongZhuangJia")}(zhuangjia||(zhuangjia={}));var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Physics;!function(t){function e(t,e,i){var n,o,a=e.x;n=(a-t.x/2)*i,0>n&&(n+=.5*i),n>0&&(n+=.5*i),0==n&&(n=.5*i),1==t.x&&(n=0),a-t.x/2==-.5&&(n=0);var s=t.y-e.y-1;return o=(s-t.y/2)*i,0>o&&(o+=.5*i),o>0&&(o+=.5*i),0==o&&(o=.5*i),1==t.y&&(o=0),s-t.y/2==-.5&&(o=0),egret.Point.create(n,o)}t.factor=50,t.getRelativeDistance=e}(Physics||(Physics={}));var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,n){function o(t){e.call(n,t)}function a(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),i.call(n))}"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(t,o,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var shuke;!function(t){var e=function(t){function e(e){var i=t.call(this,e,egret.Point.create(1500,1550),GameConstant.ZHEN_YING.WO_JUN)||this;return i.fc_type=feichuan.FC_TYPE.SUKE,i.initSuKe(),i}return __extends(e,t),e.prototype.initYunTU=function(){this.yun_tu=[[1,2,2,2,3]]},e.prototype.initSuKe=function(){this.initYunTU(),this.initPro(this.yun_tu)},e.prototype.updataPos=function(){t.prototype.updataPos.call(this)},e}(feichuan.FeiChuanBase);t.ShuKe=e,__reflect(e.prototype,"shuke.ShuKe")}(shuke||(shuke={}));var test;!function(t){var e;!function(t){t[t.nll=0]="nll",t[t.hx=1]="hx",t[t.zj=2]="zj"}(e=t.yuntu_type||(t.yuntu_type={}));var i=function(t){function e(e){var i=t.call(this,e,egret.Point.create(1300,1300),GameConstant.ZHEN_YING.DI_JUN)||this;return i.initTestFchuan(),i.fc_type=feichuan.FC_TYPE.DIJI,i}return __extends(e,t),e.prototype.initTestFchuan=function(){this.initYunTU(),this.initPro(this.yun_tu),this.angle=Math.PI/180*30,this.angularDamping=0,this.mass=100},e.prototype.initYunTU=function(){this.yun_tu=[[2,2,2,2,2,2,2],[2,0,0,2,0,0,2],[0,0,0,2,0,0,0],[0,2,2,2,2,2,0],[0,2,0,2,0,2,0],[0,2,0,1,0,2,0],[0,2,0,2,0,2,0],[0,2,2,2,2,2,0],[0,0,0,2,0,0,0],[2,0,0,2,0,0,2],[2,2,2,2,2,2,2]]},e}(feichuan.FeiChuanBase);t.TestFeiChuan=i,__reflect(i.prototype,"test.TestFeiChuan")}(test||(test={}));var test;!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e.drawGrid(),e}return __extends(e,t),e.prototype.drawGrid=function(){this.graphics.beginFill(0),this.graphics.drawRect(0,0,scene.battle_sceneW,scene.battle_sceneH),this.graphics.endFill(),this.graphics.lineStyle(.2,16777215);for(var t=0;t<scene.battle_sceneH/100;t++)this.graphics.moveTo(0,100*t),this.graphics.lineTo(scene.battle_sceneW,100*t);this.graphics.endFill(),this.graphics.lineStyle(.2,16777215);for(var t=0;t<scene.battle_sceneW/100;t++)this.graphics.moveTo(100*t,0),this.graphics.lineTo(100*t,scene.battle_sceneH);this.graphics.endFill()},e}(egret.Sprite);t.TestGrid=e,__reflect(e.prototype,"test.TestGrid")}(test||(test={}));var TestScene=function(t){function e(){var e=t.call(this)||this;return e.initTest(),e}return __extends(e,t),e.prototype.initTest=function(){var t=(egret.Point.create(1200,1200),new test.TestGrid);t.x=0,t.y=0,this.addChild(t);var e=new test.TestFeiChuan(this);this.dijis.push(e);var i=new shuke.ShuKe(this);this.sk=i},e}(scene.SceneBase);__reflect(TestScene.prototype,"TestScene");var Tools;!function(t){function e(t){return egret.Point.create(t.x*Physics.factor,scene.battle_sceneH-t.y*Physics.factor)}function i(t){return egret.Point.create(t.x/Physics.factor,(scene.battle_sceneH-t.y)/Physics.factor)}t.p2TOegretPoitn=e,t.egretTOp2=i}(Tools||(Tools={}));var wuqi;!function(t){var e=function(t){function e(e,i,n,o,a){return t.call(this,e,i,n,o,a)||this}return __extends(e,t),e.prototype.fashe=function(e){t.prototype.fashe.call(this,e);var i=new zidan.PuTongZiDan(GameConstant.ZHEN_YING.WO_JUN,1e-4),n=Tools.egretTOp2(egret.Point.create(this.x,this.y));i.position[0]=n.x,i.position[1]=n.y;var o=0*Math.cos(this.fc.angle)+Math.sin(this.fc.angle)*this.sudu,a=0*-Math.sin(this.fc.angle)+Math.cos(this.fc.angle)*this.sudu;this.fc.battle_scene.world.addBody(i),this.fc.battle_scene.addChild(i.bitmap),i.velocity=[o,a]},e}(t.WuQiBase);t.PuTongDan=e,__reflect(e.prototype,"wuqi.PuTongDan")}(wuqi||(wuqi={}));var canhai;!function(t){var e=function(t){function e(e,i){var n=t.call(this,e.battle_scene,egret.Point.create(500,500),GameConstant.ZHEN_YING.ZHONG_LI)||this;return n.fc_type=feichuan.FC_TYPE.CANHAI,n.yuntu=i,n.zhuji=e,n.initCanhai(),n}return __extends(e,t),e.prototype.initCanhai=function(){for(var t=100,e=100,i=0,n=0,o=0,a=this.yuntu;o<a.length;o++){var s=a[o];s&&(s.moKuaiPost.x<e&&(e=s.moKuaiPost.x),s.moKuaiPost.y<t&&(t=s.moKuaiPost.y),s.moKuaiPost.x>i&&(i=s.moKuaiPost.x),s.moKuaiPost.y>n&&(n=s.moKuaiPost.y))}for(var r=n-t+1,h=i-e+1,u=new Array,c=0;r>=c;c++){u[c]=new Array;for(var _=0;h>=_;_++)u[c].push(0)}for(var l=0,p=this.yuntu;l<p.length;l++){var s=p[l];u[s.moKuaiPost.y-t][s.moKuaiPost.x-e]=2}this.initPro(u);var f=this.yuntu[0],d=this.moKuaiList[f.moKuaiPost.y-t][f.moKuaiPost.x-e],y=Math.PI/180*360-this.zhuji.angle,m=Math.cos(y)*(f.boxShape.position[0]-d.boxShape.position[0])+Math.sin(y)*(f.boxShape.position[1]-d.boxShape.position[1]),g=-Math.sin(y)*(f.boxShape.position[0]-d.boxShape.position[0])+Math.cos(y)*(f.boxShape.position[1]-d.boxShape.position[1]);this.position[0]=this.zhuji.position[0]+m,this.position[1]=this.zhuji.position[1]+g,this.angle=this.zhuji.angle,this.velocity=[0,-1]},e}(feichuan.FeiChuanBase);t.CanHai=e,__reflect(e.prototype,"canhai.CanHai")}(canhai||(canhai={}));var zidan;!function(t){var e=function(t){function e(e,i){var n=t.call(this,e,i,wuqi.WUQI_TYPE.PU_TONG)||this;return n.initPT(),n}return __extends(e,t),e.prototype.initPT=function(){this.bitmap=new egret.Bitmap(RES.getRes("lv_dian_png")),this.damping=0,this.displays=[this.bitmap]},e.prototype.updata=function(){t.prototype.updata.call(this)},e}(t.ZiDanBase);t.PuTongZiDan=e,__reflect(e.prototype,"zidan.PuTongZiDan")}(zidan||(zidan={}));var mokuai;!function(t){var e=function(e){function i(i,n,o,a){var s=e.call(this,i,n,o,a)||this;return s.moKuaiType=t.MO_KUAI_TYPE.HE_XIN,s}return __extends(i,e),i}(t.MoKuaiBase);t.DongLiHeXin=e,__reflect(e.prototype,"mokuai.DongLiHeXin")}(mokuai||(mokuai={}));