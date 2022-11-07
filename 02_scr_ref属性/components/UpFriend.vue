<template>
<div>
    <h2>{{ upName }}</h2>
    <h2>{{ upId }}</h2>
    <button @click="showName">点我提示UP主：</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            upName: '小法',
            upId: '36737105850'
        }
    },
    methods: {
        showName() {
            alert(this.upName)
        }
    },
}
</script>