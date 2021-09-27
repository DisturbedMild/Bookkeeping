<template> 
  <the-header></the-header>
  <the-footer></the-footer>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
 name: "App",
 components: {
   TheHeader,
   TheFooter
 },
};
</script>

