import { createApp } from 'vue'
import App from './components/ComponentUse.vue'
import  GlobalComponent  from './components/GlobalComponent.vue';
const app = createApp(App)
app.component('GlobalComponent',GlobalComponent)
app.mount('#app')
