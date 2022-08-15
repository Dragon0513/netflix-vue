import { MutationTree, ActionTree, GetterTree } from "vuex";

interface State {
  userId: string;
  token: string;
  didAutoLogout: boolean;
}

interface authModule {
  namespaced: true | false;
  state: State;
  mutations: MutationTree<State>;
  actions: ActionTree<State, never>;
  getters: GetterTree<State, never>;
}

export const authModule: authModule = {
  namespaced: true,
  state: {
    userId: "",
    token: "",
    didAutoLogout: false,
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.didAutoLogout = false;
    },
    setAutoLogout(state) {
      state.didAutoLogout = true;
    },
  },
  actions: {},
  getters: {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuth(state) {
      return !!state.token;
    },
    didAutoLogout(state) {
      return state.didAutoLogout;
    },
  },
};
