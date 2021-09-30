/* eslint-disable no-undef */
import { createStore } from "vuex";

test("income table new action", () => {
 const store = createStore({
  state: {
   incomeTable: [],
  },
  mutations: {
   storeAction(state, action) {
    action  = {
     id: 1,
     value: 600,
     description: "Salary",
     date: new Date().toLocaleString(),
    };
    state.incomeTable.unshift(action);
   },
  },
 });

 store.commit("storeAction");

 expect(store.state.incomeTable[0]).toStrictEqual({
    id: 1,
    value: 600,
    description: "Salary",
    date: new Date().toLocaleString(),
   });
});
