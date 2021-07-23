(self.webpackChunk=self.webpackChunk||[]).push([[4131],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20858:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s={title:"Debug Function"},i={unversionedId:"debug-function",id:"version-2.7/debug-function",isDocsHomePage:!1,title:"Debug Function",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.7/debug-function.md",sourceDirName:".",slug:"/debug-function",permalink:"/docs/apisix/2.7/debug-function",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/debug-function.md",version:"2.7",frontMatter:{title:"Debug Function"},sidebar:"version-2.7/docs",previous:{title:"Mutual TLS Authentication",permalink:"/docs/apisix/2.7/mtls"},next:{title:"Configuration file switching based on environment variables",permalink:"/docs/apisix/2.7/profile"}},l=[{value:"<code>5xx</code> response status code",id:"5xx-response-status-code",children:[]},{value:"How to identify the source of the <code>5xx</code> response status code",id:"how-to-identify-the-source-of-the-5xx-response-status-code",children:[]},{value:"Example",id:"example",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"5xx-response-status-code"},(0,o.kt)("inlineCode",{parentName:"h2"},"5xx")," response status code"),(0,o.kt)("p",null,"Similar ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," status codes such as 500, 502, 503, etc., are the status codes in response to a server error. When a request has a ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," status code; it may come from ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Upstream"),". How to identify the source of these response status codes is a very meaningful thing. It can quickly help us determine the problem."),(0,o.kt)("h2",{id:"how-to-identify-the-source-of-the-5xx-response-status-code"},"How to identify the source of the ",(0,o.kt)("inlineCode",{parentName:"h2"},"5xx")," response status code"),(0,o.kt)("p",null,"In the response header of the request, through the response header of ",(0,o.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status"),", we can effectively identify the source of the ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," status code. When the ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," status code comes from ",(0,o.kt)("inlineCode",{parentName:"p"},"Upstream"),", the response header ",(0,o.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," can be seen in the response header, and the value of this response header is the response status code. When the ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," status code is derived from ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX"),", there is no response header information of ",(0,o.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," in the response header. That is, only when the status code of ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," is derived from Upstream will the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," response header appear."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Example 1: ",(0,o.kt)("inlineCode",{parentName:"p"},"502")," response status code comes from ",(0,o.kt)("inlineCode",{parentName:"p"},"Upstream")," (IP address is not available)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,o.kt)("p",null,"Test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n......\n< HTTP/1.1 502 Bad Gateway\n< Date: Wed, 25 Nov 2020 14:40:22 GMT\n< Content-Type: text/html; charset=utf-8\n< Content-Length: 154\n< Connection: keep-alive\n< Server: APISIX/2.0\n< X-APISIX-Upstream-Status: 502\n<\n<html>\n<head><title>502 Bad Gateway</title></head>\n<body>\n<center><h1>502 Bad Gateway</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n\n")),(0,o.kt)("p",null,"It has a response header of ",(0,o.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status: 502"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Example 2: ",(0,o.kt)("inlineCode",{parentName:"p"},"502")," response status code comes from ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "fault-injection": {\n            "abort": {\n                "http_status": 500,\n                "body": "Fault Injection!\\n"\n            }\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,o.kt)("p",null,"Test\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n......\n< HTTP/1.1 500 Internal Server Error\n< Date: Wed, 25 Nov 2020 14:50:20 GMT\n< Content-Type: text/plain; charset=utf-8\n< Transfer-Encoding: chunked\n< Connection: keep-alive\n< Server: APISIX/2.0\n<\nFault Injection!\n")),(0,o.kt)("p",null,"There is no response header for ",(0,o.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Example 3: ",(0,o.kt)("inlineCode",{parentName:"p"},"Upstream")," has multiple nodes, and all nodes are unavailable")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/upstreams/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "nodes": {\n        "127.0.0.3:1": 1,\n        "127.0.0.2:1": 1,\n        "127.0.0.1:1": 1\n    },\n    "retries": 2,\n    "type": "roundrobin"\n}\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "upstream_id": "1"\n}\'\n')),(0,o.kt)("p",null,"Test\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n< HTTP/1.1 502 Bad Gateway\n< Date: Wed, 25 Nov 2020 15:07:34 GMT\n< Content-Type: text/html; charset=utf-8\n< Content-Length: 154\n< Connection: keep-alive\n< Server: APISIX/2.0\n< X-APISIX-Upstream-Status: 502, 502, 502\n<\n<html>\n<head><title>502 Bad Gateway</title></head>\n<body>\n<center><h1>502 Bad Gateway</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,o.kt)("p",null,"It has a response header of ",(0,o.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status: 502, 502, 502"),"."))}c.isMDXComponent=!0}}]);