import Vue from 'vue'
import App from './App'
import store from './store'
import config from './config.js'

// 声明使用全局的colourUI
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.prototype.$curUserID = ''
Vue.prototype.$APIurl = config.APIurl;
Vue.prototype.$modelId = config.modelId;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
