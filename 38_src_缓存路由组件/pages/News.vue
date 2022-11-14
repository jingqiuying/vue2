<template>
  <div>
    <ul>
      <li>123 <input type="text"></li>
      <li>124 <input type="text"></li>
      <li>125 <input type="text"></li>
      <li>126 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'News',
    beforeDestroy(){
      console.log('News死了');
      
    }
}
</script>

<style>

</style>