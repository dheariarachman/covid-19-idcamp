export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    // Or this:
    const { uid, email, emailVerified } = authUser;
    state.auth.user = { uid, email, emailVerified };
  }
};

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, ...authUser } = res.locals.user;
      commit("ON_AUTH_STATE_CHANGED_MUTATION", { authUser, claims });
    }
  }
};
