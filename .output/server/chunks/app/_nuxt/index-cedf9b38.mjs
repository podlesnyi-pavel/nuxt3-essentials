import { _ as __nuxt_component_0 } from './nuxt-link-e2f9922e.mjs';
import { u as useFetch } from './fetch-712c18bc.mjs';
import { withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/tickers?limit=10", "$PslAyef5YX")), __temp = await __temp, __restore(), __temp);
    console.log(data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}><h1>Index Page</h1>`);
      if (unref(data) && unref(data).data) {
        _push(`<table border="1 px solid"><thead><tr><th>Name</th><th>Symbol</th><th>Price</th><th>Details</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(data).data, (currency) => {
          _push(`<tr><td>${ssrInterpolate(currency.name)}</td><td>${ssrInterpolate(currency.symbol)}</td><td>${ssrInterpolate(currency.price_usd)}</td><td>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/currency/" + currency.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(currency.id)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(currency.id), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-cedf9b38.mjs.map
