<template>
    <div class="cruisine">
    <header-menu></header-menu>
        <div id="caraousel">
            <v-carousel hide-delimiters >
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src" style="padding:0px 5px 0px 5px;height:100vh;"
                ></v-carousel-item>
            </v-carousel>
        </div>
        
    </div>
</template>

<script>
import headerMenu from './Header.vue'
export default {
  name: 'cruisine',
  data () {
    return {
      data: 'df',
      items: [
        { src: 'https://i.imgur.com/JNZXJjEg.jpg' },
        { src: 'https://i.imgur.com/ipAA7sf.jpg' },
        { src: 'https://i.imgur.com/svofNnm.jpg' }
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
.cruisine{
    text-align: center;
}
#caraousel,.v-carousel,.v-window__container{
    height: 100vh!important;
}
</style>