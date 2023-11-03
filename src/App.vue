<script setup>
import Index from './components/Index.vue';
import Introduction from './components/Introduction.vue';
import Nav from './components/Nav.vue';
import News from './components/News.vue';
import Connect from './components/Connect.vue'
import Tags from './components/Tags.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <header><Nav></Nav></header>
  <main>
    <Index></Index>
    <Introduction></Introduction>
    <News></News>
    <Connect></Connect>
    <Tags></Tags>
  </main>
  <footer><Footer></Footer></footer>
</template>

<style>

body{
  font-family: 'Raleway', sans-serif;
}
</style>
