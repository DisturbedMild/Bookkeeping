import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const app = createApp(App);

const store = new createStore({
 state() {
  return {
   incomeTable: [
    {
     value: 700,
     description: "Salary",
     date: new Date().toLocaleString(),
    },
   ],
   outcomeTable: [
    {
     value: 400,
     description: "Bought new table",
     date: new Date().toLocaleString(),
    },
   ],
   reportTable: [
    {
     value: 700,
     description: "Salary",
     date: new Date().toLocaleString(),
    },
    {
     value: 400,
     description: "Bought new table",
     date: new Date().toLocaleString(),
    },
   ],
  };
 },
 mutations: {
   storeAction(state, action) {
       action.actionType === 'Income' ? state.incomeTable.unshift(action) : state.outcomeTable.unshift(action);
       state.reportTable.unshift(action);
   }
 }
});

import BaseWrapper from "./components/utils/BaseWrapper.vue";
import BaseButton from "./components/utils/BaseButton.vue";

app.component("base-wrapper", BaseWrapper);
app.component("base-button", BaseButton);

app.use(store);

app.mount("#app");
