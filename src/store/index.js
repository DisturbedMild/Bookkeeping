import { createStore } from 'vuex'

export default createStore({
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
     action.actionType === "Income"
      ? state.incomeTable.unshift(action)
      : state.outcomeTable.unshift(action);
     state.reportTable.unshift(action);
    },
   },
})

