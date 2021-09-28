<template> 
  <the-header></the-header>
  <main>
    <the-tables></the-tables>
  </main>
  <the-footer></the-footer>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import TheTables from './components/tables/TheTables.vue';

export default {
 name: "App",
 components: {
   TheHeader,
   TheFooter,
   TheTables
 },
};
</script>

<style>
  main {
    background: skyblue;
    padding: 100px;
  }
</style>

