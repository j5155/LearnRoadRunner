(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{312:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));const s=i(0).a.extend({data:()=>({sizeBase:{width:"0",height:"0"},sizeLg:{width:"0",height:"0"}}),mounted(){window.addEventListener("resize",this.emitSize,!1),this.emitSize()},beforeDestroy(){window.removeEventListener("resize",this.emitSize)},methods:{emitSize(){document.body.clientWidth>=1285?(this.$emit("request-width",this.sizeLg.width),this.$emit("request-height",this.sizeLg.height)):(this.$emit("request-width",this.sizeBase.width),this.$emit("request-height",this.sizeBase.height))}}})},358:function(t,e,i){},421:function(t,e,i){"use strict";i(358)},445:function(t,e,i){"use strict";i.r(e);var s=i(0),n=i(312),a=s.a.extend({extends:n.a,data:()=>({sizeBase:{width:"650px",height:"570px"},sizeLg:{width:"650px",height:"660px"},input:1,output:1}),computed:{ratio(){return this.output/this.input},wheelScalar(){const t=Math.max(this.input,this.output),e=Math.min(this.input,this.output)/t;return this.output>this.input?[e,1]:[1,e]}}}),r=(i(421),i(46)),u=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex flex-col justify-center items-center px-8 py-4 pb-0 h-full"},[t._m(0),t._v(" "),i("div",{staticClass:"flex flex-row justify-center items-center h-64 relative"},[i("div",{staticClass:"wheel-container mr-10 transition-transform duration-200 ease-out",style:{transform:"scale("+t.wheelScalar[0]+")"}},[i("div",{staticClass:"wheel output",style:{"animation-duration":t.input/t.output*2+"s"}},[i("div",{staticClass:"spoke"}),t._v(" "),i("div",{staticClass:"spoke"}),t._v(" "),i("div",{staticClass:"spoke"}),t._v(" "),i("div",{staticClass:"spoke"}),t._v(" "),i("div",{staticClass:"spoke"}),t._v(" "),i("div",{staticClass:"spoke"}),t._v(" "),i("div",{staticClass:"spoke"}),t._v(" "),i("div",{staticClass:"spoke"})])]),t._v(" "),i("div",{staticClass:"wheel-container ml-10 transition-transform duration-200 ease-out",style:{transform:"scale("+t.wheelScalar[1]+")"}},[i("div",{staticClass:"wheel input",style:{"animation-duration":"2s"}},[i("div",{staticClass:"ring"}),t._v(" "),i("div",{staticClass:"hub"})])])]),t._v(" "),i("div",{staticClass:"flex flex-row items-center justify-center"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.output,expression:"output",modifiers:{number:!0}}],staticClass:"number-input",attrs:{type:"number",min:"0"},domProps:{value:t.output},on:{change:function(e){return t.$emit("input",t.ratio)},input:function(e){e.target.composing||(t.output=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),i("span",{staticClass:"xl:text-3xl text-2xl px-4 xl:mb-2 mb-1 font-semibold"},[t._v("\n      :\n    ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.input,expression:"input",modifiers:{number:!0}}],staticClass:"number-input",attrs:{type:"number",min:"0"},domProps:{value:t.input},on:{change:function(e){return t.$emit("input",t.ratio)},input:function(e){e.target.composing||(t.input=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"border-none mt-0 xl:mb-10 mb-0 text-center"},[this._v("\n    Gear Ratio\n    "),e("h4",{staticClass:"block text-gray-500 m-0 text-2xl"},[this._v("(output : input)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"xl:mt-6 mt-0"},[e("p",{staticClass:"text-gray-800 max-w-3xl"},[this._v("\n      *Output = Wheel Speed. Input = Motor Speed.\n    ")]),this._v(" "),e("p",{staticClass:"text-gray-800 max-w-3xl xl:mt-2 mt-0 mb-8"},[this._v("\n      **This this at 1:1 if you have a direct drive.\n    ")])])}],!1,null,"ce2bf6ec",null);e.default=u.exports}}]);