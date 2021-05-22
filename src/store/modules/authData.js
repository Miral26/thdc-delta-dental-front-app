import firebase from "firebase/app";
import "firebase/auth";
import axios from 'axios';

export default {
  state: {
    loggedInUser:
      localStorage.getItem("userInfo") != null
        ? JSON.parse(localStorage.getItem("userInfo"))
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
    setUser(state, data) {
      state.loggedInUser = data;
      state.loading = false;
      state.error = null;
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
    login({ commit }, data) {
      commit("clearError");
      commit("setLoading", true);
      if (data && data.email === 'devin@picciolini.com' && data.password === 'devin123') {
        const userInfo = {
          access: true,
          refresh: true,
          authenticatedUser: true
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo)); // store the token in localstorage
        commit("setUser", userInfo);
        console.log('user:', userInfo);
      } else {
        localStorage.removeItem("userInfo"); // if the request fails, remove any possible user token if possible
        commit("setError", { message: "Invalid login credentials" });
      }
      // axios({ url: '/api/auth/login/', data: data, method: 'POST' })
      //   .then(resp => {
      //     if (resp.data.success) {
      //       const userInfo = {
      //         access: resp.data.access,
      //         refresh: resp.data.refresh,
      //         authenticatedUser: resp.data.authenticatedUser
      //       };
      //       localStorage.setItem('userInfo', JSON.stringify(userInfo)); // store the token in localstorage
      //       commit("setUser", userInfo);
      //       console.log('user:', userInfo);
      //     }
      //   })
      //   .catch(err => {
      //     localStorage.removeItem("userInfo"); // if the request fails, remove any possible user token if possible
      //     commit("setError", { message: "Invalid login credentials" });
      //     console.log('user signin error:', err);
      //   });
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(data.email, data.password)
      //   .then(user => {
      //     const newUser = { uid: user.user.uid };
      //     localStorage.setItem("userInfo", JSON.stringify(newUser));
      //     commit("setUser", { uid: user.user.uid });
      //     console.log("user");
      //   })
      //   .catch(function (error) {
      //     // Handle Errors here.
      //     // var errorCode = error.code;
      //     // var errorMessage = error.message;
      //     // console.log(error);
      //     localStorage.removeItem("userInfo");
      //     commit("setError", error);
      //     // ...
      //   });
    },

    signUserUp({ commit }, data) {
      commit("setLoading", true);
      commit("clearError");
      return new Promise((resolve, reject) => {
        axios({ url: '/api/auth/register/', data: data, method: 'POST' })
          .then(resp => {
            commit("setLoading", false);
            if (resp.data.success) {
              localStorage.removeItem("userInfo");
              resolve(resp.data);
              // const userInfo = {
              //   access: resp.data.access,
              //   refresh: resp.data.refresh,
              //   authenticatedUser: resp.data.authenticatedUser
              // };
              // localStorage.setItem('userInfo', JSON.stringify(userInfo)); // store the token in localstorage
              // commit("setUser", userInfo);
              // console.log('user:', userInfo);
            }
          })
          .catch(err => {
            commit("setLoading", false);
            localStorage.removeItem("userInfo"); // if the request fails, remove any possible user token if possible
            commit("setError", err);
            console.log('user signup error:', err);
            reject(err);
          });
      });

      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(data.email, data.password)
      //   .then(user => {
      //     commit("setLoading", false);

      //     const newUser = {
      //       uid: user.user.uid
      //     };
      //     console.log(newUser);
      //     localStorage.setItem("userInfo", JSON.stringify(newUser));
      //     commit("setUser", newUser);
      //   })
      //   .catch(error => {
      //     commit("setLoading", false);
      //     commit("setError", error);
      //     localStorage.removeItem("userInfo");
      //     console.log(error);
      //   });
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
          _error => { }
        );
    }
  }
};
