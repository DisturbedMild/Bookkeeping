<template>
 <base-wrapper :class="'income-table'">
  <ul>
   <table-item
    v-for="item in this.$store.commit.incomeTable"
    :key="item.date"
    :date="item.date"
    :value="item.value"
    :description="item.description"
   ></table-item>
  </ul>
 </base-wrapper>
</template>
