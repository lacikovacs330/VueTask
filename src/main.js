import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { createPinia } from 'pinia';
import App from './App.vue';

const pinia = createPinia();



library.add(fas, fab);

createApp(App)
.use(createPinia())
.component('fa', FontAwesomeIcon)
.mount('#app')
