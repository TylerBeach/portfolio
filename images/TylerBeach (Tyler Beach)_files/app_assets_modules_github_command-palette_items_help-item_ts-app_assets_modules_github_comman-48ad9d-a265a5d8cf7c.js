"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d"],{94831:(e,t,r)=>{r.d(t,{i:()=>s});var o=r(76006),i=r(16852),n=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let s=class ClientDefinedProviderElement extends i.b{static build(e,t){let r=new ClientDefinedProviderElement;return r.providerId=e,r.provider=t,r}connectedCallback(){this.setAttribute("data-targets","command-palette.clientDefinedProviderElements")}};n([o.Lj],s.prototype,"providerId",void 0),s=n([o.Ih],s)},7667:(e,t,r)=>{r.d(t,{Z:()=>g,o:()=>y});var o,i=r(76006),n=r(94831),s=r(25543),a=r(48084),l=r(50034),c=r(80425),d=r(3447),p=r(52418),u=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let h=()=>navigator.platform.match(/Mac/),m=h()?"metaKey":"ctrlKey",f=h()?"Meta":"Control",y=e=>e instanceof KeyboardEvent&&e[m],g=((o=class CommandPalette extends HTMLElement{setup(){this.modes=Array.from(this.querySelectorAll("command-palette-mode")),this.defaultMode=this.querySelector(".js-command-palette-default-mode"),this.commandPaletteInput=this.querySelector("command-palette-input"),this.groups=this.querySelectorAll("command-palette-item-group"),this.defaultOpen&&(this.manualToggle(!0),this.clearReturnToParams()),window.commandPalette=this,this.setupComplete=!0;let e=new Event("command-palette-ready",{bubbles:!0,cancelable:!0});this.dispatchEvent(e)}connectedCallback(){this.setupComplete||this.setup()}clear(e=!0){this.clearProviderCaches(),this.pageStack.reset(),e&&this.resetInput()}clearCommands(e=!0){return this.everActivated&&(this.clearCommandProviderCaches(),e&&this.resetInput()),Promise.resolve()}resetInput(){this.commandPaletteInput.inputValue=""}activate(){this.sessionId=this.generateSessionId(),this.commandPaletteInput.scopeElement.smallDisplay=this.offsetWidth<450,this.commandPaletteInput.focus(),this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.pageStack.commandPaletteActivated(),this.dispatchEvent(new CustomEvent("command-palette-activated",{detail:{previouslyActivated:this.everActivated}})),this.activated=!0,this.everActivated=!0,(0,p.j)("session_initiated")}deactivate(){this.activated=!1,this.pageStack.unbindListeners(),this.clear(),this.previouslyActiveElement&&this.previouslyActiveElement.focus(),(0,p.j)("session_terminated")}generateSessionId(){return(0,c.k)(`${Date.now()}_${this.userId}_${this.query.path}`).toString()}manualToggle(e){let t=this.closest("details");e?t.open=!0:t.removeAttribute("open")}dismiss(){this.manualToggle(!1),this.clear()}get secondaryActivationHotkey(){let e=this.activationHotkey.split(",");return e.length>1?e[e.length-1]:""}get platformActivationHotkey(){return this.platformHotkey(this.activationHotkey)}get platformSecondaryActivationHotkey(){return this.platformHotkey(this.secondaryActivationHotkey)}get platformCommandModeHotkey(){return this.platformHotkey(this.commandModeHotkey)}platformHotkey(e){if("none"===e)return"";let t=e;if(h())t=t.replace(/Mod\+Alt/g,"Alt+Mod");else if(t.includes("Shift")){let e=t.charAt(t.length-1);t+=`,${t.replace(`Shift+${e}`,e.toUpperCase())}`}return t.replace(/Mod/g,f)}onInput(){this.everActivated&&(this.commandPaletteInput.typeahead="",this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.updateOverlay())}updateOverlay(){let e=this.getMode();for(let t of(this.commandPaletteInput.overlay=e,this.groups))t.renderElement(e);if(e&&""===this.getTextWithoutMode()){let e=this.getModeElement().placeholder||"";this.commandPaletteInput.showModePlaceholder(e)}else this.commandPaletteInput.showModePlaceholder("")}itemsUpdated(e){if(!(e instanceof CustomEvent))return;let t=e.detail.items,r=t.filter(e=>e.group!==s.O.footerGroupId),o=r.filter(e=>!e.group||!s.O.helpGroupIds.includes(e.group)),i=r.length>o.length,n=0===o.length&&this.activated;o.length>0?this.toggleEmptyState(!1,i):n&&(this.toggleEmptyState(!0,i),this.toggleTips()),this.toggleErrorTips()}loadingStateChanged(e){e instanceof CustomEvent&&(this.commandPaletteInput.loading=e.detail.loading)}pageFetchError(e){e instanceof CustomEvent&&(this.error=!0,this.toggleErrorTips())}selectedItemChanged(e){if(!(e instanceof CustomEvent))return;let t=e.detail.item,r=e.detail.isDefaultSelection;this.updateTypeahead(t,r)}setActiveModeElement(){let e=this.commandPaletteInput.inputValue.substring(0,1),t=this.modes.filter(t=>t.active(this.query.scope,e)).find(t=>t.character()===e);this.activeMode=t||this.defaultMode,this.pageStack.currentMode=this.activeMode.character()}setQuery(){this.query=new l.A(this.getTextWithoutMode().trimStart(),this.getMode(),{scope:this.commandPaletteInput.scope,subjectId:this.pageStack.defaultScopeId,subjectType:this.pageStack.defaultScopeType,returnTo:this.returnTo}),this.pageStack.currentQueryText=this.getTextWithoutMode().trimStart()}getModeElement(){return this.activeMode}getMode(){return this.getModeElement()?.character()}getTextWithoutMode(){if(!this.commandPaletteInput)return"";let e=this.commandPaletteInput.inputValue,t=this.getMode();return t&&e.startsWith(t)?e.substring(1):e}get selectedItem(){return this.pageStack.currentPage.selectedItem}onSelect(e){this.selectedItem?this.selectedItem.item.select(this):e.preventDefault()}autocomplete(e){(0,p.j)("autocompleted",e);let t=this.commandPaletteInput;void 0!==e.typeahead?t.inputValue=t.overlay+e.typeahead:t.inputValue=t.overlay+e.title}setScope(e){(0,p.j)("scoped");let t=e||this.commandPaletteInput.scope;for(let e of t.tokens){let r=e===t.tokens[t.tokens.length-1],o=new a.j({title:e.value,scopeId:e.id,scopeType:e.type});this.pageStack.push(o,!r)}this.commandPaletteInput.inputValue=""}onDescope(){this.toggleEmptyState(!1,!1),this.pageStack.pop(),this.toggleTips()}onInputClear(){this.pageStack.clear()}onKeydown(e){"Enter"===e.key&&this.selectedItem?(this.selectedItem?.activate(this,e),e.preventDefault(),e.stopPropagation()):"ArrowDown"===e.key?(this.navigateToItem(1),e.preventDefault(),e.stopPropagation()):"ArrowUp"===e.key?(this.navigateToItem(-1),e.preventDefault(),e.stopPropagation()):this.isCopyEvent(e)&&this.selectedItem&&(this.selectedItem.copy(this),e.preventDefault(),e.stopPropagation())}close(e){if(e instanceof KeyboardEvent&&"Enter"!==e.key)return;let t=document.querySelector(".command-palette-details-dialog");t.toggle(!1),e.stopImmediatePropagation(),e.preventDefault()}navigateToItem(e){this.pageStack.navigate(e)}toggleTips(){let e=this.modeTips.filter(e=>e.available(this.query)),t=e[Math.floor(Math.random()*e.length)];for(let e of this.modeTips)e.hidden=t!==e;this.pageStack.hasVisibleTip=!!t,this.pageStack.currentPage.recomputeStyles()}toggleEmptyState(e,t){for(let t of this.emptyStateElements)t.toggle(this.query,e);if(!t&&e){let e=this.serverDefinedProviderElements.find(e=>"help"===e.type);e&&this.pageStack.currentPage.fetch([e.provider],{isEmpty:!0})}}toggleErrorTips(){for(let e of this.errorStateTips)e.toggle(this.query,!1,this.error)}inputReady(e){e instanceof CustomEvent&&(this.resizeObserver||(this.resizeObserver=new ResizeObserver(e=>{for(let t of e)this.commandPaletteInput.scopeElement.smallDisplay=t.contentRect.width<450}),this.resizeObserver.observe(this)))}updateInputScope(e){e instanceof CustomEvent&&(this.commandPaletteInput.scope=this.pageStack.scope,this.setQuery())}updateTypeahead(e,t=!1){""===this.getTextWithoutMode()&&(!e||t)?this.commandPaletteInput.typeahead="":e&&(this.commandPaletteInput.typeahead=e.typeahead??e.title??"")}isCopyEvent(e){return!this.commandPaletteInput.textSelected()&&(h()?e.metaKey&&"c"===e.key:e.ctrlKey&&"c"===e.key)}setQueryScope(){this.query.scope=this.commandPaletteInput.scope}get providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get commandsProviderElements(){return this.providerElements.filter(e=>e.provider?.hasCommands)}clearProviderCaches(){for(let e of this.providerElements)e.provider?.clearCache()}clearCommandProviderCaches(){for(let e of this.commandsProviderElements)e.provider?.clearCache()}registerProvider(e,t){let r=this.querySelector(`client-defined-provider[data-provider-id="${e}"]`);r&&r.remove();let o=n.i.build(e,t);this.appendChild(o)}pushPage(e,t=!1){t&&this.pageStack.clear(!1),this.pageStack.push(e),this.resetInput()}get tipElements(){let e=this.querySelectorAll("command-palette-tip");return Array.from(e)}get modeTips(){return this.tipElements.filter(e=>!e.onEmpty&&!e.onError)}get emptyStateElements(){return this.tipElements.filter(e=>e.onEmpty)}get errorStateTips(){return this.tipElements.filter(e=>e.onError)}get placeholder(){return this.getAttribute("placeholder")||""}clearReturnToParams(){let e=new URLSearchParams(location.search);e.delete("command_palette_open"),e.delete("command_query"),e.delete("command_mode"),e.delete("clear_command_scope"),history.replaceState(null,"",`?${e}${location.hash}`)}displayFlash(e,t,r=5e3){let o=document.querySelector(".js-command-palette-toasts");if(!o)return;let i=o.querySelectorAll(".Toast");for(let e of i)e.hidden=!0;let n=o.querySelector(`.Toast.Toast--${e}`);if(!n)return;let s=n.querySelector(".Toast-content");s.textContent=t,n.hidden=!1,setTimeout(()=>{n.hidden=!0},r)}constructor(...e){super(...e),this.everActivated=!1,this.activated=!1,this.error=!1,this.query=new l.A("",""),this.setupComplete=!1,this.sessionId="",this.returnTo="",this.userId="",this.defaultOpen=!1,this.activationHotkey="Mod+k,Mod+Alt+k",this.commandModeHotkey="Mod+Shift+k,Control+K"}}).tagName="command-palette",o.attrPrefix="",o);u([i.Lj],g.prototype,"returnTo",void 0),u([i.Lj],g.prototype,"userId",void 0),u([i.Lj],g.prototype,"defaultOpen",void 0),u([i.Lj],g.prototype,"activationHotkey",void 0),u([i.Lj],g.prototype,"commandModeHotkey",void 0),u([i.fA],g.prototype,"pageStack",void 0),u([i.GO],g.prototype,"clientDefinedProviderElements",void 0),u([i.GO],g.prototype,"serverDefinedProviderElements",void 0),u([(0,d.D)(250)],g.prototype,"clearCommands",null),g=u([i.Ih],g)},25543:(e,t,r)=>{r.d(t,{O:()=>a});var o,i=r(76006),n=r(93882),s=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let a=((o=class CommandPaletteItemGroupElement extends HTMLElement{connectedCallback(){this.classList.add("py-2","border-top"),this.setAttribute("hidden","true"),this.skipTemplate||this.renderElement(""),this.skipTemplate=!0}prepareForNewItems(){this.list.textContent="",this.setAttribute("hidden","true"),this.classList.contains("border-top")||this.classList.add("border-top")}hasItem(e){return this.list.querySelectorAll(`[data-item-id="${e.id}"]`).length>0}renderElement(e){(0,n.sY)(this.hasTitle?n.dy`
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              ${this.groupTitle}
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              ${e?"":this.groupHint}
            </span>
          </div>
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `:n.dy`
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `,this)}push(e){this.removeAttribute("hidden"),this.topGroup&&this.atLimit?e.itemId!==this.firstItem.itemId&&this.replaceTopGroupItem(e):this.list.append(e)}replaceTopGroupItem(e){this.list.replaceChild(e,this.firstItem)}groupLimitForScope(){let e=this.closest("command-palette");if(e){let t=e.query.scope.type;return JSON.parse(this.groupLimits)[t]}}get limit(){let e=this.groupLimitForScope();return this.topGroup?1:this.isModeActive()?50:e||CommandPaletteItemGroupElement.defaultGroupLimit}get atLimit(){return this.list.children.length>=this.limit}parsedGroupLimits(){return this.groupLimits?JSON.parse(this.groupLimits):{}}limitForScopeType(e){let t=this.parsedGroupLimits(),r=t[e];return this.topGroup?1:this.isModeActive()?CommandPaletteItemGroupElement.activeModeLimit:r||0===r?r:CommandPaletteItemGroupElement.defaultGroupLimit}atLimitForScopeType(e){return this.list.children.length>=this.limitForScopeType(e)}isModeActive(){let e=this.closest("command-palette");return!!e&&e.getMode()}get topGroup(){return this.groupId===CommandPaletteItemGroupElement.topGroupId}get hasTitle(){return this.groupId!==CommandPaletteItemGroupElement.footerGroupId&&this.groupId!==CommandPaletteItemGroupElement.defaultGroupId}get itemNodes(){return this.list.querySelectorAll("command-palette-item")}get firstItem(){return this.itemNodes[0]}get lastItem(){return this.itemNodes[this.itemNodes.length-1]}constructor(...e){super(...e),this.groupLimits="",this.defaultPriority=0,this.skipTemplate=!1}}).defaultGroupLimit=5,o.activeModeLimit=50,o.topGroupId="top",o.defaultGroupId="default",o.footerGroupId="footer",o.helpGroupIds=["modes_help","filters_help"],o.commandGroupIds=["commands"],o.topGroupScoreThreshold=9,o);s([i.Lj],a.prototype,"groupTitle",void 0),s([i.Lj],a.prototype,"groupHint",void 0),s([i.Lj],a.prototype,"groupId",void 0),s([i.Lj],a.prototype,"groupLimits",void 0),s([i.Lj],a.prototype,"defaultPriority",void 0),s([i.Lj],a.prototype,"skipTemplate",void 0),s([i.fA],a.prototype,"list",void 0),s([i.fA],a.prototype,"header",void 0),a=s([i.Ih],a)},64316:(e,t,r)=>{r.d(t,{v:()=>a});var o,i=r(76006),n=r(93882),s=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let a=((o=class CommandPaletteScopeElement extends HTMLElement{connectedCallback(){this.classList.add("d-inline-flex")}get lastToken(){return this.tokens[this.tokens.length-1]}get text(){return this.tokens.map(e=>e.text).join("/")}get id(){return this.lastToken?this.lastToken.id:CommandPaletteScopeElement.emptyScope.id}get type(){return this.lastToken?this.lastToken.type:CommandPaletteScopeElement.emptyScope.type}get scope(){return this.hasScope()?{text:this.text,type:this.type,id:this.id,tokens:this.tokens}:CommandPaletteScopeElement.emptyScope}set scope(e){this.renderTokens(e.tokens)}renderTokens(e){this.clearScope();let t=0,r=e.length,o=this.smallDisplay?14:20,i=this.smallDisplay?20:55;for(let n=e.length-1;n>=0&&!(t+Math.min(e[n].text.length,o)+5>i);n--)t+=Math.min(e[n].text.length,o)+5,r=n;let s=(e,t)=>{let i=e.text.length>o?`${e.text.substring(0,o-3)}...`:e.text;return n.dy`
        <command-palette-token
          data-text="${e.text}"
          data-id="${e.id}"
          data-type="${e.type}"
          data-value="${e.value}"
          data-targets="command-palette-scope.tokens"
          hidden="${t<r}"
          class="color-fg-default text-semibold"
          style="white-space:nowrap;line-height:20px;"
          >${i}<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        </command-palette-token>
      `};(0,n.sY)(n.dy`${e.map(s)}`,this),this.hidden=!this.hasScope(),0!==r&&(this.placeholder.hidden=!1)}removeToken(){this.lastToken&&(this.lastRemovedToken=this.lastToken,this.lastToken.remove(),this.renderTokens(this.tokens))}hasScope(){return this.tokens.length>0&&this.type&&this.id&&this.text}clearScope(){for(let e of this.tokens)e.remove();this.placeholder.hidden=!0}attributeChangedCallback(e,t,r){this.isConnected&&"data-small-display"===e&&t!==r&&this.renderTokens(this.tokens)}constructor(...e){super(...e),this.smallDisplay=!1}}).emptyScope={type:"",text:"",id:"",tokens:[]},o.observedAttributes=["data-small-display"],o);s([i.Lj],a.prototype,"smallDisplay",void 0),s([i.fA],a.prototype,"placeholder",void 0),s([i.GO],a.prototype,"tokens",void 0),a=s([i.Ih],a)},98950:(e,t,r)=>{function o(e){let t=document.createElement("pre");return t.style.width="1px",t.style.height="1px",t.style.position="fixed",t.style.top="5px",t.textContent=e,t}function i(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e.textContent||"");let t=getSelection();if(null==t)return Promise.reject(Error());t.removeAllRanges();let r=document.createRange();return r.selectNodeContents(e),t.addRange(r),document.execCommand("copy"),t.removeAllRanges(),Promise.resolve()}function n(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e);let t=document.body;if(!t)return Promise.reject(Error());let r=o(e);return t.appendChild(r),i(r),t.removeChild(r),Promise.resolve()}r.d(t,{z:()=>n})},24728:(e,t,r)=>{r.d(t,{i:()=>n});var o=r(7667),i=r(34106);let n=class AccessPolicyItem extends i.g{activate(e,t){t instanceof PointerEvent?super.activate(e,t):t instanceof KeyboardEvent&&this.activateLinkBehavior(e,t,(0,o.o)(t))}get key(){return this.title}};n=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([i.O],n)},776:(e,t,r)=>{r.d(t,{d:()=>n});var o=r(34106),i=r(67269);let n=class CommandItem extends o.g{get action(){return this._action}async activate(e){super.activate(e);let t=e.getAttribute("commands-path");if(!t)return;let r=e.query.params();r.set("command",this.action.id),e.commandPaletteInput.loading=!0;let o=await (0,i.Q)(t,{method:"POST",body:r});if(e.commandPaletteInput.loading=!1,o.ok){let t=await o.json();this.handleResponse(e,t.action,t.arguments)}else e.displayFlash("error","Failed to run command")}handleResponse(e,t,r){"displayFlash"===t&&(e.displayFlash(r.type,r.message),e.dismiss())}constructor(e){super(e),this.typeahead=e.title,this.group="commands"}};n=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([o.O],n)},4328:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(34106),i=r(98950);let n=class CopyableItem extends o.g{get action(){return this._action}async activate(e){super.activate(e);try{await (0,i.z)(this.action.text),e.displayFlash("success",this.action.message),e.dismiss()}catch{e.displayFlash("error","Copy failed")}}constructor(e){super(e),this.priority=11,this.score=1,this.typeahead=e.title,this.group="commands"}};n=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([o.O],n)},79922:(e,t,r)=>{r.d(t,{B:()=>i});var o=r(34106);let i=class HelpItem extends o.g{static from(e){return new HelpItem({title:e.title,typeahead:"",priority:-10-e.index,score:-10,group:e.group,action:{type:"help",description:"",prefix:e.prefix},persistentHint:e.persistentHint})}activate(e,t){e.commandPaletteInput.inputValue=this.action.prefix+e.getTextWithoutMode()}autocomplete(e){e.commandPaletteInput.inputValue=this.action.prefix+e.getTextWithoutMode()}calculateScore(e){return 0}get action(){return this._action}constructor(e){super(e),this.persistentHint=e.persistentHint}};i=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([o.O],i)},8407:(e,t,r)=>{r.d(t,{s:()=>n});var o=r(7667),i=r(34106);let n=class JumpToItem extends i.g{static from(e){return new JumpToItem({title:e.title,typeahead:e.title,priority:1,score:1,group:e.group,action:{type:"jump_to",description:"",path:e.path},icon:{type:"octicon",id:e.icon}})}activate(e,t){t instanceof PointerEvent?super.activate(e,t):t instanceof KeyboardEvent&&this.activateLinkBehavior(e,t,(0,o.o)(t))}copy(e){super.copy(e);let t=new URL(this.action.path,window.location.origin);return this.copyToClipboardAndAnnounce(t.toString()),t.toString()}get key(){return`${super.key}/${this.action.path}`}get action(){return this._action}};n=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([i.O],n)},73072:(e,t,r)=>{r.d(t,{V:()=>n});var o=r(8407),i=r(34106);let n=class JumpToOrgItem extends o.s{};n=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([i.O],n)},35446:(e,t,r)=>{r.d(t,{W:()=>n});var o=r(8407),i=r(34106);let n=class JumpToTeamItem extends o.s{};n=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([i.O],n)},63927:(e,t,r)=>{r.d(t,{U:()=>MainWindowCommandItem});var o=r(33241);let MainWindowCommandItem=class MainWindowCommandItem extends o.ck{get path(){}copy(e){}activate(e){this.command.run(e),this.command.dismissAfterRun&&e.dismiss()}isApplicable(e){return this.command.isApplicable(e)}select(e){this.command.select?this.command.select(e):e.autocomplete(this)}constructor(e,t){super({title:t.title??e.title,subtitle:t.subtitle??e.subtitle,typeahead:t.title??e.title,priority:t.priority??e.priority,group:t.group??e.group,icon:{type:t.iconType??e.iconType,id:t.icon??e.icon},hint:"Run command"}),this.command=e}}},95639:(e,t,r)=>{r.d(t,{K:()=>l});var o,i=r(34106),n=r(25543),s=r(8407),a=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let l=((o=class SearchLinkItem extends s.s{static create(e){let t,r,o;let i=[...e.scope.tokens];for(;i.length>0&&!this.searchableScopeTypes.includes(i[i.length-1].type);)i.pop();if((o=i.length>0?i[i.length-1]:void 0)&&"repository"===o.type){let o=i.map(e=>e.text).join("/");t=`in ${o}`,r=`/${o}/search?q=${e.text}`}else if(o&&"owner"===o.type){let i=`org:${o.text} ${e.text}`;t=`in ${o.text}`,r=`/search?q=${i}`}else t="across all of GitHub",r=`/search?q=${e.text}`;return new SearchLinkItem({title:`Search ${e.text}${t}`,typeahead:"",priority:-10,score:-10,group:n.O.footerGroupId,action:{type:"jump_to",description:"",path:r},icon:{type:"octicon",id:"search-color-fg-muted"},titleScope:t})}autocomplete(e){}calculateScore(e){return 0}constructor(e){super(e),this.titleScope=e.titleScope}}).searchableScopeTypes=["owner","repository"],o);l=a([i.O],l)},34106:(e,t,r)=>{r.d(t,{O:()=>n,g:()=>ServerDefinedItem});var o=r(33241),i=r(25543);function n(e){ServerDefinedItem.register(e)}let ServerDefinedItem=class ServerDefinedItem extends o.ck{static register(e){this.itemClasses[e.itemType]=e}static get itemType(){return this.buildItemType(this.name)}static buildItemType(e){return e.replace(/([A-Z]($|[a-z]))/g,"_$1").replace(/(^_|_Item$)/g,"").toLowerCase()}static build(e){let t=this.itemClasses[e.action.type];if(t)return new t(e);throw Error(`No item handler for ${e.action.type}`)}get action(){return this._action}get key(){return`${this.action.type}/${this.title}/${this.group}`}get path(){return this.action.path||""}get itemType(){return ServerDefinedItem.buildItemType(this.constructor.name)}select(e){this.scope?e.setScope(this.scope):e.autocomplete(this)}activate(e,t){}activateLinkBehavior(e,t,r){this.element?.activateLinkBehavior(e,t,r)}copy(e){}copyToClipboardAndAnnounce(e,t){this.element?.copyToClipboardAndAnnounce(e,t)}constructor(e){super(e),this.position="",this.score=e.score,this.scope=e.scope,this.matchFields=e.match_fields,this._action=e.action}};ServerDefinedItem.itemClasses={},ServerDefinedItem.defaultData={title:"",score:1,priority:1,action:{type:"",path:""},icon:{type:"octicon",id:"dash-color-fg-muted"},group:i.O.defaultGroupId}},48084:(e,t,r)=>{r.d(t,{j:()=>GlobalProvidersPage});let GlobalProvidersPage=class GlobalProvidersPage{get providers(){let e=[];for(let t of this._providerElements)t.provider&&e.push(t.provider);return e}get _providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get serverDefinedProviderElements(){let e=document.querySelectorAll("server-defined-provider");return Array.from(e)}get clientDefinedProviderElements(){let e=document.querySelectorAll("client-defined-provider");return Array.from(e)}constructor(e){this.title=e.title,this.scopeId=e.scopeId,this.scopeType=e.scopeType}}},16852:(e,t,r)=>{r.d(t,{b:()=>ProviderElement});let ProviderElement=class ProviderElement extends HTMLElement{async fetchWithDebounce(e,t){return this.provider?(this._lastFetchQuery=e,await this.delay(this.provider.debounce),this._lastFetchQuery!==e)?{results:[]}:this.provider.fetch(e,t):{results:[]}}delay(e){return new Promise(t=>setTimeout(t,e))}}},97165:(e,t,r)=>{r.d(t,{B:()=>ProviderBase});var o=r(33241);let ProviderBase=class ProviderBase extends o.BX{fuzzyFilter(e,t,r=0){if(t.isBlank())return e;let o=[];for(let i of e){let e=i.calculateScore(t.text);e>r&&o.push(i)}return o}}},89803:(e,t,r)=>{r.d(t,{j:()=>ServerDefinedProvider});var o=r(97165);let ServerDefinedProvider=class ServerDefinedProvider extends o.B{get type(){return this.element.type}get modes(){return this.element.modes}get debounce(){return this.element.debounce}get scopeTypes(){return this.element.scopeTypes}get src(){return this.element.src}get hasWildCard(){return this.element.hasWildCard}get hasCommands(){return this.element.hasCommands}fetch(e,t){throw Error("Method not implemented.")}enabledFor(e){throw Error("Method not implemented.")}clearCache(){throw Error("Method not implemented.")}constructor(e){super(),this.element=e}}},50034:(e,t,r)=>{r.d(t,{A:()=>Query});var o=r(64316);let Query=class Query{get text(){return this.queryText}get mode(){return this.queryMode}get path(){return this.buildPath(this)}buildPath(e,t=e.text){return`scope:${e.scope.type}-${e.scope.id}/mode:${e.mode}/query:${t}`}clearScope(){this.scope=o.v.emptyScope}hasScope(){return this.scope.id!==o.v.emptyScope.id}isBlank(){return 0===this.text.trim().length}isPresent(){return!this.isBlank()}immutableCopy(){let e=this.text,t=this.mode,r={...this.scope};return new Query(e,t,{scope:r,subjectId:this.subjectId,subjectType:this.subjectType,returnTo:this.returnTo})}hasSameScope(e){return this.scope.id===e.scope.id}params(){let e=new URLSearchParams;return this.isPresent()&&e.set("q",this.text),this.hasScope()&&e.set("scope",this.scope.id),this.mode&&e.set("mode",this.mode),this.returnTo&&e.set("return_to",this.returnTo),this.subjectId&&e.set("subject",this.subjectId),e}constructor(e,t,{scope:r,subjectId:i,subjectType:n,returnTo:s}={}){this.queryText=e,this.queryMode=t,this.scope=r??o.v.emptyScope,this.subjectId=i,this.subjectType=n,this.returnTo=s}}},52418:(e,t,r)=>{r.d(t,{j:()=>d});var o=r(24728),i=r(776),n=r(4328),s=r(8407),a=r(63927),l=r(34106),c=r(33282);function d(e,t){let r;let o=document.querySelector("command-palette"),i="";t&&("commands"===t.group||"global_commands"===t.group)&&(i=t.title);let n={command_palette_session_id:o.sessionId,command_palette_scope:o.query.scope.type,command_palette_mode:o.getMode(),command_palette_title:i,command_palette_position:t?.position,command_palette_score:t?.score,command_palette_group:t?.group,command_palette_item_type:t instanceof l.g?t?.itemType:t?.constructor.name};r="activate"===e?p(t):e,(0,c.q)(`command_palette_${r}`,n)}function p(e){return e instanceof o.i?"access_policy_executed":e instanceof i.d||e instanceof a.U||e instanceof n.Z?"command_executed":e instanceof s.s?e.element?.newTabOpened?"jump_to_new_tab":"jump_to":"activate"}},33282:(e,t,r)=>{let o;r.d(t,{q:()=>h,Y:()=>u});var i=r(88149),n=r(86058),s=r(44544),a=r(71643);let{getItem:l}=(0,s.Z)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,i.n)("octolytics");delete e.baseContext,o=new n.R(e)}catch(e){}function p(e){let t=(0,i.n)("octolytics").baseContext||{};if(t)for(let e in delete t.app_id,delete t.event_url,delete t.host,t)e.startsWith(c)&&(t[e.replace(c,"")]=t[e],delete t[e]);let r=document.querySelector("meta[name=visitor-payload]");if(r){let e=JSON.parse(atob(r.content));Object.assign(t,e)}let o=new URLSearchParams(window.location.search);for(let[e,r]of o)d.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,a.B)().toString(),Object.assign(t,e)}function u(e){o?.sendPageView(p(e))}function h(e,t={}){let r=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,i=r?{service:r}:{};for(let[e,r]of Object.entries(t))null!=r&&(i[e]=`${r}`);o&&(p(i),o.sendEvent(e||"unknown",p(i)))}},93882:(e,t,r)=>{r.d(t,{dy:()=>n.dy,sY:()=>n.sY,Au:()=>n.Au});var o=r(22490);let i=o.Z.createPolicy("jtml-no-op",{createHTML:e=>e});var n=r(20845);n.js.setCSPTrustedTypesPolicy(i)},67269:(e,t,r)=>{function o(e,t={}){if(e.match(/^https?:/))throw Error("Can not make cross-origin requests from verifiedFetch");let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function i(e,t){let r=t?.headers??{},i={...r,Accept:"application/json","Content-Type":"application/json"},n=t?.body?JSON.stringify(t.body):void 0;return o(e,{...t,body:n,headers:i})}r.d(t,{Q:()=>o,v:()=>i})},4412:(e,t,r)=>{r.d(t,{C:()=>n,x:()=>i});var o=r(86283);let i=o.n4?.readyState==="interactive"||o.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{o.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),n=o.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{o.iG?.addEventListener("load",e)})},53729:(e,t,r)=>{r.d(t,{A7:()=>p,ko:()=>c,q1:()=>a});var o=r(15205),i=r(86283);let n=(0,o.Z)(s);function s(){return i.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}let a=(0,o.Z)(l);function l(){return i.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}let c=(0,o.Z)(d);function d(){return"enterprise"===n()}let p="webpack"},44544:(e,t,r)=>{r.d(t,{Z:()=>s,_:()=>a});var o=r(86283),i=r(71643);let n=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function s(e,t={throwQuotaErrorsOnSet:!1},r=o.iG,s=e=>e,a=e=>e){let l;try{if(!r)throw Error();l=r[e]||new n}catch{l=new n}let{throwQuotaErrorsOnSet:c}=t;function d(e){t.sendCacheStats&&(0,i.b)({incrementKey:e})}function p(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let r=l.getItem(e);if(!r)return null;let o=`${e}:expiry`,i=Number(l.getItem(o));if(i&&t>i)return p(e),p(o),d("SAFE_STORAGE_VALUE_EXPIRED"),null;return d("SAFE_STORAGE_VALUE_WITHIN_TTL"),s(r)}catch(e){return null}},setItem:function(e,r,o=new Date().getTime()){try{if(l.setItem(e,a(r)),t.ttl){let r=`${e}:expiry`,i=o+t.ttl;l.setItem(r,i.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:p,clear:l.clear,key:l.key,get length(){return l.length}}}function a(e){return s(e,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},86283:(e,t,r)=>{r.d(t,{Qg:()=>o.Qg,W6:()=>o.W6,cF:()=>o.cF,iG:()=>i.iG,jX:()=>i.jX,n4:()=>i.n4});var o=r(35647),i=r(73614)},73614:(e,t,r)=>{r.d(t,{iG:()=>i,jX:()=>n,n4:()=>o});let o="undefined"==typeof document?void 0:document,i="undefined"==typeof window?void 0:window,n="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647:(e,t,r)=>{r.d(t,{Qg:()=>n,W6:()=>i,cF:()=>s});var o=r(73614);let i=void 0===o.n4,n=!i;function s(){return!!i||Boolean(o.n4.querySelector('react-app[data-ssr="true"]'))}},71643:(e,t,r)=>{r.d(t,{B:()=>f,b:()=>a});var o=r(86283),i=r(4412),n=r(53729);let s=[];function a(e,t=!1){void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=m(),e.staff=f(),e.bundler=n.A7,s.push(e),t?d():c()}let l=null;async function c(){await i.C,null==l&&(l=window.requestIdleCallback(d))}function d(){if(l=null,!s.length)return;let e=o.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=p(s);for(let r of t)h(e,`{"stats": [${r.join(",")}] }`);s=[]}function p(e){let t=[],r=e.map(e=>JSON.stringify(e));for(;r.length>0;)t.push(u(r));return t}function u(e){let t=e.shift(),r=[t],o=t.length;for(;e.length>0&&o<=65536;){let t=e[0].length;if(o+t<=65536){let i=e.shift();r.push(i),o+=t}else break}return r}function h(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}function m(){return!!o.n4?.head?.querySelector('meta[name="user-login"]')?.content}function f(){return!!o.n4?.head?.querySelector('meta[name="user-staff"]')?.content}o.n4?.addEventListener("pagehide",d),o.n4?.addEventListener("visibilitychange",d)},22490:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(86283);function i(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let n={createHTML:i("createHTML"),createScript:i("createScript"),createScriptURL:i("createScriptURL")},s={createPolicy:(e,t)=>({name:e,...n,...t})},a=globalThis.trustedTypes??s,l=!1;o.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||l||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),l=!0)})}}]);
//# sourceMappingURL=app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d-da040d703984.js.map