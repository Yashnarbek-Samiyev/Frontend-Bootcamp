import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import Routes from "@/components/routes";

createApp(App).use(Routes).mount('#app')
