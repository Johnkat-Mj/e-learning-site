<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MenuBar from "./components/MenuBar.vue"
import Footer from './components/Footer.vue'
</script>
<template>
  <div class="absolute bg-[#7325F10A] rounded-full w-56 h-56 sm:w-[40rem] sm:h-[40rem] -top-[5%] -left-[35%]" >
  </div>
  <MenuBar/>
  <router-view class="z-50"></router-view>
  <Footer/>
</template>

