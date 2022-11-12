//改文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//准备actions——用于响应组件中的动作
const actions = {

    jianOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jianWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 1000);
    }

}
//准备mutations——用于操作数据（state）
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
}
//准备state——用于存储数据
const state = {
    sum:0,//当前的和
    school:'五中',
    address:'茂名'

}
//准备getters——用于将state中的数据加工
const getters = {
    bigSum:function (state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

