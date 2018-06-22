import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import loading_store from './loading.js';//引入某个store对象

export default new vuex.Store({
    modules: {
        loading: loading_store
    }
})