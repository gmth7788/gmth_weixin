!function(){
var e=window.moon&&moon.moonsafe_id||29715,t=window.moon&&moon.moonsafe_key||0,o=[],n={},r=function(e){
return"[object Array]"==Object.prototype.toString.call(e);
},a=function(e,t,a){
a=a||1,n[e]||(n[e]=0),n[e]+=a,t&&(r(t)?o=o.concat(t):o.push(t)),setTimeout(function(){
i();
},1500);
},i=function(){
var r=[],a=o.length,s=["r="+Math.random()];
for(var c in n)n.hasOwnProperty(c)&&r.push(e+"_"+(1*c+1*t)+"_"+n[c]);
for(var c=0;a>c&&!(c>=10);++c)s.push("log"+c+"="+encodeURIComponent(o[c]));
if(!(0==r.length&&s.length<=1)){
var m,l="idkey="+r.join(";")+"&lc="+(s.length-1)+"&"+s.join("&");
if(window.ActiveXObject)try{
m=new ActiveXObject("Msxml2.XMLHTTP");
}catch(p){
try{
m=new ActiveXObject("Microsoft.XMLHTTP");
}catch(u){
m=!1;
}
}else window.XMLHttpRequest&&(m=new XMLHttpRequest);
m&&(m.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),m.setRequestHeader("cache-control","no-cache"),
m.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
m.setRequestHeader("X-Requested-With","XMLHttpRequest"),m.onreadystatechange=function(){
4===m.readyState&&(o.length>10?(o=o.slice(10),i()):(o=[],n={}));
},o=[],n={},m.send(l));
}
},s=0,c=1,m=4,l=5,p=6,u=7,f=19;
!function(){
for(var e=window.alert,t=window.__alertList||[],o=0,n=t.length;n>o;++o)a(s,t[o]);
window.alert=function(t){
e(t),a(s,["[moonsafe][alert][url]:"+location.href,"[moonsafe][alert][msg]:"+t]);
};
}(),function(){
for(var e=function(e){
if(e){
var t=e.match(/http(?:s)?:\/\/([^\/]+?)(\/|$)/);
if(t&&!/qq\.com$/.test(t[1])&&!/weishi\.com$/.test(t[1]))return!0;
}
return!1;
},t=document.getElementsByTagName("script"),o=window.WebKitMutationObserver||window.MutationObserver||window.MozMutationObserver,n="function"==typeof o,r=/^http(s)?:\/\/mp\.weixin\.qq\.com\/s/.test(location.href),i=0;i<t.length;i++)e(t[i].src)&&(a(c,["[moonsafe][script][url]:"+location.href,"[moonsafe][script][src]:"+t[i].src,"[moonsafe][script][ua]:"+navigator.userAgent]),
n||a(m,["[moonsafe][observer][notsupport_url]:"+location.href,"[moonsafe][observer][notsupport_ua]:"+navigator.userAgent]),
r||a(l,["[moonsafe][observer][notappmsg_url]:"+location.href]),"https:"==location.protocol&&a(p,["[moonsafe][observer][https_url]:"+location.href]));
for(var s=document.getElementsByTagName("iframe"),i=0;i<s.length;i++)e(s[i].src)&&a(u,["[moonsafe][iframe][url]:"+location.href,"[moonsafe][iframe][src]:"+s[i].src,"[moonsafe][iframe][ua]:"+navigator.userAgent]);
var d=document.createElement("iframe");
d.src=location.protocol+"//mp.weixin.qq.com/mp/readtemplate?t=appmsg/cspsupport_test_tmpl&level=1",
d.style.display="none",document.body.appendChild(d);
var h=document.createElement("iframe");
if(h.src=location.protocol+"//mp.weixin.qq.com/mp/readtemplate?t=appmsg/cspsupport_test_tmpl&level=2",
h.style.display="none",document.body.appendChild(h),document.documentElement&&document.documentElement.outerHTML){
var w=document.documentElement.outerHTML,g=/<!--tailTrap.*?<script([^>]*?)>(.*?)<\/script>.*?-->/i;
g.test(w)&&a(f,["[moonsafe][tailtrap][attr]:"+RegExp.$1,"[moonsafe[tailtrap][inline]:"+RegExp.$2]);
}
}();
}();