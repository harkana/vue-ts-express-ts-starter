import Vue from "vue";
import { createRouter } from "./router";
import App from "./App.vue";

export function createApp() {
    const router = createRouter();
    const vue = new Vue({
        router,
        render: h => h(App),
    }).$mount("#app");

    return (vue);
};