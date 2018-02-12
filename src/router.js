const routers = [{
    path: '/',
    meta: {
        title: '登录'
    },
    component: (resolve) => require(['./views/admin/login/login.vue'], resolve)
},
{
    path: '/home',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/admin/home/home.vue'], resolve)
}
];
export default routers;