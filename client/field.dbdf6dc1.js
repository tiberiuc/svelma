import{c as e,d as t,b as n,x as s,y as a,v as $,k as r,h as o,e as c,f as i,g as m,O as l,l as f,a as p}from"./chunk.dd133d53.js";import{l as d,m as g}from"./chunk.fe88db79.js";import"./chunk.0a41e55b.js";import{a as u}from"./chunk.ff8558e2.js";import"./chunk.de8c22d6.js";import{a as h}from"./chunk.116159f4.js";import{a as j}from"./chunk.509f3cae.js";function v(e){var t,n=new g({props:{value:"Rich Harris"}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,s){$(n,e,s),t=!0},p:p,i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function y(e){var t,n=new g({props:{value:"john@"}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,s){$(n,e,s),t=!0},p:p,i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function b(e){var t,n=new g({props:{value:"joey55"}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,s){$(n,e,s),t=!0},p:p,i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function w(e){var t,n,p,g,u=new d({props:{label:"Name",$$slots:{default:[v]},$$scope:{ctx:e}}}),h=new d({props:{label:"Email",type:"is-danger",message:"Email is invalid",$$slots:{default:[y]},$$scope:{ctx:e}}}),j=new d({props:{label:"Username",type:"is-success",message:"Username is available",$$slots:{default:[b]},$$scope:{ctx:e}}});return{c(){t=c("div"),u.$$.fragment.c(),n=s(),h.$$.fragment.c(),p=s(),j.$$.fragment.c(),this.h()},l(e){t=i(e,"DIV",{slot:!0},!1);var s=m(t);u.$$.fragment.l(s),n=a(s,"\n\n    "),h.$$.fragment.l(s),p=a(s,"\n\n    "),j.$$.fragment.l(s),s.forEach(o),this.h()},h(){l(t,"slot","preview")},m(e,s){r(e,t,s),$(u,t,null),f(t,n),$(h,t,null),f(t,p),$(j,t,null),g=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),u.$set(n);var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),h.$set(s);var a={};e.$$scope&&(a.$$scope={changed:e,ctx:t}),j.$set(a)},i(e){g||(u.$$.fragment.i(e),h.$$.fragment.i(e),j.$$.fragment.i(e),g=!0)},o(e){u.$$.fragment.o(e),h.$$.fragment.o(e),j.$$.fragment.o(e),g=!1},d(e){e&&o(t),u.$destroy(),h.$destroy(),j.$destroy()}}}function x(e){return{c:p,l:p,m:p,p:p,i:p,o:p,d:p}}function k(e){var t,n,c,i=new u({props:{title:"Field",subtitle:"Add functionality and styling to form elements/inputs by grouping components together"}}),m=new h({props:{code:'<script>\n  import { Field, Input } from \'svelma\'\n<\/script>\n\n<Field label="Name">\n  <Input value="Rich Harris" />\n</Field>\n\n<Field label="Name" type="is-danger" message="Pick a better name">\n  <Input type="text" value="Moby Dick" />\n</Field>',$$slots:{default:[x],preview:[w]},$$scope:{ctx:e}}}),l=new j({props:{jsdoc:e.jsdoc}});return{c(){i.$$.fragment.c(),t=s(),m.$$.fragment.c(),n=s(),l.$$.fragment.c()},l(e){i.$$.fragment.l(e),t=a(e,"\n\n"),m.$$.fragment.l(e),n=a(e,"\n\n"),l.$$.fragment.l(e)},m(e,s){$(i,e,s),r(e,t,s),$(m,e,s),r(e,n,s),$(l,e,s),c=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),m.$set(n);var s={};e.jsdoc&&(s.jsdoc=t.jsdoc),l.$set(s)},i(e){c||(i.$$.fragment.i(e),m.$$.fragment.i(e),l.$$.fragment.i(e),c=!0)},o(e){i.$$.fragment.o(e),m.$$.fragment.o(e),l.$$.fragment.o(e),c=!1},d(e){i.$destroy(e),e&&o(t),m.$destroy(e),e&&o(n),l.$destroy(e)}}}async function F(e,t){const n=await this.fetch("components/field.json");return{jsdoc:await n.json()}}function I(e,t,n){let{jsdoc:s}=t;return e.$set=(e=>{"jsdoc"in e&&n("jsdoc",s=e.jsdoc)}),{jsdoc:s}}export default class extends e{constructor(e){super(),t(this,e,I,k,n,["jsdoc"])}}export{F as preload};
//# sourceMappingURL=field.dbdf6dc1.js.map
