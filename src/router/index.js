import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import store from '@/store/index.js';
import ProfileData from '../views/Profile_data.vue';
import ProfileUpdate from '../views/profile_update.vue';
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/profile",
        name: "Profile",
        component: () =>
            import ("../views/Profile.vue"),
        meta: {
            sucre: true
        },
        children: [{
                path: "/profile-data",
                name: "Profile-data",
                component: ProfileData,
                meta: {
                    sucre: true
                }
            },
            {
                path: "/profile-update",
                name: "Profile-update",
                component: ProfileUpdate,
                meta: {
                    sucre: true
                }
            }

        ]

    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            guest: true
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            guest: true
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(item => item.meta.guest)) {

        if (!store.getters.getLoginIn) {
            next();
        } else {
            next("/profile-data");
        }
    } else if (to.matched.some(item => item.meta.sucre)) {

        if (!store.getters.getLoginIn) {
            next("/login");
        } else {
            next(true);
        }
    }

});

export default router;