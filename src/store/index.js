import Vuex from "vuex";
import Vue from "vue";
import largeSidebar from "./modules/largeSidebar";
import compactSidebar from "./modules/compactSidebar";
import config from "./modules/config";
import authData from "./modules/authData";
import deltaDental from "./modules/delta-dental";
import verticalSidebar from "./modules/verticalSidebar";


// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    largeSidebar,
    compactSidebar,
    config,
    authData,
    verticalSidebar,
    deltaDental
  }
});
