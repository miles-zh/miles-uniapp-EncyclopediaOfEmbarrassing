
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/mine/mine","pages/dynamic/dynamic","pages/simpleNews/simpleNews"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"糗事百科","navigationBarBackgroundColor":"#2196F3","backgroundColor":"#2196F3"},"tabBar":{"list":[{"pagePath":"pages/home/home","text":"首页","selectedIconPath":"static/images/icons/home_active.png","iconPath":"static/images/icons/home.png"},{"pagePath":"pages/dynamic/dynamic","text":"动态","selectedIconPath":"static/images/icons/dynamic_active.png","iconPath":"static/images/icons/dynamic.png"},{"iconPath":"static/images/icons/news.png","pagePath":"pages/simpleNews/simpleNews","text":"消息","selectedIconPath":"static/images/icons/news_active.png"},{"pagePath":"pages/mine/mine","text":"我的","selectedIconPath":"static/images/icons/user_active.png","iconPath":"static/images/icons/user.png"}],"backgroundColor":"#2196f3","selectedColor":"#ffffff","color":"#222222"},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"糗事百科","compilerVersion":"2.6.16","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/dynamic/dynamic","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/simpleNews/simpleNews","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
