webpackJsonp([105],{1174:function(t,e,o){var n=o(1175);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(590)("0caf6ed5",n,!0)},1175:function(t,e,o){e=t.exports=o(589)(),e.push([t.i,"",""])},1176:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ChooseCity",data:function(){return{selectCity:{}}},props:{},watch:{},computed:{},methods:{openCitySelector:function(){var t=this;this.$chooseCity.present({showLocatedCity:!0,onDismiss:function(e){console.log("response"),console.log(e),e&&(t.selectCity=e)}})},openCitySelectorWithCustomerData:function(){var t=this;this.$chooseCity.present({cities:[{city:"朝阳区",adCode:"110105",spell:"chaoyang"},{city:"海淀区",adCode:"110108",spell:"haidian"},{city:"丰台区",adCode:"110106",spell:"fengtai"},{city:"东城区",adCode:"110101",spell:"dongcheng"},{city:"西城区",adCode:"110102",spell:"xicheng"},{city:"房山区",adCode:"110111",spell:"fangshan"}],hotCities:[{city:"朝阳区",adCode:"110105"},{city:"海淀区",adCode:"110108"},{city:"丰台区",adCode:"110106"}],onDismiss:function(e){console.log("response"),console.log(e),e&&(t.selectCity=e)}})}},created:function(){},mounted:function(){},activated:function(){},deactivate:function(){},components:{},destroyed:function(){}}},1177:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Page",[o("Header",[o("Navbar",[o("Title",[t._v("城市选择器")])],1)],1),t._v(" "),o("Content",{staticClass:"outer-content",attrs:{padding:""}},[o("h5",[t._v("城市选择器组件")]),t._v(" "),o("p",[t._v("这个组件是一个弹出层组件, 数据使用的是本地数据, 不过正常来说应该是从后台获取的. ")]),t._v(" "),o("p",[t._v("结果: "+t._s(t.selectCity.city)+" "+t._s(t.selectCity.adCode))]),t._v(" "),o("Button",{attrs:{block:""},on:{click:t.openCitySelector}},[t._v("打开城市选择器(本地数据)")]),t._v(" "),o("Button",{attrs:{block:""},on:{click:t.openCitySelectorWithCustomerData}},[t._v("打开城市选择器(自定义数据)")])],1)],1)},staticRenderFns:[]}},696:function(t,e,o){o(1174);var n=o(0)(o(1176),o(1177),"data-v-a6524b5a",null);t.exports=n.exports}});