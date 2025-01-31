import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(router);
app.use(pinia);

app.mount("#app");
