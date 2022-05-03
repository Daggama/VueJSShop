import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store'
import axios from 'axios'

// set a prototype for http
createApp(App).use(store).use(router).mount('#app')
