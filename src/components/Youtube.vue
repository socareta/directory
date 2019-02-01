<template>
    <div class="youtube">
        <header-menu></header-menu>
    </div>
</template>
<script>
import headerMenu from './Header.vue'
export default {
  name: 'youtube',
  data () {
    return {
      data: ''
    }
  },
  components: {
    headerMenu
  }
}
</script>
<style>
.youtube{
    text-align: center;
}
</style>
