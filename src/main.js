import './assets/main.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import {faSave, faPlus, faCheck, faTrash, faEdit}from "@fortawesome/free-solid-svg-icons";
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from './App.vue'
import router from './router'
library.add(faSave,faPlus ,faCheck,faClock, faXmark, faTrash, faEdit)
const app = createApp(App)

app.use(createPinia())
app.use(router)
.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
