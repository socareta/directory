<template>
    <div class="activities">
        <header-menu></header-menu>
    </div>
</template>
<script>
import headerMenu from './Header.vue'
export default {
  name: 'activities',
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
.activities{
    text-align: center;
}
</style>
