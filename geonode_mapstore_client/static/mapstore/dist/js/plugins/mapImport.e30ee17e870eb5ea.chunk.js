"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[50309],{12440:(e,r,n)=>{n.d(r,{p5:()=>t,aW:()=>o,kn:()=>a,br:()=>l,aE:()=>i,vm:()=>u,H4:()=>s,_p:()=>c,_H:()=>p,j7:()=>m,wg:()=>y,qQ:()=>f,K4:()=>d,_W:()=>b,Jd:()=>O,wD:()=>N,bM:()=>v,yW:()=>A});var t="IMPORT::SET_LAYERS",o="IMPORT::ON_ERROR",a="IMPORT::ON_SELECT_LAYER",l="IMPORT::LOADING",i="IMPORT::ON_LAYER_ADDED",u="IMPORT::UPDATE_BBOX",s="IMPORT::ON_SUCCESS",c="ON_SHAPE_ERROR",p="IMPORT::ON_LAYER_SKIPPED";function m(e,r){return{type:t,layers:e,errors:r}}function y(e){return{type:a,layer:e}}function f(e){return{type:o,error:e}}function d(e){return{type:l,status:e}}function b(e){return{type:i,layer:e}}function O(e){return{type:u,bbox:e}}function N(e){return{type:s,message:e}}function v(e){return{type:c,message:e}}function A(e){return{type:p,layer:e}}},442416:(e,r,n)=>{n.d(r,{H:()=>t,q:()=>o});var t="SET_STYLE_PARAMETER";function o(e,r){return{type:t,name:e,value:r}}},14281:(e,r,n)=>{n.d(r,{A1:()=>t,HN:()=>o,Bm:()=>a,CD:()=>l,eY:()=>i,bI:()=>u,Rr:()=>s,DX:()=>c,e7:()=>p,QN:()=>m,Nd:()=>y,VR:()=>f,LR:()=>d,wP:()=>b,A9:()=>O,pC:()=>N,L0:()=>v,Hl:()=>A,_x:()=>S,x$:()=>T,Dm:()=>E,ym:()=>g});var t="ANNOTATIONS:EDIT",o="ANNOTATIONS:DOWNLOAD",a="ANNOTATIONS:LOAD_ANNOTATIONS",l="ANNOTATIONS:NEW",i="ANNOTATIONS:CLOSE",u="ANNOTATIONS:CONFIRM_CLOSE",s="ANNOTATIONS:CANCEL_CLOSE",c="ANNOTATIONS:REMOVE",p="ANNOTATIONS:STORE_SESSION",m="ANNOTATIONS:MERGE_FEATURES",y="ANNOTATIONS:SELECT_FEATURE",f=function(e){return{type:t,id:e}},d=function(e){return{type:o,annotations:e}},b=function(e){return{type:a,features:e,override:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}},O=function(){return{type:l}},N=function(){return{type:i}},v=function(e){return{type:u,layer:e}},A=function(){return{type:s}},S=function(e){return{type:c,id:e}},T=function(e){return{type:p,session:e}},E=function(e,r){return{type:m,id:e,annotation:r}},g=function(e){return{type:y,id:e}}},902054:(e,r,n)=>{n.d(r,{sB:()=>l,Yu:()=>i,F3:()=>u,cM:()=>s,Gu:()=>c,qs:()=>p});var t=n(22222),o=n(675110),a=n(900012),l=(0,t.P1)([o.l2],(function(e){return e.find(a.cO)})),i=(0,t.P1)([o.l2],(function(e){return e.filter(a.cO)})),u=function(e){var r=(0,o.Iz)(e);return r&&(0,a.cO)(r)?r:null},s=function(e){var r;return null==e||null===(r=e.annotations)||void 0===r?void 0:r.editing},c=function(e){var r;return null==e||null===(r=e.annotations)||void 0===r?void 0:r.session},p=function(e){var r;return null==e||null===(r=e.annotations)||void 0===r?void 0:r.featureId}},420080:(e,r,n)=>{n.r(r),n.d(r,{default:()=>N});var t=n(558422),o=n.n(t),a=n(171703),l=n(481756),i=n(12440),u=n(197395),s=n(801550),c=n(580416),p=n(14281),m=n(902054),y=n(782904),f=n(727418),d=n.n(f),b=n(271418),O=n(93152);const N={MapImportPlugin:d()({loadPlugin:function(e){Promise.all([n.e(85294),n.e(72555),n.e(20),n.e(89465),n.e(1667),n.e(9886),n.e(66287),n.e(58647),n.e(48533),n.e(87150)]).then(n.bind(n,887150)).then((function(r){var n=r.default,t=(0,a.connect)((function(e){return{enabled:e.controls&&e.controls.mapimport&&e.controls.mapimport.enabled,layers:e.mapimport&&e.mapimport.layers||null,selected:e.mapimport&&e.mapimport.selected||null,bbox:e.mapimport&&e.mapimport.bbox||null,success:e.mapimport&&e.mapimport.success||null,errors:e.mapimport&&e.mapimport.errors||null,shapeStyle:e.style||{},mapType:(0,O.$v)(e),annotationsLayer:(0,m.sB)(e)}}),{setLayers:i.j7,onLayerAdded:i._W,onLayerSkipped:i.yW,onSelectLayer:i.wg,onError:i.qQ,onSuccess:i.wD,addLayer:c.A4,loadAnnotations:p.wP,onZoomSelected:s.Px,updateBBox:i.Jd,setLoading:i.K4,onClose:y.Xi.bind(null,"mapimport",null),warning:u.Kp})(n);e(t)}))},enabler:function(e){return e.mapimport&&e.mapimport.enabled||e.toolbar&&"import"===e.toolbar.active}},{BurgerMenu:{name:"import",position:4,text:o().createElement(l.Z,{msgId:"mapImport.title"}),tooltip:"mapImport.tooltip",icon:o().createElement(b.gG,{glyph:"upload"}),action:y.Xi.bind(null,"mapimport",null),priority:2,doNotHide:!0},SidebarMenu:{name:"mapimport",position:4,tooltip:"mapImport.tooltip",text:o().createElement(l.Z,{msgId:"mapImport.title"}),icon:o().createElement(b.gG,{glyph:"upload"}),action:y.Xi.bind(null,"mapimport",null),toggle:!0,priority:1,doNotHide:!0}}),reducers:{mapimport:n(183807).Z,style:n(318323).Z}}},481756:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(171703),o=n(805346);const a=(0,t.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},183807:(e,r,n)=>{n.d(r,{Z:()=>p});var t=n(12440),o=n(187185),a=n.n(o),l=n(782904),i=n(727418),u=n.n(i);function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}var c={layers:null,errors:null,loading:!1,selected:null,bbox:[190,190,-190,-190]};const p=function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case t._p:return u()({},r,{error:n.message,success:null});case t.p5:var o=n.layers&&n.layers[0]?n.layers[0]:null,i=n.layers?n.errors:null;return u()({},r,{layers:n.layers,selected:o,bbox:[190,190,-190,-190],errors:i},o?{}:{success:null});case t.aW:return u()({},r,{errors:a()([].concat((e=r.errors||[],function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return s(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[n.error]),(function(e,r){return(e.name&&e.name===r.name||e.filename&&e.filename===r.fileName)&&e.message===r.message})),success:null});case t.br:return u()({},r,{loading:n.status});case t.kn:return u()({},r,{selected:n.layer});case t.aE:var p=r.layers.filter((function(e){return n.layer.name!==e.name}),this),m=p&&p[0]?p[0]:null;return u()({},r,{layers:p,selected:m},m?{}:{bbox:[190,190,-190,-190]});case t.vm:return u()({},r,{bbox:n.bbox});case t.H4:return u()({},r,{success:n.message,errors:null,error:null});case l.kM:return"shapefile"===n.control?u()({},r,{errors:null,success:null}):r;case t._H:var y=r.layers.filter((function(e){return n.layer.name!==e.name}),this),f=y&&y[0]?y[0]:null;return u()({},r,{layers:y,selected:f,success:null});default:return r}}},318323:(e,r,n)=>{n.d(r,{Z:()=>u});var t=n(442416),o=n(727418),a=n.n(o);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var i={color:{r:0,g:0,b:255,a:1},width:3,fill:{r:0,g:0,b:255,a:.1},radius:10,marker:!1};const u=function(){var e,r,n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,u=arguments.length>1?arguments[1]:void 0;return u.type===t.H?a()({},o,(e={},r=u.name,n=u.value,(r=function(e){var r=function(e){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e)):o}}}]);