<template>
<div class="letter">
    <header-menu ></header-menu>
  
  <div class="letter1">
    <img :src="img1" alt="" class="img-letter" width="300">
        <div class="inner-letter">
      <h2>Dear  {{ guestname}}</h2> 
      <p>The team at Blue Karma and myself are most delighted to welcome you. We are totally dedicated to making your stay warm and comforting.
       </p>
       <p>We hope that the cocooning atmosphere of our home, combined with our kindness and diligence will make your holiday unforgetable.
      </p>
       <p>We would love to thank you for making the choice to put your trust in us.
       </p>
       <div class="sign">
         <p> ALexa Genoyer
        </p>
        <p>
          <img :src="sign" alt="" width="100">
        </p>
       </div>
    </div>
    <div class="footer-Letter">
      <h3 class="pt-2">A Collection Of Luxury Escapes</h3>
      <ul class="list">
        <li><a href="" class="list-link">OASIS ESCAPE . SEMINYAK</a></li>
        <li><a href="" class="list-link">NESLING ESCAPE . UBUD</a></li>
        <li><a href="" class="list-link">BALI ETHNIC VILLA . UMALAS</a></li>
        <li><a href="" class="">THE ORACLE . BLUE ESCAPE</a></li>
      </ul>
      <h3 class="pt-3">DISCOVER YOUR SECRET</h3>
      <a href="">bluekarmasedrets.com</a>
    </div>
  </div>
</div>
</template>

<script>
import headerMenu from './Header.vue'
export default {
  name: 'letter',
  data () {
    return {
      img1: 'https://i.imgur.com/PVTHjo0.png',
      img2: 'https://i.imgur.com/Ny177ER.png',
      guestname: 'Mr. John Lenon',
      sign: 'https://i.imgur.com/a3tfGLK.png',
      publicPath: process.env.BASE_URL
    }
  },
  components: {
    headerMenu
  }
}
</script>
<style>

.letter2{
  background-color: #ddd;
  height: 100vh;
  padding: 20% 20% 20% 20%;
}
.inner-letter{
  text-align: left;
  padding: 5% 10% 5% 10%;  
  background-color: white;
  font-size: 150%;
  justify-content: flex-start;
}
.inner-letter>p{
  letter-spacing: px;
  word-spacing: 5px;
}
.inner-letter>h2{
  padding:20px 0px 40px 0px;
}
.sign{
  text-align: center;
}
.pt-2{
  padding:40px 0px 30px 0px !important;
}
.pt-2{
  padding:40px 0px 10px 0px !important;
}
.letter{
  text-align: center;
}
ul.list>li{
  display: inline-block;
  margin-left: 4px;
  font-size: 10pt;
}
ul.list>li>a{
  text-decoration: none;
  
}
ul.list>li>a.list-link:after{
  content: "";
  padding:0px 0px 0px 5px;
  border-right: 1px solid black;
  
}
img.img2{
  width: 100%;
  padding: 20px 10px 20px 10px;
}
</style>
