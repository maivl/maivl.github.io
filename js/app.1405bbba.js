(function(e){function t(t){for(var i,r,o=t[0],c=t[1],s=t[2],u=0,b=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&b.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(b.length)b.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(i=!1)}i&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},l=[];function r(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-cb77a28e":"c13f041b"}[e]+".js"}var o={};var c={"9da5":function(){return{"./index_bg.js":{__wbindgen_throw:function(e,t){return i["6be1"].exports["c"](e,t)}}}}};function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=a[e]=[t,i]}));t.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(e);var b=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+i+": "+l+")",b.name="ChunkLoadError",b.type=i,b.request=l,n[1](b)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}var d={"chunk-cb77a28e":["9da5"]}[e]||[];return d.forEach((function(e){var n=o[e];if(n)t.push(n);else{var i,a=c[e](),l=fetch(s.p+""+{"9da5":"bf69afff205dee65d0aa"}[e]+".module.wasm");if(a instanceof Promise&&"function"===typeof WebAssembly.compileStreaming)i=Promise.all([WebAssembly.compileStreaming(l),a]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"===typeof WebAssembly.instantiateStreaming)i=WebAssembly.instantiateStreaming(l,a);else{var r=l.then((function(e){return e.arrayBuffer()}));i=r.then((function(e){return WebAssembly.instantiate(e,a)}))}t.push(o[e]=i.then((function(t){return s.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e},s.w={};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],b=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=b;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"12ce":function(e,t,n){"use strict";n("4cb4")},"34f7":function(e,t,n){"use strict";n("894d")},"4cb4":function(e,t,n){},"894d":function(e,t,n){},a766:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var i=n("7a23");const a={class:"view-panel"},l=Object(i["i"])("div",{class:"icp"},[Object(i["i"])("a",{href:"http://www.beian.miit.gov.cn/"},"沪ICP备14016277号-1")],-1);function r(e,t){const n=Object(i["E"])("router-view");return Object(i["y"])(),Object(i["f"])(i["a"],null,[Object(i["i"])("div",a,[Object(i["i"])(n)]),l],64)}n("34f7");const o={};o.render=r;var c=o,s=n("6c02");const u=Object(i["M"])("data-v-4b2bcd29");Object(i["B"])("data-v-4b2bcd29");const b={class:"type-switch"},f={key:0,class:"type-text"},d={key:0,class:"text-result"},p={key:1,class:"type-file"},h={class:"file-wrapper"},j={key:0},m={key:0,class:"file-result"},O=Object(i["h"])("下载"),v={class:"btn-group"},y=Object(i["h"])("加密"),w=Object(i["h"])("解密"),g={class:"rest-panel"};Object(i["z"])();const x=u((e,t,n,a,l,r)=>{const o=Object(i["E"])("van-loading"),c=Object(i["E"])("van-overlay"),s=Object(i["E"])("van-notice-bar"),x=Object(i["E"])("van-switch"),k=Object(i["E"])("van-field"),_=Object(i["E"])("van-uploader"),L=Object(i["E"])("van-form"),S=Object(i["E"])("van-button"),A=Object(i["E"])("van-col"),E=Object(i["E"])("van-row");return Object(i["y"])(),Object(i["f"])(i["a"],null,[Object(i["i"])(c,{show:e.loading,"class-name":"loading-panel"},{default:u(()=>[Object(i["i"])("div",null,[Object(i["i"])(o,{type:"spinner"})])]),_:1},8,["show"]),Object(i["i"])(s,{wrapable:"",scrollable:!1,text:"仅用来测试，请谨慎使用"}),Object(i["i"])("div",null,[Object(i["i"])(L,{onSubmit:e.onSubmit},{default:u(()=>[Object(i["i"])("div",b,[Object(i["i"])(x,{modelValue:e.isText,"onUpdate:modelValue":t[1]||(t[1]=t=>e.isText=t),"inactive-color":"#ff976a"},null,8,["modelValue"])]),Object(i["i"])(k,{modelValue:e.key,"onUpdate:modelValue":t[2]||(t[2]=t=>e.key=t),name:"Key",label:"密码",placeholder:"Key",maxlength:"16"},null,8,["modelValue"]),Object(i["i"])(k,{modelValue:e.iv,"onUpdate:modelValue":t[3]||(t[3]=t=>e.iv=t),name:"Iv",label:"Iv",placeholder:"Iv",maxlength:"16"},null,8,["modelValue"]),e.isText?(Object(i["y"])(),Object(i["f"])("div",f,[Object(i["i"])(k,{modelValue:e.text,"onUpdate:modelValue":t[4]||(t[4]=t=>e.text=t),rows:"3",autosize:"",label:"文本",type:"textarea",placeholder:"text"},null,8,["modelValue"]),e.textresult?(Object(i["y"])(),Object(i["f"])("div",d,[Object(i["i"])("p",null,Object(i["H"])(e.textresult),1)])):Object(i["g"])("",!0)])):(Object(i["y"])(),Object(i["f"])("div",p,[Object(i["i"])("div",h,[Object(i["i"])(_,{"after-read":e.afterRead,modelValue:e.fileList,"onUpdate:modelValue":t[5]||(t[5]=t=>e.fileList=t),"max-count":1,accept:"image/*,audio/*,video/*,text/*,application/*"},null,8,["after-read","modelValue"]),e.fileList[0]?(Object(i["y"])(),Object(i["f"])("p",j,Object(i["H"])(e.formatSize(e.fileList[0].file.size)),1)):Object(i["g"])("",!0)]),e.fileresult?(Object(i["y"])(),Object(i["f"])("div",m,[Object(i["i"])("a",{href:e.fileresult,download:e.filename,target:"_blank"},[O,Object(i["i"])("p",null,Object(i["H"])(e.filename)+" ("+Object(i["H"])(e.formatSize(e.fileresultblob.size))+")",1)],8,["href","download"])])):Object(i["g"])("",!0)]))]),_:1},8,["onSubmit"])]),Object(i["i"])("div",v,[Object(i["i"])(E,null,{default:u(()=>[Object(i["i"])(A,{span:"12"},{default:u(()=>[Object(i["i"])(S,{type:"primary",class:"btn",onClick:t[6]||(t[6]=t=>e.checkRules("encode"))},{default:u(()=>[y]),_:1})]),_:1}),Object(i["i"])(A,{span:"12"},{default:u(()=>[Object(i["i"])(S,{type:"default",class:"btn",onClick:t[7]||(t[7]=t=>e.checkRules("decode"))},{default:u(()=>[w]),_:1})]),_:1})]),_:1})]),Object(i["i"])("div",g,[Object(i["i"])("a",{href:"javascript:;",onClick:t[8]||(t[8]=(...t)=>e.resetData&&e.resetData(...t))},"重置")])],64)});var k=n("f564");function _(e){const t=new Blob([e],{type:"text/plain"});return new Promise(e=>{const n=new FileReader;n.onload=()=>{const t=new Uint8Array(n.result);e(t)},n.readAsArrayBuffer(t)})}function L(e){return new Promise(t=>{const n=new FileReader;n.onload=function(){t(this.result)},n.readAsArrayBuffer(e)})}const S=n.e("chunk-cb77a28e").then(n.bind(null,"2359")),A={isText:!0,key:"1234567812345678",iv:"1234567812345678",text:"",textresult:"",fileresult:"",fileresultblob:null,filename:"",originSize:"-",fileList:[]};var E=Object(i["j"])({name:"Home",data(){return{loading:!1,...A}},methods:{resetData(){location.reload()},afterRead({file:e}){console.log(e),this.fileList=[{url:window.URL.createObjectURL(e),file:e,isImage:!0}]},onSubmit(){},formatSize(e){return e>1048576?(e/1024/1024).toFixed(2)+"Mb":(e/1024).toFixed(2)+"Kb"},checkRules(e){const t=this.isText;return 16!==this.key.length||16!==this.iv.length?Object(k["a"])({type:"warning",message:"请输入正确的密码"}):t&&!this.text?Object(k["a"])({type:"warning",message:"请输入文字"}):t||this.fileList.length?(this.loading=!0,"encode"===e?this.encode():this.decode()):Object(k["a"])({type:"warning",message:"请上传文件"})},setFileName(e){if(this.fileList.length){const t=this.fileList[0].file,n=t.name.replace(/.\w*$/,t=>`-${"en"===e?"en":"de"}${t}`);this.filename=n}return 0},async encode(){const e=await S.then(({Aeslib:e})=>new e(this.key,this.iv));if(this.isText){const t=await _(this.text),n=e.base64encode(t);this.textresult=n}else{const t=await L(this.fileList[0].file),n=e.fileencode(new Uint8Array(t)),i=new Blob([n.buffer]);this.fileresult=window.URL.createObjectURL(i),this.fileresultblob=i,this.setFileName("en")}this.loading=!1},async decode(){const e=await S.then(({Aeslib:e})=>new e(this.key,this.iv));if(this.isText){const t=e.base64decode(this.text);this.textresult=t}else{const t=await L(this.fileList[0].file),n=e.filedecode(new Uint8Array(t)),i=new Blob([n.buffer]);this.fileresult=window.URL.createObjectURL(i),this.fileresultblob=i,this.setFileName("de")}this.loading=!1}},components:{},mounted(){}});n("12ce");E.render=x,E.__scopeId="data-v-4b2bcd29";var V=E;const P=[{path:"/",redirect:"/home"},{path:"/home",component:V}],U=Object(s["a"])({history:Object(s["b"])(),routes:P});U.beforeEach((e,t,n)=>{n()});var R=U,T=n("5502"),z={},B={},F=Object(T["a"])({state:z,mutations:B,actions:{},modules:{}}),C=n("b970");n("157a"),n("a766");Object(i["e"])(c).use(F).use(R).use(C).mount("#app")}});
//# sourceMappingURL=app.1405bbba.js.map