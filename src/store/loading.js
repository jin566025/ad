export default {
    state:{
        show:false
    },
    mutations:{
        switch_dialog(state){
            state.show = state.show?false:true;
        }
    },
    actions:{
        switch_dialog(context){
            context.commit('switch_dialog');
        },
    },
    getters:{
        not_show(state){//这里的state对应着上面这个state
            return !state.show;
        }
    },
}
//@click="$store.commit('switch_dialog')"
//@click="$store.dispatch('switch_dialog')"