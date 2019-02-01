<template>
    <div class="directory">
    <header-menu :active="directory"></header-menu>
        <div id="caraousel">
            <v-carousel hide-delimiters >
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src" style="height:90vh;"
                ></v-carousel-item>
            </v-carousel>
        </div>
        
    </div>
</template>

<script>
import headerMenu from './Header.vue'
export default {
  name: 'directory',
  data () {
    return {
      data: 'df',
      items: [
        { src: 'https://i.imgur.com/MpCKuHp.jpg' },
        { src: 'https://i.imgur.com/CmvkDQY.jpg' },
        { src: 'https://i.imgur.com/yzRsTqV.jpg' }
      ],
      carouselHeight: 0
    }
  },
  components: {
    headerMenu
  }
}
</script>

<style>
.directory{
    text-align: center;
}
#caraousel,.v-carousel,.v-window__container{
    height: 100vh!important;
}
</style>
