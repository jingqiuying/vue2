//改文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
import countOptions from './acount'
import personOptions from './persons'

Vue.use(Vuex)
//准备actions——用于响应组件中的动作

export default new Vuex.Store({
	modules: {
		acountAbout: countOptions,
		personAbout: personOptions
	}

})

