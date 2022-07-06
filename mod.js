// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,f=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),v&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function l(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}var v=Math.floor,p=Math.ceil;function s(r){return r<0?p(r):v(r)}var N=Number,m=N.NEGATIVE_INFINITY,b=Number.POSITIVE_INFINITY;function h(r){return r===b||r===m}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return w&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var j=g()?function(r){var n,t,e,u,i;if(null==r)return d.call(r);t=r[_],i=_,n=null!=(u=r)&&A.call(u,i);try{r[_]=void 0}catch(n){return d.call(r)}return e=d.call(r),n?r[_]=t:delete r[_],e}:function(r){return d.call(r)},U="function"==typeof Uint32Array;var O="function"==typeof Uint32Array?Uint32Array:null;var E,S="function"==typeof Uint32Array?Uint32Array:void 0;E=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(U&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var I=E,T="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var P,H="function"==typeof Float64Array?Float64Array:void 0;P=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var V=P,G="function"==typeof Uint8Array;var k="function"==typeof Uint8Array?Uint8Array:null;var L,M="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,n,t;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,256,257]),t=n,r=(G&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var W=L,q="function"==typeof Uint16Array;var x="function"==typeof Uint16Array?Uint16Array:null;var Y,C="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,65536,65537]),t=n,r=(q&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:Y,uint8:W};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new V(1),X=new I(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n){return R[0]=n,r[0]=X[Z],r[1]=X[$],r}function nr(r,n){return 1===arguments.length?rr([0,0],r):rr(r,n)}var tr,er,ur=!0===K?1:0,ir=new V(1),or=new I(ir.buffer);function fr(r){return ir[0]=r,or[ur]}!0===K?(tr=1,er=0):(tr=0,er=1);var ar={HIGH:tr,LOW:er},cr=new V(1),lr=new I(cr.buffer),yr=ar.HIGH,vr=ar.LOW;function pr(r,n){return lr[yr]=r,lr[vr]=n,cr[0]}var sr=[0,0];function Nr(r,n){var t,e;return nr(sr,r),t=sr[0],t&=2147483647,e=fr(n),pr(t|=e&=2147483648,sr[1])}function mr(r){return Math.abs(r)}function br(r,n){return y(n)||h(n)?(r[0]=n,r[1]=0,r):0!==n&&mr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var hr=[0,0],wr=[0,0];function gr(r,n){var t,e;return 0===n||0===r||y(r)||h(r)?r:(function(r,n){1===arguments.length?br([0,0],r):br(r,n)}(hr,r),n+=hr[1],n+=function(r){var n=fr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=hr[0]),n<-1074?Nr(0,r):n>1023?r<0?m:b:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr(wr,r),t=wr[0],t&=2148532223,e*pr(t|=n+1023<<20,wr[1])))}function dr(r){var n;return y(r)||r===b?r:r===m?0:r>709.782712893384?b:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,i,o;return gr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=s(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}var Ar=!0===K?0:1,_r=new V(1),jr=new I(_r.buffer);function Ur(r,n){return _r[0]=r,jr[Ar]=n>>>0,_r[0]}var Or=.8450629115104675;function Er(r){var n,t,e,u,i,o,f,a;if(y(r))return NaN;if(r===b)return 0;if(r===m)return 2;if(0===r)return 1;if(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(u=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),i=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),o=u/i,r<.25?1-(r+r*o):(u=r*o,.5-(u+=r-.5)));if(t<1.25)return f=(i=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(i)-.0023621185607526594,a=1+i*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(i),n?1+Or+f/a:1-Or-f/a;if(t<28){if(i=1/(t*t),t<2.857142857142857)u=i*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i)-.009864944034847148,i=1+i*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(i);else{if(r<-6)return 2;u=i*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i)-.0098649429247001,i=1+i*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(i)}return u=dr(-(e=Ur(t,0))*e-.5625)*dr((e-t)*(e+t)+u/i),n?2-u/t:u/t}return n?2:0}var Sr=Math.sqrt;function Ir(r,n,t){return y(r)||y(n)||y(t)||t<0?NaN:0===t?r<n?0:1:.5*Er(-(r-n)/(t*Sr(2)))}function Tr(r){return function(){return r}}function Fr(r){return y(r)?Tr(NaN):function(n){if(y(n))return NaN;return n<r?0:1}}l((function(r,n){return y(r)||y(n)?NaN:r<n?0:1}),"factory",Fr),l(Ir,"factory",(function(r,n){var t;return y(r)||y(n)||n<0?Tr(NaN):0===n?Fr(r):(t=n*Sr(2),function(n){if(y(n))return NaN;return.5*Er(-(n-r)/t)})}));var Pr=!0===K?1:0,Hr=new V(1),Vr=new I(Hr.buffer);function Gr(r,n){return Hr[0]=r,Vr[Pr]=n>>>0,Hr[0]}var kr=.6931471803691238,Lr=1.9082149292705877e-10;function Mr(r){var n,t,e,u,i,o,f,a,c,l,v,p;return 0===r?m:y(r)||r<0?NaN:(i=0,(t=fr(r))<1048576&&(i-=54,t=fr(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=Gr(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===i?0:i*kr+i*Lr:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*kr-(o-i*Lr-f)):(a=t-398458|0,c=440401-t|0,u=(v=(p=(l=f/(2+f))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),o=e+u,(a|=c)>0?(n=.5*f*f,0===i?f-(n-l*(n+o)):i*kr-(n-(l*(n+o)+i*Lr)-f)):0===i?f-l*(f-o):i*kr-(l*(f-o)-i*Lr-f))))}function Wr(r,n,t){return y(r)||y(n)||y(t)||t<=0?NaN:r<=0?0:Ir(Mr(r),n,t)}function qr(r,n,t){a(r,n,{configurable:!1,enumerable:!1,get:t})}function xr(r){return"number"==typeof r}l(Wr,"factory",(function(r,n){return y(r)||y(n)||n<=0?Tr(NaN):function(t){if(y(t))return NaN;if(t<=0)return 0;return Ir(Mr(t),r,n)}}));var Yr=N.prototype.toString;var Cr=g();function zr(r){return"object"==typeof r&&(r instanceof N||(Cr?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function Br(r){return xr(r)||zr(r)}function Dr(r){return xr(r)&&r>0}function Jr(r){return zr(r)&&r.valueOf()>0}function Kr(r){return Dr(r)||Jr(r)}function Qr(r){return xr(r)&&y(r)}function Rr(r){return zr(r)&&y(r.valueOf())}function Xr(r){return Qr(r)||Rr(r)}l(Br,"isPrimitive",xr),l(Br,"isObject",zr),l(Kr,"isPrimitive",Dr),l(Kr,"isObject",Jr),l(Xr,"isPrimitive",Qr),l(Xr,"isObject",Rr);function Zr(r,n){return y(r)||y(n)||n<=0?NaN:Mr(n*dr(r+.5)*2.5066282746310007)}function $r(r,n){var t,e;return y(r)||y(n)||n<=0?NaN:(t=dr(4*(e=n*n)),t+=2*dr(3*e),t+=3*dr(2*e),t-=6)}function rn(r,n){return y(r)||y(n)||n<=0?NaN:dr(r+n*n/2)}function nn(r,n){return y(r)||y(n)||n<=0?NaN:dr(r)}function tn(r,n){return y(r)||y(n)||n<=0?NaN:dr(r-n*n)}function en(r,n){var t;return y(r)||y(n)||n<=0?NaN:((t=dr(n*n))+2)*Sr(t-1)}function un(r,n){var t;return y(r)||y(n)||n<=0?NaN:Sr((dr(t=n*n)-1)*dr(2*r+t))}function on(r,n){var t;return y(r)||y(n)||n<=0?NaN:(dr(t=n*n)-1)*dr(2*r+t)}function fn(r){return v(r)===r}function an(r){return fn(r/2)}function cn(r){return an(r>0?r-1:r+1)}function ln(r){return 0|r}var yn=[1,1.5],vn=[0,.5849624872207642],pn=[0,1.350039202129749e-8];var sn=1e300,Nn=1e-300,mn=[0,0],bn=[0,0];function hn(r,n){var t,e,u,i,o,f,a,c,l,v,p,s,N,w;if(y(r)||y(n))return NaN;if(nr(mn,n),o=mn[0],0===mn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Sr(r);if(-.5===n)return 1/Sr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(h(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:mr(r)<1==(n===b)?0:b}(r,n)}if(nr(mn,r),i=mn[0],0===mn[1]){if(0===i)return function(r,n){return n===m?b:n===b?0:n>0?cn(n)?r:0:cn(n)?Nr(b,r):b}(r,n);if(1===r)return 1;if(-1===r&&cn(n))return-1;if(h(r))return r===m?hn(-0,-n):n<0?0:b}if(r<0&&!1===fn(n))return(r-r)/(r-r);if(u=mr(r),t=2147483647&i|0,e=2147483647&o|0,a=o>>>31|0,f=(f=i>>>31|0)&&cn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&fr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*sn*sn:f*Nn*Nn;if(t>1072693248)return 0===a?f*sn*sn:f*Nn*Nn;p=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Ur(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(bn,u)}else p=function(r,n,t){var e,u,i,o,f,a,c,l,y,v,p,s,N,m,b,h,w,g,d,A,_;return g=0,t<1048576&&(g-=53,t=fr(n*=9007199254740992)),g+=(t>>20)-1023|0,t=1072693248|(d=1048575&t|0),d<=235662?A=0:d<767610?A=1:(A=0,g+=1,t-=1048576),o=Ur(u=(h=(n=Gr(n,t))-(c=yn[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),a=Gr(0,e+=A<<18),b=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Ur(a=3+(i=o*o)+(b+=(f=w*(h-o*a-o*(n-(a-c))))*(o+u)),0),N=(p=-7.028461650952758e-9*(y=Ur(y=(h=o*a)+(w=f*a+(b-(a-3-i))*u),0))+.9617966939259756*(w-(y-h))+pn[A])-((s=Ur(s=(v=.9617967009544373*y)+p+(l=vn[A])+(m=g),0))-m-l-v),r[0]=s,r[1]=N,r}(bn,u,t);if(v=(n-(c=Ur(n,0)))*p[0]+n*p[1],l=c*p[0],nr(mn,s=v+l),N=ln(mn[0]),w=ln(mn[1]),N>=1083179008){if(0!=(N-1083179008|w))return f*sn*sn;if(v+8008566259537294e-32>s-l)return f*sn*sn}else if((2147483647&N)>=1083231232){if(0!=(N-3230714880|w))return f*Nn*Nn;if(v<=s-l)return f*Nn*Nn}return s=function(r,n,t){var e,u,i,o,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=i=Gr(0,e)),r=ln(r=fr(c=1-((c=(o=.6931471824645996*(i=Ur(i=t+n,0)))+(f=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-o))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?gr(c,l):Gr(c,r)}(N,l,v),f*s}var wn=3.141592653589793;function gn(r,n,t){var e,u;return y(r)||y(n)||y(t)||t<=0?NaN:r<=0?m:(u=-1/(2*(e=hn(t,2))),-.5*Mr(2*e*wn)-Mr(r)+u*hn(Mr(r)-n,2))}function dn(r,n,t){var e;return y(r)||y(n)||y(t)||t<=0?NaN:r<=0?0:(e=hn(t,2),1/r*(1/Sr(2*e*wn))*dr(-1/(2*e)*hn(Mr(r)-n,2)))}l(gn,"factory",(function(r,n){var t,e,u;return y(r)||y(n)||n<=0?Tr(NaN):(t=hn(n,2),e=-.5*Mr(2*t*wn),u=-1/(2*t),function(n){if(y(n))return NaN;if(n<=0)return m;return e-Mr(n)+u*hn(Mr(n)-r,2)})})),l(dn,"factory",(function(r,n){var t,e,u;return y(r)||y(n)||n<=0?Tr(NaN):(t=hn(n,2),e=1/Sr(2*t*wn),u=-1/(2*t),function(n){if(y(n))return NaN;if(n<=0)return 0;return 1/n*e*dr(u*hn(Mr(n)-r,2))})}));function An(r){var n,t,e,u,i;return y(r)?NaN:1===r?b:-1===r?m:0===r?r:r>1||r<-1?NaN:(r<0?(n=-1,t=-r):(n=1,t=r),e=1-t,t<=.5?(u=t*(t+10),i=function(r){var n,t;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(n=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/t)}(t),n*(.08913147449493408*u+u*i)):e>=.25?(u=Sr(-2*Mr(e)),i=function(r){var n,t;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(n=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/t)}(e-=.25),n*(u/(2.249481201171875+i))):(e=Sr(-Mr(e)))<3?(i=function(r){var n,t;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(n=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(n=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),n/t)}(e-1.125),n*(.807220458984375*e+i*e)):e<6?(i=function(r){var n,t;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(n=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(n=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),n/t)}(e-3),n*(.9399557113647461*e+i*e)):(i=function(r){var n,t;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(n=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(n=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),t=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),n/t)}(e-6),n*(.9836282730102539*e+i*e)))}function _n(r,n,t){return y(n)||y(t)||y(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*Sr(2)*An(2*r-1)}function jn(r,n,t){return y(n)||y(t)||y(r)||t<=0||r<0||r>1?NaN:dr(n+t*_n(r,0,1))}function Un(){var r,n;if(!(this instanceof Un))return 0===arguments.length?new Un:new Un(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!xr(n=arguments[0])||Xr(n))throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `"+n+"`");if(!Dr(r))throw new TypeError("invalid argument. Scale parameter `sigma` must be a positive number. Value: `"+r+"`")}else n=0,r=1;return a(this,"mu",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!xr(r)||Xr(r))throw new TypeError("invalid value. Must be a number primitive. Value: `"+r+"`");n=r}}),a(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Dr(n))throw new TypeError("invalid value. Must be a positive number. Value: `"+n+"`");r=n}}),this}l((function(r,n){return y(r)||r<0||r>1?NaN:n}),"factory",(function(r){return y(r)?Tr(NaN):function(n){if(y(n)||n<0||n>1)return NaN;return r}})),l(_n,"factory",(function(r,n){var t,e;return y(r)||y(n)||n<0?Tr(NaN):(t=r,e=n*Sr(2),function(r){if(y(r)||r<0||r>1)return NaN;return t+e*An(2*r-1)})})),l(jn,"factory",(function(r,n){return y(r)||y(n)||n<=0?Tr(NaN):function(t){if(y(t)||t<0||t>1)return NaN;return dr(r+n*_n(t,0,1))}})),qr(Un.prototype,"entropy",(function(){return Zr(this.mu,this.sigma)})),qr(Un.prototype,"kurtosis",(function(){return $r(this.mu,this.sigma)})),qr(Un.prototype,"mean",(function(){return rn(this.mu,this.sigma)})),qr(Un.prototype,"median",(function(){return nn(this.mu,this.sigma)})),qr(Un.prototype,"mode",(function(){return tn(this.mu,this.sigma)})),qr(Un.prototype,"skewness",(function(){return en(this.mu,this.sigma)})),qr(Un.prototype,"stdev",(function(){return un(this.mu,this.sigma)})),qr(Un.prototype,"variance",(function(){return on(this.mu,this.sigma)})),l(Un.prototype,"cdf",(function(r){return Wr(r,this.mu,this.sigma)})),l(Un.prototype,"logpdf",(function(r){return gn(r,this.mu,this.sigma)})),l(Un.prototype,"pdf",(function(r){return dn(r,this.mu,this.sigma)})),l(Un.prototype,"quantile",(function(r){return jn(r,this.mu,this.sigma)}));var On={};c(On,"cdf",Wr),c(On,"LogNormal",Un),c(On,"entropy",Zr),c(On,"kurtosis",$r),c(On,"logpdf",gn),c(On,"mean",rn),c(On,"median",nn),c(On,"mode",tn),c(On,"pdf",dn),c(On,"quantile",jn),c(On,"skewness",en),c(On,"stdev",un),c(On,"variance",on);export{Un as LogNormal,Wr as cdf,On as default,Zr as entropy,$r as kurtosis,gn as logpdf,rn as mean,nn as median,tn as mode,dn as pdf,jn as quantile,en as skewness,un as stdev,on as variance};
//# sourceMappingURL=mod.js.map
