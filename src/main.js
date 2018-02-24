import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import axios from 'axios'
import { post, get } from './utils/http';
import store from './store'
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$axios = axios;
// 路由配置
const RouterConfig = {
   // mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});