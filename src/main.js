import { createApp } from "vue";
import App from "./App.vue";
import store from './store'
import BaseWrapper from "./components/utils/BaseWrapper.vue";
import BaseButton from "./components/utils/BaseButton.vue";

const app = createApp(App).use(store);


app.component("base-wrapper", BaseWrapper);
app.component("base-button", BaseButton);

app.mount("#app");
