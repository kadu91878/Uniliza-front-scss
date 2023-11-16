<template>
  <div class="navigation-bar">
    <router-link to="/" class="head-title"> <span> Uniliza</span></router-link>
    <ul class="nav-item" :class="{ show: showState }">
      <li><a href="#home"><router-link to="/" replace>home</router-link></a></li>
      <li><a href="#work">how it works</a></li>
      <!-- <li><a href="service">service</a></li> -->
      <li><a href="#"><router-link to="/car-section">service</router-link></a></li>
      <!-- <li><a href="suggest">suggest</a></li> -->
      <li><a href="#"><router-link to="/car-section">car</router-link></a></li>
      <!-- <li><a href="testi">testimonials</a></li> -->
      <li><a href="#download">update</a></li>
      <li><a href="#faq">faq</a></li>
    </ul>
    <div class="account-box">
      <div class="box login-bar">
        <p>login</p>
        <i class="fa-solid fa-right-from-bracket" ></i>
      </div>
      <div class="box singup-bar">
        <p>sign up</p>
        <i class="fa-solid fa-user-plus"></i>
      </div>
      <div class="menu-toggle" @click="toggleMenu()" :class="{ show: showState }"></div>
    </div>
  </div>
</template>

<!-- <style lang="scss">
.navigation-bar{
    width: 100%;
    height: 70px;
    top:0;
    left: 0;
    position: fixed;
    background: $clr-background;
    box-shadow: $box-shadow;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    padding: 10px 30px;
    z-index: 1000;
    transition: all .5s ease;

}

</style> -->

<script setup lang="ts">
// const menuButton = document.querySelector(".menu-toggle"),
// navItem = document.querySelector(".nav-item");

// function toggleMenu(){
//   menuButton?.classList.toggle('show');
//   navItem?.classList.toggle('show');
// }

import { ref } from 'vue'
import { useRouter } from 'vue-router';

const showState = ref(false)

const toggleMenu = () => {
  showState.value = !showState.value
}

window.onscroll = () => {
  showState.value = false
}


const router = useRouter();

function navigateToHome() {
 router.push('/');
}


</script>
