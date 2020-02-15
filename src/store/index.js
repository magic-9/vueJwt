import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexPersistence from "vuex-persist";

Vue.prototype.$http = axios;
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        isLogin: false,
        token: null,
        user: null,
        name: "peter"
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload;
        },
        setIsLogin(state, payload) {
            state.isLogin = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        fireLoginAction({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("http://127.0.0.1:8000/api/login", payload)
                    .then(res => {
                        commit("setToken", res.data.access_token);
                        commit("setIsLogin", true);
                        commit("setUser", res.data.user);
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
        fireRegisterAction({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("http://127.0.0.1:8000/api/register", payload)
                    .then(res => {
                        commit("setToken", res.data.token);
                        commit("setIsLogin", true);
                        commit("setUser", res.data.user);
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
        fireLogout({ commit, state }) {
            return new Promise((resolve, reject) => {
                axios
                    .post("http://127.0.0.1:8000/api/logout", {
                        token: state.token
                    })
                    .then(res => {
                        commit("setToken", null);
                        commit("setIsLogin", false);
                        commit("setUser", null);
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        }
    },
    getters: {
        getLoginIn(state) {
            return state.isLogin;
        },
        getUser(state) {
            return state.user;
        }
    },
    modules: {},
    plugins: [new VuexPersistence().plugin]
});