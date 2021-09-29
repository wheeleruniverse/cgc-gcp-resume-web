import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import axios from "axios";

const app = createApp(App);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
