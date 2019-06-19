import Vue from 'vue'
import App from './App'
import store from './store'
import config from './config.js'
import Helper from './common/helper.js'

// 声明使用全局的colourUI
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)


// colorUI的tab
import home from './pages/home/home.vue'
Vue.component('home',home)
// colorUI的tab

Vue.prototype.$curUserID = ''
Vue.prototype.$swiper = Helper.getSwiper()

Vue.prototype.$APIurl = config.APIurl;
Vue.prototype.$modelId = config.modelId;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
