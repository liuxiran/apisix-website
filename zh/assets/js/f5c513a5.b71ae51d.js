(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(235)),b={title:"http-logger"},c={unversionedId:"plugins/http-logger",id:"plugins/http-logger",isDocsHomePage:!1,title:"http-logger",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/http-logger.md",slug:"/plugins/http-logger",permalink:"/zh/docs/apisix/plugins/http-logger",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/http-logger.md",version:"current",sidebar:"docs",previous:{title:"node-status",permalink:"/zh/docs/apisix/plugins/node-status"},next:{title:"tcp-logger",permalink:"/zh/docs/apisix/plugins/tcp-logger"}},i=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",children:[]},{value:"\u5c5e\u6027\u5217\u8868",id:"\u5c5e\u6027\u5217\u8868",children:[]},{value:"\u5982\u4f55\u5f00\u542f",id:"\u5982\u4f55\u5f00\u542f",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",children:[{value:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],p={toc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%AE%9A%E4%B9%89"},Object(l.b)("strong",{parentName:"a"},"\u5b9a\u4e49"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8"},Object(l.b)("strong",{parentName:"a"},"\u5c5e\u6027\u5217\u8868"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%BC%80%E5%90%AF"},Object(l.b)("strong",{parentName:"a"},"\u5982\u4f55\u5f00\u542f"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},Object(l.b)("strong",{parentName:"a"},"\u6d4b\u8bd5\u63d2\u4ef6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E6%8F%92%E4%BB%B6%E5%85%83%E6%95%B0%E6%8D%AE%E8%AE%BE%E7%BD%AE"},Object(l.b)("strong",{parentName:"a"},"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},Object(l.b)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6")))),Object(l.b)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"http-logger")," \u662f\u4e00\u4e2a\u63d2\u4ef6\uff0c\u53ef\u5c06Log\u6570\u636e\u8bf7\u6c42\u63a8\u9001\u5230 HTTP / HTTPS \u670d\u52a1\u5668\u3002"),Object(l.b)("p",null,"\u8fd9\u5c06\u63d0\u4f9b\u5c06 Log \u6570\u636e\u8bf7\u6c42\u4f5c\u4e3aJSON\u5bf9\u8c61\u53d1\u9001\u5230\u76d1\u89c6\u5de5\u5177\u548c\u5176\u4ed6 HTTP \u670d\u52a1\u5668\u7684\u529f\u80fd\u3002"),Object(l.b)("h2",{id:"\u5c5e\u6027\u5217\u8868"},"\u5c5e\u6027\u5217\u8868"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"uri"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"HTTP/HTTPS")," \u670d\u52a1\u5668\u7684 URI\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"auth_header"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},'""'),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u6388\u6743\u5934\u90e8\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"timeout"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"3"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8bf7\u6c42\u540e\u4fdd\u6301\u8fde\u63a5\u6d3b\u52a8\u7684\u65f6\u95f4\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},'"http logger"'),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u6807\u8bc6 logger \u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"batch_max_size"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"1000"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6bcf\u6279\u53d1\u9001\u65e5\u5fd7\u7684\u6700\u5927\u6761\u6570\uff0c\u5f53\u65e5\u5fd7\u6761\u6570\u8fbe\u5230\u8bbe\u7f6e\u7684\u6700\u5927\u503c\u65f6\uff0c\u4f1a\u81ea\u52a8\u63a8\u9001\u5168\u90e8\u65e5\u5fd7\u5230 ",Object(l.b)("inlineCode",{parentName:"td"},"HTTP/HTTPS")," \u670d\u52a1\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"inactive_timeout"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"5"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"\u5237\u65b0\u7f13\u51b2\u533a\u7684\u6700\u5927\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\uff0c\u5f53\u8fbe\u5230\u6700\u5927\u7684\u5237\u65b0\u65f6\u95f4\u65f6\uff0c\u65e0\u8bba\u7f13\u51b2\u533a\u4e2d\u7684\u65e5\u5fd7\u6570\u91cf\u662f\u5426\u8fbe\u5230\u8bbe\u7f6e\u7684\u6700\u5927\u6761\u6570\uff0c\u4e5f\u4f1a\u81ea\u52a8\u5c06\u5168\u90e8\u65e5\u5fd7\u63a8\u9001\u5230 ",Object(l.b)("inlineCode",{parentName:"td"},"HTTP/HTTPS")," \u670d\u52a1\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"buffer_duration"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"60"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u5148\u5904\u7406\u6279\u6b21\u4e2d\u6700\u65e7\u6761\u76ee\u7684\u6700\u957f\u671f\u9650\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"max_retry_count"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"[0,...]"),Object(l.b)("td",{parentName:"tr",align:null},"\u4ece\u5904\u7406\u7ba1\u9053\u4e2d\u79fb\u9664\u4e4b\u524d\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"retry_delay"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"[0,...]"),Object(l.b)("td",{parentName:"tr",align:null},"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u5219\u5e94\u5ef6\u8fdf\u6267\u884c\u6d41\u7a0b\u7684\u79d2\u6570\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"include_req_body"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null},"[false, true]"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f\u5426\u5305\u62ec\u8bf7\u6c42 body\u3002false\uff1a \u8868\u793a\u4e0d\u5305\u542b\u8bf7\u6c42\u7684 body \uff1b true\uff1a \u8868\u793a\u5305\u542b\u8bf7\u6c42\u7684 body \u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"concat_method"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},'"json"'),Object(l.b)("td",{parentName:"tr",align:null},'["json", "new_line"]'),Object(l.b)("td",{parentName:"tr",align:null},"\u679a\u4e3e\u7c7b\u578b\uff1a ",Object(l.b)("inlineCode",{parentName:"td"},"json"),"\u3001",Object(l.b)("inlineCode",{parentName:"td"},"new_line"),"\u3002",Object(l.b)("strong",{parentName:"td"},"json"),": \u5bf9\u6240\u6709\u5f85\u53d1\u65e5\u5fd7\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"td"},"json.encode")," \u7f16\u7801\u3002",Object(l.b)("strong",{parentName:"td"},"new_line"),": \u5bf9\u6bcf\u4e00\u6761\u5f85\u53d1\u65e5\u5fd7\u5355\u72ec\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"td"},"json.encode"),' \u7f16\u7801\u5e76\u4f7f\u7528 "\\n" \u8fde\u63a5\u8d77\u6765\u3002')))),Object(l.b)("h2",{id:"\u5982\u4f55\u5f00\u542f"},"\u5982\u4f55\u5f00\u542f"),Object(l.b)("p",null,"\u8fd9\u662f\u6709\u5173\u5982\u4f55\u4e3a\u7279\u5b9a\u8def\u7531\u542f\u7528 http-logger \u63d2\u4ef6\u7684\u793a\u4f8b\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "http-logger": {\n                "uri": "http://127.0.0.1:80/postendpoint?param=1"\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),Object(l.b)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u6210\u529f:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),Object(l.b)("h2",{id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"},"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"log_format"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009"),Object(l.b)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u5bf9\u8c61\u65b9\u5f0f\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9 value \u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",Object(l.b)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",Object(l.b)("strong",{parentName:"td"},"APISIX")," \u53d8\u91cf\u6216 ",Object(l.b)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx \u5185\u7f6e\u53d8\u91cf"),"\u3002\u7279\u522b\u7684\uff0c\u8be5\u8bbe\u7f6e\u662f\u5168\u5c40\u751f\u6548\u7684\uff0c\u610f\u5473\u7740\u6307\u5b9a log_format \u540e\uff0c\u5c06\u5bf9\u6240\u6709\u7ed1\u5b9a http-logger \u7684 Route \u6216 Service \u751f\u6548\u3002")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"APISIX \u53d8\u91cf")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u53d8\u91cf\u540d"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),Object(l.b)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u793a\u4f8b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"route_id"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"route")," \u7684 id"),Object(l.b)("td",{parentName:"tr",align:null},"$route_id")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"route_name"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"route")," \u7684 name"),Object(l.b)("td",{parentName:"tr",align:null},"$route_name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"service_id"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"service")," \u7684 id"),Object(l.b)("td",{parentName:"tr",align:null},"$service_id")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"service_name"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"service")," \u7684 name"),Object(l.b)("td",{parentName:"tr",align:null},"$service_name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"consumer_name"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"consumer")," \u7684 username"),Object(l.b)("td",{parentName:"tr",align:null},"$consumer_name")))),Object(l.b)("h3",{id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"},"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/http-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),Object(l.b)("p",null,"\u5728\u65e5\u5fd7\u6536\u96c6\u5904\uff0c\u5c06\u5f97\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684\u65e5\u5fd7\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),Object(l.b)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),Object(l.b)("p",null,"\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\u4ee5\u7981\u7528 http-logger\u3002APISIX \u63d2\u4ef6\u662f\u70ed\u91cd\u8f7d\u7684\uff0c\u56e0\u6b64\u65e0\u9700\u91cd\u65b0\u542f\u52a8 APISIX\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:2379/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d value=\'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),o=a,O=u["".concat(b,".").concat(o)]||u[o]||m[o]||l;return n?r.a.createElement(O,c(c({ref:t},p),{},{components:n})):r.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=o;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);