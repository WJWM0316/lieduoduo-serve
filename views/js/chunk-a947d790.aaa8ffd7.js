(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a947d790"],{"0271":function(t,a,s){},"41de":function(t,a,s){t.exports=s.p+"img/pic3.bacfac6d.png"},4696:function(t,a,s){t.exports=s.p+"img/rewardPeopleEnd.81aa5864.png"},"500e":function(t,a,s){"use strict";s.r(a);var i,n,e,c=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{ref:"wrap",staticClass:"wrap"},[t.prohibit?i("div",{staticClass:"end"},[t._m(5)]):[i("img",{attrs:{src:t.cdnPath+"rank1.png?a=2"}}),i("div",{staticClass:"posFixed "},[i("img",{staticClass:"award_icon",attrs:{src:t.cdnPath+"rank2.png?a=1"}}),i("b",{staticClass:"money"},[t._v(t._s(t.info.bounty))]),i("p",{staticClass:"tips1"},[t._v("邀请10人浏览职位即可瓜分1000元")]),i("p",{staticClass:"tips4"},[t._v("前十名瓜分70%奖金！！")]),t._m(0)]),i("div",{staticClass:"posFixed"},[t.activityEnd?t._e():i("div",{staticClass:"timeBox"},[i("img",{attrs:{src:t.cdnPath+"np1.png",alt:""}}),i("span",{staticClass:"hour"},[t._v(t._s(t.hour))]),i("span",{staticClass:"minute"},[t._v(t._s(t.minute))]),i("span",{staticClass:"second"},[t._v(t._s(t.second))])]),t.activityEnd?i("div",{staticClass:"endTime"},[i("img",{attrs:{src:t.cdnPath+"end.png",alt:""}})]):t._e(),i("div",{staticClass:"tabBox"},[i("span",{staticClass:"item",class:{cur:0===t.tabIndex},on:{click:function(a){t.tabIndex=0}}},[t._v("我的任务")]),i("span",{staticClass:"item",class:{cur:1===t.tabIndex},on:{click:function(a){t.tabIndex=1}}},[t._v("排行榜")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.tabIndex,expression:"tabIndex === 0"}],staticClass:"taskBox"},[i("div",{staticClass:"myTask"},[i("div",{staticClass:"content"},[i("div",{staticClass:"item"},[i("p",[t._v("预计得")]),i("p",{staticClass:"numBox"},[i("span",{staticClass:"num"},[t._v(t._s(t.user.award))]),t._v(" 元")])]),i("div",{staticClass:"item",on:{click:function(a){return t.toInviteMsg(t.user)}}},[i("img",{staticClass:"toInviteMsg",attrs:{src:t.cdnPath+"triangleYellow.png"}}),i("p",[t._v("已邀约")]),i("p",{staticClass:"numBox"},[i("span",{staticClass:"num"},[t._v(t._s(t.user.total))]),t._v(" 人")])])]),0===t.user.officialId?i("div",{staticClass:"gzBtn",on:{click:function(a){t.openGz=!0}}}):t._e(),i("div",{staticClass:"tip"},[t.activityEnd?[t._v("\n\t\t  \t\t\t\t\t最终排名：\n\t\t  \t\t\t\t\t"),-1!==t.user.index?[t._v("第"),i("span",{staticClass:"num"},[t._v(" "+t._s(t.user.index)+" ")]),t._v("名")]:[t._v("未上榜")]]:[t._v(t._s(t.user.task))]],2)]),i("div",{staticClass:"taskMain",attrs:{id:"positionList"}},[i("div",{staticClass:"title"},[t._v("本场赏<=>")]),i("p",{staticClass:"tip"},[t._v("可根据自身人脉关系，从中挑选1个或多个职位进行分享，最终将合计所有邀请人数")]),t._l(t.info.positionList,function(a,s){return i("div",{staticClass:"msgBox",on:{click:function(a){return t.openPop("center",s)}}},[i("p",{staticClass:"name"},[t._v(t._s(a.positionInfo.positionName))]),i("p",{staticClass:"salary"},[t._v(t._s(a.positionInfo.emolumentMin)+"K~"+t._s(a.positionInfo.emolumentMax)+"K")]),i("p",{staticClass:"companyMsg"},[i("span",{staticClass:"box"},[t._v(t._s(a.companyInfo.companyShortname)+"-"+t._s(a.companyInfo.financingDesc))]),i("span",{staticClass:"box"},[t._v(t._s(a.positionInfo.city)),a.positionInfo.city&&a.positionInfo.district?i("span",[t._v("-")]):t._e(),t._v(t._s(a.positionInfo.district))])]),i("div",{staticClass:"popBtn",on:{click:function(a){return t.openPop("center")}}})])}),i("p",{staticClass:"bottomTxt"},[t._v("还等什么，发家致富在此一举！")]),i("p",{staticClass:"title title1"},[t._v("?ABC")]),t._m(1)],2)]),i("div",{staticClass:"listBox"},[i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.tabIndex,expression:"tabIndex === 1"}],staticClass:"rankList"},[t.rankData.list.length>0?i("ul",{staticClass:"ul"},t._l(t.rankData.list,function(a,s){return i("li",{key:s,staticClass:"li"},[i("span",{staticClass:"num",class:{first:0===s,second:1===s,third:2===s}},[s>2?[t._v(t._s(s+1))]:t._e()],2),i("img",{staticClass:"avatar",attrs:{src:a.avatarUrl,alt:""}}),i("div",{staticClass:"msg"},[i("p",{staticClass:"name"},[t._v(t._s(a.nickname))]),i("p",{staticClass:"number"},[t._v("已邀请： "+t._s(a.total)+"人")])]),i("div",{staticClass:"rankMoney"},[i("p",[i("span",{staticClass:"amount"},[t._v(t._s(a.award))]),t._v("元")]),i("p",{staticClass:"desc"},[t._v("预计赏金")])])])}),0):i("div",{staticClass:"noData"},[i("img",{attrs:{src:t.cdnPath+"emptyState.png",alt:""}}),t._m(2)]),1===t.tabIndex?i("pullUpUi",{attrs:{list:t.rankData.list,noData:t.rankData.noData,pullUpStatus:t.rankData.pullUpStatus},on:{pullUp:t.loadMode}}):t._e()],1)]),i("p",{directives:[{name:"show",rawName:"v-show",value:1===t.tabIndex,expression:"tabIndex === 1"}],staticClass:"bottomTxt"},[t._v("还等什么，发家致富在此一举！")])]),i("footer",{staticClass:"footer",on:{click:function(a){return t.toInviteMsg(t.user)}}},[i("img",{staticClass:"avatar",attrs:{src:t.user.avatarUrl}}),i("div",{staticClass:"msg"},[t.stand<=t.user.total?i("p",{staticClass:"txt1"},[i("span",[t._v("第"),i("span",{staticClass:"num"},[t._v(t._s(t.user.index))]),t._v("名")]),i("span",{staticClass:"txt2"},[t._v(" | 预计得"),i("span",{staticClass:"num"},[t._v("¥"+t._s(t.user.award))])])]):i("p",{staticClass:"txt1"},[t._v("未上榜")]),i("p",{staticClass:"txt3"},[t._v("已邀请："+t._s(t.user.total)+"人")])]),i("div",{staticClass:"btn"},[t.activityEnd?i("div",{staticClass:"end",on:{click:function(t){t.stopPropagation()}}},[t._v("活动已结束")]):i("a",{attrs:{href:"#positionList"},on:{click:function(a){return a.stopPropagation(),t.scrollCenter(a)}}},[i("img",{attrs:{src:t.cdnPath+"btn.png",alt:""}})])])]),i("div",{staticClass:"introduce",on:{click:function(a){return t.openPop("bottom")}}},[t._v("玩法介绍")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.centerPop,expression:"centerPop"}],staticClass:"introducePop"},[i("div",{staticClass:"inner"},[i("p",{staticClass:"title"},[t._v("转发职位")]),i("div",{staticClass:"closeBtn iconfont iconcha",on:{click:t.colsePop}}),t._m(3),t.info.positionList?i("img",{directives:[{name:"preview",rawName:"v-preview"}],staticClass:"qrcode",attrs:{src:t.info.positionList[t.positionIndex].positionRecommendedCode,"data-src":t.info.positionList[t.positionIndex].positionRecommendedCode,alt:""}}):t._e(),t._m(4),i("img",{staticClass:"pic1",attrs:{src:s("83a5"),alt:""}}),i("p",{staticClass:"entry",on:{click:function(a){return t.openPop("bottom")}}},[t._v("详细玩法介绍"),i("i",{staticClass:"icon iconfont icontiaozhuanjiantou"})]),i("div",{staticClass:"line"})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.bottomPop,expression:"bottomPop"}],staticClass:"rule"},[i("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[t.bottomPop?i("div",{staticClass:"inner"},[i("div",{staticClass:"scroll-inner"},[i("div",{staticClass:"inner-box"},[i("p",{staticClass:"pTitle"},[t._v("玩法介绍")]),i("p",{staticClass:"iTitle"},[i("img",{attrs:{src:t.cdnPath+"p1.png",alt:""}})]),i("p",{staticClass:"content"},[t._v("1、本活动为【猎多多·全民猎人赏金社群】用户专享，未加入社群用户可联系微信【HRroot】；"),i("br"),t._v("2、在活动持续时间内，邀请至少10个好友浏览职位即可瓜分活动赏金，邀请更多好友浏览职位可提高瓜分赏金的比例。邀请流程如下：")]),i("p",{staticClass:"title"},[i("span",{staticClass:"num"},[t._v("第一步：点击分享按钮 ")])]),i("p",{staticClass:"content con1"},[t._v("根据自身人脉关系，在【本场赏金职位】中挑选1个或多个职位，点击【分享赚赏金】进行分享")]),i("img",{attrs:{src:t.cdnPath+"rule5.png",alt:""}}),i("p",{staticClass:"title"},[i("span",{staticClass:"num"},[t._v("第二步：跳转职位详情")])]),i("p",{staticClass:"content con1"},[t._v("在弹窗上，长按识别小程序码跳转活动职业页")]),i("p",{staticClass:"title"},[i("span",{staticClass:"num"},[t._v("第三步：分享职位")])]),i("p",{staticClass:"content con1"},[t._v("在活动职位页右上角点击转发按钮，挑选合适的分享方式分享给好友")]),i("img",{attrs:{src:s("41de")}}),i("p",{staticClass:"title"},[i("span",{staticClass:"num"},[t._v("第四步：邀请成功 ")])]),i("p",{staticClass:"content con1"},[t._v("好友通过你的分享进入对应活动职位页浏览即邀请成功")]),i("p",{staticClass:"iTitle"},[i("img",{attrs:{src:t.cdnPath+"p2.png",alt:""}})]),i("p",{staticClass:"title"},[i("span",{staticClass:"num"},[t._v("基本任务奖励规则")])]),i("p",{staticClass:"content"},[t._v("\n\t\t\t\t\t\t\t\t\t\t邀请至少10个好友浏览活动职位，即可达标，参与瓜分本场赏金；邀请更多好友浏览职位可提高瓜分赏金的比例。"),i("br"),t._v("\n\t\t\t\t            计算公式如下："),i("br"),t._v("\n\t\t\t\t            1、排行榜前10名用户：梯度瓜分赏金的70%，每人得到的赏金=700*邀请人数/Top 10总邀请人数（元）"),i("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t2、剩余达标参与者：平分赏金的30%，每人得到赏金=300/剩余达标参与者数（元）"),i("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t3、上榜人数不足10人：每人得到的赏金=1000*邀请人数/总邀请人数（元）"),i("br"),t._v("\n\t\t\t\t            结算方式：活动结束后，系统将在1~2个工作日内转账到您的微信钱包。（因为微信限制，提现关注公众号“猎多多”，否则系统将无法转账成功）"),i("br"),i("br"),i("br"),t._v("\n\t\t\t\t            额外任务：邀请用户被确认约面，活动参与者即可得66元红包奖励，每个活动职位仅限前3名邀请用户"),i("br"),t._v("\n\t\t\t\t            结算方式：活动结束后，工作人员将在1~2个工作日内转账到您的微信。\n\t\t\t\t          ")]),i("p",{staticClass:"title"},[i("span",{staticClass:"num"},[t._v("额外赏金任务奖励规则")])]),i("p",{staticClass:"content"},[t._v("\n\t\t\t\t            额外任务：邀请用户被确认约面，活动参与者即可得66元红包奖励，每个活动职位仅限前3名邀请用户"),i("br"),t._v("\n\t\t\t\t            结算方式：活动结束后，工作人员将在1~2个工作日内转账到您的微信。\n\t\t\t\t          ")]),i("p",{staticClass:"iTitle"},[i("img",{attrs:{src:t.cdnPath+"p3.png",alt:""}})]),i("div",{staticClass:"content"},[t._v("\n\t\t\t\t\t\t\t\t\t\t1、只有通过排行榜进入活动职位页才能生成专属分享链接，其他分享行为将无法记录分享效果；"),i("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t2、一个好友7天内只能邀请1次，重复邀请将不计数；"),i("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t3、好友只能邀请浏览1个职位，浏览多个职位将不计数；"),i("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t4、分享多个职位后，邀请人数将合计；"),i("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t5、如果分享的职位海报，好友需要扫描小程序码去浏览活动职位哦；"),i("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t6、新用户浏览活动职位页需要授权，不允许授权系统将无法记录浏览行为；"),i("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t7、请在活动持续时间内邀请好友，活动结束后邀请好友将不计数；"),i("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t8、奖金结算时，将通过微信昵称和头像定位你的身份，活动期间请不要随意更换昵称和头像哦；\n\t\t\t\t\t\t\t\t\t")])])]),t.bottomPop?i("div",{staticClass:"closeBtn iconfont iconcha",on:{click:t.colsePop}}):t._e(),i("a",{attrs:{href:"#positionList"},on:{click:t.bottomBtn}},[i("img",{staticClass:"botBtn",attrs:{src:t.cdnPath+"bottom1.png",alt:""}})])]):t._e()])],1),t.openGz?i("div",{staticClass:"gzPop"},[i("div",{staticClass:"inner"},[i("p",{staticClass:"title"},[t._v("关注公众号")]),i("p",{staticClass:"desc"},[t._v("长按识别二维码，关注公众号，即可实时把握邀请进度")]),i("img",{directives:[{name:"preview",rawName:"v-preview"}],staticClass:"erweima",attrs:{src:t.cdnPath+"erweim.png?a=2","data-src":t.cdnPath+"erweim.jpg?a=2"}}),i("div",{staticClass:"closeBtn iconfont iconcha",on:{click:function(a){t.openGz=!1}}})])]):t._e()]],2)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"tips2"},[t._v("邀请用户被确认约面有机会获得"),s("span",{staticClass:"award_span"},[t._v("66")]),t._v("元")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"desc"},[s("li",[t._v("1、参与本次活动前，请详细阅读活动规则及相关条款。凡参与本次活动，则视为理解并同意本活动细则；")]),s("li",[t._v("2、本活动禁止一切不正当手段（包括但不限于恶意刷榜等）及舞弊行为，主办方有权取消异常用户的活动参与及获奖资格；")]),s("li",[t._v("3、如出现不可抗力或情势变更的情况（包括但不限于重大灾害事件、活动受政府机关指令需要停止举办或调整的、活动遭受严重网络攻击或因系统故障需要暂停举办的），主办方有权暂停或取消本次活动，并可依相关法律法规的规定主张免责；")]),s("li",[t._v("4、活动期间，因用户操作不当或用户所在地区网络故障、电信运营商故障等非主办方所能控制的原因导致用户无法参与活动或参与失败，主办方不予负责；")]),s("li",[t._v("5、因用户自身主观过错或过失（包括但不限于不按态照正规流程操作、个人账号密码泄露等情形），导致账号被盗、或红包被冒领等情况的，由用户自行承担责任及由此造成的损失；")]),s("li",[t._v("6、主办方可根据活动举办的实际情况，在法律法规允许范围内，对本次活动规则进行变动或者调整，相关变动或调整将公布在活动规则页面上。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"tips3"},[t._v("还没有人进榜，"),s("br"),t._v("点击底部按钮先人一步")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"num"},[s("span",{staticClass:"number"},[t._v("1")]),t._v("长按识别下方小程序码；")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"num"},[s("span",{staticClass:"number"},[t._v("2")]),t._v("转发职位或职位海报给好友；")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"endWarp"},[i("img",{staticClass:"endPic",attrs:{src:s("4696"),alt:""}})])}],r=s("e814"),l=s.n(r),p=(s("28a5"),s("d225")),u=s("b0b4"),d=s("308d"),v=s("6bb5"),m=s("013f"),_=s("4e2b"),b=s("bd86"),C=s("2b0e"),f=s("65d9"),h=s.n(f),g=s("5f55"),j=s("6efb"),O=s("dbdf"),k=null,x=(i=h()({components:{},mixins:[g["a"]]}),i((e=function(t){function a(){var t,s;Object(p["a"])(this,a);for(var i=arguments.length,n=new Array(i),e=0;e<i;e++)n[e]=arguments[e];return s=Object(d["a"])(this,(t=Object(v["a"])(a)).call.apply(t,[this].concat(n))),Object(b["a"])(Object(m["a"])(s),"cdnPath","".concat("https://attach.lieduoduo.ziwork.com/front-assets","/rewardList/")),Object(b["a"])(Object(m["a"])(s),"prohibit",!1),Object(b["a"])(Object(m["a"])(s),"endTime",new Date("2019/3/8 20:34:00").getTime()),Object(b["a"])(Object(m["a"])(s),"curTime",(new Date).getTime()),Object(b["a"])(Object(m["a"])(s),"centerPop",!1),Object(b["a"])(Object(m["a"])(s),"bottomPop",!1),Object(b["a"])(Object(m["a"])(s),"openGz",!1),Object(b["a"])(Object(m["a"])(s),"timeStamp",0),Object(b["a"])(Object(m["a"])(s),"tabIndex",0),Object(b["a"])(Object(m["a"])(s),"positionIndex",0),Object(b["a"])(Object(m["a"])(s),"hour",0),Object(b["a"])(Object(m["a"])(s),"minute",0),Object(b["a"])(Object(m["a"])(s),"second",0),Object(b["a"])(Object(m["a"])(s),"activityEnd",!1),Object(b["a"])(Object(m["a"])(s),"stand",0),Object(b["a"])(Object(m["a"])(s),"info",{}),Object(b["a"])(Object(m["a"])(s),"rankData",{pageNum:0,list:[],noData:!1,pullUpStatus:!1}),Object(b["a"])(Object(m["a"])(s),"user",{}),Object(b["a"])(Object(m["a"])(s),"city",""),Object(b["a"])(Object(m["a"])(s),"qrcode",""),s}return Object(_["a"])(a,t),Object(u["a"])(a,[{key:"mounted",value:function(){this.joinList()}},{key:"loadMode",value:function(){1===this.tabIndex&&this.getData()}},{key:"getData",value:function(){var t=this,a=this;this.rankData.pageNum++,this.rankData.pullUpStatus=!0,Object(j["c"])({list_id:this.$route.query.id,page:this.rankData.pageNum}).then(function(s){if(t.rankData.list=t.rankData.list.concat(s.data.ranks),t.rankData.noData=!s.meta.more,t.rankData.pullUpStatus=!1,t.info=s.data.listInfo,t.user=s.data.user,t.endTime=t.info.endTime,t.curTime=s.data.timestamp,t.stand=s.data.stand,t.timeStamp=1e3*(t.endTime-t.curTime),!t.user.location){var i=new qq.maps.Geolocation("TMZBZ-S72K6-66ISB-ES3XG-CVJC6-HKFZG","myapp");i.getIpLocation(function(a){t.city=a.city,Object(j["g"])({list_id:t.$route.query.id,location:t.city,encode:0,noLoading:!0}),console.log(a,"定位成功")},function(t){console.log(t,"定位失败")})}var n="";a.info.positionList.map(function(t){n="".concat(n).concat(t.positionInfo.positionName,"、")}),n=n.slice(0,n.length-1),n="本期职位：".concat(n),t.wechatShare({title:"全民猎人·赏金职位榜，点击查看你的排名",desc:n,link:location.href.split("#")[0],imgUrl:"".concat(a.cdnPath,"share3.png?a=1")}),t.timeStamp<=0&&(t.activityEnd=!0),clearInterval(k),k=setInterval(function(){t.hour=l()(t.timeStamp/36e5),t.minute=l()(t.timeStamp/6e4)%60,t.second=l()(t.timeStamp/1e3)%60,t.hour<10&&(t.hour="0".concat(t.hour)),t.minute<10&&(t.minute="0".concat(t.minute)),t.second<10&&(t.second="0".concat(t.second)),t.timeStamp<=0&&(t.activityEnd=!0,clearInterval(k)),t.timeStamp-=1e3},1e3)})}},{key:"toInviteMsg",value:function(t){t.listId&&(O["a"].set("rewardCompanyUser",t),this.$router.push({path:"inviteMsg/".concat(t.listId),query:{type:"personage"}}))}},{key:"joinList",value:function(){var t=this;Object(j["e"])({list_id:this.$route.query.id}).then(function(a){t.getData()}).catch(function(a){t.getData(),-200===a.code&&(t.prohibit=!0)})}},{key:"bottomBtn",value:function(){this.tabIndex=0,this.centerPop=!1,this.bottomPop=!1,C["default"].toast({title:"请挑选1个或者多个职位进行分享"})}},{key:"scrollCenter",value:function(){this.tabIndex=0,C["default"].toast({title:"请挑选1个或者多个职位进行分享"})}},{key:"openPop",value:function(t,a){"center"===t?(this.centerPop=!0,this.bottomPop=!1,a&&(this.positionIndex=a)):(this.bottomPop=!0,this.centerPop=!1)}},{key:"colsePop",value:function(){this.centerPop=!1,this.bottomPop=!1}}]),a}(C["default"]),n=e))||n),y=x,w=(s("f073"),s("2877")),P=Object(w["a"])(y,c,o,!1,null,"05704e0c",null);a["default"]=P.exports},"6efb":function(t,a,s){"use strict";s.d(a,"c",function(){return n}),s.d(a,"e",function(){return e}),s.d(a,"g",function(){return c}),s.d(a,"a",function(){return o}),s.d(a,"d",function(){return r}),s.d(a,"f",function(){return l}),s.d(a,"h",function(){return p}),s.d(a,"b",function(){return u});var i=s("e91f"),n=function(t){return Object(i["a"])({url:"/activity/index/".concat(t.list_id),method:"get",params:t})},e=function(t){return Object(i["a"])({url:"/activity/join/".concat(t.list_id),method:"get",params:t})},c=function(t){return Object(i["a"])({url:"/activity/location/".concat(t.list_id),method:"post",params:t})},o=function(t){return Object(i["a"])({url:"/activity/".concat(t.list_id,"/lists/invite"),method:"get",params:t})},r=function(t){return Object(i["a"])({url:"/enterprise/activity/index/".concat(t.list_id),method:"get",params:t})},l=function(t){return Object(i["a"])({url:"/enterprise/activity/join/".concat(t.list_id),method:"get",params:t})},p=function(t){return Object(i["a"])({url:"/enterprise/activity/location/".concat(t.list_id),method:"post",params:t})},u=function(t){return Object(i["a"])({url:"/enterprise/activity/".concat(t.list_id,"/lists/invite"),method:"get",params:t})}},"83a5":function(t,a,s){t.exports=s.p+"img/reward_pop2.7c2a2541.png"},f073:function(t,a,s){"use strict";var i=s("0271"),n=s.n(i);n.a}}]);
//# sourceMappingURL=chunk-a947d790.aaa8ffd7.js.map