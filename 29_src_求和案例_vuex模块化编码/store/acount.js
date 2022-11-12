
export default {
	namespaced:true,
	actions: {
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
	},
	mutations : {
		JIA(state,value){
			state.sum += value
		},
		JIAN(state,value){
			state.sum -= value
		},
	},
	state : {
		sum:0,//当前的和
		school:'五中',
		address:'茂名',
	},
	getters : {
		bigSum:function (state) {
			return state.sum * 10
		}
	},
}