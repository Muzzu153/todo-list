(()=>{"use strict";var n={909:(n,t,e)=>{e.d(t,{A:()=>A});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,'.add-task-div {\n  margin: auto;\n\n  .add-task-button {\n    border: none;\n    padding: 1rem 1.8rem;\n    background: #ffffff;\n    margin: auto;\n    margin-top: 2rem;\n    /* border: 2px solid rgb(255, 5, 5); */\n    border-radius: 5%;\n    /* font-size: x-large; */\n  }\n\n  .add-task-button:hover,\n  .add-task-button:focus {\n    background: #ffffff;\n  }\n\n  .add-task-button:active {\n    transform: scale(0.9);\n    transition: 0.1s;\n  }\n}\n\n.add-task-modal {\n  border-radius: 8px;\n  background: white;\n  margin: auto;\n  /* transform: scale(1); */\n  border: none;\n\n  .modal-title {\n    width: 100%;\n    background: #000;\n    color: white;\n    text-align: center;\n    padding: 1rem;\n    border: 2px solid white;\n    border-radius: inherit;\n  }\n\n  form div {\n    padding: 0.8em 1em;\n    display: block;\n    margin: auto;\n  }\n\n  .form-controls {\n    input,\n    textarea {\n      all: unset;\n      appearance: none;\n      display: block;\n      width: 100%;\n      padding: 0.3em 0.5em;\n      background: rgb(240, 237, 237);\n      border-radius: 4px;\n      box-sizing: inherit;\n      /* border: none; */\n    }\n\n    textarea:active,\n    textarea:focus {\n      background: var(--gradientBlackBg);\n      color: white;\n    }\n\n    input[type="number"] {\n      width: inherit;\n      display: inline;\n    }\n\n    label[for="new-task-priority"] {\n      display: block;\n    }\n\n    .priority-hint {\n      color: rgba(0, 0, 0, 0.849);\n      font-size: 1.2rem;\n      margin: 0;\n      padding: 0;\n    }\n  }\n\n  .form-controls input:active,\n  .form-controls input:focus {\n    background: var(--gradientBlackBg);\n    color: white;\n  }\n\n  .form-buttons {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* border: 1px solid black; */\n\n    button {\n      appearance: none;\n      all: unset;\n      border-radius: 4px;\n      padding: 0.8em 1.5em;\n      border: 0.5px solid black;\n      color: white;\n      font-weight: 700;\n      transition: 0.2s;\n    }\n\n    button:active,\n    button:focus {\n      transform: scale(0.9);\n    }\n\n    #cancel-button {\n      background: #e20505;\n    }\n\n    #confirm-button {\n      background: #2196f3;\n    }\n\n    #cancel-button:hover,\n    #cancel-button:active,\n    #cancel-button:focus {\n      cursor: pointer;\n      background: #ca0707;\n    }\n\n    #confirm-button:hover,\n    #confirm-button:active,\n    #confirm-button:focus {\n      cursor: pointer;\n      background: #157ed4;\n    }\n  }\n}\n\ndialog::backdrop {\n  background: #2c2c2c;\n  opacity: 0.7;\n}\n\ndialog[open] {\n  animation: popup 0.2s ease-in forwards;\n}\n\ndialog[closed] {\n  animation: popdown 0.2s ease-in forwards;\n}\n\n@keyframes popup {\n  0% {\n    transform: scale(0);\n  }\n\n  25% {\n    transform: scale(0.25);\n  }\n\n  50% {\n    transform: scale(0.5);\n  }\n  75% {\n    transform: scale(0.75);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes popdown {\n  0% {\n    transform: scale(1);\n  }\n\n  25% {\n    transform: scale(0.5);\n  }\n\n  50% {\n    transform: scale(0.5);\n  }\n  75% {\n    transform: scale(0.25);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n',"",{version:3,sources:["webpack://./src/css/addTask.css"],names:[],mappings:"AAAA;EACE,YAAY;;EAEZ;IACE,YAAY;IACZ,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,sCAAsC;IACtC,iBAAiB;IACjB,wBAAwB;EAC1B;;EAEA;;IAEE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;IACrB,gBAAgB;EAClB;AACF;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;EACzB,YAAY;;EAEZ;IACE,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,cAAc;IACd,YAAY;EACd;;EAEA;IACE;;MAEE,UAAU;MACV,gBAAgB;MAChB,cAAc;MACd,WAAW;MACX,oBAAoB;MACpB,8BAA8B;MAC9B,kBAAkB;MAClB,mBAAmB;MACnB,kBAAkB;IACpB;;IAEA;;MAEE,kCAAkC;MAClC,YAAY;IACd;;IAEA;MACE,cAAc;MACd,eAAe;IACjB;;IAEA;MACE,cAAc;IAChB;;IAEA;MACE,2BAA2B;MAC3B,iBAAiB;MACjB,SAAS;MACT,UAAU;IACZ;EACF;;EAEA;;IAEE,kCAAkC;IAClC,YAAY;EACd;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;;IAE7B;MACE,gBAAgB;MAChB,UAAU;MACV,kBAAkB;MAClB,oBAAoB;MACpB,yBAAyB;MACzB,YAAY;MACZ,gBAAgB;MAChB,gBAAgB;IAClB;;IAEA;;MAEE,qBAAqB;IACvB;;IAEA;MACE,mBAAmB;IACrB;;IAEA;MACE,mBAAmB;IACrB;;IAEA;;;MAGE,eAAe;MACf,mBAAmB;IACrB;;IAEA;;;MAGE,eAAe;MACf,mBAAmB;IACrB;EACF;AACF;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,qBAAqB;EACvB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,qBAAqB;EACvB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,mBAAmB;EACrB;AACF",sourcesContent:['.add-task-div {\n  margin: auto;\n\n  .add-task-button {\n    border: none;\n    padding: 1rem 1.8rem;\n    background: #ffffff;\n    margin: auto;\n    margin-top: 2rem;\n    /* border: 2px solid rgb(255, 5, 5); */\n    border-radius: 5%;\n    /* font-size: x-large; */\n  }\n\n  .add-task-button:hover,\n  .add-task-button:focus {\n    background: #ffffff;\n  }\n\n  .add-task-button:active {\n    transform: scale(0.9);\n    transition: 0.1s;\n  }\n}\n\n.add-task-modal {\n  border-radius: 8px;\n  background: white;\n  margin: auto;\n  /* transform: scale(1); */\n  border: none;\n\n  .modal-title {\n    width: 100%;\n    background: #000;\n    color: white;\n    text-align: center;\n    padding: 1rem;\n    border: 2px solid white;\n    border-radius: inherit;\n  }\n\n  form div {\n    padding: 0.8em 1em;\n    display: block;\n    margin: auto;\n  }\n\n  .form-controls {\n    input,\n    textarea {\n      all: unset;\n      appearance: none;\n      display: block;\n      width: 100%;\n      padding: 0.3em 0.5em;\n      background: rgb(240, 237, 237);\n      border-radius: 4px;\n      box-sizing: inherit;\n      /* border: none; */\n    }\n\n    textarea:active,\n    textarea:focus {\n      background: var(--gradientBlackBg);\n      color: white;\n    }\n\n    input[type="number"] {\n      width: inherit;\n      display: inline;\n    }\n\n    label[for="new-task-priority"] {\n      display: block;\n    }\n\n    .priority-hint {\n      color: rgba(0, 0, 0, 0.849);\n      font-size: 1.2rem;\n      margin: 0;\n      padding: 0;\n    }\n  }\n\n  .form-controls input:active,\n  .form-controls input:focus {\n    background: var(--gradientBlackBg);\n    color: white;\n  }\n\n  .form-buttons {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* border: 1px solid black; */\n\n    button {\n      appearance: none;\n      all: unset;\n      border-radius: 4px;\n      padding: 0.8em 1.5em;\n      border: 0.5px solid black;\n      color: white;\n      font-weight: 700;\n      transition: 0.2s;\n    }\n\n    button:active,\n    button:focus {\n      transform: scale(0.9);\n    }\n\n    #cancel-button {\n      background: #e20505;\n    }\n\n    #confirm-button {\n      background: #2196f3;\n    }\n\n    #cancel-button:hover,\n    #cancel-button:active,\n    #cancel-button:focus {\n      cursor: pointer;\n      background: #ca0707;\n    }\n\n    #confirm-button:hover,\n    #confirm-button:active,\n    #confirm-button:focus {\n      cursor: pointer;\n      background: #157ed4;\n    }\n  }\n}\n\ndialog::backdrop {\n  background: #2c2c2c;\n  opacity: 0.7;\n}\n\ndialog[open] {\n  animation: popup 0.2s ease-in forwards;\n}\n\ndialog[closed] {\n  animation: popdown 0.2s ease-in forwards;\n}\n\n@keyframes popup {\n  0% {\n    transform: scale(0);\n  }\n\n  25% {\n    transform: scale(0.25);\n  }\n\n  50% {\n    transform: scale(0.5);\n  }\n  75% {\n    transform: scale(0.75);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes popdown {\n  0% {\n    transform: scale(1);\n  }\n\n  25% {\n    transform: scale(0.5);\n  }\n\n  50% {\n    transform: scale(0.5);\n  }\n  75% {\n    transform: scale(0.25);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n'],sourceRoot:""}]);const A=i},64:(n,t,e)=>{e.d(t,{A:()=>A});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,":root {\n  font-size: 62.5%;\n  --gradientBlackBg: radial-gradient(\n    circle at 10% 20%,\n    rgb(0, 0, 0) 0%,\n    rgb(64, 64, 64) 90.2%\n  );\n  --whiteFont: rgb(255, 255, 255);\n  --borderWhite: rgb(255, 255, 255);\n  --whiteBg: rgb(255, 255, 255);\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background: var(--gradientBlackBg);\n  height: 100vh;\n  color: var(--whiteFont);\n}\n\n.wrapper {\n  margin: auto;\n}\n\n#header {\n  padding: 1.2em 0.8em;\n  border-bottom: 1px solid var(--borderWhite);\n}\n","",{version:3,sources:["webpack://./src/css/header.css"],names:[],mappings:"AAAA;EACE,gBAAgB;EAChB;;;;GAIC;EACD,+BAA+B;EAC/B,iCAAiC;EACjC,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;AACA;;;EAGE,2BAA2B;EAC3B,wBAAwB;EACxB,mBAAmB;EACnB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kCAAkC;EAClC,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,2CAA2C;AAC7C",sourcesContent:[":root {\n  font-size: 62.5%;\n  --gradientBlackBg: radial-gradient(\n    circle at 10% 20%,\n    rgb(0, 0, 0) 0%,\n    rgb(64, 64, 64) 90.2%\n  );\n  --whiteFont: rgb(255, 255, 255);\n  --borderWhite: rgb(255, 255, 255);\n  --whiteBg: rgb(255, 255, 255);\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background: var(--gradientBlackBg);\n  height: 100vh;\n  color: var(--whiteFont);\n}\n\n.wrapper {\n  margin: auto;\n}\n\n#header {\n  padding: 1.2em 0.8em;\n  border-bottom: 1px solid var(--borderWhite);\n}\n"],sourceRoot:""}]);const A=i},596:(n,t,e)=>{e.d(t,{A:()=>A});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,"main {\n  margin: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.taskDiv {\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n  padding: 1rem;\n  border: 1px solid white;\n\n  button {\n    color: var(--whiteFont);\n    appearance: none;\n    border: none;\n    padding: 0.5rem;\n    margin: 0 0.2rem;\n    background: #2196f3;\n    border-radius: 2px;\n  }\n\n  button:hover, button:focus{\n    background: #1c87df;\n  }\n\n  .remove-button{\n    background: #e20505;\n  }\n\n  .remove-button:hover, .remove-button:focus{\n    background: #cc0a0a;\n  }\n\n  button:active{\n    transform: scale(0.9);\n    transition: 0.2s;\n  }\n\n}\n\n.modal {\n  padding: 2rem;\n  border-radius: 5px;\n  background: rgba(238, 231, 231);\n  margin: 25rem auto;\n  border: none;\n  transform: scale(1);\n  transition: 2s;\n  color: var(--whiteFont);\n  .task-details {\n    padding: 1rem;\n    border-radius: 5px;\n    background: var(--gradientBlackBg);\n    margin-top: 1rem;\n  }\n\n  #task-description {\n    margin-top: 0;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/taskList.css"],names:[],mappings:"AAAA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,aAAa;EACb,uBAAuB;;EAEvB;IACE,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;IACrB,gBAAgB;EAClB;;AAEF;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,+BAA+B;EAC/B,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,uBAAuB;EACvB;IACE,aAAa;IACb,kBAAkB;IAClB,kCAAkC;IAClC,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;AACF",sourcesContent:["main {\n  margin: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.taskDiv {\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n  padding: 1rem;\n  border: 1px solid white;\n\n  button {\n    color: var(--whiteFont);\n    appearance: none;\n    border: none;\n    padding: 0.5rem;\n    margin: 0 0.2rem;\n    background: #2196f3;\n    border-radius: 2px;\n  }\n\n  button:hover, button:focus{\n    background: #1c87df;\n  }\n\n  .remove-button{\n    background: #e20505;\n  }\n\n  .remove-button:hover, .remove-button:focus{\n    background: #cc0a0a;\n  }\n\n  button:active{\n    transform: scale(0.9);\n    transition: 0.2s;\n  }\n\n}\n\n.modal {\n  padding: 2rem;\n  border-radius: 5px;\n  background: rgba(238, 231, 231);\n  margin: 25rem auto;\n  border: none;\n  transform: scale(1);\n  transition: 2s;\n  color: var(--whiteFont);\n  .task-details {\n    padding: 1rem;\n    border-radius: 5px;\n    background: var(--gradientBlackBg);\n    margin-top: 1rem;\n  }\n\n  #task-description {\n    margin-top: 0;\n  }\n}\n"],sourceRoot:""}]);const A=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var u=e(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var p=o(m,r);r.byIndex=A,t.splice(A,0,{identifier:l,updater:p,references:1})}i.push(l)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=e(a[i]);t[A].references--}for(var s=r(n,o),c=0;c<a.length;c++){var d=e(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var r=e(72),o=e.n(r),a=e(825),i=e.n(a),A=e(659),s=e.n(A),c=e(56),d=e.n(c),l=e(540),u=e.n(l),m=e(113),p=e.n(m),b=e(64),B={};B.styleTagTransform=p(),B.setAttributes=d(),B.insert=s().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=u(),o()(b.A,B),b.A&&b.A.locals&&b.A.locals;var C=e(596),E={};E.styleTagTransform=p(),E.setAttributes=d(),E.insert=s().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=u(),o()(C.A,E),C.A&&C.A.locals&&C.A.locals;var g=e(909),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),o()(g.A,f),g.A&&g.A.locals&&g.A.locals;const k=()=>{const n=[{title:"task1",description:"this is my first task",dueDate:"1-1-2025",priority:"higher"},{title:"task2",description:"this is my second task this is my second task this is my second task this is my second task this is my second task this is my second task",dueDate:"9-8-2025",priority:"highest"}],t=document.createElement("main"),e=(()=>{const n=document.createElement("div");n.classList.add("add-task-div");const t=(()=>{const n=document.createElement("button");return n.textContent="+   TASK",n.classList.add("add-task-button"),n})(),e=(()=>{const n=document.createElement("dialog");n.classList.add("add-task-modal");const t=document.createElement("div");return t.classList.add("modal-title"),t.textContent="Add a task",n.append(t),n})(),r=(()=>{const n=document.createElement("form");n.setAttribute("autocomplete","on"),n.setAttribute("action","");const t=document.createElement("div");t.classList.add("form-controls");const e=document.createElement("label");e.setAttribute("for","new-task-title"),e.textContent="Title";const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","new-task-title"),r.setAttribute("name","new-task-title"),r.setAttribute("required",""),t.append(e,r);const o=document.createElement("div");o.classList.add("form-controls");const a=document.createElement("label");a.setAttribute("for","new-task-description"),a.textContent="Description";const i=document.createElement("textarea");i.setAttribute("id","new-task-description"),i.setAttribute("required",""),o.append(a,i);const A=document.createElement("div");A.classList.add("form-controls");const s=document.createElement("label");a.setAttribute("for","new-task-date"),s.textContent="Due-date";const c=document.createElement("input");c.setAttribute("type","date"),c.setAttribute("id","new-task-date"),c.setAttribute("required",""),A.append(s,c);const d=document.createElement("div");d.classList.add("form-controls");const l=document.createElement("label");l.setAttribute("for","new-task-priority"),l.textContent="Priority";const u=document.createElement("input");u.setAttribute("type","number"),u.setAttribute("min","1"),u.setAttribute("max","5"),u.setAttribute("id","new-task-priority");const m=document.createElement("div");m.classList.add("priority-hint"),m.textContent="5 being highest and 1 being lowest",d.append(l,u,m);const p=document.createElement("div");p.classList.add("form-buttons");const b=document.createElement("button");b.setAttribute("type","submit"),b.setAttribute("id","confirm-button"),b.textContent="CONFRIM";const B=document.createElement("button");return B.setAttribute("type","button"),B.setAttribute("id","cancel-button"),B.textContent="CANCEL",p.append(B,b),n.append(t,o,A,d,p),n})();var o;return e.append(r),n.append(t,e),o=e,t.addEventListener("click",(()=>{o.showModal()})),function(n,t){n.addEventListener("click",(n=>{"cancel-button"===n.target.id&&t.close()}))}(r,e),n})(),r=()=>{for(;t.hasChildNodes();)t.removeChild(t.lastChild);n.forEach(((n,e)=>{const{taskDiv:r,detailsModal:o}=function(n){const t=document.createElement("div");t.textContent=n.title;const e=document.createElement("button");e.textContent="DETAILS";const r=document.createElement("dialog");e.addEventListener("click",(()=>{r.showModal()}));const o=document.createElement("div");o.textContent=`Description:   ${n.description}`,o.classList.add("task-details"),o.setAttribute("id","task-description");const a=document.createElement("div");a.textContent=`Due-date:         ${n.dueDate}`,a.classList.add("task-details"),a.setAttribute("id","task-due-date");const i=document.createElement("div");i.textContent=`Priority:           ${n.priority}`,i.classList.add("task-details"),i.setAttribute("id","task-priority"),r.append(o,a,i),r.classList.add("modal"),r.addEventListener("click",(n=>{const t=r.getBoundingClientRect();(n.clientX<t.left||n.clientX>t.right||n.clientY<t.top||n.clientY>t.bottom)&&r.close()}));const A=document.createElement("button");A.textContent="REMOVE",A.classList.add("remove-button");const s=document.createElement("div");s.append(e,A);const c=document.createElement("div");return c.classList.add("taskDiv"),c.append(t,s),{taskDiv:c,detailsModal:r}}(n);r.dataset.index=e,t.append(r,o)})),t.append(e)},{removeTaskFromList:o}=(()=>{const n=[];return{getAllTasks:()=>n,addTasksToList:t=>{n.push(t)},removeTaskFromList:(n,t)=>{console.log(n),n>-1&&t.splice(n,1)}}})();return t.addEventListener("click",(t=>{if(t.target.classList.contains("remove-button")){{const e=t.target.parentNode.parentNode.dataset.index;o(e,n),console.log(n)}r()}})),r(),t};(()=>{const n=(()=>{const n=document.createElement("header");n.classList.add("header"),n.setAttribute("id","header");const t=document.createElement("div");return t.classList.add("logo"),t.textContent="TodOdin",n.append(t),n})();document.getElementById("wrapper").append(n)})(),(()=>{const n=k(),t=document.getElementById("wrapper");t.append(n)})()})();
//# sourceMappingURL=main.bundle.js.map