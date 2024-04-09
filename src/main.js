import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './books/books.js'; // Import the Vuex store

const app = createApp(App);
app.use(router);
app.use(store); // Use the Vuex store
app.mount('#app');
