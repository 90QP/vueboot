import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
//router/index.js에서 export default한것을 받아옴

import './assert/main.scss'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

createApp(App).use(router).mount('#app')
