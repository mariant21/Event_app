import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import '@fortawesome/fontawesome-free/js/all'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awsome'
//import dayjs from 'dayjs'


//app.config.globalProperties.$dayjs = dayjs

createApp(App)
.use(router)
.use(store)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
