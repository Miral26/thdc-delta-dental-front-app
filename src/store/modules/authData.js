import firebase from "firebase/app";
import "firebase/auth";

export default {
  state: {
    loggedInUser:
      localStorage.getItem("userInfo") != null
        ? JSON.parse(localStorage.getItem("userInfo")).authenticatedUser
        : null,
    loading: false,
    error: null
  },
  getters: {
    loggedInUser: state => state.loggedInUser,
    loading: state => state.loading,
    error: state => state.error
  },
  mutations: {
    SET_USER(state, data) {
      console.log(`data`, data)
      state.loggedInUser = data;
      console.log(`state`, state)
    },
    setLogout(state) {
      state.loggedInUser = null;
      state.loading = false;
      state.error = null;
      // this.$router.go("/signIn");
    },
    setLoading(state, data) {
      state.loading = data;
      state.error = null;
    },
    setError(state, data) {
      state.error = data;
      state.loggedInUser = null;
      state.loading = false;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    setUser({ commit }, data) {
      commit("SET_USER", data)
    },
    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            localStorage.removeItem("userInfo");
            commit("setLogout");
          },
        );
    }
  }
};
