(self.webpackChunk=self.webpackChunk||[]).push([[69769],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),f=a,m=h["".concat(c,".").concat(f)]||h[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41805:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Apache APISIX Dashboard \u8bbf\u95ee\u63a7\u5236\u7ed5\u8fc7\u6f0f\u6d1e\u516c\u544a\uff08CVE-2021-33190\uff09",author:"Zhiyuan Ju",authorURL:"https://github.com/juzhiyuan",authorImageURL:"https://avatars.githubusercontent.com/u/2106987?v=4"},l={permalink:"/blog/2021/06/17/Apache-APISIX-Dashboard-Access-Control-Bypass-Vulnerability-Announcement",source:"@site/blog/2021-06-17-Apache-APISIX-Dashboard-Access-Control-Bypass-Vulnerability-Announcement.md",title:"Apache APISIX Dashboard \u8bbf\u95ee\u63a7\u5236\u7ed5\u8fc7\u6f0f\u6d1e\u516c\u544a\uff08CVE-2021-33190\uff09",description:"@juzhiyuan, Apache APISIX PMC from Shenzhen Zhiliu Technology Co.",date:"2021-06-17T00:00:00.000Z",formattedDate:"June 17, 2021",tags:[],readingTime:.395,truncated:!0,prevItem:{title:"Apache APISIX Ingress Controller \u9996\u4e2a GA \u7248\u672c v1.0 \u6b63\u5f0f\u53d1\u5e03\uff01",permalink:"/blog/2021/06/18/first-GA-version-v1.0-of-Apache-APISIX-Ingress-Controller-released"},nextItem:{title:"Chaos Mesh \u52a9\u529b Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027",permalink:"/blog/2021/06/16/Chaos-Mesh-helps-Apache-APISIX-improve-stability"}},c=[{value:"\u5f71\u54cd\u7248\u672c",id:"\u5f71\u54cd\u7248\u672c",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[]},{value:"\u6f0f\u6d1e\u8be6\u60c5",id:"\u6f0f\u6d1e\u8be6\u60c5",children:[]},{value:"\u8d21\u732e\u8005\u7b80\u4ecb",id:"\u8d21\u732e\u8005\u7b80\u4ecb",children:[]},{value:"\u62d3\u5c55\u9605\u8bfb",id:"\u62d3\u5c55\u9605\u8bfb",children:[]}],p={toc:c};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/juzhiyuan"},"@juzhiyuan"),", Apache APISIX PMC from ",(0,o.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co.")),(0,o.kt)("h3",{parentName:"blockquote",id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0")),(0,o.kt)("p",null,"\u5728 Apache APISIX Dashboard 2.6 \u4e2d\uff0c\u5b58\u5728\u4e24\u4e2a\u914d\u7f6e\u9879\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"conf.listen.host")," \u7684\u914d\u7f6e\u9879\uff0c\u7528\u4e8e\u6307\u5b9a ManagerAPI \u5728\u542f\u52a8\u65f6\u76d1\u542c\u54ea\u4e2a IP \u5730\u5740\uff0c\u5b83\u7684\u9ed8\u8ba4\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," \uff08\u9ed8\u8ba4\u76d1\u542c\u5916\u90e8\u7f51\u7edc\u8bf7\u6c42\uff09\uff1b")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"conf.allow_list")," \u7684\u914d\u7f6e\u9879\uff0c\u7528\u4e8e\u8fdb\u884c\u8bbf\u95ee\u63a7\u5236\uff0c\u9ed8\u8ba4\u53ea\u5141\u8bb8 ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," \uff08\u5373\u672c\u5730\u7f51\u7edc\uff09\u8fdb\u884c\u8bbf\u95ee\u3002"))),(0,o.kt)("p",null,"\u7531\u4e8e\u7a0b\u5e8f\u901a\u8fc7\u83b7\u53d6\u8bf7\u6c42\u5934 ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For")," \u7684\u503c\u6765\u8fdb\u884c\u8bbf\u95ee\u63a7\u5236\u5224\u65ad\uff0c\u5bfc\u81f4\u653b\u51fb\u8005\u5728\u8c03\u7528 API \u8bf7\u6c42\u65f6\uff0c\u53ea\u9700\u7be1\u6539\u8be5\u8bf7\u6c42\u5934\u5373\u53ef\u5b9e\u73b0\u8bbf\u95ee\u63a7\u5236\u7ed5\u8fc7\u653b\u51fb\u3002"),(0,o.kt)("h3",{id:"\u5f71\u54cd\u7248\u672c"},"\u5f71\u54cd\u7248\u672c"),(0,o.kt)("p",null,"Apache APISIX 2.6.0"),(0,o.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,"\u8be5\u95ee\u9898\u5df2\u5728 2.6.1 \u7248\u672c\u4e2d\u89e3\u51b3\uff0c\u8bf7\u5c3d\u5feb\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\uff0c\u5e76\u5728\u90e8\u7f72\u7a0b\u5e8f\u540e\u4fee\u6539\u9ed8\u8ba4\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u3002"),(0,o.kt)("h3",{id:"\u6f0f\u6d1e\u8be6\u60c5"},"\u6f0f\u6d1e\u8be6\u60c5"),(0,o.kt)("p",null,"\u6f0f\u6d1e\u516c\u5f00\u65f6\u95f4\uff1a2021 \u5e74 6 \u6708 8 \u65e5"),(0,o.kt)("p",null,"CVE \u8be6\u7ec6\u4fe1\u606f\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2021-33190"},"https://nvd.nist.gov/vuln/detail/CVE-2021-33190")),(0,o.kt)("h3",{id:"\u8d21\u732e\u8005\u7b80\u4ecb"},"\u8d21\u732e\u8005\u7b80\u4ecb"),(0,o.kt)("p",null,"\u8be5\u6f0f\u6d1e\u662f\u7531\u5e73\u5b89\u79d1\u6280\u94f6\u6cb3\u5b89\u5168\u5b9e\u9a8c\u5ba4\u7684 Vern \u53d1\u73b0\uff0c\u5e76\u5411 Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u4e0a\u62a5\u8be5\u6f0f\u6d1e\u3002\u611f\u8c22 Vern \u548c\u5e73\u5b89\u79d1\u6280\u94f6\u6cb3\u5b89\u5168\u5b9e\u9a8c\u5ba4\u5bf9 Apache APISIX \u793e\u533a\u7684\u8d21\u732e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"2021-06-17-1",src:n(66374).Z})),(0,o.kt)("h3",{id:"\u62d3\u5c55\u9605\u8bfb"},"\u62d3\u5c55\u9605\u8bfb"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/blog/2021/01/11/interview-Apache-APISIX-contributor-Wang-Pengcheng-Senior-Security-Advisor-of-PwC-South-China-Data-Security-and-Privacy-Protection-Team"},"Apache APISIX \u8d21\u732e\u8005\u4e13\u8bbf | \u666e\u534e\u6c38\u9053\u534e\u5357\u6570\u636e\u5b89\u5168\u4e0e\u9690\u79c1\u4fdd\u62a4\u56e2\u961f\u9ad8\u7ea7\u5b89\u5168\u987e\u95ee\u738b\u9e4f\u8bda")))}u.isMDXComponent=!0},66374:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2021-06-17-1-5fcdb8fc28b061fc73281b2211fd3355.jpeg"}}]);