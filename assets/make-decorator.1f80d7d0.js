var l=Object.defineProperty;var p=(m,e)=>l(m,"name",{value:e,configurable:!0});import"./iframe.d4ceda06.js";var h=p(function(e){var s=e.name,u=e.parameterName,c=e.wrapper,f=e.skipIfNoParametersOrOptions,d=f===void 0?!1:f,o=p(function(r){return function(a,t){var n=t.parameters&&t.parameters[u];return n&&n.disable||d&&!r&&!n?a(t):c(a,t,{options:r,parameters:n})}},"decorator");return function(){for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return typeof r[0]=="function"?o().apply(void 0,r):function(){if(arguments.length>1)return r.length>1?o(r).apply(void 0,arguments):o.apply(void 0,r).apply(void 0,arguments);throw new Error("Passing stories directly into ".concat(s,`() is not allowed,
        instead use addDecorator(`).concat(s,") and pass options with the '").concat(u,"' parameter"))}}},"makeDecorator");export{h as m};
//# sourceMappingURL=make-decorator.1f80d7d0.js.map
