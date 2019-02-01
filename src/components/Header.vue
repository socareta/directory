<template>
<v-layout row wrap>

      <v-flex xs12 class="main-header">
            <div class="header-menu">
                <a href="" class="back-home">BACK</a>
                <ul>
                    <li v-for="menu in menus" :key="menu.menu_name">
                        <router-link :to="{ name:menu.route }" class="menu-item" >{{ menu.menu_name }}</router-link>
                    </li>
                   
                </ul>
            </div>
      </v-flex>
  </v-layout>
    
</template>

<script>
export default {
  name: 'header-menu',
  data () {
    return {
      menus: [
        { route: 'letter', menu_name: 'Welcome Letter' },
        { route: 'directory', menu_name: 'Guest Directory' },
        { route: 'activities', menu_name: 'Activities' },
        { route: 'mudara', menu_name: 'Mudara Spa' },
        { route: 'youtube', menu_name: 'Youtube Channel' },
        { route: 'cruisine-menu', menu_name: 'Cruisine Menu' }
      ],
      active: ''
    }
  }
}
</script>

<style >
.back-home{
    float: left;
    text-decoration: none;
    background-color: #005a7c;
    color: white!important;
    padding: 15px;
    border-right: 1px solid #ddd;
}
.main-header{
  background-color: #005a7c;
}
.header-menu>ul>li{
  display: inline-block;
  padding-top: 15px;
}
a{
  color:#005a7c!important;
}
.menu-item{
    text-decoration: none;
    background-color: #005a7c;
    color: white!important;
    padding: 15px 10px 15px 15px;
   }
a.menu-item:hover,.back-home:hover,.router-link-active{
        background-color:#029fdd;
    }

  
</style>