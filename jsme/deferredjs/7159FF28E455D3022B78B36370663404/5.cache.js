$wnd.jsme.runAsyncCallback5('function $Q(){this.pb=nn("file");this.pb[Zc]="gwt-FileUpload"}r(358,339,ii,$Q);_.yd=function(a){rv(this,a)};function aR(a){var b=$doc.createElement(zd);BK(og,b.tagName);this.pb=b;this.b=new kL(this.pb);this.pb[Zc]="gwt-HTML";jL(this.b,a,!0);sL(this)}r(362,363,ii,aR);function bR(){Zx();var a=$doc.createElement("textarea");!bu&&(bu=new au);!$t&&($t=new Zt);this.pb=a;this.pb[Zc]="gwt-TextArea"}r(402,403,ii,bR);\nfunction cR(a,b){var c,d;c=$doc.createElement(Og);d=$doc.createElement(yg);d[Bc]=a.a.a;d.style[Ug]=a.b.a;var e=(du(),eu(d));c.appendChild(e);cu(a.d,c);Dv(a,b,d)}function gR(){Fw.call(this);this.a=(Iw(),Pw);this.b=(Qw(),Tw);this.e[Vc]=$a;this.e[Uc]=$a}r(411,355,zh,gR);_.Td=function(a){var b;b=pn(a.pb);(a=Hv(this,a))&&this.d.removeChild(pn(b));return a};\nfunction hR(a){try{a.w=!1;var b,c,d,e,f;d=a.hb;c=a.ab;d||(a.pb.style[Vg]=re,a.ab=!1,a.ee());b=a.pb;b.style[Be]=0+(kp(),Of);b.style[Gg]=ab;e=zn()-jn(a.pb,vf)>>1;f=yn()-jn(a.pb,uf)>>1;TM(a,cj(An($doc)+e,0),cj(Bn($doc)+f,0));d||((a.ab=c)?(Nx(a.pb,Uf),a.pb.style[Vg]=Wg,zi(a.gb,200)):a.pb.style[Vg]=Wg)}finally{a.w=!0}}function iR(a){a.i=(new fM(a.j)).rc.Ve();nv(a.i,new jR(a),(pq(),pq(),qq));a.d=F(ly,q,41,[a.i])}\nfunction kR(){nN();var a,b,c,d,e;KN.call(this,(bO(),cO),null,!0);this.Tg();this.db=!0;a=new aR(this.k);this.f=new bR;this.f.pb.style[Yg]=cb;$u(this.f,cb);this.Rg();eN(this,"400px");e=new gR;e.pb.style[qe]=cb;e.e[Vc]=10;c=(Iw(),Jw);e.a=c;cR(e,a);cR(e,this.f);this.e=new Xw;this.e.e[Vc]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],Uw(this.e,a);cR(e,this.e);sN(this,e);oM(this,!1);this.Sg()}r(671,672,EI,kR);_.Rg=function(){iR(this)};\n_.Sg=function(){var a=this.f;a.pb.readOnly=!0;var b=dv(a.pb)+"-readonly";Zu(a.Gd(),b,!0)};_.Tg=function(){nM(this.I.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i=null;_.j="Close";_.k="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function jR(a){this.a=a}r(674,1,{},jR);_.ed=function(){uN(this.a,!1)};_.a=null;function lR(a){this.a=a}r(675,1,{},lR);\n_.Ic=function(){iv(this.a.f.pb,!0);this.a.f.pb.focus();var a=this.a.f,b;b=kn(a.pb,Tg).length;if(0<b&&a.kb){if(0>b)throw new ZF("Length must be a positive integer. Length: "+b);if(b>kn(a.pb,Tg).length)throw new ZF("From Index: 0  To Index: "+b+"  Text Length: "+kn(a.pb,Tg).length);try{a.pb.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function mR(a){iR(a);a.a=(new fM(a.b)).rc.Ve();nv(a.a,new nR(a),(pq(),pq(),qq));a.d=F(ly,q,41,[a.a,a.i])}\nfunction oR(a){a.j="Cancel";a.k="Paste the text to import into the text area below.";a.b="Accept";nM(a.I.b,"Paste")}function pR(a){nN();kR.call(this);this.c=a}r(677,671,EI,pR);_.Rg=function(){mR(this)};_.Sg=function(){$u(this.f,"150px")};_.Tg=function(){oR(this)};_.ee=function(){JN(this);Um((Rm(),Sm),new qR(this))};_.a=null;_.b=null;_.c=null;function rR(a){nN();pR.call(this,a)}r(676,677,EI,rR);_.Rg=function(){var a;mR(this);a=new $Q;nv(a,new sR(this),(VJ(),VJ(),WJ));this.d=F(ly,q,41,[this.a,a,this.i])};\n_.Sg=function(){$u(this.f,"150px");HB(new tR(this),this.f)};_.Tg=function(){oR(this);this.k+=" Or drag and drop a file on it."};function sR(a){this.a=a}r(678,1,{},sR);_.dd=function(a){var b,c;b=new FileReader;a=(c=a.a.target,c.files[0]);uR(b,new vR(this));b.readAsText(a)};_.a=null;function vR(a){this.a=a}r(679,1,{},vR);_.ef=function(a){aB();Yx(this.a.a.f,a)};_.a=null;function tR(a){this.a=a;this.b=new wR(this);this.c=this.d=1}r(680,510,{},tR);_.a=null;function wR(a){this.a=a}r(681,1,{},wR);\n_.ef=function(a){this.a.a.f.pb[Tg]=null!=a?a:j};_.a=null;function nR(a){this.a=a}r(685,1,{},nR);_.ed=function(){if(this.a.c){var a=this.a.c,b;b=new YA(a.a,0,kn(this.a.f.pb,Tg));OB(a.a.a,b.a)}uN(this.a,!1)};_.a=null;function qR(a){this.a=a}r(686,1,{},qR);_.Ic=function(){iv(this.a.f.pb,!0);this.a.f.pb.focus()};_.a=null;r(687,1,Sh);_.Xc=function(){var a,b;a=new xR(this.a);void 0!=$wnd.FileReader?b=new rR(a):b=new pR(a);gN(b);hR(b)};function xR(a){this.a=a}r(688,1,{},xR);_.a=null;r(689,1,Sh);\n_.Xc=function(){var a;a=new kR;var b=this.a,c;Yx(a.f,b);b=(c=dG(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);$u(a.f,20*(10>b?b:10)+Of);Um((Rm(),Sm),new lR(a));gN(a);hR(a)};function uR(a,b){a.onload=function(a){b.ef(a.target.result)}}V(671);V(677);V(676);V(688);V(674);V(675);V(685);V(686);V(678);V(679);V(680);V(681);V(362);V(411);V(402);V(358);x(DI)(5);\n//@ sourceURL=5.js\n')
