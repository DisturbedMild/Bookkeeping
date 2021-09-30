<template>
 <new-action @form-submit="submitedForm"></new-action>
 <section class="tables">
  <div class="container">
   <div class="tables-tabs">
    <base-button @click="changeTab('IncomeTable')" :class="'green'" >Incomes</base-button>
    <base-button @click="changeTab('OutcomeTable')"  :class="'red'">Outcomes</base-button>
    <base-button @click="changeTab('ReportTable')"  :class="'yellow'">Report</base-button>
   </div>
   <keep-alive>
    <component :is="currentTab"></component>
   </keep-alive>
  </div>
 </section>
</template>

<script>
import NewAction from '../form/NewAction.vue';
import IncomeTable from "./IncomeTable.vue";
import OutcomeTable from "./OutcomeTable.vue";
import ReportTable from "./ReportTable.vue";

export default {
 components: {
  IncomeTable,
  OutcomeTable,
  ReportTable,
  NewAction
 },
 emits: ['formSubmit'],
 data() {
  return {
   currentTab: "IncomeTable",
  };
 },
 methods: {
  changeTab(tabName) {
   return (this.currentTab = tabName);
  },
  submitedForm(value, description, actionType) {
   this.$store.commit("storeAction", { value, description, actionType, date: new Date().toLocaleString()});
   this.$refs["value"] = '';
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
