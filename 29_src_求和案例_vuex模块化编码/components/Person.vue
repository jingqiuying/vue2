<template>
    <div>
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="addName">添加</button>
        <button @click="addNameWang">添加姓王的</button>
        <button @click="addPersonServer">添加服务器</button>
        <h2>第一个人的名字:{{firstPersonName}}</h2>
        <ul>
            <li v-for="person in persons" :key="person.pId">{{person.name}}</li>
        </ul>
        <h3 style="color: red;">上面组件的和:{{sum}}</h3>
    </div>
</template>
<script>
import { nanoid } from 'nanoid'
import { mapActions,mapGetters,mapMutations,mapState } from "vuex";
export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    methods: {
        addName(){
            const personObj = {pId:nanoid(),name:this.name}
            this.name=''
            this.$store.commit('personAbout/ADD_PERSON',personObj)
        },
        addNameWang(){
            const personObj = {pId:nanoid(),name:this.name}
            this.name=''
            this.$store.dispatch('personAbout/addPersonWang',personObj)
        },
        addPersonServer(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    },
    computed: {
        persons() {
            return this.$store.state.personAbout.persons
        },
        sum() {
            return this.$store.state.acountAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },

    
}
</script>

<style>

</style>