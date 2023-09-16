import { c as create_ssr_component, d as add_attribute, a as subscribe, v as validate_component, b as each, e as escape } from "../../../../chunks/ssr.js";
import { P as Page } from "../../../../chunks/Page.js";
import { w as writable } from "../../../../chunks/index2.js";
const Qr = "/_app/immutable/assets/qr.9f2aa550.jpeg";
const Scan_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".scan.svelte-qujqc9.svelte-qujqc9{display:flex;flex-direction:column;align-items:center;gap:var(--pad)}.scan.svelte-qujqc9 img.svelte-qujqc9{width:20rem;height:20rem;object-fit:contain;border-radius:var(--rad)}p.svelte-qujqc9.svelte-qujqc9{margin:0}",
  map: null
};
const Scan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="content" data-svelte-h="svelte-x1t4fk"><div class="scan svelte-qujqc9"><img${add_attribute("src", Qr, 0)} alt="CPS Campus QR Code" class="svelte-qujqc9"> <p class="svelte-qujqc9">Scan this QR code to sign up with CPS Campus</p></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-174hht7.svelte-174hht7{width:100%;display:flex;flex-direction:column;gap:var(--pad);height:100%}.or.svelte-174hht7.svelte-174hht7{font-size:1.2rem;width:100%;text-align:center}.signup.svelte-174hht7.svelte-174hht7{display:flex;flex-direction:row;width:100%;gap:var(--pad)}.mailInput.svelte-174hht7.svelte-174hht7{display:flex;flex-direction:row;align-items:center;gap:var(--pad);font-size:1.2rem;width:100%}.mailInput.svelte-174hht7>input.svelte-174hht7{font-size:1.2rem;flex:1;background:var(--back-1);border:none;border-radius:var(--rad);padding:var(--pad);box-sizing:border-box;color:var(--text)}.signup.svelte-174hht7>button.svelte-174hht7{white-space:nowrap}input.svelte-174hht7.svelte-174hht7::placeholder{color:var(--text-weak)}input.svelte-174hht7.svelte-174hht7:focus{outline:none;background:var(--back-3)}.emailScroll.svelte-174hht7.svelte-174hht7{display:flex;flex-direction:column;width:100%;height:100%;overflow:scroll;position:relative;box-sizing:border-box}.emails.svelte-174hht7.svelte-174hht7{display:flex;flex-direction:column;box-sizing:border-box;position:absolute;height:100%;width:100%;gap:var(--pad)}.email.svelte-174hht7.svelte-174hht7{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:var(--pad);padding:var(--pad);border-radius:var(--rad);background:var(--back-1);color:var(--text)}",
  map: null
};
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $signUps, $$unsubscribe_signUps;
  const signUps = writable([]);
  $$unsubscribe_signUps = subscribe(signUps, (value) => $signUps = value);
  let email;
  let emailInput;
  $$result.css.add(css);
  $$unsubscribe_signUps();
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="content svelte-174hht7">${validate_component(Scan, "Scan").$$render($$result, {}, {}, {})} <div class="or svelte-174hht7" data-svelte-h="svelte-tbjmnz">or</div> <div class="signup svelte-174hht7"><div class="mailInput svelte-174hht7"><input type="text" placeholder="Email here" class="svelte-174hht7"${add_attribute("this", emailInput, 0)}${add_attribute("value", email, 0)}> <span data-svelte-h="svelte-9knnb7">@college-prep.org</span></div> <button class="svelte-174hht7" data-svelte-h="svelte-1n7cpge">Sign up</button></div> <div class="emailScroll svelte-174hht7"><div class="emails svelte-174hht7">${each($signUps, (signUp) => {
        return `<div class="email svelte-174hht7"><span>${escape(signUp)}@college-prep.org</span> </div>`;
      })}</div></div></div>`;
    }
  })}`;
});
export {
  Page_1 as default
};
