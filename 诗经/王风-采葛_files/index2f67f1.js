define("appmsg/comment.js",["appmsg/cmt_tpl.html.js","biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/hashrouter.js","appmsg/my_comment_tpl.html.js","appmsg/emotion/emotion.js","appmsg/emotion/dom.js"],function(e,t,n,m){
"use strict";
function o(e,t){
e&&(e.style.display=t?t:"block");
}
function i(e){
e&&(e.style.display="none");
}
function c(){
setTimeout(function(){
o(A.toast);
},750),setTimeout(function(){
i(A.toast);
},1500);
}
function a(e){
return e.replace(/^\s+|\s+$/g,"");
}
function s(){
clearTimeout(R),R=setTimeout(function(){
if(!O&&-1!=N){
var e=window.innerHeight||document.documentElement.clientHeight,t=window.pageYOffset||document.documentElement.scrollTop,n=document.documentElement.scrollHeight;
if(!(N>0&&n-t-e>500)){
O=!0,i(A.tips),o(A.loading);
var m="/mp/appmsg_comment?action=getcomment&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+comment_id+"&offset="+N+"&limit="+H+(window.send_time?"&send_time="+send_time:"");
try{
G++,G>1&&((new Image).src="http://mp.weixin.qq.com/mp/jsreport?key=27&content="+encodeURIComponent(m)),
J.indexOf(m)>-1&&((new Image).src="http://mp.weixin.qq.com/mp/jsreport?key=25&content="+encodeURIComponent(m)),
J.push(m);
}catch(c){}
x({
url:m,
type:"get",
success:function(e){
var t={};
try{
t=window.eval.call(window,"("+e+")");
}catch(n){}
var o=t.base_resp&&t.base_resp.ret;
0==o?l(t):D.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:resperr;url:"+encodeURIComponent(m)+";ret="+o+"&r="+Math.random();
},
error:function(){
D.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:ajaxerr;url:"+encodeURIComponent(m)+"&r="+Math.random();
},
complete:function(){
O=!1,i(A.loading);
}
});
}
}
},50);
}
function l(e){
var t,n=document.createDocumentFragment();
Q++,Q>1&&(Y.src="http://mp.weixin.qq.com/mp/jsreport?key=26&content="+encodeURIComponent(JSON.stringify({
comment_id:comment_id,
offset:N,
url:location.href
}))),0==N?(L=e.logo_url,U=e.nick_name,t=e.elected_comment,t&&t.length?(p(t,n,"elected"),
A.list.appendChild(n),o(A.main),0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?o(document.getElementById("js_cmt_addbtn1")):o(document.getElementById("js_cmt_nofans1"),"block"),
e.elected_comment_total_cnt<=10&&(o(document.getElementById("js_cmt_statement")),
o(document.getElementById("js_cmt_qa")))):(i(A.main),1==copyright_stat&&1==need_pay&&C.addClass(document.body,"rich_media_empty_extra"),
0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?o(document.getElementById("js_cmt_addbtn2")):o(document.getElementById("js_cmt_nofans2"),"block")),
function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var n=t.offsetTop;
window.scrollTo(0,n-25);
}
}()):(t=e.elected_comment,t&&t.length&&(p(t,n,"elected"),A.list.appendChild(n))),
0==e.elected_comment_total_cnt?(N=-1,B.off(window,"scroll",s),i(document.getElementById("js_cmt_loading")),
i(document.getElementById("js_cmt_statement")),i(document.getElementById("js_cmt_qa"))):N+H>=e.elected_comment_total_cnt?(N=-1,
B.off(window,"scroll",s),i(document.getElementById("js_cmt_loading")),o(document.getElementById("js_cmt_statement")),
o(document.getElementById("js_cmt_qa"))):N+=e.elected_comment.length;
}
function r(){
M.log("tag1");
var e=a(A.input.value);
if(M.log("tag2"),!C.hasClass(A.submit,"btn_disabled")){
if(M.log("tag3"),e.length<1)return g("留言不能为空");
if(M.log("tag4"),e.length>600)return g("字数不能多于600个");
M.log("tag5"),C.addClass(A.submit,"btn_disabled"),M.log("tag6");
var t=document.getElementById("activity-name");
M.log("tag7");
var n="/mp/appmsg_comment?action=addcomment&comment_id="+comment_id+"&__biz="+biz+"&idx="+idx+"&appmsgid="+appmsgid+"&sn="+sn;
x({
url:n,
data:{
content:e,
title:t&&a(t.innerText),
head_img:L,
nickname:U
},
type:"POST",
success:function(t){
M.log("tag8"),z.hidePannel();
var m={},i=document.createDocumentFragment();
try{
m=window.eval.call(window,"("+t+")");
}catch(a){}
switch(+m.ret){
case 0:
c(),p([{
content:e,
nick_name:U,
create_time:(new Date).getTime()/1e3|0,
is_elected:0,
logo_url:L,
like_status:0,
content_id:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:m.my_id
}],i,"mine"),A.mylist.insertBefore(i,A.mylist.firstChild),o(A.mylist.parentNode),
A.input.value="";
break;

case-6:
g("你留言的太频繁了，休息一下吧");
break;

case-7:
g("你还未关注该公众号，不能参与留言");
break;

case-10:
g("字数不能多于600个");
break;

case-15:
g("留言已关闭");
break;

default:
g("系统错误，请重试");
}
0!=m.ret&&(D.src="http://mp.weixin.qq.com/mp/jsreport?key=19&content=type:resperr;url:"+encodeURIComponent(n)+";ret="+m.ret+"&r="+Math.random());
},
error:function(e){
M.log("shit;"+e.status+";"+e.statusText),D.src="http://mp.weixin.qq.com/mp/jsreport?key=19&content=type:ajaxerr;url:"+encodeURIComponent(n)+"&r="+Math.random();
},
complete:function(){
""!=A.input.value&&C.removeClass(A.submit,"btn_disabled");
}
});
}
}
function d(){
if(0==S){
var e="/mp/appmsg_comment?action=getmycomment&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+comment_id,t=document.getElementById("js_mycmt_loading");
S=1,o(t),x({
url:e,
type:"get",
success:function(t){
var n={};
try{
n=window.eval.call(window,"("+t+")");
}catch(m){}
var i=n.base_resp&&n.base_resp.ret;
if(0==i){
var c=n.my_comment,a=document.createDocumentFragment();
c&&c.length&&(p(c,a,"mine"),A.mylist.appendChild(a),o(A.mylist.parentNode)),S=2;
}else S=0,D.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:resperr;url:"+encodeURIComponent(e)+";ret="+i+"&r="+Math.random();
},
error:function(){
S=0,D.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:ajaxerr;url:"+encodeURIComponent(e)+"&r="+Math.random();
},
complete:function(){
i(t);
}
});
}
}
function _(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var m=t/1e3-e,o=n/1e3-e,i=new Date(n).getFullYear(),c=new Date(1e3*e);
return 3600>m?Math.ceil(m/60)+"分钟前":86400>o?Math.floor(m/60/60)+"小时前":172800>o?"昨天":604800>o?Math.floor(o/24/60/60)+"天前":c.getFullYear()==i?c.getMonth()+1+"月"+c.getDate()+"日":c.getFullYear()+"年"+(c.getMonth()+1)+"月"+c.getDate()+"日";
}
function p(e,t,n){
var m,o="",i=document.createElement("div"),c="http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0";
P={};
for(var a,s=0;a=e[s];++s){
a.time=_(a.create_time),a.status="",a.logo_url=a.logo_url||c,a.logo_url=-1!=a.logo_url.indexOf("wx.qlogo.cn")?a.logo_url.replace(/\/132$/,"/96"):a.logo_url,
a.content=a.content.htmlDecode().htmlEncode(),a.nick_name=a.nick_name.htmlDecode().htmlEncode(),
a.like_num_format=parseInt(a.like_num)>=1e4?(a.like_num/1e4).toFixed(1)+"万":a.like_num,
a.is_from_friend=a.is_from_friend||0,a.is_from_me="mine"==n?1:a.is_from_me||0,a.reply=a.reply||{
reply_list:[]
},a.is_mine=n?!1:!0,a.is_elected="elected"==n?1:a.is_elected,a.reply.reply_list.length>0&&(a.reply.reply_list[0].time=_(a.reply.reply_list[0].create_time),
a.reply.reply_list[0].content=(a.reply.reply_list[0].content||"").htmlEncode()),
o+=T.tmpl(I,a);
try{
var l=a.nick_name+a.content,r=!1,d=23;
P[l]&&(r=!0,d=24),F.indexOf(a.content_id)>-1&&(r=!0,d=23),F.push(a.content_id),P[l]=!0,
r&&(Y.src="http://mp.weixin.qq.com/mp/jsreport?key="+d+"&content="+encodeURIComponent(JSON.stringify({
comment_id:comment_id,
content_id:a.content_id,
offset:N,
length:e.length,
url:location.href
})));
}catch(p){}
}
for(i.innerHTML=o,u(i);m=i.children.item(0);)t.appendChild(m);
}
function u(e){
M.each(e.querySelectorAll("div.discuss_message_content"),function(e){
e.innerHTML=z.encode(e.innerHTML);
});
}
function g(e){
return setTimeout(function(){
m(e);
});
}
function y(){
var e="1"===k.getParam("js_my_comment");
e&&f(!0);
}
function f(e){
i(A.article),o(A.mine),window.scrollTo(0,0),d(),e||M.later(function(){
A.input.focus();
});
}
function h(){
i(A.mine),o(A.article),window.scrollTo(0,document.documentElement.scrollHeight),
A.input.blur();
}
function j(e){
var t=e.target||e.srcElement,n=null;
if(C.hasClass(t,"js_comment_praise")&&(n=t),C.hasClass(t,"icon_praise_gray")&&"i"==t.nodeName.toLowerCase()&&(n=t.parentElement),
C.hasClass(t,"praise_num")&&"span"==t.nodeName.toLowerCase()&&(n=t.parentElement),
n){
var m=parseInt(n.dataset.status),o=0==m?1:0,i=n.dataset.contentId,c="/mp/appmsg_comment?action=likecomment&&like="+o+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+comment_id+"&content_id="+i;
w(n),x({
url:c,
type:"GET"
});
}
}
function w(e){
var t=C.hasClass(e,"praised"),n=e.querySelector(".praise_num"),m=n.innerHTML,o=m.indexOf("万"),i=parseInt(m)?parseInt(m):0;
t?(-1==o&&(n.innerHTML=i-1>0?i-1:""),C.removeClass(e,"praised"),e.dataset.status=0):(-1==o&&(n.innerHTML=i+1),
C.addClass(e,"praised"),e.dataset.status=1);
}
function b(e){
var t=e.delegatedTarget,n=t.getAttribute("data-my-id"),c="/mp/appmsg_comment?action=delete&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+comment_id+"&my_id="+n;
confirm("确定删除吗？")&&x({
url:c,
success:function(e){
var c,a=t;
try{
e=JSON.parse(e);
}catch(s){
e={};
}
if(0==e.ret){
for(;a&&(a.nodeType!=a.ELEMENT_NODE||"li"!=a.tagName.toLowerCase());)a=a.parentNode;
a&&(a.parentNode.removeChild(a),c=document.getElementById("cid"+n),c&&c.parentNode.removeChild(c),
0==A.list.children.length&&(i(A.main),i(document.getElementById("js_cmt_statement")),
i(document.getElementById("js_cmt_qa")),o(document.getElementById("js_cmt_addbtn2"))),
0==A.mylist.children.length&&i(A.mylist.parentNode));
}else m("删除失败，请重试");
},
error:function(){
m("网络错误，请重试");
}
});
}
function E(e){
var t=document.createElement("a");
t.setAttribute("href",e),this.el=t,this.parser=this.el,this.getParam=function(e){
var t=new RegExp("([?&])"+e+"=([^&#]*)([&#])?"),n=this.el.search.match(t);
return n?n[2]:null;
};
}
var I=e("appmsg/cmt_tpl.html.js"),v=document.getElementById("js_cmt_area"),k=new E(window.location.href);
if(0!=comment_id&&uin&&key){
if(-1==navigator.userAgent.indexOf("MicroMessenger"))return void(v&&(v.style.display="none"));
v&&(v.style.display="block");
var B=e("biz_common/dom/event.js"),C=e("biz_common/dom/class.js"),x=e("biz_wap/utils/ajax.js"),T=(e("biz_common/utils/string/html.js"),
e("biz_common/tmpl.js")),q=e("biz_wap/utils/hashrouter.js");
!function(){
var t=e("appmsg/my_comment_tpl.html.js"),n=document.createElement("div");
n.innerHTML=T.tmpl(t,{}),document.body.appendChild(n);
}();
var z=e("appmsg/emotion/emotion.js"),M=e("appmsg/emotion/dom.js"),D=new Image,N=0,H=100,O=!1,R=null,L="",U="我",S=0,A={
article:document.getElementById("js_article"),
more:document.getElementById("js_cmt_more"),
mine:document.getElementById("js_cmt_mine"),
main:document.getElementById("js_cmt_main"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
addbtn:document.getElementById("js_cmt_addbtn"),
list:document.getElementById("js_cmt_list"),
mylist:document.getElementById("js_cmt_mylist"),
morelist:document.getElementById("js_cmt_morelist"),
toast:document.getElementById("js_cmt_toast"),
tips:document.getElementById("js_cmt_tips"),
loading:document.getElementById("js_cmt_loading")
},F=[],P={},Y=new Image,J=[],G=0,Q=0;
!function(){
s(),y(),z.init();
}(),q.get("comment",function(){
f();
}),q.get("default",function(e){
"comment"==e&&h();
}),B.on(A.input,"input",function(){
var e=a(A.input.value);
e.length<1?C.addClass(A.submit,"btn_disabled"):C.removeClass(A.submit,"btn_disabled");
}),B.on(A.more,"tap",j),B.on(A.list,"tap",j),B.on(A.mylist,"tap",j),B.on(A.list,"tap",".js_del",b),
B.on(A.mylist,"tap",".js_del",b),B.on(A.submit,"tap",r);
}
});define("biz_wap/ui/lazyload_img.js",["biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_common/dom/attr.js","biz_common/ui/imgonepx.js"],function(t){
"use strict";
function i(){
var t=this.images;
if(!t||t.length<=0)return!1;
var i=window.pageYOffset||document.documentElement.scrollTop,e=window.innerHeight||document.documentElement.clientHeight,o=e+40,n=this.offset||20,r=0;
if("wifi"==window.networkType){
var s={
bottom:1,
top:1
};
this.lazyloadHeightWhenWifi&&(s=this.lazyloadHeightWhenWifi()),n=Math.max(s.bottom*e,n),
r=Math.max(s.top*e,r);
}
for(var h=+new Date,d=[],u=this.sw,f=this,w=0,p=t.length;p>w;w++)!function(t,e,s){
var h=t.el.offsetTop,f=t.src;
if(f){
var w=r,p=n;
-1!=f.indexOf("wx_fmt=gif")&&c&&(w=0,p=20),!t.show&&(i>=h&&i<=h+t.height+w||h>i&&i+o+p>h)&&(e.inImgRead&&(i>=h&&i<=h+t.height||h>i&&i+o>h)&&e.inImgRead(f,networkType),
e.changeSrc&&(f=e.changeSrc(t.el,f,s)),t.el.onerror=function(){
var t=this;
!!e.onerror&&e.onerror(f,t);
},t.el.onload=function(){
var t=this;
m(t,"height","auto","important"),t.getAttribute("_width")?m(t,"width",t.getAttribute("_width"),"important"):m(t,"width","auto","important"),
!!e.onload&&e.onload(f,t);
},l(t.el,"src",f),d.push(f),t.show=!0,m(t.el,"visibility","visible","important")),
a.isWp&&1*t.el.width>u&&(t.el.width=u);
}
}(t[w],f,w);
d.length>0&&this.detect&&this.detect({
time:h,
loadList:d,
scrollTop:i
});
}
function e(){
var t=document.getElementsByTagName("img"),e=[],o=this.container,n=this.attrKey||"data-src",a=o.offsetWidth,r=0;
o.currentStyle?r=o.currentStyle.width:"undefined"!=typeof getComputedStyle&&(r=getComputedStyle(o).width),
this.sw=1*r.replace("px","");
for(var s=0,d=t.length;d>s;s++){
var c=t.item(s),u=l(c,n);
if(u){
var f=100;
if(c.dataset&&c.dataset.ratio){
var w=1*c.dataset.ratio,p=1*c.dataset.w||a;
"number"==typeof w&&w>0?(p=a>=p?p:a,f=p*w,c.style.width&&c.setAttribute("_width",c.style.width),
m(c,"width",p+"px","important"),m(c,"visibility","visible","important"),c.setAttribute("src",h)):m(c,"visibility","hidden","important");
}else m(c,"visibility","hidden","important");
m(c,"height",f+"px","important"),e.push({
el:c,
src:u,
height:f,
show:!1
});
}
}
this.images=e,i.call(this);
}
function o(t){
var e=this,o=e.timer;
clearTimeout(o),e.timer=setTimeout(function(){
i.call(e,t);
},300);
}
function n(t){
r.on(window,"scroll",function(i){
o.call(t,i);
}),r.on(window,"load",function(i){
e.call(t,i);
}),r.on(document,"touchmove",function(i){
o.call(t,i);
}),o.call(t,{});
}
var a=t("biz_wap/utils/mmversion.js"),r=t("biz_common/dom/event.js"),s=t("biz_common/dom/attr.js"),l=s.attr,m=s.setProperty,h=t("biz_common/ui/imgonepx.js"),d=new Date,c=(d.getHours(),
!0);
return n;
});define("appmsg/share.js",["biz_common/utils/string/html.js","appmsg/cdn_img_lib.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","biz_wap/utils/mmversion.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(e){
"use strict";
function i(e,i){
var n="";
""!=tid&&(n="tid="+tid+"&aid=54");
var t=e.split("?")[1]||"";
if(t=t.split("#")[0],""!=t){
var o=[t,"scene="+i,"srcid="+srcid];
return""!=n&&o.push(n),t=o.join("&"),e.split("?")[0]+"?"+t+"#"+(e.split("#")[1]||"");
}
}
function n(e,i,n){
var t=e.split("?").pop();
if(t=t.split("#").shift(),""!=t){
var o=[t,"action=share","action_type="+n,"scene="+window.source,"req_id="+(window.req_id||""),"vid="+("undefined"!=typeof window.reportVid?window.reportVid.join(";"):""),"musicid="+("undefined"!=typeof window.reportMid?window.reportMid.join(";"):""),"voiceid="+("undefined"!=typeof window.reportVoiceid?window.reportVoiceid.join(";"):"")].join("&");
m({
url:"/mp/appmsgreport",
type:"POST",
data:o
});
}
}
function t(e,i){
return e.isCDN()&&(e=o.addParam(e,"wxfrom",i,!0)),e;
}
e("biz_common/utils/string/html.js"),e("appmsg/cdn_img_lib.js");
var o=(e("biz_common/dom/event.js"),e("biz_common/utils/url/parse.js")),s=e("biz_wap/utils/mmversion.js"),m=e("biz_wap/utils/ajax.js"),r=e("biz_wap/jsapi/core.js");
r.call("hideToolbar"),r.call("showOptionMenu");
var a=msg_title.htmlDecode(),d=(msg_source_url.htmlDecode(),""),u=msg_cdn_url||round_head_img,c=msg_link.htmlDecode(),a=msg_title.htmlDecode(),l=msg_desc.htmlDecode();
l=l||c,l=l.replace(/<br\/>/g,"\n"),idx>1&&document.getElementById("js_content")&&1446652800>ct&&(l=document.getElementById("js_content").innerHTML.replace(/<\/?[^>]*\/?>/g,"").htmlDecode().replace(/^(\s*)|(\s*)$/g,"").substr(0,54)),
u.isCDN()&&(u=u.replace(/\/0$/,"/300"),u=u.replace(/\/0\?/,"/300?")),"1"==is_limit_user&&r.call("hideOptionMenu"),
window.is_temp_url&&r.invoke("hideMenuItems",{
menuList:["menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:qzone","menuitem:share:weibo","menuItem:share:WeiboApp","menuItem:share:QZone","menuitem:facebook","menuItem:copyUrl","menuItem:share:email","menuitem:copy_url"]
},function(){}),r.on("menu:share:appmessage",function(e){
var o=1,s=t(u,"1");
e&&"favorite"==e.scene&&(o=24,s=t(u,"4")),r.invoke("sendAppMessage",{
appid:d,
img_url:s,
img_width:"640",
img_height:"640",
link:i(c,o),
desc:l,
title:a
},function(){
n(c,fakeid,o);
});
}),r.on("menu:share:timeline",function(){
var e=u;
s.isIOS||(e=t(u,"2")),n(c,fakeid,2),r.invoke("shareTimeline",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(c,2),
desc:l,
title:a
},function(){});
});
r.on("menu:share:weiboApp",function(){
r.invoke("shareWeiboApp",{
img_url:u,
link:i(c,3),
title:a
},function(){
n(c,fakeid,3);
});
}),r.on("menu:share:facebook",function(){
n(c,fakeid,4),r.invoke("shareFB",{
img_url:u,
img_width:"640",
img_height:"640",
link:i(c,4),
desc:l,
title:a
},function(){});
}),r.on("menu:share:QZone",function(){
var e=t(u,"6");
n(c,fakeid,5),r.invoke("shareQZone",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(c,22),
desc:l,
title:a
},function(){});
}),r.on("menu:share:qq",function(){
var e=t(u,"7");
n(c,fakeid,5),r.invoke("shareQQ",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(c,23),
desc:l,
title:a
},function(){});
}),r.on("menu:share:email",function(){
n(c,fakeid,5),r.invoke("sendEmail",{
content:i(c,5),
title:a
},function(){});
});
});define("appmsg/index.js",["biz_wap/jsapi/a8key.js","biz_wap/utils/device.js","biz_common/dom/class.js","biz_common/utils/url/parse.js","appmsg/cdn_img_lib.js","biz_wap/utils/mmversion.js","appmsg/share.js","biz_common/log/jserr.js","biz_wap/ui/lazyload_img.js","appmsg/async.js","appmsg/pay_for_reading.js","appmsg/cache.js","appmsg/copyright_report.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","appmsg/outer_link.js","appmsg/review_image.js","appmsg/iframe.js","appmsg/qqmusic.js","appmsg/voice.js","appmsg/wxtopic.js","appmsg/cdn_speed_report.js","appmsg/page_pos.js","appmsg/report_and_source.js","appmsg/report.js","biz_wap/safe/mutation_observer_report.js","sougou/index.js"],function(e){
"use strict";
function o(){
function o(e,o){
var t={
lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
},n=new Image;
n.onload=function(){
var t=n.width>0&&n.height>0;
o(e,t);
},n.onerror=function(){
o(e,!1);
},n.src="data:image/webp;base64,"+t[e];
}
var t=document.getElementsByTagName("body");
if(!t||!t[0])return!1;
t=t[0],function(){
var e=(new Date).getHours(),o=function(e,o){
o=o||"",window.isSg?(o=["uin:sougou","resp:"+o].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+o+"&r="+Math.random()+"&from=sougou"):(o=["uin:"+top.window.user_uin,"resp:"+o].join("|"),
(new Image).src="/mp/jsreport?key="+e+"&content="+o+"&r="+Math.random());
},t=function(e,o,t){
var n=e+"_"+o;
t=t||1,window.logs.idkeys[n]||(window.logs.idkeys[n]={
val:0
}),window.logs.idkeys[n].val+=t;
},n=e>=11&&17>=e&&Math.random()<1,i=function(e,t){
n&&o(e,t);
};
window.__report=o,window.__commonVideoReport=i,window.__addIdKeyReport=t;
}();
var r=/^http(s)?:\/\/mp\.weixin\.qq\.com\//g;
try{
if(top!=window&&(!top||top&&top.location.href&&r.test(top.location.href))&&!window.isSg)throw new Error("in iframe");
}catch(s){
var a="",c=new Image;
c.src=("http://mp.weixin.qq.com/mp/jsreport?key=4&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key4]"+a+"&r="+Math.random()).substr(0,1024);
}
window.isInWeixinApp()&&/#rd$/.test(location.href)&&!window.isWeixinCached&&location.replace(location.href.replace(/#rd$/,"#wechat_redirect"));
var d=e("biz_common/utils/url/parse.js");
e("appmsg/cdn_img_lib.js"),window.page_endtime=+new Date;
{
var p=e("biz_wap/utils/mmversion.js"),l=!p.isWp&&-1==navigator.userAgent.indexOf("MicroMessenger");
-1!=navigator.userAgent.indexOf("WindowsWechat");
}
if(e("appmsg/share.js"),window.isSg||"mp.weixin.qq.com"==location.host){
var m=e("biz_common/log/jserr.js");
m({
key:0,
reporturl:"http://mp.weixin.qq.com/mp/jsreport?1=1",
replaceStr:/http(s)?:(.*?)js\//g
});
}
window.logs.webplog={
lossy:0,
lossless:0,
alpha:0,
animation:0,
total:0
};
var w=-1!=navigator.userAgent.indexOf("TBS/"),g=function(e,t){
o(e,function(e,o){
if(window.logs.webplog[e]=o?1:0,window.logs.webplog.total++,4==window.logs.webplog.total){
var n=window.logs.webplog,i=Math.random();
w&&1>=i&&(n.lossy=n.lossless=n.alpha=1,window.logs.webplog=n);
var r=n.lossy&n.lossless&n.alpha;
t(!!r);
}
});
},u=function(e){
g("lossy",e),g("lossless",e),g("alpha",e),g("animation",e);
};
window.webp=!1,u(function(o){
function t(e,o,t){
function n(){
a.children.item(0).style.display="none",a.children.item(1).style.display="";
var e=o.onload;
o.onload=function(){
a.children.item(1).style.display="none",f.off(a,c,n),a=null,e&&e.apply(o,arguments);
};
var t=o.onerror;
o.onerror=function(){
a.children.item(0).style.display="",a.children.item(1).style.display="none",f.off(a,c,n),
a=null,t&&t.apply(o,arguments);
},o.src=s,window.__addIdKeyReport("28307",15);
}
if(5>t)return e;
var i=1e3*window.svr_time||+new Date;
i=new Date(i);
var r=i.getHours(),s=(60*r+i.getMinutes(),e),a=document.createElement("span");
a.className="gif_img_wrp",a.innerHTML='<span class="gif_img_tips"><i class="gif_img_play_arrow"></i>动图</span><span class="gif_img_tips" style="display:none;"><i class="weui_loading gif_img_loading"></i>加载中</span>';
var c="click";
return o.width>120&&o.height>120&&(window.user_uin&&50>(user_uin/100|0)%100||location.href.indexOf("gif=1")>-1)&&(e=e.replace("/0?","/s640?"),
e=e.replace("wx_fmt=gif",""),o.parentNode.insertBefore(a,o),a.appendChild(o),f.on(a,c,n),
window.__addIdKeyReport("28307",16)),e;
}
window.webp=o,o&&window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem("webp","1"),
window.logs.img={
download:{},
read:{},
load:{}
};
var n=document.getElementById("js_cover");
if(n){
var i=n.getAttribute("data-src");
if(i){
if(i.isCDN()){
var r=new Date;
for(r.setFullYear(2014,9,1);-1!=i.indexOf("?tp=webp");)i=i.replace("?tp=webp","");
for(;-1!=i.indexOf("&tp=webp");)i=i.replace("&tp=webp","");
1e3*ct>=r.getTime()&&""!=img_format&&"gif"!=img_format&&(i=i.replace(/\/0$/,"/640"),
i=i.replace(/\/0\?/,"/640?"),n.dataset&&(n.dataset.s="300,640")),o&&(i=d.addParam(i,"tp","webp",!0)),
i=d.addParam(i,"wxfrom","5",!0),is_https_res?i=i.http2https():("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(i=i.https2http());
}
setTimeout(function(){
n.setAttribute("src",i);
},0),window.logs.img.read[i]=!0,window.logs.img.load[i]=!0,n.removeAttribute("data-src");
}
}
var s=e("biz_wap/ui/lazyload_img.js"),a=1;
window.logs.outer_pic=0,new s({
attrKey:"data-src",
lazyloadHeightWhenWifi:function(){
var e,o=1,t=1;
e=window.svr_time?new Date(1e3*window.svr_time):new Date;
var n=e.getHours();
return n>=20&&23>n&&(o=.5,t=0),{
bottom:o,
top:t
};
},
inImgRead:function(e){
e&&(window.logs.img.read[e]=!0);
},
changeSrc:function(e,o,n){
if(!o)return"";
for(var i=o;-1!=i.indexOf("?tp=webp");)i=i.replace("?tp=webp","");
for(;-1!=i.indexOf("&tp=webp");)i=i.replace("&tp=webp","");
if(o.isCDN())(e.dataset&&e.dataset.s||-1!=o.indexOf("wx_fmt=")&&-1==o.indexOf("wx_fmt=gif"))&&(i=i.replace(/\/0$/,"/640"),
i=i.replace(/\/0\?/,"/640?")),window.webp&&(i=d.addParam(i,"tp","webp",!0)),i=d.addParam(i,"wxfrom","5",!0),
is_https_res?i=i.http2https():("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(i=i.https2http());else try{
var r=new RegExp("^http(s)?://((mmbiz.qpic.cn/.*)|(m.qpic.cn/.*)|(mmsns.qpic.cn/.*)|(shp.qpic.cn/.*)|(wx.qlogo.cn/.*)|(mmbiz.qlogo.cn/.*)|((a|b)[0-9]*.photo.store.qq.com/.*)|(mp.weixin.qq.com/.*)|(res.wx.qq.com/.*))");
r.test(o)||(window.__addIdKeyReport("28307",9),window.logs.outer_pic++);
}catch(s){}
var a=/^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g;
return i=i.replace(a,"http://m.qpic.cn"),i=d.addParam(i,"wx_lazy","1",!0),o.indexOf("wx_fmt=gif")>-1&&(i=t(i,e,n)),
window.logs.img.load[i]=!0,i;
},
onerror:function(e,o){
var t=o?o.__retryload||0:0;
if(e&&!(t>a)&&(window.__addIdKeyReport("28307",4),window.__addIdKeyReport("28307",6+2*t),
a>t&&(t++,o.__retryload=t,o.src=d.addParam(e,"retryload",t,!0)),e.isCDN())){
var n=10;
/tp\=webp/.test(e)&&(n=11);
var i=new Image;
i.src="http://mp.weixin.qq.com/mp/jsreport?key="+n+"&content="+(encodeURIComponent(e)+"["+uin+"]")+"&r="+Math.random();
}
},
onload:function(e,o){
var t=o?o.__retryload||0:0;
t>a||(window.__addIdKeyReport("28307",3),window.__addIdKeyReport("28307",5+2*t));
},
detect:function(e){
if(e&&e.time&&e.loadList){
var o=e.time,t=e.loadList;
window.logs.img.download[o]=t;
}
},
container:document.getElementById("page-content")
});
}),e("appmsg/async.js"),window.isSg||(e("appmsg/pay_for_reading.js"),e("appmsg/cache.js"));
var _=e("appmsg/copyright_report.js"),f=e("biz_common/dom/event.js"),A=e("biz_wap/jsapi/core.js");
!function(){
var e=document.getElementById("post-user"),o=document.getElementById("copyright_info"),t=[];
if(e){
var n="57";
"26"==window.source&&(n="95"),"28"==window.source&&(n="96"),"29"==window.source&&(n="39"),
"15"==window.source&&(n="121"),t.push({
dom:e,
username:user_name_new||user_name,
scene:n
});
}
o&&source_encode_biz&&t.push({
dom:o,
source_encode_biz:source_encode_biz,
scene:"110"
});
for(var i=0,r=t.length;r>i;i++)!function(e){
f.on(e.dom,"click",function(){
if("copyright_info"==e.dom.id&&source_encode_biz){
_.card_click_report({
scene:"0"
});
var o="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene="+e.scene+"#wechat_redirect";
-1!=navigator.userAgent.indexOf("WindowsWechat")||-1!=navigator.userAgent.indexOf("Mac OS")?location.href=o:A.invoke("openUrlWithExtraWebview",{
url:o,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=o);
});
}else A.invoke("profile",{
username:e.username,
scene:e.scene
},function(){
window.__addIdKeyReport("28307","1");
});
return!1;
}),p.isWp&&e.dom.setAttribute("href","weixin://profile/"+e.username);
}(t[i]);
}(),function(){
location.href.match(/fontScale=\d+/)&&p.isIOS&&A.on("menu:setfont",function(e){
e.fontScale<=0&&(e.fontScale=100),document.getElementsByTagName("html").item(0).style.webkitTextSizeAdjust=e.fontScale+"%",
document.getElementsByTagName("html").item(0).style.lineHeight=160/e.fontScale;
});
}();
var h=e("appmsg/outer_link.js");
if(new h({
container:document.getElementById("js_content"),
changeHref:function(e,o){
if(e&&0==e.indexOf("http://mp.weixin.qq.com/s"))e=e.replace(/#rd\s*$/,""),e=e.replace(/#wechat_redirect\s*$/,""),
e=e.replace(/[\?&]scene=21/,""),e+="&scene=21#wechat_redirect";else{
if(18==ban_scene)return"/mp/ban?action=check&__biz="+biz+"&mid="+mid+"&idx="+idx+"&scene="+ban_scene+"#wechat_redirect";
if(0!=e.indexOf("http://mp.weixinbridge.com/mp/wapredirect"))return"http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e)+"&action=appmsg_redirect&uin="+uin+"&biz="+biz+"&mid="+mid+"&idx="+idx+"&type="+o+"&scene=0";
}
return e;
}
}),!l){
var y=e("appmsg/review_image.js"),v=document.getElementById("js_cover"),b=[];
v&&b.push(v),new y({
container:document.getElementById("js_content"),
is_https_res:is_https_res,
imgs:b
});
}
!function(){
try{
var e=document.getElementById("js_content");
if(!e||!e.querySelectorAll)return;
for(var o=e.querySelectorAll("*"),t="list-paddingleft-2,selectTdClass,noBorderTable,ue-table-interlace-color-single,ue-table-interlace-color-double".split(","),n=function(e){
if(e&&e.className){
for(var o=e.className.split(/\s+/),n=[],i=0,r=o.length;r>i;++i){
var s=o[i];
s&&-1!=t.indexOf(s)&&n.push(s);
}
e.className=n.join(" ");
}
},i=0,r=o.length;r>i;++i){
var s=o[i];
s.tagName&&"iframe"!=s.tagName.toLowerCase()&&n(s);
}
}catch(a){}
}(),window.fromWeixinCached||e("appmsg/iframe.js"),e("appmsg/qqmusic.js"),e("appmsg/voice.js"),
e("appmsg/wxtopic.js"),e("appmsg/cdn_speed_report.js"),e("appmsg/page_pos.js"),setTimeout(function(){
if(window.article_improve_combo_css){
var e=document.createElement("link");
e.rel="stylesheet",e.type="text/css",e.async=!0,e.href=window.article_improve_combo_css;
var o=document.getElementsByTagName("head")[0];
o.appendChild(e);
}
},0),setTimeout(function(){
f.tap(document.getElementById("copyright_logo"),function(){
location.href="http://kf.qq.com/touch/sappfaq/150211YfyMVj150326iquI3e.html";
}),e("appmsg/report_and_source.js"),function(){
if(l){
i.addClass(t,"not_in_mm");
var e=document.createElement("link");
e.rel="stylesheet",e.type="text/css",e.async=!0,e.href=not_in_mm_css;
var o=document.getElementsByTagName("head")[0];
o.appendChild(e);
var n=document.getElementById("js_pc_qr_code_img");
if(n){
var r=10000004,s=document.referrer;
if(0==s.indexOf("http://weixin.sogou.com")?r=10000001:0==s.indexOf("https://wx.qq.com")&&(r=10000003),
window.isSg)n.setAttribute("src",sg_qr_code);else{
n.setAttribute("src","/mp/qrcode?scene="+r+"&size=102&__biz="+biz);
var a=new Image;
a.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+r+"&r="+Math.random();
}
document.getElementById("js_pc_qr_code").style.display="block";
}
var c=document.getElementById("js_profile_qrcode"),d=document.getElementById("js_profile_arrow_wrp"),p=document.getElementById("post-user");
if(c&&p&&d){
var m=function(){
var e=10000005,o=document.referrer;
0==o.indexOf("http://weixin.sogou.com")?e=10000006:0==o.indexOf("https://wx.qq.com")&&(e=10000007);
var t=document.getElementById("js_profile_qrcode_img");
if(t)if(window.isSg)t.setAttribute("src",sg_qr_code);else{
t.setAttribute("src","/mp/qrcode?scene="+e+"&size=102&__biz="+biz);
var n=new Image;
n.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+e+"&r="+Math.random();
}
return c.style.display="block",d.style.left=p.offsetLeft-c.offsetLeft+p.offsetWidth/2-8+"px",
!1;
};
f.on(p,"click",m),f.on(c,"click",m),f.on(document,"click",function(e){
var o=e.target||e.srcElement;
o!=p&&o!=c&&(c.style.display="none");
});
}
}else{
var w=document.getElementById("js_report_article3");
!!w&&(w.style.display="");
}
}(),function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,o=document.getElementById("img-content");
if(e&&o&&o.getBoundingClientRect){
var t=o.getBoundingClientRect().height;
window.scrollTo(0,t);
}
}(),e("appmsg/report.js");
for(var o=document.getElementsByTagName("map"),n=0,r=o.length;r>n;++n)o[n].parentNode.removeChild(o[n]);
if(_.card_pv_report(),Math.random()<.01)try{
var s="https://js.aq.qq.com/js/aq_common.js",a=document.createElement("script");
a.src=s;
var c=document.getElementsByTagName("head")[0];
c.appendChild(a);
}catch(d){}
var p=document.getElementById("js_close_temp");
f.on(p,"click",function(){
p.parentNode.parentNode.removeChild(p.parentNode),i.removeClass(document.getElementById("js_article"),"preview_appmsg");
});
},1e3),function(){
if(n.os.ios&&"onorientationchange"in window){
var e=[],o="onorientationchange"in window?"orientationchange":"resize",t=function(){
return 90===Math.abs(window.orientation)?1:2;
};
e.push({
ori:t(),
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
var i=(new Date).getHours();
f.on(window,o,function(){
var o=e.length-2,n=t();
if(o>=0){
var r=e[o],s=r.ori;
s!==n||e[e.length-1].istouchmove||(i>=11&&17>=i&&window.__report(63),window.scrollTo(0,r.scroll));
}
e.push({
ori:n,
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
}),f.on(window,"scroll",function(){
var o=e.length-1;
e[o].ori==t()&&(e[o].scroll=window.pageYOffset||document.documentElement.scrollTop,
e[o].istouchmove=!0);
});
}
}(),function(){
window.__observer&&window.__observer_data&&e("biz_wap/safe/mutation_observer_report.js");
}();
}
var t=e("biz_wap/jsapi/a8key.js"),n=e("biz_wap/utils/device.js"),i=e("biz_common/dom/class.js");
t.config({
onOutOfWeixinApp:function(){
console.log("onOutOfWeixinApp");
},
onNoCacheFuncWeixin:function(){
console.log("isWeixinCached == false");
},
onAlreadyHasA8Key:function(){
console.log("URL已有A8Key");
},
onJSAPIGetA8KeyStart:function(){
console.log("onJSAPIGetA8KeyStart");
},
onJSAPIGetA8KeyEnd:function(){
console.log("onJSAPIGetA8KeyEnd");
},
onJSAPIGetA8KeyTimeout:function(){
console.log("onJSAPIGetA8KeyTimeout");
}
}),t.onReady(function(){
window.logs.pagetime.jsapi_ready_time=+new Date,window.logs.idkeys={},console.log("进入index.js init"),
o();
}),"undefined"!=typeof isSg&&e("sougou/index.js");
});