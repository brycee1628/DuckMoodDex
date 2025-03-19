<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar :paths="[
    { id: 0, pageName: '首頁', url: '/' },
    { id: 1, pageName: '圖鑑', url: '/dex' },
  ]">
  </NavBar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style></style>
