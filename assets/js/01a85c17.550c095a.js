(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{103:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var s=t(0),l=t.n(s),n=t(97),r=t(99),i=t(56),c=t.n(i);function m({sidebar:e}){return 0===e.items.length?null:l.a.createElement("div",{className:Object(n.a)(c.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),l.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>l.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},l.a.createElement(r.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},69:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),n=t(101),r=t(99),i=t(103),c=t(98),m=t(96);a.default=function(e){const{tags:a,sidebar:t}=e,s={};Object.keys(a).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e);s[a]=s[a]||[],s[a].push(e)}));const o=Object.entries(s).sort((([e],[a])=>e===a?0:e>a?1:-1)).map((([e,t])=>l.a.createElement("div",{key:e},l.a.createElement("h3",null,e),t.map((e=>l.a.createElement(r.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")"))),l.a.createElement("hr",null)))).filter((e=>null!=e));return l.a.createElement(n.a,{title:"Tags",description:"Blog Tags",wrapperClassName:m.ThemeClassNames.wrapper.blogPages,pageClassName:m.ThemeClassNames.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(i.a,{sidebar:t})),l.a.createElement("main",{className:"col col--7"},l.a.createElement("h1",null,l.a.createElement(c.a,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),l.a.createElement("div",{className:"margin-vert--lg"},o)))))}}}]);