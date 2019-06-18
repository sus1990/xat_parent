import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 状态
    state: {
        /**
         * 是否需要登录
         */
        hasLogin: false,
        userName: ""
    },
	// 方法
    mutations: {
        login(state, userName) {
            state.userName = userName;
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        }
    }
})

export default store
