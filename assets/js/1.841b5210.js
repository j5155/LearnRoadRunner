(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{351:function(t,e,l){"use strict";function n(t,e,l,n){let i;l=l||0;let o=(n=n||e.length-1)<=2147483647;for(;n-l>1;)i=o?l+n>>1:x((l+n)/2),e[i]<t?l=i:n=i;return t-e[l]<=e[n]-t?l:n}function i(t,e,l,n){for(let i=1==n?e:l;i>=e&&i<=l;i+=n)if(null!=t[i])return i;return-1}const o=[0,0];function s(t,e,l,n){return o[0]=l<0?L(t,-l):t,o[1]=n<0?L(e,-n):e,o}function r(t,e,l,n){let i,o,r,u=10==l?S:z;return t==e&&(t/=l,e*=l),n?(i=x(u(t)),o=_(u(e)),r=s(y(l,i),y(l,o),i,o),t=r[0],e=r[1]):(i=x(u(w(t))),o=x(u(w(e))),r=s(y(l,i),y(l,o),i,o),t=R(t,r[0]),e=F(e,r[1])),[t,e]}function u(t,e,l,n){let i=r(t,e,l,n);return 0==t&&(i[0]=0),0==e&&(i[1]=0),i}const a={pad:0,soft:null,mode:0},c={min:a,max:a};function f(t,e,l,n){return J(l)?d(t,e,l):(a.pad=l,a.soft=n?0:null,a.mode=n?3:0,d(t,e,c))}function h(t,e){return null==t?e:t}function d(t,e,l){let n=l.min,i=l.max,o=h(n.pad,0),s=h(i.pad,0),r=h(n.hard,-T),u=h(i.hard,T),a=h(n.soft,T),c=h(i.soft,-T),f=h(n.mode,0),d=h(i.mode,0),m=e-t,p=m||w(e)||1e3,g=S(p),b=y(10,x(g)),_=L(R(t-p*(0==m?0==t?.1:1:o),b/10),6),M=t>=a&&(1==f||3==f&&_<=a||2==f&&_>=a)?a:T,z=v(r,_<M&&t>=M?M:k(M,_)),D=L(F(e+p*(0==m?0==e?.1:1:s),b/10),6),E=e<=c&&(1==d||3==d&&D>=c||2==d&&D<=c)?c:-T,Y=k(u,D>E&&e<=E?E:v(E,D));return z==Y&&0==z&&(Y=100),[z,Y]}const m=new Intl.NumberFormat(navigator.language).format,p=Math,g=p.PI,w=p.abs,x=p.floor,b=p.round,_=p.ceil,k=p.min,v=p.max,y=p.pow,M=p.sqrt,S=p.log10,z=p.log2,D=(t,e=1)=>p.asinh(t/e),T=1/0;function E(t,e){return b(t/e)*e}function Y(t,e,l){return k(v(t,e),l)}function A(t){return"function"==typeof t?t:()=>t}const P=t=>t,W=(t,e)=>e,C=t=>null,H=t=>!0;function F(t,e){return _(t/e)*e}function R(t,e){return x(t/e)*e}function L(t,e){return b(t*(e=10**e))/e}const N=new Map;function I(t){return((""+t).split(".")[1]||"").length}function O(t,e,l,n){let i=[],o=n.map(I);for(let s=e;s<l;s++){let e=w(s),l=L(y(t,s),e);for(let t=0;t<n.length;t++){let r=n[t]*l,u=(r>=0&&s>=0?0:e)+(s>=o[t]?0:o[t]),a=L(r,u);i.push(a),N.set(a,u)}}return i}const V={},j=Array.isArray;function G(t){return"string"==typeof t}function J(t){let e=!1;if(null!=t){let l=t.constructor;e=null==l||l==Object}return e}function U(t){return null!=t&&"object"==typeof t}function B(t,e){let l;if(e=e||J,j(t))l=t.map(t=>B(t,e));else if(e(t))for(var n in l={},t)l[n]=B(t[n],e);else l=t;return l}function q(t){let e=arguments;for(let l=1;l<e.length;l++){let n=e[l];for(let e in n)J(t[e])?q(t[e],B(n[e])):t[e]=B(n[e])}return t}function Z(t,e,l){for(let n,i=0,o=-1;i<e.length;i++){let s=e[i];if(s>o){for(n=s-1;n>=0&&null==t[n];)t[n--]=null;for(n=s+1;n<l&&null==t[n];)t[o=n++]=null}}}const K="undefined"==typeof queueMicrotask?t=>Promise.resolve().then(t):queueMicrotask,X="u-off",Q=document,$=window,tt=devicePixelRatio;function et(t,e){if(null!=e){let l=t.classList;!l.contains(e)&&l.add(e)}}function lt(t,e){let l=t.classList;l.contains(e)&&l.remove(e)}function nt(t,e,l){t.style[e]=l+"px"}function it(t,e,l,n){let i=Q.createElement(t);return null!=e&&et(i,e),null!=l&&l.insertBefore(i,n),i}function ot(t,e){return it("div",t,e)}function st(t,e,l,n,i){t.style.transform="translate("+e+"px,"+l+"px)",e<0||l<0||e>n||l>i?et(t,X):lt(t,X)}const rt={passive:!0},ut=q({capture:!0},rt);function at(t,e,l,n){e.addEventListener(t,l,n?ut:rt)}function ct(t,e,l,n){e.removeEventListener(t,l,n?ut:rt)}const ft=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function dt(t){return t.slice(0,3)}const mt=ht.map(dt),pt=ft.map(dt),gt={MMMM:ft,MMM:pt,WWWW:ht,WWW:mt};function wt(t){return(t<10?"0":"")+t}const xt={YYYY:t=>t.getFullYear(),YY:t=>(t.getFullYear()+"").slice(2),MMMM:(t,e)=>e.MMMM[t.getMonth()],MMM:(t,e)=>e.MMM[t.getMonth()],MM:t=>wt(t.getMonth()+1),M:t=>t.getMonth()+1,DD:t=>wt(t.getDate()),D:t=>t.getDate(),WWWW:(t,e)=>e.WWWW[t.getDay()],WWW:(t,e)=>e.WWW[t.getDay()],HH:t=>wt(t.getHours()),H:t=>t.getHours(),h:t=>{let e=t.getHours();return 0==e?12:e>12?e-12:e},AA:t=>t.getHours()>=12?"PM":"AM",aa:t=>t.getHours()>=12?"pm":"am",a:t=>t.getHours()>=12?"p":"a",mm:t=>wt(t.getMinutes()),m:t=>t.getMinutes(),ss:t=>wt(t.getSeconds()),s:t=>t.getSeconds(),fff:t=>{return((e=t.getMilliseconds())<10?"00":e<100?"0":"")+e;var e}};function bt(t,e){e=e||gt;let l,n=[],i=/\{([a-z]+)\}|[^{]+/gi;for(;l=i.exec(t);)n.push("{"==l[0][0]?xt[l[1]]:l[0]);return t=>{let l="";for(let i=0;i<n.length;i++)l+="string"==typeof n[i]?n[i]:n[i](t,e);return l}}const _t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;const kt=t=>t%1==0,vt=[1,2,2.5,5],yt=O(10,-16,0,vt),Mt=O(10,0,16,vt),St=Mt.filter(kt),zt=yt.concat(Mt),Dt="{M}/{D}",Tt="\n"+Dt,Et=Tt+"/{YY}",Yt="{h}:{mm}{aa}",At=null;function Pt(t){let e=1e3*t,l=60*e,n=60*l,i=24*n,o=30*i,s=365*i;return[(1==t?O(10,0,3,vt).filter(kt):O(10,-3,0,vt)).concat([e,5*e,10*e,15*e,30*e,l,5*l,10*l,15*l,30*l,n,2*n,3*n,4*n,6*n,8*n,12*n,i,2*i,3*i,4*i,5*i,6*i,7*i,8*i,9*i,10*i,15*i,o,2*o,3*o,4*o,6*o,s,2*s,5*s,10*s,25*s,50*s,100*s]),[[s,"{YYYY}",At,At,At,At,At,At,1],[28*i,"{MMM}","\n{YYYY}",At,At,At,At,At,1],[i,Dt,"\n{YYYY}",At,At,At,At,At,1],[n,"{h}{aa}",Et,At,Tt,At,At,At,1],[l,Yt,Et,At,Tt,At,At,At,1],[e,":{ss}",Et+" "+Yt,At,Tt+" "+Yt,At,"\n{h}:{mm}{aa}",At,1],[t,":{ss}.{fff}",Et+" "+Yt,At,Tt+" "+Yt,At,"\n{h}:{mm}{aa}",At,1]],function(e){return(r,u,a,c,f,h)=>{let d=[],m=f>=s,p=f>=o&&f<s,g=e(a),w=L(g*t,3),_=Ot(g.getFullYear(),m?0:g.getMonth(),p||m?1:g.getDate()),k=L(_*t,3);if(p||m){let l=p?f/o:0,n=m?f/s:0,i=w==k?w:L(Ot(_.getFullYear()+n,_.getMonth()+l,1)*t,3),r=new Date(b(i/t)),u=r.getFullYear(),a=r.getMonth();for(let o=0;i<=c;o++){let s=Ot(u+n*o,a+l*o,1),r=s-e(L(s*t,3));i=L((+s+r)*t,3),i<=c&&d.push(i)}}else{let o=f>=i?i:f,s=k+(x(a)-x(w))+F(w-k,o);d.push(s);let m=e(s),p=m.getHours()+m.getMinutes()/l+m.getSeconds()/n,g=f/n,b=h/r.axes[u]._space;for(;s=L(s+f,1==t?0:3),!(s>c);)if(g>1){let t=x(L(p+g,6))%24,l=e(s).getHours()-t;l>1&&(l=-1),s-=l*n,p=(p+g)%24,L((s-d[d.length-1])/f,3)*b>=.7&&d.push(s)}else d.push(s)}return d}}]}const[Wt,Ct,Ht]=Pt(1),[Ft,Rt,Lt]=Pt(.001);function Nt(t,e){return t.map(t=>t.map((l,n)=>0==n||8==n||null==l?l:e(1==n||0==t[8]?l:t[1]+l)))}function It(t,e){return(l,n,i,o,s)=>{let r,u,a,c,f,h,d=e.find(t=>s>=t[0])||e[e.length-1];return n.map(e=>{let l=t(e),n=l.getFullYear(),i=l.getMonth(),o=l.getDate(),s=l.getHours(),m=l.getMinutes(),p=l.getSeconds(),g=n!=r&&d[2]||i!=u&&d[3]||o!=a&&d[4]||s!=c&&d[5]||m!=f&&d[6]||p!=h&&d[7]||d[1];return r=n,u=i,a=o,c=s,f=m,h=p,g(l)})}}function Ot(t,e,l){return new Date(t,e,l)}function Vt(t,e){return e(t)}O(2,-53,53,[1]);function jt(t,e){return(l,n)=>e(t(n))}const Gt={show:!0,width:2,stroke:function(t,e){let l=t.series[e];return l.width?l.stroke(t,e):l.points.width?l.points.stroke(t,e):null},fill:function(t,e){return t.series[e].fill(t,e)},dash:"solid",live:!0,isolate:!1,idx:null,values:[]};const Jt=[0,0];function Ut(t,e,l){return t=>{0==t.button&&l(t)}}function Bt(t,e,l){return l}const qt={show:!0,x:!0,y:!0,lock:!1,move:function(t,e,l){return Jt[0]=e,Jt[1]=l,Jt},points:{show:function(t,e){let l=t.cursor.points,n=ot(),i=l.stroke(t,e),o=l.fill(t,e);n.style.background=o||i;let s=l.size(t,e),r=l.width(t,e,s);r&&(n.style.border=r+"px solid "+i);let u=s/-2;return nt(n,"width",s),nt(n,"height",s),nt(n,"marginLeft",u),nt(n,"marginTop",u),n},size:function(t,e){return he(t.series[e].width,1)},width:0,stroke:function(t,e){return t.series[e].stroke(t,e)},fill:function(t,e){return t.series[e].stroke(t,e)}},bind:{mousedown:Ut,mouseup:Ut,click:Ut,dblclick:Ut,mousemove:Bt,mouseleave:Bt,mouseenter:Bt},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,_x:!1,_y:!1},focus:{prox:-1},left:-10,top:-10,idx:null,dataIdx:function(t,e,l){return l}},Zt={show:!0,stroke:"rgba(0,0,0,0.07)",width:2,filter:W},Kt=q({},Zt,{size:10}),Xt='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',Qt="bold "+Xt,$t={show:!0,scale:"x",stroke:"#000",space:50,gap:5,size:50,labelSize:30,labelFont:Qt,side:2,grid:Zt,ticks:Kt,font:Xt,rotate:0},te={show:!0,scale:"x",auto:!1,sorted:1,min:T,max:-T,idxs:[]};function ee(t,e,l,n,i){return e.map(t=>null==t?"":m(t))}function le(t,e,l,n,i,o,s){let r=[],u=N.get(i)||0;for(let t=l=s?l:L(F(l,i),u);t<=n;t=L(t+i,u))r.push(Object.is(t,-0)?0:t);return r}function ne(t,e,l,n,i,o,s){const r=[],u=t.scales[t.axes[e].scale].log,a=x((10==u?S:z)(l));i=y(u,a),a<0&&(i=L(i,-a));let c=l;do{r.push(c),c=L(c+i,N.get(i)),c>=i*u&&(i=c)}while(c<=n);return r}function ie(t,e,l,n,i,o,s){let r=t.scales[t.axes[e].scale].asinh,u=n>r?ne(t,e,v(r,l),n,i):[r],a=n>=0&&l<=0?[0]:[];return(l<-r?ne(t,e,v(r,-n),-l,i):[r]).reverse().map(t=>-t).concat(a,u)}const oe=/./,se=/[12357]/,re=/[125]/,ue=/1/;function ae(t,e,l,n,i){let o=t.axes[l],s=o.scale,r=t.scales[s];if(3==r.distr&&2==r.log)return e;let u=t.valToPos,a=o._space,c=u(10,s),f=u(9,s)-c>=a?oe:u(7,s)-c>=a?se:u(5,s)-c>=a?re:ue;return e.map(t=>4==r.distr&&0==t||f.test(t)?t:null)}function ce(t,e){return null==e?"":m(e)}const fe={show:!0,scale:"y",stroke:"#000",space:30,gap:5,size:50,labelSize:30,labelFont:Qt,side:3,grid:Zt,ticks:Kt,font:Xt,rotate:0};function he(t,e){return L((3+2*(t||1))*e,3)}function de(t,e,l,n){let i=t.scales[t.series[e].scale],o=t.bands&&t.bands.some(t=>t.series[0]==e);return 3==i.distr||o?i.min:0}const me={scale:"y",auto:!0,sorted:0,show:!0,band:!1,spanGaps:!1,alpha:1,points:{show:function(t,e){let l=(0==t.scales[t.series[0].scale].ori?t.bbox.width:t.bbox.height)/(t.series[e].points.space*tt),n=t.series[0].idxs;return n[1]-n[0]<=l}},values:null,min:T,max:-T,idxs:[],path:null,clip:null};function pe(t,e,l,n,i){return l/10}const ge={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},we=q({},ge,{time:!1,ori:1}),xe={};function be(t,e){let l=xe[t];if(!l){let e=[];l={key:t,sub(t){e.push(t)},unsub(t){e=e.filter(e=>e!=t)},pub(t,l,n,i,o,s,r){for(let r=0;r<e.length;r++)e[r]!=l&&e[r].pub(t,l,n,i,o,s,r)}},null!=t&&(xe[t]=l)}return l}function _e(t,e,l){const n=t.series[e],i=t.scales,o=t.bbox,s=i[t.series[0].scale];let r=t._data[0],u=t._data[e],a=s,c=i[n.scale],f=o.left,h=o.top,d=o.width,m=o.height,p=t.valToPosH,g=t.valToPosV;return 0==a.ori?l(n,r,u,a,c,p,g,f,h,d,m,Se,De,Ee,Ae,We):l(n,r,u,a,c,g,p,h,f,m,d,ze,Te,Ye,Pe,Ce)}function ke(t,e,l,n,i){return _e(t,e,(t,e,o,s,r,u,a,c,f,h,d)=>{const m=s.dir*(0==s.ori?1:-1),p=0==s.ori?De:Te;let g,w;1==m?(g=l,w=n):(g=n,w=l);let x=E(u(e[g],s,h,c),.5),b=E(a(o[g],r,d,f),.5),_=E(u(e[w],s,h,c),.5),k=E(a(r.max,r,d,f),.5),v=new Path2D(i);return p(v,_,k),p(v,x,k),p(v,x,b),v})}function ve(t,e,l,n,i,o){let s=null;if(t.length>0){s=new Path2D;const r=0==e?Ee:Ye;let u=l;for(let e=0;e<t.length;e++){let l=t[e];r(s,u,n,l[0]-u,n+o),u=l[1]}r(s,u,n,l+i-u,n+o)}return s}function ye(t,e,l){if(l>e){let n=t[t.length-1];n&&n[0]==e?n[1]=l:t.push([e,l])}}function Me(t){return 0==t?P:1==t?b:e=>E(e,t)}function Se(t,e,l){t.moveTo(e,l)}function ze(t,e,l){t.moveTo(l,e)}function De(t,e,l){t.lineTo(e,l)}function Te(t,e,l){t.lineTo(l,e)}function Ee(t,e,l,n,i){t.rect(e,l,n,i)}function Ye(t,e,l,n,i){t.rect(l,e,i,n)}function Ae(t,e,l,n,i,o){t.arc(e,l,n,i,o)}function Pe(t,e,l,n,i,o){t.arc(l,e,n,i,o)}function We(t,e,l,n,i,o,s){t.bezierCurveTo(e,l,n,i,o,s)}function Ce(t,e,l,n,i,o,s){t.bezierCurveTo(l,e,i,n,s,o)}function He(t){return(e,l,n,i,o,s)=>{n!=i&&(o!=n&&s!=n&&t(e,l,n),o!=i&&s!=i&&t(e,l,i),t(e,l,s))}}const Fe=He(De),Re=He(Te);function Le(){return(t,e,l,n)=>_e(t,e,(o,s,r,u,a,c,f,h,d,m,p)=>{let g,w,x=o.pxRound;0==u.ori?(g=De,w=Fe):(g=Te,w=Re);const b=u.dir*(0==u.ori?1:-1),_={stroke:new Path2D,fill:null,clip:null,band:null},y=_.stroke;let M,S,z,D,Y=T,A=-T,P=[],W=x(c(s[1==b?l:n],u,m,h)),C=!1,H=i(r,l,n,1*b),F=i(r,l,n,-1*b),R=E(c(s[H],u,m,h),.5),L=E(c(s[F],u,m,h),.5);R>h&&ye(P,h,R);for(let t=1==b?l:n;t>=l&&t<=n;t+=b){let e=x(c(s[t],u,m,h));if(e==W)null!=r[t]?(S=x(f(r[t],a,p,d)),Y==T&&(g(y,e,S),M=S),Y=k(S,Y),A=v(S,A)):C||null!==r[t]||(C=!0);else{let l=!1;Y!=T?(w(y,W,Y,A,M,S),z=D=W):C&&(l=!0,C=!1),null!=r[t]?(S=x(f(r[t],a,p,d)),g(y,e,S),Y=A=M=S,e-W>1&&null===r[t-b]&&(l=!0)):(Y=T,A=-T,C||null!==r[t]||(C=!0)),l&&ye(P,z,e),W=e}}if(Y!=T&&Y!=A&&D!=W&&w(y,W,Y,A,M,S),L<h+m&&ye(P,L,h+m),null!=o.fill){let l=_.fill=new Path2D(y),n=x(f(o.fillTo(t,e,o.min,o.max),a,p,d));g(l,L,n),g(l,R,n)}return o.spanGaps||(_.clip=ve(P,u.ori,h,d,m,p)),t.bands.length>0&&(_.band=ke(t,e,l,n,y)),_})}function Ne(t,e,l,n,i,o){const s=new Path2D,r=t.length;let u,a,c,f,h,d,m,p,g,w,x,b,_,k,v,S,z,D,T,E,Y,A,P,W,C;n(s,o(t[0]),o(e[0]));for(let n=0;n<r-1;n++){let o=0==n?0:n-1;u=t[o],a=e[o],c=t[n],f=e[n],h=t[n+1],d=e[n+1],n+2<r?(m=t[n+2],p=e[n+2]):(m=h,p=d),_=M(y(u-c,2)+y(a-f,2)),k=M(y(c-h,2)+y(f-d,2)),v=M(y(h-m,2)+y(d-p,2)),E=y(v,l),A=y(v,2*l),Y=y(k,l),P=y(k,2*l),C=y(_,l),W=y(_,2*l),S=2*W+3*C*Y+P,z=2*A+3*E*Y+P,D=3*C*(C+Y),D>0&&(D=1/D),T=3*E*(E+Y),T>0&&(T=1/T),g=(-P*u+S*c+W*h)*D,w=(-P*a+S*f+W*d)*D,x=(A*c+z*h-P*m)*T,b=(A*f+z*d-P*p)*T,0==g&&0==w&&(g=c,w=f),0==x&&0==b&&(x=h,b=d),i(s,g,w,x,b,h,d)}return s}const Ie=new Set;function Oe(){Ie.forEach(t=>{t.syncRect(!0)})}at("resize",$,Oe),at("scroll",$,Oe,!0);const Ve=Le();function je(t,e,l,n){return(n?[t[0],t[1]].concat(t.slice(2)):[t[0]].concat(t.slice(1))).map((t,n)=>Ge(t,n,e,l))}function Ge(t,e,l,n){return q({},0==e?l:n,t)}const Je=[null,null];function Ue(t,e,l){return null==e?Je:[e,l]}const Be=Ue;function qe(t,e,l){return null==e?Je:f(e,l,.1,!0)}function Ze(t,e,l,n){return null==e?Je:r(e,l,t.scales[n].log,!1)}const Ke=Ze;function Xe(t,e,l,n){return null==e?Je:u(e,l,t.scales[n].log,!1)}const Qe=Xe;function $e(t){let e;return[t=t.replace(/(\d+)px/,(t,l)=>(e=b(l*tt))+"px"),e]}function tl(t,e,l){const i={};function o(t,e){return((3==e.distr?S(t>0?t:e.clamp(i,t,e.min,e.max,e.key)):4==e.distr?D(t,e.asinh):t)-e._min)/(e._max-e._min)}function s(t,e,l,n){let i=o(t,e);return n+l*(-1==e.dir?1-i:i)}function a(t,e,l,n){let i=o(t,e);return n+l*(-1==e.dir?i:1-i)}function c(t,e,l,n){return 0==e.ori?s(t,e,l,n):a(t,e,l,n)}i.valToPosH=s,i.valToPosV=a;let d=!1;i.status=0;const m=i.root=ot("uplot");if(null!=t.id&&(m.id=t.id),et(m,t.class),t.title){ot("u-title",m).textContent=t.title}const M=it("canvas"),z=i.ctx=M.getContext("2d"),P=ot("u-wrap",m),R=ot("u-under",P);P.appendChild(M);const I=ot("u-over",P),O=+h((t=B(t)).pxAlign,1),Z=Me(O);(t.plugins||[]).forEach(e=>{e.opts&&(t=e.opts(i,t)||t)});const $=t.ms||.001,rt=i.series=je(t.series||[],te,me,!1),ut=i.axes=je(t.axes||[],$t,fe,!0),ft=i.scales={},ht=i.bands=t.bands||[];ht.forEach(t=>{t.fill=A(t.fill||null)});const dt=rt[0].scale,mt={axes:function(){ut.forEach((t,e)=>{if(!t.show||!t._show)return;let l=ft[t.scale],n=t.side,o=n%2,s=0==o?Ye:We,r=0==o?Te:Ee,u=b(t.gap*tt),a=t.ticks,f=a.show?b(a.size*tt):0,[h,d]=t._found,m=t._splits,p=2==l.distr?m.map(t=>dl[t]):m,w=2==l.distr?dl[m[1]]-dl[m[0]]:h,x=t._rotate*-g/180,_=Z(t._pos*tt),k=_+(f+u)*(0==o&&0==n||1==o&&3==n?-1:1),v=0==o?k:0,y=1==o?k:0;z.font=t.font[0],z.fillStyle=t.stroke(i,e),z.textAlign=1==t.align?"left":2==t.align?"right":x>0?"left":x<0?"right":0==o?"center":3==n?"right":"left",z.textBaseline=x||1==o?"middle":2==n?"top":"bottom";let M=1.5*t.font[1],S=m.map(t=>Z(c(t,l,s,r)));if(t._values.forEach((t,e)=>{null!=t&&(0==o?y=S[e]:v=S[e],(""+t).split(/\n/gm).forEach((t,e)=>{x?(z.save(),z.translate(y,v+e*M),z.rotate(x),z.fillText(t,0,0),z.restore()):z.fillText(t,y,v+e*M)}))}),t.label){z.save();let e=b(t._lpos*tt);1==o?(y=v=0,z.translate(e,b(Ee+We/2)),z.rotate((3==n?-g:g)/2)):(y=b(Te+Ye/2),v=e),z.font=t.labelFont[0],z.textAlign="center",z.textBaseline=2==n?"top":"bottom",z.fillText(t.label,y,v),z.restore()}a.show&&kl(S,a.filter(i,p,e,d,w),o,n,_,f,L(a.width*tt,3),a.stroke(i,e),a.dash,a.cap);let D=t.grid;D.show&&kl(S,D.filter(i,p,e,d,w),o,0==o?2:1,0==o?Ee:Te,0==o?We:Ye,L(D.width*tt,3),D.stroke(i,e),D.dash,D.cap)}),_n("drawAxes")},series:function(){al>0&&(rt.forEach((t,l)=>{if(l>0&&t.show&&null==t._paths){let n=function(t){let e=Y(cl-1,0,al-1),l=Y(fl+1,0,al-1);for(;null==t[e]&&e>0;)e--;for(;null==t[l]&&l<al-1;)l++;return[e,l]}(e[l]);t._paths=t.paths(i,l,n[0],n[1])}}),rt.forEach((t,l)=>{l>0&&t.show&&(t._paths&&function(t){const e=rt[t],{stroke:l,fill:n,clip:o}=e._paths,s=L(e.width*tt,3),r=s%2/2,u=e._stroke=e.stroke(i,t),a=e._fill=e.fill(i,t);z.globalAlpha=e.alpha;const c=1==e.pxAlign;c&&z.translate(r,r),z.save();let f=Te,h=Ee,d=Ye,m=We,p=s*tt/2;0==e.min&&(m+=p);0==e.max&&(h-=p,m+=p);z.beginPath(),z.rect(f,h,d,m),z.clip(),o&&z.clip(o),function(t,e,l,n,o,s,r,u){let a=!1;ht.forEach((c,f)=>{if(c.series[0]==t){let t=rt[c.series[1]],h=(t._paths||V).band;z.save();let d=null;t.show&&h&&(d=c.fill(i,f)||s,z.clip(h)),bl(e,l,n,o,d,r,u),z.restore(),a=!0}}),a||bl(e,l,n,o,s,r,u)}(t,u,s,e.dash,e.cap,a,l,n),z.restore(),c&&z.translate(-r,-r),z.globalAlpha=1}(l),t.points.show(i,l,cl,fl)&&function(t){let l=rt[t],n=l.points,o=l.pxRound;const s=L(n.width*tt,3),r=s%2/2,u=n.width>0;let a=(n.size-n.width)/2*tt,c=L(2*a,3);const f=1==l.pxAlign;f&&z.translate(r,r),z.save(),z.beginPath(),z.rect(Te-c,Ee-c,Ye+2*c,We+2*c),z.clip(),z.globalAlpha=l.alpha;const h=new Path2D,d=ft[l.scale];let m,p,w,x;0==wt.ori?(m=Ye,p=Te,w=We,x=Ee):(m=We,p=Ee,w=Ye,x=Te);for(let l=cl;l<=fl;l++)if(null!=e[t][l]){let n=o(_t(e[0][l],wt,m,p)),i=o(kt(e[t][l],d,w,x));vt(h,n+a,i),yt(h,n,i,a,0,2*g)}const b=n._stroke=n.stroke(i,t),_=n._fill=n.fill(i,t);wl(b,s,n.dash,n.cap,_||(u?"#fff":l._stroke)),z.fill(h),u&&z.stroke(h),z.globalAlpha=1,z.restore(),f&&z.translate(-r,-r)}(l),_n("drawSeries",l))}))}},pt=(t.drawOrder||["axes","series"]).map(t=>mt[t]);function gt(e){let l=ft[e];if(null==l){let n=(t.scales||V)[e]||V;if(null!=n.from)gt(n.from),ft[e]=q({},ft[n.from],n);else{l=ft[e]=q({},e==dt?ge:we,n),l.key=e;let t=l.time,i=l.range,o=j(i);if(e!=dt&&!o&&J(i)){let t=i;i=(e,l,n)=>null==l?Je:f(l,n,t)}l.range=A(i||(t?Be:e==dt?3==l.distr?Ke:4==l.distr?Qe:Ue:3==l.distr?Ze:4==l.distr?Xe:qe)),l.auto=A(!o&&l.auto),l.clamp=A(l.clamp||pe),l._min=l._max=null}}}gt("x"),gt("y"),rt.forEach(t=>{gt(t.scale)}),ut.forEach(t=>{gt(t.scale)});for(let e in t.scales)gt(e);const wt=ft[dt],xt=wt.distr;let _t,kt,vt,yt;0==wt.ori?(et(m,"u-hz"),_t=s,kt=a,vt=Se,yt=Ae):(et(m,"u-vt"),_t=a,kt=s,vt=ze,yt=Pe);const Mt={};for(let t in ft){let e=ft[t];null==e.min&&null==e.max||(Mt[t]={min:e.min,max:e.max},e.min=e.max=null)}const Dt=t.tzDate||(t=>new Date(b(t/$))),Tt=t.fmtDate||bt,Et=1==$?Ht(Dt):Lt(Dt),Yt=It(Dt,Nt(1==$?Ct:Rt,Tt)),At=jt(Dt,Vt("{YYYY}-{MM}-{DD} {h}:{mm}{aa}",Tt)),Pt=i.legend=q({},Gt,t.legend),Ot=Pt.show;let Jt;Pt.width=A(Pt.width),Pt.dash=A(Pt.dash),Pt.stroke=A(Pt.stroke),Pt.fill=A(Pt.fill);let Ut,Bt=[],Zt=!1,Kt={};if(Pt.live){const t=rt[1]?rt[1].values:null;Zt=null!=t,Ut=Zt?t(i,1,0):{_:0};for(let t in Ut)Kt[t]="--"}if(Ot)if(Jt=it("table","u-legend",m),Zt){let t=it("tr","u-thead",Jt);for(var Xt in it("th",null,t),Ut)it("th","u-label",t).textContent=Xt}else et(Jt,"u-inline"),Pt.live&&et(Jt,"u-live");const Qt={show:!0},oe={show:!1};const se=new Map;function re(t,e,l){const n=se.get(e)||{},o=tl.bind[t](i,e,l);o&&(at(t,e,n[t]=o),se.set(e,n))}function ue(t,e,l){const n=se.get(e)||{};for(let l in n)null!=t&&l!=t||(ct(l,e,n[l]),delete n[l]);null==t&&se.delete(e)}let xe=0,_e=0,ke=0,ve=0,ye=0,De=0,Te=0,Ee=0,Ye=0,We=0;i.bbox={};let Ce=!1,He=!1,Fe=!1,Re=!1,Le=!1;function Ne(t,e){t==i.width&&e==i.height||Oe(t,e),Ml(!1),Fe=!0,He=!0,Re=!0,Le=!0,Ll()}function Oe(t,e){i.width=xe=ke=t,i.height=_e=ve=e,ye=De=0,function(){let t=!1,e=!1,l=!1,n=!1;ut.forEach((i,o)=>{if(i.show&&i._show){let{side:o,_size:s}=i,r=o%2,u=s+(i.labelSize=null!=i.label?i.labelSize||30:0);u>0&&(r?(ke-=u,3==o?(ye+=u,n=!0):l=!0):(ve-=u,0==o?(De+=u,t=!0):e=!0))}}),ol[0]=t,ol[1]=l,ol[2]=e,ol[3]=n,ke-=ul[1]+ul[3],ye+=ul[3],ve-=ul[2]+ul[0],De+=ul[0]}(),function(){let t=ye+ke,e=De+ve,l=ye,n=De;function i(i,o){switch(i){case 1:return t+=o,t-o;case 2:return e+=o,e-o;case 3:return l-=o,l+o;case 0:return n-=o,n+o}}ut.forEach((t,e)=>{if(t.show&&t._show){let e=t.side;t._pos=i(e,t._size),null!=t.label&&(t._lpos=i(e,t.labelSize))}})}();let l=i.bbox;Te=l.left=E(ye*tt,.5),Ee=l.top=E(De*tt,.5),Ye=l.width=E(ke*tt,.5),We=l.height=E(ve*tt,.5)}i.setSize=function({width:t,height:e}){Ne(t,e)};const tl=i.cursor=q({},qt,t.cursor);{tl._lock=!1;let t=tl.points;t.show=A(t.show),t.size=A(t.size),t.stroke=A(t.stroke),t.width=A(t.width),t.fill=A(t.fill)}const el=i.focus=q({},t.focus||{alpha:.3},tl.focus),ll=el.prox>=0;let nl=[null];function il(t,e){let l=ft[t.scale].time,n=t.value;if(t.value=l?G(n)?jt(Dt,Vt(n,Tt)):n||At:n||ce,t.label=t.label||(l?"Time":"Value"),e>0){t.width=null==t.width?1:t.width,t.paths=t.paths||Ve||C,t.fillTo=A(t.fillTo||de),t.pxAlign=+h(t.pxAlign,O),t.pxRound=Me(t.pxAlign),t.stroke=A(t.stroke||null),t.fill=A(t.fill||null),t._stroke=t._fill=t._paths=t._focus=null;let e=he(t.width,1),l=t.points=q({},{size:e,width:v(1,.2*e),stroke:t.stroke,space:2*e,_stroke:null,_fill:null},t.points);l.show=A(l.show),l.fill=A(l.fill),l.stroke=A(l.stroke)}if(Ot&&(Bt.splice(e,0,function(t,e){if(0==e&&(Zt||!Pt.live))return null;let l=[],n=it("tr","u-series",Jt,Jt.childNodes[e]);et(n,t.class),t.show||et(n,X);let o=it("th",null,n),s=ot("u-marker",o);if(e>0){let t=Pt.width(i,e);t&&(s.style.border=t+"px "+Pt.dash(i,e)+" "+Pt.stroke(i,e)),s.style.background=Pt.fill(i,e)}let r=ot("u-label",o);for(var u in r.textContent=t.label,e>0&&(re("click",o,e=>{if(tl._lock)return;let l=rt.indexOf(t);if(e.ctrlKey!=Pt.isolate){let t=rt.some((t,e)=>e>0&&e!=l&&t.show);rt.forEach((e,n)=>{n>0&&Zl(n,t?n==l?Qt:oe:Qt,kn.setSeries)})}else Zl(l,{show:!t.show},kn.setSeries)}),ll&&re("mouseenter",o,e=>{tl._lock||Zl(rt.indexOf(t),$l,kn.setSeries)})),Ut){let t=it("td","u-value",n);t.textContent="--",l.push(t)}return l}(t,e)),Pt.values.push(null)),tl.show){let l=function(t,e){if(e>0){let l=tl.points.show(i,e);if(l)return et(l,"u-cursor-pt"),et(l,t.class),st(l,-10,-10,ke,ve),I.insertBefore(l,nl[e]),l}}(t,e);l&&nl.splice(e,0,l)}}i.addSeries=function(t,e){t=Ge(t,e=null==e?rt.length:e,te,me),rt.splice(e,0,t),il(rt[e],e)},i.delSeries=function(t){if(rt.splice(t,1),Ot){Pt.values.splice(t,1);let e=Bt.splice(t,1)[0][0].parentNode;ue(null,e.firstChild),e.remove()}nl.length>1&&nl.splice(t,1)[0].remove()},rt.forEach(il);const ol=[!1,!1,!1,!1];function sl(t,e,l,n){let[i,o,s,r]=l,u=e%2,a=0;return 0==u&&(r||o)&&(a=0==e&&!i||2==e&&!s?b($t.size/3):0),1==u&&(i||s)&&(a=1==e&&!o||3==e&&!r?b(fe.size/2):0),a}ut.forEach((function(t,e){if(t._show=t.show,t.show){let l=t.side%2,n=ft[t.scale];null==n&&(t.scale=l?rt[1].scale:dt,n=ft[t.scale]);let o=n.time;t.size=A(t.size),t.space=A(t.space),t.rotate=A(t.rotate),t.incrs=A(t.incrs||(2==n.distr?St:o?1==$?Wt:Ft:zt)),t.splits=A(t.splits||(o&&1==n.distr?Et:3==n.distr?ne:4==n.distr?ie:le)),t.stroke=A(t.stroke),t.grid.stroke=A(t.grid.stroke),t.ticks.stroke=A(t.ticks.stroke);let s=t.values;t.values=j(s)&&!j(s[0])?A(s):o?j(s)?It(Dt,Nt(s,Tt)):G(s)?function(t,e){let l=bt(e);return(e,n,i,o,s)=>n.map(e=>l(t(e)))}(Dt,s):s||Yt:s||ee,t.filter=A(t.filter||(n.distr>=3?ae:W)),t.font=$e(t.font),t.labelFont=$e(t.labelFont),t._size=t.size(i,null,e,0),t._space=t._rotate=t._incrs=t._found=t._splits=t._values=null,t._size>0&&(ol[e]=!0)}}));const rl=i.padding=(t.padding||[sl,sl,sl,sl]).map(t=>A(h(t,sl))),ul=i._padding=rl.map((t,e)=>t(i,e,ol,0));let al,cl=null,fl=null;const hl=rt[0].idxs;let dl=null,ml=!1;function pl(t,l){if((e=(t||[]).slice())[0]=e[0]||[],i.data=e.slice(),dl=e[0],al=dl.length,2==xt&&(e[0]=dl.map((t,e)=>e)),i._data=e,Ml(!0),_n("setData"),!1!==l){let t=wt;t.auto(i,ml)?gl():ql(dt,t.min,t.max),Re=tl.left>=0,Le=!0,Ll()}}function gl(){let t,l;ml=!0,al>0?(cl=hl[0]=0,fl=hl[1]=al-1,t=e[0][cl],l=e[0][fl],2==xt?(t=cl,l=fl):1==al&&(3==xt?[t,l]=r(t,t,wt.log,!1):4==xt?[t,l]=u(t,t,wt.log,!1):wt.time?l=t+b(86400/$):[t,l]=f(t,l,.1,!0))):(cl=hl[0]=t=null,fl=hl[1]=l=null),ql(dt,t,l)}function wl(t,e,l,n,i){z.strokeStyle=t||"#0000",z.lineWidth=e,z.lineJoin="round",z.lineCap=n||"butt",z.setLineDash(l||[]),z.fillStyle=i||"#0000"}function xl(){let t=B(ft,U);for(let e in t){let l=t[e],n=Mt[e];if(null!=n&&null!=n.min)q(l,n),e==dt&&Ml(!0);else if(e!=dt)if(0==al&&null==l.from){let t=l.range(i,null,null,e);l.min=t[0],l.max=t[1]}else l.min=T,l.max=-T}if(al>0){rt.forEach((l,o)=>{let s=l.scale,r=t[s],u=Mt[s];if(0==o){let t=r.range(i,r.min,r.max,s);r.min=t[0],r.max=t[1],cl=n(r.min,e[0]),fl=n(r.max,e[0]),e[0][cl]<r.min&&cl++,e[0][fl]>r.max&&fl--,l.min=dl[cl],l.max=dl[fl]}else if(l.show&&l.auto&&r.auto(i,ml)&&(null==u||null==u.min)){let t=null==l.min?3==r.distr?function(t,e,l){let n=T,i=-T;for(let o=e;o<=l;o++)t[o]>0&&(n=k(n,t[o]),i=v(i,t[o]));return[n==T?1:n,i==-T?10:i]}(e[o],cl,fl):function(t,e,l,n){let i=T,o=-T;if(1==n)i=t[e],o=t[l];else if(-1==n)i=t[l],o=t[e];else for(let n=e;n<=l;n++)null!=t[n]&&(i=k(i,t[n]),o=v(o,t[n]));return[i,o]}(e[o],cl,fl,l.sorted):[l.min,l.max];r.min=k(r.min,l.min=t[0]),r.max=v(r.max,l.max=t[1])}l.idxs[0]=cl,l.idxs[1]=fl});for(let e in t){let l=t[e],n=Mt[e];if(null==l.from&&(null==n||null==n.min)){let t=l.range(i,l.min==T?null:l.min,l.max==-T?null:l.max,e);l.min=t[0],l.max=t[1]}}}for(let e in t){let l=t[e];if(null!=l.from){let n=t[l.from],o=l.range(i,n.min,n.max,e);l.min=o[0],l.max=o[1]}}let l={},o=!1;for(let e in t){let n=t[e],i=ft[e];if(i.min!=n.min||i.max!=n.max){i.min=n.min,i.max=n.max;let t=i.distr;i._min=3==t?S(i.min):4==t?D(i.min,i.asinh):i.min,i._max=3==t?S(i.max):4==t?D(i.max,i.asinh):i.max,l[e]=o=!0}}if(o){rt.forEach(t=>{l[t.scale]&&(t._paths=null)});for(let t in l)Fe=!0,_n("setScale",t);tl.show&&(Re=tl.left>=0)}for(let t in Mt)Mt[t]=null}function bl(t,e,l,n,i,o,s){wl(t,e,l,n,i),i&&s&&z.fill(s),t&&o&&e&&z.stroke(o)}function _l(t,e,l,n){let o,s=ut[t];if(n<=0)o=[0,0];else{let r=s._space=s.space(i,t,e,l,n),u=s._incrs=s.incrs(i,t,e,l,n,r);o=s._found=function(t,e,l,n,i){let o=n/(e-t),s=(""+x(t)).length;for(var r=0;r<l.length;r++){let t=l[r]*o,e=l[r]<10?N.get(l[r]):0;if(t>=i&&s+e<17)return[l[r],t]}return[0,0]}(e,l,u,n,r)}return o}function kl(t,e,l,n,i,o,s,r,u,a){let c=s%2/2;1==O&&z.translate(c,c),wl(r,s,u,a),z.beginPath();let f,h,d,m,p=i+(0==n||3==n?-o:o);0==l?(h=i,m=p):(f=i,d=p),t.forEach((t,n)=>{null!=e[n]&&(0==l?f=d=t:h=m=t,z.moveTo(f,h),z.lineTo(d,m))}),z.stroke(),1==O&&z.translate(-c,-c)}function vl(t){let e=!0;return ut.forEach((l,n)=>{if(!l.show)return;let o=ft[l.scale];if(null==o.min)return void(l._show&&(e=!1,l._show=!1,Ml(!1)));l._show||(e=!1,l._show=!0,Ml(!1));let s=l.side,r=s%2,{min:u,max:a}=o,[c,f]=_l(n,u,a,0==r?ke:ve);if(0==f)return;let h=2==o.distr,d=l._splits=l.splits(i,n,u,a,c,f,h),m=2==o.distr?d.map(t=>dl[t]):d,p=2==o.distr?dl[d[1]]-dl[d[0]]:c,g=l._values=l.values(i,l.filter(i,m,n,f,p),n,f,p);l._rotate=2==s?l.rotate(i,g,n,f):0;let w=l._size;l._size=_(l.size(i,g,n,t)),null!=w&&l._size!=w&&(e=!1)}),e}function yl(t){let e=!0;return rl.forEach((l,n)=>{let o=l(i,n,ol,t);o!=ul[n]&&(e=!1),ul[n]=o}),e}function Ml(t){rt.forEach((e,l)=>{l>0&&(e._paths=null,t&&(e.min=null,e.max=null))})}i.setData=pl;let Sl,zl,Dl,Tl,El,Yl,Al,Pl,Wl,Cl,Hl,Fl,Rl=!1;function Ll(){Rl||(K(Nl),Rl=!0)}function Nl(){Ce&&(xl(),Ce=!1),Fe&&(!function(){let t=!1,e=0;for(;!t;){e++;let l=vl(e),n=yl(e);t=l&&n,t||(Oe(i.width,i.height),He=!0)}}(),Fe=!1),He&&(nt(R,"left",ye),nt(R,"top",De),nt(R,"width",ke),nt(R,"height",ve),nt(I,"left",ye),nt(I,"top",De),nt(I,"width",ke),nt(I,"height",ve),nt(P,"width",xe),nt(P,"height",_e),M.width=b(xe*tt),M.height=b(_e*tt),fn(!1),_n("setSize"),He=!1),xe>0&&_e>0&&(z.clearRect(0,0,M.width,M.height),_n("drawClear"),pt.forEach(t=>t()),_n("draw")),tl.show&&Re&&(an(),Re=!1),d||(d=!0,i.status=1,_n("ready")),ml=!1,Rl=!1}function Il(t,l){let o=ft[t];if(null==o.from){if(0==al){let e=o.range(i,l.min,l.max,t);l.min=e[0],l.max=e[1]}if(l.min>l.max){let t=l.min;l.min=l.max,l.max=t}if(al>1&&null!=l.min&&null!=l.max&&l.max-l.min<1e-16)return;t==dt&&2==o.distr&&al>0&&(l.min=n(l.min,e[0]),l.max=n(l.max,e[0])),Mt[t]=l,Ce=!0,Ll()}}i.redraw=(t,e)=>{Fe=e||!1,!1!==t?ql(dt,wt.min,wt.max):Ll()},i.setScale=Il;let Ol=!1;const Vl=tl.drag;let jl=Vl.x,Gl=Vl.y;tl.show&&(tl.x&&(Sl=ot("u-cursor-x",I)),tl.y&&(zl=ot("u-cursor-y",I)),0==wt.ori?(Dl=Sl,Tl=zl):(Dl=zl,Tl=Sl),Hl=tl.left,Fl=tl.top);const Jl=i.select=q({show:!0,over:!0,left:0,width:0,top:0,height:0},t.select),Ul=Jl.show?ot("u-select",Jl.over?I:R):null;function Bl(t,e){if(Jl.show){for(let e in t)nt(Ul,e,Jl[e]=t[e]);!1!==e&&_n("setSelect")}}function ql(t,e,l){Il(t,{min:e,max:l})}function Zl(t,e,l){let n=rt[t];null!=e.focus&&function(t){if(t!=Ql){let e=null==t,l=1!=el.alpha;rt.forEach((n,i)=>{let o=e||0==i||i==t;n._focus=e?null:o,l&&function(t,e){rt[t].alpha=e,tl.show&&nl[t]&&(nl[t].style.opacity=e);Ot&&Bt[t]&&(Bt[t][0].parentNode.style.opacity=e)}(i,o?1:el.alpha)}),Ql=t,l&&Ll()}}(t),null!=e.show&&(n.show=e.show,function(t,e){let l=rt[t],n=Ot?Bt[t][0].parentNode:null;l.show?n&&lt(n,X):(n&&et(n,X),nl.length>1&&st(nl[t],-10,-10,ke,ve))}(t,e.show),ql(n.scale,null,null),Ll()),_n("setSeries",t,e),l&&yn("setSeries",i,t,e)}let Kl,Xl,Ql;i.setSelect=Bl,i.setSeries=Zl;const $l={focus:!0},tn={focus:!1};function en(t,e){let l=ft[e],n=ke;1==l.ori&&(n=ve,t=n-t),-1==l.dir&&(t=n-t);let i=l._min,o=i+(l._max-i)*(t/n),s=l.distr;return 3==s?y(10,o):4==s?((t,e=1)=>p.sinh(t/e))(o,l.asinh):o}function ln(t,e){nt(Ul,"left",Jl.left=t),nt(Ul,"width",Jl.width=e)}function nn(t,e){nt(Ul,"top",Jl.top=t),nt(Ul,"height",Jl.height=e)}Ot&&ll&&at("mouseleave",Jt,t=>{tl._lock||(Zl(null,tn,kn.setSeries),an())}),i.valToIdx=t=>n(t,e[0]),i.posToIdx=function(t){return n(en(t,dt),e[0],cl,fl)},i.posToVal=en,i.valToPos=(t,e,l)=>0==ft[e].ori?s(t,ft[e],l?Ye:ke,l?Te:0):a(t,ft[e],l?We:ve,l?Ee:0),i.batch=function(t){t(i),Ll()},i.setCursor=t=>{Hl=t.left,Fl=t.top,an()};let on=0==wt.ori?ln:nn,sn=1==wt.ori?ln:nn;function rn(t,e){if(null!=t){let e=t.idx;Pt.idx=e,rt.forEach((t,l)=>{(l>0||!Zt)&&un(l,e)})}Ot&&Pt.live&&function(){if(Ot&&Pt.live)for(let t=0;t<rt.length;t++){if(0==t&&Zt)continue;let e=Pt.values[t],l=0;for(let n in e)Bt[t][l++].firstChild.nodeValue=e[n]}}(),Le=!1,!1!==e&&_n("setLegend")}function un(t,l){let n;if(null==l)n=Kt;else{let o=rt[t],s=0==t&&2==xt?dl:e[t];n=Zt?o.values(i,t,l):{_:o.value(i,s[l],t,l)}}Pt.values[t]=n}function an(t,l){let o;Wl=Hl,Cl=Fl,[Hl,Fl]=tl.move(i,Hl,Fl),tl.show&&(Dl&&st(Dl,b(Hl),0,ke,ve),Tl&&st(Tl,0,b(Fl),ke,ve));let s=!1,r=cl>fl;Kl=T;let u=0==wt.ori?ke:ve,a=1==wt.ori?ke:ve;if(Hl<0||0==al||r){o=null;for(let t=0;t<rt.length;t++)t>0&&nl.length>1&&st(nl[t],-10,-10,ke,ve);if(ll&&Zl(null,$l,kn.setSeries),Pt.live){s=!0;for(let t=0;t<rt.length;t++)Pt.values[t]=Kt}}else{let t=en(0==wt.ori?Hl:Fl,dt);o=n(t,e[0],cl,fl);let l=F(_t(e[0][o],wt,u,0),.5);for(let n=0;n<rt.length;n++){let r=rt[n],c=tl.dataIdx(i,n,o,t),f=c==o?l:F(_t(e[0][c],wt,u,0),.5);if(n>0&&r.show){let t,l,i=e[n][c],o=null==i?-10:F(kt(i,ft[r.scale],a,0),.5);if(o>0){let t=w(o-Fl);t<=Kl&&(Kl=t,Xl=n)}0==wt.ori?(t=f,l=o):(t=o,l=f),nl.length>1&&st(nl[n],t,l,ke,ve)}if(Pt.live){if(c==tl.idx&&!Le||0==n&&Zt)continue;s=!0,un(n,c)}}}if(s&&(Pt.idx=o,rn()),Jl.show&&Ol)if(null!=l){let[t,e]=kn.scales,n=l.cursor.drag;jl=n._x,Gl=n._y;let i,o,s,r,c,{left:f,top:h,width:d,height:m}=l.select,p=l.scales[t].ori,g=l.posToVal;t&&(0==p?(i=f,o=d):(i=h,o=m),s=ft[t],r=_t(g(i,t),s,u,0),c=_t(g(i+o,t),s,u,0),on(k(r,c),w(c-r)),e||sn(0,a)),e&&(1==p?(i=f,o=d):(i=h,o=m),s=ft[e],r=kt(g(i,e),s,a,0),c=kt(g(i+o,e),s,a,0),sn(k(r,c),w(c-r)),t||on(0,u))}else{let t=w(Wl-El),e=w(Cl-Yl);if(1==wt.ori){let l=t;t=e,e=l}jl=Vl.x&&t>=Vl.dist,Gl=Vl.y&&e>=Vl.dist;let l,n,i=Vl.uni;null!=i?jl&&Gl&&(jl=t>=i,Gl=e>=i,jl||Gl||(e>t?Gl=!0:jl=!0)):Vl.x&&Vl.y&&(jl||Gl)&&(jl=Gl=!0),jl&&(0==wt.ori?(l=Al,n=Hl):(l=Pl,n=Fl),on(k(l,n),w(n-l)),Gl||sn(0,a)),Gl&&(1==wt.ori?(l=Al,n=Hl):(l=Pl,n=Fl),sn(k(l,n),w(n-l)),jl||on(0,u)),jl||Gl||(on(0,0),sn(0,0))}if(tl.idx=o,tl.left=Hl,tl.top=Fl,Vl._x=jl,Vl._y=Gl,null!=t&&(yn("mousemove",i,Hl,Fl,u,a,o),ll)){let t=kn.setSeries,e=el.prox;null==Ql?Kl<=e&&Zl(Xl,$l,t):Kl>e?Zl(null,$l,t):Xl!=Ql&&Zl(Xl,$l,t)}d&&_n("setCursor")}i.setLegend=rn;let cn=null;function fn(t){cn=t?null:I.getBoundingClientRect()}function hn(t,e,l,n,i,o,s){tl._lock||(dn(t,e,l,n,i,o,s,!1,null!=t),null!=t?an(1):an(null,e))}function dn(t,e,l,n,o,s,r,u,a){if(null==cn&&fn(!1),null!=t)l=t.clientX-cn.left,n=t.clientY-cn.top;else{if(l<0||n<0)return Hl=-10,void(Fl=-10);let t=ke,i=ve,r=o,u=s,a=l,f=n;1==wt.ori&&(t=ve,i=ke);let[h,d]=kn.scales;if(1==e.scales[h].ori&&(r=s,u=o,a=n,f=l),l=null!=h?c(e.posToVal(a,h),ft[h],t,0):t*(a/r),n=null!=d?c(e.posToVal(f,d),ft[d],i,0):i*(f/u),1==wt.ori){let t=l;l=n,n=t}}a&&((l<=1||l>=ke-1)&&(l=E(l,ke)),(n<=1||n>=ve-1)&&(n=E(n,ve))),u?(El=l,Yl=n,[Al,Pl]=tl.move(i,l,n)):(Hl=l,Fl=n)}function mn(){Bl({width:0,height:0},!1)}function pn(t,e,l,n,o,s,r){Ol=!0,jl=Gl=Vl._x=Vl._y=!1,dn(t,e,l,n,o,s,0,!0,!1),null!=t&&(re("mouseup",Q,gn),yn("mousedown",i,Al,Pl,ke,ve,null))}function gn(t,e,l,n,o,s,r){Ol=Vl._x=Vl._y=!1,dn(t,e,l,n,o,s,0,!1,!0);let{left:u,top:a,width:c,height:f}=Jl,h=c>0||f>0;if(h&&Bl(Jl),Vl.setScale&&h){let t=u,e=c,l=a,n=f;if(1==wt.ori&&(t=a,e=f,l=u,n=c),jl&&ql(dt,en(t,dt),en(t+e,dt)),Gl)for(let t in ft){let e=ft[t];t!=dt&&null==e.from&&e.min!=T&&ql(t,en(l+n,t),en(l,t))}mn()}else tl.lock&&(tl._lock=!tl._lock,tl._lock||an());null!=t&&(ue("mouseup",Q),yn("mouseup",i,Hl,Fl,ke,ve,null))}function wn(t,e,l,n,o,s,r){gl(),mn(),null!=t&&yn("dblclick",i,Hl,Fl,ke,ve,null)}const xn={};xn.mousedown=pn,xn.mousemove=hn,xn.mouseup=gn,xn.dblclick=wn,xn.setSeries=(t,e,l,n)=>{Zl(l,n)},tl.show&&(re("mousedown",I,pn),re("mousemove",I,hn),re("mouseenter",I,fn),re("mouseleave",I,(function(t,e,l,n,i,o,s){if(!tl._lock){let t=Ol;if(Ol){let t,e,l=!0,n=!0,i=10;0==wt.ori?(t=jl,e=Gl):(t=Gl,e=jl),t&&e&&(l=Hl<=i||Hl>=ke-i,n=Fl<=i||Fl>=ve-i),t&&l&&(Hl=Hl<Al?0:ke),e&&n&&(Fl=Fl<Pl?0:ve),an(1),Ol=!1}Hl=-10,Fl=-10,an(1),t&&(Ol=t)}})),re("dblclick",I,wn),Ie.add(i),i.syncRect=fn);const bn=i.hooks=t.hooks||{};function _n(t,e,l){t in bn&&bn[t].forEach(t=>{t.call(null,i,e,l)})}(t.plugins||[]).forEach(t=>{for(let e in t.hooks)bn[e]=(bn[e]||[]).concat(t.hooks[e])});const kn=q({key:null,setSeries:!1,filters:{pub:H,sub:H},scales:[dt,null]},tl.sync),vn=be(kn.key);function yn(t,e,l,n,i,o,s){kn.filters.pub(t,e,l,n,i,o,s)&&vn.pub(t,e,l,n,i,o,s)}function Mn(){_n("init",t,e),pl(e||t.data,!1),Mt[dt]?Il(dt,Mt[dt]):gl(),Ne(t.width,t.height),an(),Bl(Jl,!1)}return vn.sub(i),i.pub=function(t,e,l,n,i,o,s){kn.filters.sub(t,e,l,n,i,o,s)&&xn[t](null,e,l,n,i,o,s)},i.destroy=function(){vn.unsub(i),Ie.delete(i),se.clear(),m.remove(),_n("destroy")},l?l instanceof HTMLElement?(l.appendChild(m),Mn()):l(i,Mn):Mn(),i}tl.assign=q,tl.fmtNum=m,tl.rangeNum=f,tl.rangeLog=r,tl.rangeAsinh=u,tl.orient=_e,tl.join=function(t,e){let l=new Set;for(let e=0;e<t.length;e++){let n=t[e][0],i=n.length;for(let t=0;t<i;t++)l.add(n[t])}let n=[Array.from(l).sort((t,e)=>t-e)],i=n[0].length,o=new Map;for(let t=0;t<i;t++)o.set(n[0][t],t);for(let l=0;l<t.length;l++){let s=t[l],r=s[0];for(let t=1;t<s.length;t++){let u=s[t],a=Array(i).fill(void 0),c=e?e[l][t]:1,f=[];for(let t=0;t<u.length;t++){let e=u[t],l=o.get(r[t]);null==e?0!=c&&(a[l]=e,2==c&&f.push(l)):a[l]=e}Z(a,f,i),n.push(a)}}return n},tl.fmtDate=bt,tl.tzDate=function(t,e){let l;return"UTC"==e||"Etc/UTC"==e?l=new Date(+t+6e4*t.getTimezoneOffset()):e==_t?l=t:(l=new Date(t.toLocaleString("en-US",{timeZone:e})),l.setMilliseconds(t.getMilliseconds())),l},tl.sync=be;{tl.addGap=ye,tl.clipGaps=ve;let t=tl.paths={};t.linear=Le,t.spline=function(t){return(t,e,l,n)=>_e(t,e,(o,s,r,u,a,c,f,h,d,m,p)=>{let g,w,x,b=o.pxRound;0==u.ori?(g=Se,x=De,w=We):(g=ze,x=Te,w=Ce);const _=1*u.dir*(0==u.ori?1:-1);l=i(r,l,n,1),n=i(r,l,n,-1);let k=[],v=!1,y=b(c(s[1==_?l:n],u,m,h)),M=y,S=[],z=[];for(let t=1==_?l:n;t>=l&&t<=n;t+=_){let e=r[t],l=c(s[t],u,m,h);null!=e?(v&&(ye(k,M,l),v=!1),S.push(M=l),z.push(f(r[t],a,p,d))):null===e&&(ye(k,M,l),v=!0)}const D={stroke:Ne(S,z,.5,g,w,b),fill:null,clip:null,band:null},T=D.stroke;if(null!=o.fill){let l=D.fill=new Path2D(T),n=b(f(o.fillTo(t,e,o.min,o.max),a,p,d));x(l,M,n),x(l,y,n)}return o.spanGaps||(D.clip=ve(k,u.ori,h,d,m,p)),t.bands.length>0&&(D.band=ke(t,e,l,n,T)),D})},t.stepped=function(t){const e=h(t.align,1),l=h(t.ascDesc,!1);return(t,n,o,s)=>_e(t,n,(r,u,a,c,f,h,d,m,p,g,w)=>{let x=r.pxRound,b=0==c.ori?De:Te;const _={stroke:new Path2D,fill:null,clip:null,band:null},k=_.stroke,v=1*c.dir*(0==c.ori?1:-1);o=i(a,o,s,1),s=i(a,o,s,-1);let y=[],M=!1,S=x(d(a[1==v?o:s],f,w,p)),z=x(h(u[1==v?o:s],c,g,m)),D=z;b(k,z,S);for(let t=1==v?o:s;t>=o&&t<=s;t+=v){let n=a[t],i=x(h(u[t],c,g,m));if(null==n){null===n&&(ye(y,D,i),M=!0);continue}let o=x(d(n,f,w,p));if(M){if(ye(y,D,i),S!=o){let t=r.width*tt/2,n=y[y.length-1];n[0]+=l||1==e?t:-t,n[1]-=l||-1==e?t:-t}M=!1}1==e?b(k,i,S):b(k,D,o),b(k,i,o),S=o,D=i}if(null!=r.fill){let e=_.fill=new Path2D(k),l=x(d(r.fillTo(t,n,r.min,r.max),f,w,p));b(e,D,l),b(e,z,l)}return r.spanGaps||(_.clip=ve(y,c.ori,m,p,g,w)),t.bands.length>0&&(_.band=ke(t,n,o,s,k)),_})},t.bars=function(t){const e=h((t=t||V).size,[.6,T]),l=t.align||0,n=1-e[0],o=h(e[1],T)*tt;return(t,e,s,r)=>_e(t,e,(u,a,c,f,h,d,m,p,g,w,x)=>{let b=u.pxRound,_=0==f.ori?Ee:Ye,y=d(a[1],f,w,p)-d(a[0],f,w,p),M=y*n,S=m(u.fillTo(t,e,u.min,u.max),h,x,g),z=b(u.width*tt),D=b(k(o,y-M)-z),T=1==l?0:-1==l?D:D/2;const Y={stroke:new Path2D,fill:null,clip:null,band:null},A=t.bands.length>0;let P;A&&(Y.band=new Path2D,P=E(m(h.max,h,x,g),.5));const W=Y.stroke,C=Y.band,H=f.dir*(0==f.ori?1:-1);for(let t=1==H?s:r;t>=s&&t<=r;t+=H){let e=c[t];if(null==e){if(!A)continue;{let l=i(c,1==H?s:r,t,-H),n=i(c,t,1==H?r:s,H),o=c[l];e=o+(t-l)/(n-l)*(c[n]-o)}}let l=d(2==f.distr?t:a[t],f,w,p),n=m(e,h,x,g),o=b(l-T),u=b(v(n,S)),y=b(k(n,S)),M=u-y;null!=c[t]&&_(W,o,y,D,M),A&&(u=y,y=P,M=u-y,_(C,o,y,D,M))}return null!=u.fill&&(Y.fill=new Path2D(W)),Y})}}e.a=tl},352:function(t,e,l){"use strict";l(353)},353:function(t,e,l){}}]);