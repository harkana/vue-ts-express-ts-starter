import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./Home.vue";
import Hello from "./Hello.vue";
import NotFound from "./NotFound.vue";

Vue.use(VueRouter);

export function createRouter() : any {
    return new VueRouter({
        routes: [
            {
                path: '*',
                component:NotFound 
            },
            {
                component: Home,
                path: '/'
            },
            {
                component: Hello,
                path: '/hello'
            }
        ]
    });
}
