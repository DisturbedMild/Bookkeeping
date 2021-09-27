<template>
 <section class="tables">
  <div class="container">
   <div class="tables-tabs">
    <base-button @click="changeTab('IncomeTable')">Incomes</base-button>
    <base-button @click="changeTab('OutcomeTable')">Outcomes</base-button>
    <base-button @click="changeTab('ReportTable')">Report</base-button>
   </div>
   <keep-alive>
    <component :is="currentTab"></component>
   </keep-alive>
  </div>
 </section>
</template>

<script>
import IncomeTable from "./IncomeTable.vue";
import OutcomeTable from "./OutcomeTable.vue";
import ReportTable from "./ReportTable.vue";

export default {
 components: {
  IncomeTable,
  OutcomeTable,
  ReportTable,
 },
 data() {
  return {
   currentTab: "IncomeTable",
  };
 },
 methods: {
  changeTab(tabName) {
   return (this.currentTab = tabName);
  },
 },
};
</script>

<style scoped>
.tables {
 margin-top: 50px;
}
.tables-tabs {
 max-width: 600px;
 width: 100%;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
}
</style>
