(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(235)),l={title:"redirect"},c={unversionedId:"plugins/redirect",id:"plugins/redirect",isDocsHomePage:!1,title:"redirect",description:"\x3c!--",source:"@site/docs/apisix/plugins/redirect.md",slug:"/plugins/redirect",permalink:"/docs/apisix/plugins/redirect",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/redirect.md",version:"current",sidebar:"docs",previous:{title:"serverless",permalink:"/docs/apisix/plugins/serverless"},next:{title:"echo",permalink:"/docs/apisix/plugins/echo"}},b=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#name"},Object(i.b)("strong",{parentName:"a"},"Name"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#attributes"},Object(i.b)("strong",{parentName:"a"},"Attributes"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-to-enable"},Object(i.b)("strong",{parentName:"a"},"How To Enable"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#test-plugin"},Object(i.b)("strong",{parentName:"a"},"Test Plugin"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#disable-plugin"},Object(i.b)("strong",{parentName:"a"},"Disable Plugin")))),Object(i.b)("h2",{id:"name"},"Name"),Object(i.b)("p",null,"URI redirect."),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Requirement"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Valid"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"http_to_https"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"optional"),Object(i.b)("td",{parentName:"tr",align:null},"false"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"When it is set to ",Object(i.b)("inlineCode",{parentName:"td"},"true")," and the request is HTTP, will be automatically redirected to HTTPS with 301 response code, and the URI will keep the same as client request.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"uri"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"optional"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"New URL which can contain Nginx variable, eg: ",Object(i.b)("inlineCode",{parentName:"td"},"/test/index.html"),", ",Object(i.b)("inlineCode",{parentName:"td"},"$uri/index.html"),". You can refer to variables in a way similar to ",Object(i.b)("inlineCode",{parentName:"td"},"${xxx}")," to avoid ambiguity, eg: ",Object(i.b)("inlineCode",{parentName:"td"},"${uri}foo/index.html"),". If you just need the original ",Object(i.b)("inlineCode",{parentName:"td"},"$")," character, add ",Object(i.b)("inlineCode",{parentName:"td"},"\\")," in front of it, like this one: ",Object(i.b)("inlineCode",{parentName:"td"},"/\\$foo/index.html"),". If you refer to a variable name that does not exist, this will not produce an error, and it will be used as an empty string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ret_code"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"optional"),Object(i.b)("td",{parentName:"tr",align:null},"302"),Object(i.b)("td",{parentName:"tr",align:null},"[200, ...]"),Object(i.b)("td",{parentName:"tr",align:null},"Response code")))),Object(i.b)("p",null,"Only one of ",Object(i.b)("inlineCode",{parentName:"p"},"http_to_https")," or ",Object(i.b)("inlineCode",{parentName:"p"},"uri")," can be specified."),Object(i.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(i.b)("p",null,"Here's a mini example, enable the ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," plugin on the specified route:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {\n        "redirect": {\n            "uri": "/test/default.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"And we can use any Nginx built-in variable in the new URI."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test",\n    "plugins": {\n        "redirect": {\n            "uri": "$uri/index.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(i.b)("p",null,"Testing based on the above examples :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/test/index.html -i\nHTTP/1.1 301 Moved Permanently\nDate: Wed, 23 Oct 2019 13:48:23 GMT\nContent-Type: text/html\nContent-Length: 166\nConnection: keep-alive\nLocation: /test/default.html\n\n...\n")),Object(i.b)("p",null,"We can check the response code and the response header ",Object(i.b)("inlineCode",{parentName:"p"},"Location"),"."),Object(i.b)("p",null,"It shows that the ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," plugin is in effect."),Object(i.b)("p",null," Here is an example of redirect HTTP to HTTPS:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "redirect": {\n            "http_to_https": true\n        }\n    }\n}\'\n')),Object(i.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(i.b)("p",null,"When you want to disable the ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," plugin has been disabled now. It works for other plugins."))}p.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,m=u["".concat(l,".").concat(s)]||u[s]||d[s]||i;return n?a.a.createElement(m,c(c({ref:t},o),{},{components:n})):a.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);