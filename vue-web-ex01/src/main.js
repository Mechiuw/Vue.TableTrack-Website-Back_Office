import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'vuex';
import * as storeModules from './store/store';
import router from './router';  

const app = createApp(App);

const store = createStore({
  modules: {
    ...storeModules
  }
});

app.use(store);
app.use(router);  
app.mount('#app');
