<template>
  <div>
    <ul>
      <li :style="{opacity}">欢迎来到B站</li>
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
  data() {
    return {
      opacity: 1
    }
  },
  /*   mounted() {
      setInterval(() => {
        this.timer = this.opacity -= 0.01
        if (vm.opacity <= 0) vm.opacity = 1
      })
    },
      beforeDestroy(){
        console.log('News死了');
        clearInterval(this.timer)
        
      } */
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      console.log('@');
      
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    clearInterval(this.timer)
  }
}
</script>

<style>

</style>