define("biz_wap/ui/lazyload_img.js",["biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_common/dom/attr.js","biz_common/ui/imgonepx.js"],function(t){
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
for(var h=+new Date,d=[],u=this.sw,f=this,w=-1,p=0,g=t.length;g>p;p++)!function(t,e){
var s=t.el.offsetTop,h=t.src;
if(h){
h.indexOf("wx_fmt=gif")>-1&&w++;
var f=r,p=n;
-1!=h.indexOf("wx_fmt=gif")&&c&&(f=0,p=20),!t.show&&(i>=s&&i<=s+t.height+f||s>i&&i+o+p>s)&&(e.inImgRead&&(i>=s&&i<=s+t.height||s>i&&i+o>s)&&e.inImgRead(h,networkType),
e.changeSrc&&(h=e.changeSrc(t.el,h,w)),t.el.onerror=function(){
var t=this;
!!e.onerror&&e.onerror(h,t);
},t.el.onload=function(){
var t=this;
l(t,"height","auto","important"),t.getAttribute("_width")?l(t,"width",t.getAttribute("_width"),"important"):l(t,"width","auto","important"),
!!e.onload&&e.onload(h,t);
},m(t.el,"src",h),d.push(h),t.show=!0,l(t.el,"visibility","visible","important")),
a.isWp&&1*t.el.width>u&&(t.el.width=u);
}
}(t[p],f);
d.length>0&&this.detect&&this.detect({
time:h,
loadList:d,
scrollTop:i
});
}
function e(){
var t=document.getElementsByTagName("img"),e=[],o=this.container,n=this.attrKey||"data-src",a=o.offsetWidth,r=0,s=this.imgOccupied||!1;
o.currentStyle?r=o.currentStyle.width:"undefined"!=typeof getComputedStyle&&(r=getComputedStyle(o).width),
this.sw=1*r.replace("px","");
for(var d=0,c=t.length;c>d;d++){
var u=t.item(d),f=m(u,n);
if(f){
var w=100;
if(u.dataset&&u.dataset.ratio){
var p=1*u.dataset.ratio,g=1*u.dataset.w||a;
"number"==typeof p&&p>0?(g=a>=g?g:a,w=g*p,u.style.width&&u.setAttribute("_width",u.style.width),
s||(l(u,"width",g+"px","important"),l(u,"visibility","visible","important"),u.setAttribute("src",h))):l(u,"visibility","hidden","important");
}else l(u,"visibility","hidden","important");
s||l(u,"height",w+"px","important"),e.push({
el:u,
src:f,
height:w,
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
var a=t("biz_wap/utils/mmversion.js"),r=t("biz_common/dom/event.js"),s=t("biz_common/dom/attr.js"),m=s.attr,l=s.setProperty,h=t("biz_common/ui/imgonepx.js"),d=new Date,c=(d.getHours(),
!0);
return n;
});