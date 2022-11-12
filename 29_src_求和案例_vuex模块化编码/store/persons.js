
import { nanoid } from 'nanoid'
import axios from 'axios'
export default  {
	namespaced:true,
	actions: {
		addPersonWang(context,value){
			if(value.name.indexOf('王') === 0){
				context.commit('ADD_PERSON',value)
			}else{
				alert('添加的人必须姓王')
			}
		},
		addPersonServer(context) {
			axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
				response => {
					context.commit('ADD_PERSON',{pId:nanoid(),name:response.data})
				},
				error => {
					alert(error.message)
				}
			)
		}
	},
	mutations: {
		ADD_PERSON(state,value){
			state.persons.unshift(value)
			console.log('@',value);
		}
	},
	state: {
	persons: [
		{pId:nanoid() ,name: '李四',age: 23 },
		{pId:nanoid() , name: '王五',age: 45 },
	]
	},
	getters:{
		firstPersonName(state){
			return state.persons[0].name
		}
	}
}