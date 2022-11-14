import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import router from './router';
import 'element-plus/dist/index.css';
import App from './App.vue';
import store from './store';

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
