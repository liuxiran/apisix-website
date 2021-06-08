(self.webpackChunk=self.webpackChunk||[]).push([[87384],{85596:function(e){"use strict";e.exports=JSON.parse('{"pluginId":"docs-apisix","version":"current","label":"Next","isLast":false,"docsSidebars":{"docs":[{"collapsed":true,"type":"category","label":"Architecture Design","items":[{"type":"link","label":"APISIX","href":"/zh/docs/apisix/next/architecture-design/apisix"},{"type":"link","label":"Route","href":"/zh/docs/apisix/next/architecture-design/route"},{"type":"link","label":"Plugin","href":"/zh/docs/apisix/next/architecture-design/plugin"},{"type":"link","label":"Script","href":"/zh/docs/apisix/next/architecture-design/script"},{"type":"link","label":"Service","href":"/zh/docs/apisix/next/architecture-design/service"},{"type":"link","label":"Consumer","href":"/zh/docs/apisix/next/architecture-design/consumer"},{"type":"link","label":"Upstream","href":"/zh/docs/apisix/next/architecture-design/upstream"},{"type":"link","label":"Global rule","href":"/zh/docs/apisix/next/architecture-design/global-rule"},{"type":"link","label":"Plugin Config","href":"/zh/docs/apisix/next/architecture-design/plugin-config"},{"type":"link","label":"Router","href":"/zh/docs/apisix/next/architecture-design/router"},{"type":"link","label":"Debug Mode","href":"/zh/docs/apisix/next/architecture-design/debug-mode"}]},{"type":"link","label":"\u5feb\u901f\u5165\u95e8\u6307\u5357","href":"/zh/docs/apisix/next/getting-started"},{"type":"link","label":"\u5982\u4f55\u6784\u5efa Apache APISIX","href":"/zh/docs/apisix/next/how-to-build"},{"collapsed":true,"type":"category","label":"Plugins","items":[{"collapsed":true,"type":"category","label":"General","items":[{"type":"link","label":"batch-requests","href":"/zh/docs/apisix/next/plugins/batch-requests"},{"type":"link","label":"serverless","href":"/zh/docs/apisix/next/plugins/serverless"},{"type":"link","label":"redirect","href":"/zh/docs/apisix/next/plugins/redirect"},{"type":"link","label":"echo","href":"/zh/docs/apisix/next/plugins/echo"},{"type":"link","label":"server-info","href":"/zh/docs/apisix/next/plugins/server-info"},{"type":"link","label":"ext-plugin-pre-req","href":"/zh/docs/apisix/next/plugins/ext-plugin-pre-req"},{"type":"link","label":"ext-plugin-post-req","href":"/zh/docs/apisix/next/plugins/ext-plugin-post-req"}]},{"collapsed":true,"type":"category","label":"Transformation","items":[{"type":"link","label":"response-rewrite","href":"/zh/docs/apisix/next/plugins/response-rewrite"},{"type":"link","label":"proxy-rewrite","href":"/zh/docs/apisix/next/plugins/proxy-rewrite"},{"type":"link","label":"grpc-transcode","href":"/zh/docs/apisix/next/plugins/grpc-transcode"},{"type":"link","label":"fault-injection","href":"/zh/docs/apisix/next/plugins/fault-injection"}]},{"collapsed":true,"type":"category","label":"Authentication","items":[{"type":"link","label":"key-auth","href":"/zh/docs/apisix/next/plugins/key-auth"},{"type":"link","label":"jwt-auth","href":"/zh/docs/apisix/next/plugins/jwt-auth"},{"type":"link","label":"basic-auth","href":"/zh/docs/apisix/next/plugins/basic-auth"},{"type":"link","label":"authz-keycloak","href":"/zh/docs/apisix/next/plugins/authz-keycloak"},{"type":"link","label":"wolf-rbac","href":"/zh/docs/apisix/next/plugins/wolf-rbac"},{"type":"link","label":"openid-connect","href":"/zh/docs/apisix/next/plugins/openid-connect"},{"type":"link","label":"hmac-auth","href":"/zh/docs/apisix/next/plugins/hmac-auth"}]},{"collapsed":true,"type":"category","label":"Security","items":[{"type":"link","label":"cors","href":"/zh/docs/apisix/next/plugins/cors"},{"type":"link","label":"uri-blocker","href":"/zh/docs/apisix/next/plugins/uri-blocker"},{"type":"link","label":"ip-restriction","href":"/zh/docs/apisix/next/plugins/ip-restriction"},{"type":"link","label":"referer-restriction","href":"/zh/docs/apisix/next/plugins/referer-restriction"},{"type":"link","label":"consumer-restriction","href":"/zh/docs/apisix/next/plugins/consumer-restriction"}]},{"collapsed":true,"type":"category","label":"Traffic","items":[{"type":"link","label":"limit-req","href":"/zh/docs/apisix/next/plugins/limit-req"},{"type":"link","label":"limit-conn","href":"/zh/docs/apisix/next/plugins/limit-conn"},{"type":"link","label":"limit-count","href":"/zh/docs/apisix/next/plugins/limit-count"},{"type":"link","label":"proxy-cache","href":"/zh/docs/apisix/next/plugins/proxy-cache"},{"type":"link","label":"request-validation","href":"/zh/docs/apisix/next/plugins/request-validation"},{"type":"link","label":"proxy-mirror","href":"/zh/docs/apisix/next/plugins/proxy-mirror"},{"type":"link","label":"api-breaker","href":"/zh/docs/apisix/next/plugins/api-breaker"},{"type":"link","label":"traffic-split","href":"/zh/docs/apisix/next/plugins/traffic-split"},{"type":"link","label":"request-id","href":"/zh/docs/apisix/next/plugins/request-id"}]},{"collapsed":true,"type":"category","label":"Monitoring","items":[{"type":"link","label":"prometheus","href":"/zh/docs/apisix/next/plugins/prometheus"},{"type":"link","label":"zipkin","href":"/zh/docs/apisix/next/plugins/zipkin"},{"type":"link","label":"skywalking","href":"/zh/docs/apisix/next/plugins/skywalking"},{"type":"link","label":"node-status","href":"/zh/docs/apisix/next/plugins/node-status"}]},{"collapsed":true,"type":"category","label":"Loggers","items":[{"type":"link","label":"http-logger","href":"/zh/docs/apisix/next/plugins/http-logger"},{"type":"link","label":"tcp-logger","href":"/zh/docs/apisix/next/plugins/tcp-logger"},{"type":"link","label":"kafka-logger","href":"/zh/docs/apisix/next/plugins/kafka-logger"},{"type":"link","label":"udp-logger","href":"/zh/docs/apisix/next/plugins/udp-logger"},{"type":"link","label":"syslog","href":"/zh/docs/apisix/next/plugins/syslog"},{"type":"link","label":"log-rotate","href":"/zh/docs/apisix/next/plugins/log-rotate"},{"type":"link","label":"error-log-logger","href":"/zh/docs/apisix/next/plugins/error-log-logger"},{"type":"link","label":"sls-logger","href":"/zh/docs/apisix/next/plugins/sls-logger"}]},{"collapsed":true,"type":"category","label":"Other Protocols","items":[{"type":"link","label":"dubbo-proxy","href":"/zh/docs/apisix/next/plugins/dubbo-proxy"},{"type":"link","label":"mqtt-proxy","href":"/zh/docs/apisix/next/plugins/mqtt-proxy"}]}]},{"collapsed":true,"type":"category","label":"API","items":[{"type":"link","label":"Admin API","href":"/zh/docs/apisix/next/admin-api"},{"type":"link","label":"Control API","href":"/zh/docs/apisix/next/control-api"}]},{"type":"link","label":"\u5e38\u89c1\u95ee\u9898","href":"/zh/docs/apisix/next/FAQ"},{"collapsed":true,"type":"category","label":"Others","items":[{"collapsed":true,"type":"category","label":"Discovery","items":[{"type":"link","label":"\u96c6\u6210\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u4e2d\u5fc3","href":"/zh/docs/apisix/next/discovery"},{"type":"link","label":"DNS","href":"/zh/docs/apisix/next/discovery/dns"},{"type":"link","label":"consul_kv","href":"/zh/docs/apisix/next/discovery/consul_kv"},{"type":"link","label":"nacos","href":"/zh/docs/apisix/next/discovery/nacos"},{"type":"link","label":"eureka","href":"/zh/docs/apisix/next/discovery/eureka"}]},{"type":"link","label":"\u5065\u5eb7\u68c0\u67e5","href":"/zh/docs/apisix/next/health-check"},{"type":"link","label":"Router radixtree","href":"/zh/docs/apisix/next/router-radixtree"},{"type":"link","label":"Stand-alone mode","href":"/zh/docs/apisix/next/stand-alone"},{"type":"link","label":"TCP/UDP \u52a8\u6001\u4ee3\u7406","href":"/zh/docs/apisix/next/stream-proxy"},{"type":"link","label":"gRPC \u4ee3\u7406","href":"/zh/docs/apisix/next/grpc-proxy"},{"type":"link","label":"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e","href":"/zh/docs/apisix/next/customize-nginx-configuration"},{"type":"link","label":"HTTPS","href":"/zh/docs/apisix/next/https"},{"type":"link","label":"\u6279\u5904\u7406\u673a","href":"/zh/docs/apisix/next/batch-processor"},{"type":"link","label":"\u538b\u529b\u6d4b\u8bd5","href":"/zh/docs/apisix/next/benchmark"},{"type":"link","label":"\u5b89\u88c5\u4f9d\u8d56","href":"/zh/docs/apisix/next/install-dependencies"},{"type":"link","label":"\u63d2\u4ef6\u5f00\u53d1","href":"/zh/docs/apisix/next/plugin-develop"},{"type":"link","label":"External Plugin","href":"/zh/docs/apisix/next/external-plugin"},{"type":"link","label":"\u63d2\u4ef6\u62e6\u622a\u5668","href":"/zh/docs/apisix/next/plugin-interceptors"},{"type":"link","label":"CODE_STYLE","href":"https://github.com/apache/apisix/blob/master/CODE_STYLE.md"},{"type":"link","label":"\u8c03\u8bd5\u529f\u80fd","href":"/zh/docs/apisix/next/debug-function"}]},{"type":"link","label":"CHANGELOG","href":"https://github.com/apache/apisix/blob/master/CHANGELOG.md"}]},"permalinkToSidebar":{"/zh/docs/apisix/next/admin-api":"docs","/zh/docs/apisix/next/architecture-design/apisix":"docs","/zh/docs/apisix/next/architecture-design/consumer":"docs","/zh/docs/apisix/next/architecture-design/debug-mode":"docs","/zh/docs/apisix/next/architecture-design/global-rule":"docs","/zh/docs/apisix/next/architecture-design/plugin":"docs","/zh/docs/apisix/next/architecture-design/plugin-config":"docs","/zh/docs/apisix/next/architecture-design/route":"docs","/zh/docs/apisix/next/architecture-design/router":"docs","/zh/docs/apisix/next/architecture-design/script":"docs","/zh/docs/apisix/next/architecture-design/service":"docs","/zh/docs/apisix/next/architecture-design/upstream":"docs","/zh/docs/apisix/next/batch-processor":"docs","/zh/docs/apisix/next/benchmark":"docs","/zh/docs/apisix/next/control-api":"docs","/zh/docs/apisix/next/customize-nginx-configuration":"docs","/zh/docs/apisix/next/debug-function":"docs","/zh/docs/apisix/next/discovery":"docs","/zh/docs/apisix/next/discovery/consul_kv":"docs","/zh/docs/apisix/next/discovery/dns":"docs","/zh/docs/apisix/next/discovery/eureka":"docs","/zh/docs/apisix/next/discovery/nacos":"docs","/zh/docs/apisix/next/external-plugin":"docs","/zh/docs/apisix/next/FAQ":"docs","/zh/docs/apisix/next/getting-started":"docs","/zh/docs/apisix/next/grpc-proxy":"docs","/zh/docs/apisix/next/health-check":"docs","/zh/docs/apisix/next/how-to-build":"docs","/zh/docs/apisix/next/https":"docs","/zh/docs/apisix/next/install-dependencies":"docs","/zh/docs/apisix/next/plugin-develop":"docs","/zh/docs/apisix/next/plugin-interceptors":"docs","/zh/docs/apisix/next/plugins/api-breaker":"docs","/zh/docs/apisix/next/plugins/authz-keycloak":"docs","/zh/docs/apisix/next/plugins/basic-auth":"docs","/zh/docs/apisix/next/plugins/batch-requests":"docs","/zh/docs/apisix/next/plugins/consumer-restriction":"docs","/zh/docs/apisix/next/plugins/cors":"docs","/zh/docs/apisix/next/plugins/dubbo-proxy":"docs","/zh/docs/apisix/next/plugins/echo":"docs","/zh/docs/apisix/next/plugins/error-log-logger":"docs","/zh/docs/apisix/next/plugins/ext-plugin-post-req":"docs","/zh/docs/apisix/next/plugins/ext-plugin-pre-req":"docs","/zh/docs/apisix/next/plugins/fault-injection":"docs","/zh/docs/apisix/next/plugins/grpc-transcode":"docs","/zh/docs/apisix/next/plugins/hmac-auth":"docs","/zh/docs/apisix/next/plugins/http-logger":"docs","/zh/docs/apisix/next/plugins/ip-restriction":"docs","/zh/docs/apisix/next/plugins/jwt-auth":"docs","/zh/docs/apisix/next/plugins/kafka-logger":"docs","/zh/docs/apisix/next/plugins/key-auth":"docs","/zh/docs/apisix/next/plugins/limit-conn":"docs","/zh/docs/apisix/next/plugins/limit-count":"docs","/zh/docs/apisix/next/plugins/limit-req":"docs","/zh/docs/apisix/next/plugins/log-rotate":"docs","/zh/docs/apisix/next/plugins/mqtt-proxy":"docs","/zh/docs/apisix/next/plugins/node-status":"docs","/zh/docs/apisix/next/plugins/openid-connect":"docs","/zh/docs/apisix/next/plugins/prometheus":"docs","/zh/docs/apisix/next/plugins/proxy-cache":"docs","/zh/docs/apisix/next/plugins/proxy-mirror":"docs","/zh/docs/apisix/next/plugins/proxy-rewrite":"docs","/zh/docs/apisix/next/plugins/redirect":"docs","/zh/docs/apisix/next/plugins/referer-restriction":"docs","/zh/docs/apisix/next/plugins/request-id":"docs","/zh/docs/apisix/next/plugins/request-validation":"docs","/zh/docs/apisix/next/plugins/response-rewrite":"docs","/zh/docs/apisix/next/plugins/server-info":"docs","/zh/docs/apisix/next/plugins/serverless":"docs","/zh/docs/apisix/next/plugins/skywalking":"docs","/zh/docs/apisix/next/plugins/sls-logger":"docs","/zh/docs/apisix/next/plugins/syslog":"docs","/zh/docs/apisix/next/plugins/tcp-logger":"docs","/zh/docs/apisix/next/plugins/traffic-split":"docs","/zh/docs/apisix/next/plugins/udp-logger":"docs","/zh/docs/apisix/next/plugins/uri-blocker":"docs","/zh/docs/apisix/next/plugins/wolf-rbac":"docs","/zh/docs/apisix/next/plugins/zipkin":"docs","/zh/docs/apisix/next/router-radixtree":"docs","/zh/docs/apisix/next/stand-alone":"docs","/zh/docs/apisix/next/stream-proxy":"docs"}}')}}]);