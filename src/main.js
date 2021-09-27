import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

import BaseWrapper from './components/utils/BaseWrapper.vue';
import BaseButton from './components/utils/BaseButton.vue';

app.component('base-wrapper', BaseWrapper);
app.component('base-button', BaseButton);

app.mount('#app');
