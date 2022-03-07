import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import testmd from "./testmd"
Vue.use(Vuex);

export default new Vuex.Store({
modules: {testmd},
  plugins: [
    //주목! : 여기에 쓴 모듈만 저장됩니다.
    createPersistedState({
      paths: ['testmd'],
    })
  ]
});