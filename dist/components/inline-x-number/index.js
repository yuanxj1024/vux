/*!
 * Vux v0.1.3 (https://vux.li)
 * Licensed under the MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxInlineXNumber=t():e.vuxInlineXNumber=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){e.exports=i(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{min:Number,max:Number,step:{type:Number,"default":1},value:{type:Number,"default":0},name:String,title:String,fillable:{type:Boolean,"default":!0},width:{type:Number,"default":50}},computed:{disabledMin:function(){return"undefined"!=typeof this.min&&this.value<=this.min},disabledMax:function(){return"undefined"!=typeof this.max&&this.value>=this.max}},ready:function(){},watch:{value:function(e,t){this.min&&this.value<this.min&&(this.value=this.min),this.max&&this.value>this.max&&(this.value=this.max),this.$emit("on-change",this.value)}},methods:{add:function(){this.disabledMax||(this.value+=this.step)},sub:function(){this.disabledMin||(this.value-=this.step)}}}},function(e,t){},function(e,t){e.exports=' <div> <a @click=sub class="vux-number-selector vux-number-selector-sub" :class="{\'vux-number-disabled\':disabledMin}">-</a> <input v-model=value :name=name class=vux-number-input :style="{width: width+\'px\'}" number :readonly=!fillable pattern=[0-9]* /> <a @click=add class="vux-number-selector vux-number-selector-plus" :class="{\'vux-number-disabled\':disabledMax}">+</a> </div> '},function(e,t,i){var n,s;i(2),n=i(1),s=i(3),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}])});