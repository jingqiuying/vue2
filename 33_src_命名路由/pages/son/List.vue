<template>
    <div>
        <h2 v-for="p in persons" :key="p.id">{{p.name}}</h2>
    </div>
</template>

<script>

export default {
    name:'List',
    data() {
        return {
            persons: [
                { id: '001', name: '小雪' },
                { id: '002', name: '小米' },
                { id: '003', name: '原路' },
                { id: '004', name: '小法' },
            ]
        }
    },
}
</script>

<style>

</style>