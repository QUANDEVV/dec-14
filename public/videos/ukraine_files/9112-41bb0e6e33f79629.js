(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9112],{83993:function(e,n,t){"use strict";t.d(n,{J:function(){return h}});var r=t(61638),i=t(71610),o=t(31427),u=t(19108),a=t(40032),l=t(53273),c=t(88454),d=(0,r.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.Card}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),s=(0,r.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.Cta}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),f=(0,r.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.StudyCard}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),v=(0,r.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.LaunchPadLinkSet}))}),{loadableGenerated:{webpack:function(){return[91919]}}});function b(e,n){var t=e.fields.sections,r=[];return void 0===t||t.forEach((function(e){if("title"in e.fields){var t=e.fields;r.push({links:t.quickLinks.filter((function(e){return void 0!==e&&(0,o.eK)(e)})).map(l.z)})}else if("heading"in e.fields){var b=e.fields;if(void 0===b.heading)throw Error("Nav section heading cannot be undefined");if(void 0===b.components)throw Error("Nav sections cannot be undefined");var h={title:b.heading,blocks:b.components.map((function(e,t){if((0,o.YU)(e)){var r=(0,u.z)(e);return i.createElement(d,{card:r,key:t})}if((0,o.eK)(e))return i.createElement(s,{link:(0,c.i)(e,n)});if((0,o.UB)(e)){var b=(0,a.U)(e);return i.createElement(f,{useCase:b.useCase,link:b.link})}if((0,o.Wu)(e)){var h=function(e){var n=e.fields.links.map((function(e){var n=e.fields,t=n.title,r=n.link,i=n.subtext;return{title:t,link:(0,l.z)(r),subtext:i}}));return{title:e.fields.title,links:n}}(e);return i.createElement(v,{linkSet:h})}throw Error("Invalid component found in launchpad sections")}))};void 0!==b.link&&(0,o.eK)(b.link)&&(h.link=(0,l.z)(b.link)),r.push(h)}})),r}function h(e,n){var t=e.fields.entries,r=[];return t.map((function(e){r.push({title:e.fields.title,sections:b(e,n),link:(0,l.z)(e.fields.link)})})),{entries:r}}},40032:function(e,n,t){"use strict";t.d(n,{U:function(){return u}});var r=t(53273);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}function u(e){var n=e.fields,t=n.useCase,i=n.caseStudy,u=n.caseStudyLink,a=i.fields.partnerName,l=(0,r.z)(u);if(void 0===l.url)throw Error("Case Study Card requires a valid URL");return{link:o({},l,{text:a}),useCase:t}}},83029:function(e,n,t){"use strict";t.d(n,{y:function(){return v}});var r=t(61638),i=t(71610),o=t(31427),u=t(19108),a=t(40032),l=t(53273),c=t(88454),d=(0,r.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.Card}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),s=(0,r.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.Cta}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),f=(0,r.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.StudyCard}))}),{loadableGenerated:{webpack:function(){return[91919]}}});function v(e,n){var t=e.fields,r=t.sections,v=t.navigation,b=t.quicklinks;return{sections:r.map((function(e){var t=e.fields,r=t.link,v=t.heading,b=t.components;if(void 0===b)throw Error("Nav sections cannot be undefined");if(void 0===v)throw Error("Nav section heading cannot be undefined");var h={title:v,blocks:b.map((function(e,t){if((0,o.YU)(e)){var r=(0,u.z)(e);return i.createElement(d,{card:r,key:t})}if((0,o.eK)(e))return i.createElement(s,{link:(0,c.i)(e,n)});if((0,o.UB)(e)){var l=(0,a.U)(e);return i.createElement(f,{useCase:l.useCase,link:l.link})}throw Error("Invalid component found in launchpad sections")}))};return void 0!==r&&(0,o.eK)(r)&&(h.link=(0,l.z)(r)),h})),mainLinks:v.map(l.z),quickLinks:b.map(l.z)}}},47382:function(e,n,t){"use strict";t.d(n,{q:function(){return i}});var r=t(53273);function i(e){return{title:e.fields.title,links:e.fields.links.map((function(e){var n=(0,r.z)(e);return{type:"urlLink",text:n.text,url:n.url,openInNewTab:n.openInNewTab}}))}}},6508:function(e,n,t){"use strict";t.d(n,{V:function(){return r}});var r=function(e){return e.filter((function(e){return void 0!==e.fields})).map((function(e){return{abbreviation:e.fields.abbreviation,flag:e.fields.flagEmoji,locale:e.fields.abbreviation,title:e.fields.title,url:e.fields.homePage,region:e.fields.region,enabled:!0===e.fields.enabled,footerLinks:e.fields.footerLinks,subFooterLinks:e.fields.subFooterLinks,footerFootnote:e.fields.footerFootnote,footerActionLinks:e.fields.footerActionLinks,search:e.fields.search}}))}},35381:function(e,n,t){"use strict";t.d(n,{o:function(){return d}});var r=t(61638),i=t(71610),o=t(67866),u=t(58507),a=t(47382),l=t(6508),c=(0,r.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.Footer}))}),{loadableGenerated:{webpack:function(){return[91919]}}});function d(e){var n,t=e.backgroundColor,r=e.reducedFooter,d=e.variant,s=e.currentLocale,f=(0,i.useContext)(o.N);if(void 0===f)throw Error("siteSettings is undefined.");var v=f.fields.locales,b=null===v||void 0===v?void 0:v.find((function(e){return e.fields.abbreviation===s})),h=(null===b||void 0===b?void 0:b.fields.footerLinks)||f.fields.footerLinks,m=(null===b||void 0===b?void 0:b.fields.subFooterLinks)||f.fields.subFooterLinks,k=(null===b||void 0===b?void 0:b.fields.footerFootnote)||f.fields.footerFootnote,p=(null===b||void 0===b?void 0:b.fields.footerActionLinks)||f.fields.footerActionLinks,w=null===h||void 0===h?void 0:h.map(a.q),y=null===m||void 0===m?void 0:m.map(a.q),g=f.fields,E=g.footerFoundationFootnote,C=g.footerFoundationSubLinks,P=g.footerJournalFootnote,L=g.footerJournalSublinks,S=f.fields.locales,F=void 0===S||null===(n=(0,l.V)(S))||void 0===n?void 0:n.filter((function(e){return e.enabled}));return d===u.LQ?i.createElement(c,{footerFootnote:E,primaryMenus:[],secondaryMenus:null===C||void 0===C?void 0:C.map(a.q),backgroundColor:t,reduced:!0}):d===u.X2?i.createElement(c,{footerFootnote:P,primaryMenus:[],secondaryMenus:null===L||void 0===L?void 0:L.map(a.q),backgroundColor:t,reduced:!0}):i.createElement(c,{footerFootnote:k,primaryMenus:w,secondaryMenus:y,actionMenu:p?(0,a.q)(p).links:void 0,backgroundColor:t,locales:F,reduced:r})}},30801:function(e,n,t){"use strict";t.d(n,{p:function(){return y}});var r=t(24850),i=t(61638),o=t(24273),u=t(71610),a=t(84069),l=t(47332),c=t(67866),d=t(58507),s=t(21013);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}var b=(0,i.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.Nav}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),h=(0,i.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.ButtonLink}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),m=(0,i.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.MenuButton}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),k=(0,i.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.SearchButton}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),p=(0,i.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.LaunchPad}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),w=(0,i.default)((function(){return Promise.all([t.e(9774),t.e(1919),t.e(1363)]).then(t.bind(t,91919)).then((function(e){return e.LaunchPadCustom}))}),{loadableGenerated:{webpack:function(){return[91919]}}}),y=function(e){var n=e.primaryCta,t=e.backgroundColor,i=e.subNavLink,f=e.homePageUrl,y=e.searchModalOpen,g=e.launchPad,E=e.customLaunchPad,C=e.hideAnnouncementBar,P=e.locale,L=e.variant,S=(0,u.useContext)(c.N);if(void 0===S)throw Error("siteSettings is undefined");var F=(0,o.useRouter)(),O=S.fields,N=O.navTitle,G=O.navFoundationTitle,x=O.navJournalTitle,M=O.searchLabel,j=L===d.LQ?G:L===d.X2?x:N,z=(0,u.useState)(!1),U=z[0],q=z[1],A=(0,u.useState)(!!y),B=A[0],T=A[1];(0,u.useEffect)((function(){var e=function(){return q(!1),T(!1),!0};return F.events.on("routeChangeStart",e),function(){F.events.off("routeChangeStart",e)}}),[q,F]);var _=(0,u.useCallback)((function(){var e,n,t;if(!0===C)return null;if(void 0===(null===S||void 0===S||null===(e=S.fields)||void 0===e?void 0:e.announcements)||0===(null===S||void 0===S||null===(n=S.fields)||void 0===n?void 0:n.announcements.length))return null;var i=null===(t=S.fields.announcements[0].fields)||void 0===t?void 0:t.content;return void 0===i?null:u.createElement(r.K,{text:u.createElement(a.H,{content:i})})}),[S,C]),I=(0,u.useCallback)((function(){var e,n;if(!0===C)return null;if(void 0===(null===S||void 0===S||null===(e=S.fields)||void 0===e?void 0:e.announcementsFoundation)||0===(null===S||void 0===S||null===(n=S.fields)||void 0===n?void 0:n.announcementsFoundation.length))return null;var t=S.fields.announcementsFoundation[0].fields.content;return void 0===t?null:u.createElement(r.K,{text:u.createElement(a.H,{content:t})})}),[S,C]),K=(0,u.useCallback)((function(){return L===d.LQ?I():_()}),[L,I,_]);(0,u.useLayoutEffect)((function(){document.body.style.overflow=U||B?"hidden":"unset"}),[U,B]);var W=(0,u.useCallback)((function(){T(!0);var e="".concat(M," | ").concat(d.eH);window.history.pushState(v({},window.history.state,{url:d.mW,as:d.mW,idx:window.history.state.idx+1,origPath:F.asPath,origTitle:window.document.title}),e,d.mW),window.document.title=e}),[F,M]),J=(0,u.useCallback)((function(){T(!1),void 0!==window.history.state.origTitle&&(window.document.title=window.history.state.origTitle);var e=window.history.state.origPath||F.asPath;window.history.pushState(v({},window.history.state,{url:e,as:e,idx:(window.history.state.idx||0)+1}),"",e)}),[F]);(0,u.useEffect)((function(){window.onpopstate=function(){T(!1)}}));var R=(0,u.useCallback)((function(){F.asPath.startsWith(d.mW)||(B?J():W(),U&&q(!1))}),[J,W,B,U,F.asPath]),D=(0,u.useCallback)((function(){q(!U),B&&T(!1)}),[q,U,B]),H=(0,u.useMemo)((function(){if(void 0!==n)return u.createElement(h,{key:"drawer-button",style:"go",link:n,ariaControls:"drawer"})}),[n]),Q=(0,u.useMemo)((function(){if(void 0!==g||void 0!==E)return u.createElement(u.Fragment,null,(void 0===P||!1!==(null===P||void 0===P?void 0:P.fields.search))&&u.createElement(k,{key:"search-button",title:"".concat(B?"Close":"Show"," Search"),isActive:B,onClick:R}),u.createElement(m,{key:"menu-button",title:"".concat(U?"Close":"Show"," Navigation"),isActive:U,onClick:D}))}),[g,E,P,B,R,U,D]),V=(0,u.useMemo)((function(){if(!U&&!B)return t;switch(t){case"dark":return"light";case"light":return"dark"}return"light"}),[U,B,t]),X=(0,u.useCallback)((function(){return"true"===s.env.NEXT_PUBLIC_IS_PREVIEW_MODE&&void 0!==E?u.createElement(w,{isActive:U,launchPadCustom:E}):void 0===g?null:u.createElement(p,{isActive:U,launchPad:g})}),[g,E,U]);return u.createElement(u.Fragment,null,X(),K(),u.createElement(b,{company:j,homePageUrl:f,backgroundColor:V,primaryButton:H,secondaryButtons:Q,subNavLink:i,variant:L}),u.createElement(l.R,{modal:B?"open":"closed"}))}},79159:function(){}}]);