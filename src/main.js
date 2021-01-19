import Vue from 'vue'
import App from './App.vue'
import { VTooltip, VPopover } from 'v-tooltip'
import router from './router'

Vue.directive('tooltip', VTooltip)
Vue.directive('popover', VPopover)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')