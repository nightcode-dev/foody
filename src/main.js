import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import router from "./router.js";

var app = createApp(App);
app.use(router);
app.mount("#app");
