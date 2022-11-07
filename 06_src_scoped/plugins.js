export default{
    install(Vue){
        //全局过滤器
          Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        //定义混入
        Vue.mixin({methods: {
            showName(){
                alert(this.name)
            }
        },})

        //Add a method to the Vue prototype object
        Vue.prototype.hello = ()=>{alert('hello')}
    }
      
}