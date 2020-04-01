import { fireAuth } from "~/plugins/firebase";
import VuexPersistence from "vuex-persist";

export const state = () => ({
  variant: null,
  message: null,
  isLoading: false,
  showMessageAlert: false
});

export const mutations = {

  CHANGE_LOADING_STATE(state) {
    state.isLoading = !state.isLoading;
  },
  LOGOUT_FIREBASE(state, payload) {
    state.isLoggedIn = false;
  },
  SET_MESSAGE(state, payload) {
    state.message = payload.message;
    state.variant = payload.variant;
    state.showMessageAlert = true;
  },
  HIDE_MESSAGE(state) {
    state.showMessageAlert = false;
  },
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    // Or this:
    const { uid, email, emailVerified } = authUser;
    state.auth.user = { uid, email, emailVerified };
  }
};

export const actions = {
  async login({ commit }, payload) {
    commit("CHANGE_LOADING_STATE");
    await this.$fireAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(cred => {
        if (cred.user.emailVerified) {
          commit("SET_MESSAGE", {
            message: "Wellcome " + cred.user.displayName,
            variant: "success"
          });
          commit("ON_AUTH_STATE_CHANGED_MUTATION");
          commit("CHANGE_LOADING_STATE");
        } else {
          commit("SET_MESSAGE", {
            message: "Email not Verified",
            variant: "success"
          });
          commit("CHANGE_LOADING_STATE");
        }
      })
      .catch(err => {
        commit("SET_MESSAGE", { message: err.message, variant: "danger" });
        commit("CHANGE_LOADING_STATE");
      });
  },

  async logout({ commit }) {
    await fireAuth
      .signOut()
      .then(v => {
        commit("LOGOUT_FIREBASE");
        commit("SET_MESSAGE", { message: "Success", variant: "success" });
      })
      .catch(err => {
        commit("SET_MESSAGE", { message: err.message, variant: "danger" });
      });
  },

  async signup({ commit }, payload) {
    commit("CHANGE_LOADING_STATE");
    await fireAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(v => {
        commit("CHANGE_LOADING_STATE");
        commit("SET_MESSAGE", {
          message: "Account has been created",
          variant: "success"
        });
      })
      .catch(err => {
        commit("CHANGE_LOADING_STATE");
        commit("SET_MESSAGE", { message: err.message, variant: "danger" });
      });
  },

  closeAlert({ commit }) {
    commit("HIDE_MESSAGE");
  },

  showHideLoading({ commit }) {
    commit("CHANGE_LOADING_STATE");
  }
};
