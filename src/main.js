import { createApp } from 'vue'
import App from './App.vue'
import drag from "v-drag"

// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const app = createApp(App);

app.use(drag, {
    // global configurationç
});

app.mount('#app')