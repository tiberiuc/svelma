import{c as s,d as t,b as n,x as a,y as e,v as r,k as i,h as o,e as c,G as l,f as p,g as h,l as u,E as d,O as f,j as m,r as y,s as $,a as v,D as b,q as g}from"./chunk.dd133d53.js";import{r as k}from"./chunk.fe88db79.js";import"./chunk.0a41e55b.js";import{a as E}from"./chunk.ff8558e2.js";import"./chunk.de8c22d6.js";import{a as N}from"./chunk.116159f4.js";function T(s){var t,n,r,f,m,y,$,v,g,E,N;return{c(){t=c("section"),n=c("div"),r=c("div"),f=c("h1"),m=l("Title"),y=a(),$=c("h2"),v=l("Subtitle"),this.h()},l(s){t=p(s,"SECTION",{class:!0},!1);var a=h(t);n=p(a,"DIV",{class:!0},!1);var i=h(n);r=p(i,"DIV",{class:!0},!1);var c=h(r);f=p(c,"H1",{class:!0},!1);var l=h(f);m=e(l,"Title"),l.forEach(o),y=e(c,"\n            "),$=p(c,"H2",{class:!0},!1);var u=h($);v=e(u,"Subtitle"),u.forEach(o),c.forEach(o),i.forEach(o),a.forEach(o),this.h()},h(){f.className="title",$.className="subtitle",r.className="container",n.className="hero-body",t.className=g="hero "+s.type},m(s,a){i(s,t,a),u(t,n),u(n,r),u(r,f),u(f,m),u(r,y),u(r,$),u($,v),N=!0},p(s,n){N&&!s.type||g===(g="hero "+n.type)||(t.className=g)},i(s){N||(b(()=>{E||(E=d(t,k,{},!0)),E.run(1)}),N=!0)},o(s){E||(E=d(t,k,{},!1)),E.run(0),N=!1},d(s){s&&(o(t),E&&E.end())}}}function j(s){var t,n,r,d,v,b,k,E,N,j,H=s.type&&T(s);return{c(){t=c("div"),n=c("button"),r=l("Update Hero"),d=a(),v=c("br"),b=a(),k=c("br"),E=a(),H&&H.c(),this.h()},l(s){t=p(s,"DIV",{slot:!0},!1);var a=h(t);n=p(a,"BUTTON",{class:!0},!1);var i=h(n);r=e(i,"Update Hero"),i.forEach(o),d=e(a,"\n\n    "),v=p(a,"BR",{},!1),h(v).forEach(o),b=e(a,"\n    "),k=p(a,"BR",{},!1),h(k).forEach(o),E=e(a,"\n\n    "),H&&H.l(a),a.forEach(o),this.h()},h(){n.className="button is-primary",f(t,"slot","preview"),j=m(n,"click",s.update)},m(s,a){i(s,t,a),u(t,n),u(n,r),u(t,d),u(t,v),u(t,b),u(t,k),u(t,E),H&&H.m(t,null),N=!0},p(s,n){n.type?H?(H.p(s,n),H.i(1)):((H=T(n)).c(),H.i(1),H.m(t,null)):H&&(g(),y(()=>{H.d(1),H=null}),H.o(1),$())},i(s){N||(H&&H.i(),N=!0)},o(s){H&&H.o(),N=!1},d(s){s&&o(t),H&&H.d(),j()}}}function H(s){return{c:v,l:v,m:v,p:v,i:v,o:v,d:v}}function w(s){var t,n,c=new E({props:{title:"Hero",subtitle:"Hero headers"}}),l=new N({props:{horizontal:!0,code:"<script>\n  import { fade } from 'svelte/transition'\n\n  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link']\n  let type = 'is-primary'\n\n  async function update() {\n    type = ''\n\n    setTimeout(() => {\n      type = types[Math.floor(Math.random() * types.length)];\n    }, 1000)\n  }\n<\/script>\n\n<button class=\"button is-primary\" on:click={update}>Update Hero</button>\n\n<br />\n<br />\n\n{#if type}\n  <section class=\"hero {type}\" transition:slide>\n    <div class=\"hero-body\">\n      <div class=\"container\">\n        <h1 class=\"title\">\n          Title\n        </h1>\n        <h2 class=\"subtitle\">\n          Subtitle\n        </h2>\n      </div>\n    </div>\n  </section>\n{/if}",$$slots:{default:[H],preview:[j]},$$scope:{ctx:s}}});return{c(){c.$$.fragment.c(),t=a(),l.$$.fragment.c()},l(s){c.$$.fragment.l(s),t=e(s,"\n\n"),l.$$.fragment.l(s)},m(s,a){r(c,s,a),i(s,t,a),r(l,s,a),n=!0},p(s,t){var n={};(s.$$scope||s.type)&&(n.$$scope={changed:s,ctx:t}),l.$set(n)},i(s){n||(c.$$.fragment.i(s),l.$$.fragment.i(s),n=!0)},o(s){c.$$.fragment.o(s),l.$$.fragment.o(s),n=!1},d(s){c.$destroy(s),s&&o(t),l.$destroy(s)}}}function x(s,t,n){const a=["is-primary","is-success","is-danger","is-warning","is-info","is-link"];let e="is-primary";return{type:e,update:async function(){n("type",e=""),setTimeout(()=>{n("type",e=a[Math.floor(Math.random()*a.length)])},1e3)}}}export default class extends s{constructor(s){super(),t(this,s,x,w,n,[])}}
//# sourceMappingURL=hero.8160afb5.js.map
