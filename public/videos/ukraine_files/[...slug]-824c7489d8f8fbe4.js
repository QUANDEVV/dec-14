(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8863,1363],{92166:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uk/[...slug]",function(){return n(53372)}])},76189:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(61638),r=n(71610),a=n(6508),o=n(43912),c=(0,i.default)((function(){return Promise.all([n.e(9774),n.e(1919)]).then(n.bind(n,91919)).then((function(e){return e.LocalePicker}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),u=function(e){var t=e.page,n=e.siteSettings,i=e.formAssemblyData,u=e.localeAbbreviation,s=e.primaryCta,l=e.launchPad,d=e.isPreview,f=e.metadata,m=(0,r.useMemo)((function(){if(void 0!==n.fields.locales)return(0,a.V)(n.fields.locales)}),[n]),v=(0,r.useMemo)((function(){if(void 0!==m)return m.find((function(e){return e.abbreviation===u}))}),[u,m]),_=(0,r.useCallback)((function(e){window.location.href=e.url}),[]);if(void 0===m)throw Error("Localized page is invalid without valid locales");if(void 0===v)throw Error("Must have a current locale");var w=r.createElement(c,{currentLocale:v,locales:null===m||void 0===m?void 0:m.filter((function(e){return e.enabled})),onChange:_});return r.createElement(o.X,{page:t,siteSettings:n,isPreview:d,formAssemblyData:i,primaryCta:s,homePageUrl:v.url,launchPad:l,subNavLink:{type:"custom",link:w},metadata:f,currentLocale:v.abbreviation})}},53372:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u}});var i=n(71610),r=n(76189),a=n(58507),o=n(95910),c=a.YG.UK,u=!0;t.default=(0,o.x)((function(e){var t=e.page,n=e.siteSettings,a=e.primaryCta,o=e.formAssemblyData,u=e.launchPad,s=e.isPreview,l=e.metadata;return i.createElement(r.Z,{page:t,siteSettings:n,primaryCta:a,formAssemblyData:o,localeAbbreviation:c,launchPad:u,isPreview:s,metadata:l})}))},71363:function(e,t,n){"use strict";n.d(t,{q:function(){return s}});var i=n(67605),r=n(49311),a=n.n(r),o=n(71610),c=n(39332),u="ptcom-design__inPageNavLink__1658f9d",s=function(e){var t,n,r=(0,o.useContext)(c.v).A,s=e.sections;n=window.location.hash.slice(1);var l=(0,i.CR)((0,o.useState)(n),2),d=l[0],f=l[1],m=(0,i.CR)((0,o.useState)(!1),2),v=m[0],_=m[1],w=(0,i.CR)((0,o.useState)(!1),2),g=w[0],h=w[1],p=(0,i.CR)((0,o.useState)(!1),2),b=p[0],E=p[1],N=(0,o.useRef)(),P=(0,o.useRef)(100),k=(0,o.useRef)(0),y=(0,o.useCallback)((function(){P.current=window.innerHeight,N.current=s.map((function(e){var t=e.id,n=document.getElementById(t);if(n)return n.getBoundingClientRect().top+window.scrollY}))}),[s,N]);(0,o.useEffect)((function(){if("undefined"!==typeof IntersectionObserver){var e=new IntersectionObserver((function(e){g||e.forEach((function(e){var t=e.target;0===e.intersectionRatio&&d===t.id&&f(void 0)}))}),{threshold:[0]});return s.forEach((function(t){var n=t.id,i=document.getElementById(n);i&&e.observe(i)})),function(){e.disconnect()}}}),[s,f,d,g]),(0,o.useEffect)((function(){var e,t=function(){var t,i;if(b||(y(),E(!0)),!g){clearTimeout(e),e=window.setTimeout(n,2500),_(!0);var r=window.scrollY+P.current,a=k.current+P.current,o=(null===(t=N.current)||void 0===t?void 0:t.length)||0;null===(i=N.current)||void 0===i||i.forEach((function(e,t){if(void 0!==e){var n=e+30+32*(o-t+.5);(a<=n&&r>=n||a>=n&&r<=n)&&f(s[t].id)}})),k.current=window.scrollY}};var n=function(){return _(!1)};return window.addEventListener("scroll",t,{passive:!0}),function(){clearTimeout(e),window.removeEventListener("scroll",t)}}),[_,d,f,s,N,g,b,E,y]),(0,o.useEffect)((function(){return window.addEventListener("resize",y),y(),function(){window.removeEventListener("resize",y)}}),[y]);var C=(0,o.useCallback)((function(e){var t=e.target.closest("."+u);if(t){var n=t.getAttribute("href"),i=n&&document.querySelector(n);if(i){e.preventDefault(),h(!0),_(!0),i.scrollIntoView({behavior:"smooth"});var r=location.pathname+location.search+n;history.replaceState(null,document.title,r),n&&f(n.slice(1)),window.setTimeout((function(){return h(!1)}),1e3),window.setTimeout((function(){return _(!1)}),3500)}}}),[h,_]),S={"--sections-length":s.length};return o.createElement("nav",{className:a()("ptcom-design__inPageNav__1658f9d",(t={},t["ptcom-design__isScrolling__1658f9d"]=v,t)),style:S},o.createElement("ul",{className:a()("ptcom-design__inPageNavList__1658f9d"),onClick:C},s.map((function(e,t){var n,i=e.earmarkNumber,c=e.id,s=e.navigationTitle,l=e.title,f={"--item-index":t};return o.createElement("li",{className:a()("ptcom-design__inPageNavItem__1658f9d",(n={},n["ptcom-design__inPageNavItemSelected__1658f9d"]=c===d,n)),key:c,style:f},o.createElement(r,{className:a()(u),href:"#"+c},o.createElement("span",{className:a()("ptcom-design__inPageNavEarmarkNumber__1658f9d")},i),o.createElement("span",{className:a()("ptcom-design__inPageNavItemTitle__1658f9d")},s||l)))}))))}}},function(e){e.O(0,[9774,6457,4850,7660,9112,90,2888,179],(function(){return t=92166,e(e.s=t);var t}));var t=e.O();_N_E=t}]);