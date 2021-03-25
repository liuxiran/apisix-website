(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{223:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(250)),l={title:"consul_kv"},o={unversionedId:"discovery/consul_kv",id:"discovery/consul_kv",isDocsHomePage:!1,title:"consul_kv",description:"\x3c!--",source:"@site/docs/apisix/discovery/consul_kv.md",slug:"/discovery/consul_kv",permalink:"/docs/apisix/discovery/consul_kv",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/discovery/consul_kv.md",version:"current",sidebar:"docs",previous:{title:"DNS",permalink:"/docs/apisix/discovery/dns"},next:{title:"Health Check",permalink:"/docs/apisix/health-check"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Configuration for discovery client",id:"configuration-for-discovery-client",children:[{value:"Configuration for Consul KV",id:"configuration-for-consul-kv",children:[]},{value:"Register Http API Services",id:"register-http-api-services",children:[]},{value:"Upstream setting",id:"upstream-setting",children:[]}]},{value:"Debugging API",id:"debugging-api",children:[{value:"Memory Dump API",id:"memory-dump-api",children:[]},{value:"Show Dump File API",id:"show-dump-file-api",children:[]}]}],c={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("p",null,"For users who used ",Object(i.b)("a",{parentName:"p",href:"https://github.com/weibocom/nginx-upsync-module"},"nginx-upsync-module")," and consul key value for service discovery way, as we Weibo Mobile Team, maybe need it."),Object(i.b)("p",null,"Thanks to @fatman-x guy, who developed this module, called ",Object(i.b)("inlineCode",{parentName:"p"},"consul_kv"),", and its worker process data flow is below:\n",Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/548385/107141841-6ced3e00-6966-11eb-8aa4-bc790a4ad113.png",alt:null})),Object(i.b)("h2",{id:"configuration-for-discovery-client"},"Configuration for discovery client"),Object(i.b)("h3",{id:"configuration-for-consul-kv"},"Configuration for Consul KV"),Object(i.b)("p",null,"Add following configuration in ",Object(i.b)("inlineCode",{parentName:"p"},"conf/config.yaml")," :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  consul_kv:\n    servers:\n      - "http://127.0.0.1:8500"\n      - "http://127.0.0.1:8600"\n    prefix: "upstreams"\n    skip_keys:                    # if you need to skip special keys\n      - "upstreams/unused_api/"\n    timeout:\n      connect: 1000               # default 2000 ms\n      read: 1000                  # default 2000 ms\n      wait: 60                    # default 60 sec\n    weight: 1                     # default 1\n    fetch_interval: 5             # default 3 sec, only take effect for keepalive: false way\n    keepalive: true               # default true, use the long pull way to query consul servers\n    default_server:               # you can define default server when missing hit\n      host: "127.0.0.1"\n      port: 20999\n      metadata:\n        fail_timeout: 1           # default 1 ms\n        weight: 1                 # default 1\n        max_fails: 1              # default 1\n    dump:                         # if you need, when registered nodes updated can dump into file\n       path: "logs/consul_kv.dump"\n       expire: 2592000      # unit sec, here is 30 day\n')),Object(i.b)("p",null,"And you can config it in short by default value:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  consul_kv:\n    servers:\n      - "http://127.0.0.1:8500"\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"keepalive")," has two optional values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"true"),", default and recommend value, use the long pull way to query consul servers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"false"),", not recommend, it would use the short pull way to query consul servers, then you can set the ",Object(i.b)("inlineCode",{parentName:"li"},"fetch_interval")," for fetch interval")),Object(i.b)("h4",{id:"dump-data"},"Dump Data"),Object(i.b)("p",null,"When we need reload ",Object(i.b)("inlineCode",{parentName:"p"},"apisix")," online, as the ",Object(i.b)("inlineCode",{parentName:"p"},"consul_kv")," module maybe loads data from CONSUL slower than load routes from ETCD, and would get the log at the moment before load successfully from consul:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," http_access_phase(): failed to set upstream: no valid upstream node\n")),Object(i.b)("p",null,"So, we import the ",Object(i.b)("inlineCode",{parentName:"p"},"dump")," function for ",Object(i.b)("inlineCode",{parentName:"p"},"consul_kv")," module. When reload, would load the dump file before from consul; when the registered nodes in consul been updated, would dump the upstream nodes into file automatically."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"dump")," has three optional values now:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path"),", the dump file save path",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"support relative path, eg: ",Object(i.b)("inlineCode",{parentName:"li"},"logs/consul_kv.dump")),Object(i.b)("li",{parentName:"ul"},"support absolute path, eg: ",Object(i.b)("inlineCode",{parentName:"li"},"/tmp/consul_kv.bin")),Object(i.b)("li",{parentName:"ul"},"make sure the dump file's parent path exist"),Object(i.b)("li",{parentName:"ul"},"make sure the ",Object(i.b)("inlineCode",{parentName:"li"},"apisix")," has the dump file's read-write access permission,eg: ",Object(i.b)("inlineCode",{parentName:"li"},"chown  www:root conf/upstream.d/")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"load_on_init"),", default value is ",Object(i.b)("inlineCode",{parentName:"li"},"true"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"if ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", just try to load the data from the dump file before loading data from  consul when starting, does not care the dump file exists or not"),Object(i.b)("li",{parentName:"ul"},"if ",Object(i.b)("inlineCode",{parentName:"li"},"false"),", ignore loading data from the dump file"),Object(i.b)("li",{parentName:"ul"},"Whether ",Object(i.b)("inlineCode",{parentName:"li"},"true")," or ",Object(i.b)("inlineCode",{parentName:"li"},"false"),", we don't need to prepare a dump file for apisix at anytime"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"expire"),", unit sec, avoiding load expired dump data when load",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"default ",Object(i.b)("inlineCode",{parentName:"li"},"0"),", it is unexpired forever"),Object(i.b)("li",{parentName:"ul"},"recommend 2592000, which is 30 days(equals 3600 ","*"," 24 ","*"," 30)")))),Object(i.b)("h3",{id:"register-http-api-services"},"Register Http API Services"),Object(i.b)("p",null,"Service register Key&Value template:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'Key:    {Prefix}/{Service_Name}/{IP}:{Port}\nValue: {"weight": <Num>, "max_fails": <Num>, "fail_timeout": <Num>}\n')),Object(i.b)("p",null,"The register consul key use ",Object(i.b)("inlineCode",{parentName:"p"},"upstreams")," as prefix by default. The http api service name called ",Object(i.b)("inlineCode",{parentName:"p"},"webpages")," for example, and you can also use ",Object(i.b)("inlineCode",{parentName:"p"},"webpages/oneteam/hello")," as service name. The api instance of node's ip and port make up new key: ",Object(i.b)("inlineCode",{parentName:"p"},"<IP>:<Port>"),"."),Object(i.b)("p",null,"Now, register nodes into consul:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl \\\n    -X PUT \\\n    -d \' {"weight": 1, "max_fails": 2, "fail_timeout": 1}\' \\\n    http://127.0.0.1:8500/v1/kv/upstreams/webpages/172.19.5.12:8000\n\ncurl \\\n    -X PUT \\\n    -d \' {"weight": 1, "max_fails": 2, "fail_timeout": 1}\' \\\n    http://127.0.0.1:8500/v1/kv/upstreams/webpages/172.19.5.13:8000\n')),Object(i.b)("p",null,"In some case, same keys exist in different consul servers.\nTo avoid confusion, use the full consul key url path as service name in practice."),Object(i.b)("h3",{id:"upstream-setting"},"Upstream setting"),Object(i.b)("p",null,'Here is an example of routing a request with a URL of "/*" to a service which named "',Object(i.b)("a",{parentName:"p",href:"http://127.0.0.1:8500/v1/kv/upstreams/webpages/%22"},'http://127.0.0.1:8500/v1/kv/upstreams/webpages/"')," and use consul_kv discovery client in the registry :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/*",\n    "upstream": {\n        "service_name": "http://127.0.0.1:8500/v1/kv/upstreams/webpages/",\n        "type": "roundrobin",\n        "discovery_type": "consul_kv"\n    }\n}\'\n')),Object(i.b)("p",null,"The format response as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "value": {\n      "priority": 0,\n      "update_time": 1612755230,\n      "upstream": {\n        "discovery_type": "consul_kv",\n        "service_name": "http://127.0.0.1:8500/v1/kv/upstreams/webpages/",\n        "hash_on": "vars",\n        "type": "roundrobin",\n        "pass_host": "pass"\n      },\n      "id": "1",\n      "uri": "/*",\n      "create_time": 1612755230,\n      "status": 1\n    },\n    "key": "/apisix/routes/1"\n  },\n  "action": "set"\n}\n')),Object(i.b)("p",null,"You could find more usage in the ",Object(i.b)("inlineCode",{parentName:"p"},"apisix/t/discovery/consul_kv.t")," file."),Object(i.b)("h2",{id:"debugging-api"},"Debugging API"),Object(i.b)("p",null,"It also offers control api for debugging."),Object(i.b)("h3",{id:"memory-dump-api"},"Memory Dump API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"GET /v1/discovery/consul_kv/dump\n")),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'# curl http://127.0.0.1:9090/v1/discovery/consul_kv/dump | jq\n{\n  "config": {\n    "fetch_interval": 3,\n    "timeout": {\n      "wait": 60,\n      "connect": 6000,\n      "read": 6000\n    },\n    "prefix": "upstreams",\n    "weight": 1,\n    "servers": [\n      "http://172.19.5.30:8500",\n      "http://172.19.5.31:8500"\n    ],\n    "keepalive": true,\n    "default_service": {\n      "host": "172.19.5.11",\n      "port": 8899,\n      "metadata": {\n        "fail_timeout": 1,\n        "weight": 1,\n        "max_fails": 1\n      }\n    },\n    "skip_keys": [\n      "upstreams/myapi/gateway/apisix/"\n    ]\n  },\n  "services": {\n    "http://172.19.5.31:8500/v1/kv/upstreams/webpages/": [\n      {\n        "host": "127.0.0.1",\n        "port": 30513,\n        "weight": 1\n      },\n      {\n        "host": "127.0.0.1",\n        "port": 30514,\n        "weight": 1\n      }\n    ],\n    "http://172.19.5.30:8500/v1/kv/upstreams/1614480/grpc/": [\n      {\n        "host": "172.19.5.51",\n        "port": 50051,\n        "weight": 1\n      }\n    ],\n    "http://172.19.5.30:8500/v1/kv/upstreams/webpages/": [\n      {\n        "host": "127.0.0.1",\n        "port": 30511,\n        "weight": 1\n      },\n      {\n        "host": "127.0.0.1",\n        "port": 30512,\n        "weight": 1\n      }\n    ]\n  }\n}\n')),Object(i.b)("h3",{id:"show-dump-file-api"},"Show Dump File API"),Object(i.b)("p",null,"It offers another control api for dump file view now. Maybe would add more api for debugging in future."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"GET /v1/discovery/consul_kv/show_dump_file\n")),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9090/v1/discovery/consul_kv/show_dump_file | jq\n{\n  "services": {\n    "http://172.19.5.31:8500/v1/kv/upstreams/1614480/webpages/": [\n      {\n        "host": "172.19.5.12",\n        "port": 8000,\n        "weight": 120\n      },\n      {\n        "host": "172.19.5.13",\n        "port": 8000,\n        "weight": 120\n      }\n    ]\n  },\n  "expire": 0,\n  "last_update": 1615877468\n}\n')))}p.isMDXComponent=!0},250:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||i;return t?r.a.createElement(m,o(o({ref:n},c),{},{components:t})):r.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=b;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);