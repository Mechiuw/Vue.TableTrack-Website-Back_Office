import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'vuex'; 

import * as storeModules from './store/store';

const app = createApp(App);

const store = createStore({
  modules: {
    ...storeModules
  }
});

app.use(store);

app.mount('#app');
