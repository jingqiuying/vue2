<template>
    <div >
       <h2>当前求和为：{{sum}} </h2>
       <h2>当前求和的十倍为：{{bigSum}} </h2>
       
       <h2>我在{{school}}，地址{{address}}</h2>
       <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
       </select>
       <button @click="increment">+</button>
       <button @click="decrement">-</button>
       <button @click="incrementOdd">当前求和为基数在加</button>
       <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
    name:'Count',
    data() {
        return {
            n:1//用户选择的数子
        }
    },
    methods: {
        increment(){
            this.$store.commit('JIA',this.n)
        },
        decrement(){
            this.$store.commit('JIAN',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('jianOdd',this.n)

        },
        incrementWait(){
            this.$store.dispatch('jianWait',this.n)
        }
    },
    computed: {
        //程序员自己写的
        /* sum() {
            return this.$store.state.sum
        },

        school() {
            return this.$store.state.school
        },
        address() {
            return this.$store.state.address
        },
        
        */
       //从mapState生成计算属性，从state中读取数据（对象写法）
        // ...mapState({'sum':'sum',school:'school',address:'address'}),
               //从mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','school','address']),

       /*  bigSum() {
            return this.$store.getters.bigSum
        },  */
        //从mapGetters生成计算属性，从state中读取数据（对象写法）
        // ...mapGetters({bigSum:'bigSum'}),
        //从mapGetters生成计算属性，从state中读取数据（数组写法）
        ...mapGetters(['bigSum'])
    },
   
   
}
</script>
<style scoped>
 button{
    margin-left: 5px;
 }
</style>