<template>
 <base-wrapper :class="'income-table'">
  <ul>
   <table-item
    v-for="item in this.$store.state.incomeTable"
    :key="item.date"
    :date="item.date"
    :value="item.value"
    :description="item.description"
   ></table-item>
  </ul>
 </base-wrapper>
</template>

<script>
import TableItem from "./TableItem.vue";

export default {
 components: {
  TableItem,
 },
};
</script>

<style>
ul {
 margin: 0;
}
.base-wrapper {
 max-width: 600px;
 width: 100%;
 margin: 0 auto;
 padding: 20px 10px;
 margin-top: 50px;
}
</style>
