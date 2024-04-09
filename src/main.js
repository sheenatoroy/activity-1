import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import books from './books.js'

const app = createApp(App)
app.use(router).mount('#app')
app.use(books).mount('#app')




