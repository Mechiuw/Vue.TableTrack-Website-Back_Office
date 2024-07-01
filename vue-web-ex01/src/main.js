import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'vuex';
import * as storeModules from './store/store';
import router from './components/utils/Router.js';

const store = createStore({
  modules: {
   ...storeModules
  }
});

createApp(App).use(store).use(router).mount('#app');