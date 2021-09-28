<template>
 <base-wrapper :class="'report-table'">
  <ul>
   <table-item
    v-for="item in this.$store.state.reportTable"
    :key="item.date"
    :date="item.date"
    :value="item.value"
    :description="item.description"
   ></table-item>
  </ul>
 </base-wrapper>
</template>

<script>
 import TableItem from './TableItem.vue';

 export default {
     components: {
         TableItem
     }
 }
</script>