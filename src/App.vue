<template> 
  <the-header></the-header>
  <main>
    <new-action></new-action>
    <the-tables></the-tables>
  </main>
  <the-footer></the-footer>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import NewAction from './components/form/NewAction.vue';
import TheTables from './components/tables/TheTables.vue';

export default {
 name: "App",
 components: {
   TheHeader,
   TheFooter,
   NewAction,
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

