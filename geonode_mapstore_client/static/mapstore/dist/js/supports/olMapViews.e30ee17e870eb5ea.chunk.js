"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[93336],{177628:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(558422),o=r(307887),i=r(379853);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const u=function(e){var t=e.map,r=e.apiRef,u=void 0===r?function(){}:r;return(0,n.useEffect)((function(){u({options:{settings:[i.so.DESCRIPTION,i.so.POSITION,i.so.ANIMATION,i.so.LAYERS_OPTIONS],unsupportedLayers:["3dtiles","terrain"]},getView:function(){var e,r,n=t.getView(),u=n.getCenter(),l=n.getZoom(),c=n.getProjection(),s=n.calculateExtent(t.getSize()),f=c.getCode(),g=(0,o.reproject)(u,f,"EPSG:4326"),d=g.x,b=g.y,p=(0,i.QE)(l),y=(e=(0,o.reprojectBbox)(s,f,"EPSG:4326"),r=4,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,r)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return{zoom:l,center:{longitude:d,latitude:b,height:0},cameraPosition:{longitude:d,latitude:b,height:p},bbox:[y[0],y[1],y[2],y[3]]}},setView:function(e){var r=t.getView().getProjection().getCode();if(e.bbox){var n=(0,o.reprojectBbox)(e.bbox,"EPSG:4326",r);return t.getView().fit(n,{size:t.getSize(),duration:e.flyTo?500:0,nearest:!0})}return null}})}),[t]),null}}}]);