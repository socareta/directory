<template>
  <div class="home">
    <div class="header">
      <img src="https://baliethnicvilla.com/wp-content/uploads/2019/01/BK-Secrets_White.png" alt="" width="200">
      <h1>WELCOME</h1><p></p>
      <h1>{{ data }}</h1>
    </div>
    <div class="discover">
      DISCOVER MORE 
      
    </div>
    <center>
      <p class="line"></p>
    </center>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="menu in dataMenu" v-bind:key="menu.name" xs4>
        <router-link :to="{ name: menu.route }" class="home-menu"> 
        <v-card  color="secondary">
          <v-card-text class="px-0">
            <img  :src="menu.img " alt="" width="100">
            <p>{{ menu.name }}</p>
          </v-card-text>
        </v-card>
        </router-link>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      data: 'Mr/Mrs John Lenon',
      dataMenu: [
        { name: 'Welcome Letter', img: 'https://image.flaticon.com/icons/svg/1406/1406598.svg', route: 'letter' },
        { name: 'Guest Directory', img: 'https://image.flaticon.com/icons/svg/1284/1284454.svg', route: 'directory' },
        { name: 'Activities', img: 'https://image.flaticon.com/icons/svg/853/853818.svg', route: 'activities' },
        { name: 'Mudara Spa Menu', img: 'https://image.flaticon.com/icons/svg/909/909073.svg', route: 'mudara' },
        { name: 'Youtube Channel', img: 'https://image.flaticon.com/icons/svg/253/253785.svg', route: 'youtube' },
        { name: 'BK Cruisine Menu', img: 'https://image.flaticon.com/icons/svg/857/857681.svg', route: 'cruisine-menu' }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header{
  background-color: #005a7c;
  color: white;
  padding-bottom: 50px;
  padding-top: 30px;
  text-align: center;
}
.discover{
  margin-top: 50px;
  text-align: center;
  letter-spacing: 5px;
  font-weight: 600;
  color: #005a7c;
  
}
.line{
  margin-top: 0px;
  border: 1px solid #005a7c;
  width: 200px;
  text-align: center;
}
.v-card__text>p{
  color: #005a7c;
  font-size: 120%;
  font-weight: 600;
}
a{
  text-decoration: none;
}
a.home-menu:hover{
  font-size: 120%;
}
</style>
