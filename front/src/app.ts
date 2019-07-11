import Vue from "vue";
import { createRouter } from "./router";
import App from "./App.vue";
import { createStore } from "./store";

export function createApp() {
    const router = createRouter();
    const store = createStore();
    const vue = new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount("#app");

    return (vue);
};