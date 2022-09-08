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

let timer: number;
const API_KEY = '';

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
  actions: {
    async login(context, payload) {
      return context.dispatch("auth", { ...payload, mode: "login" });
    },
    async signup(context, payload) {
      return context.dispatch("auth", { ...payload, mode: "signup" });
    },
    async auth(context, payload) {
      const mode = payload.mode;
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

      if (mode === "signup") {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
      }

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.log(response);
        const error = new Error(
          responseData.message ||
            "Failed to authenticate. Check your login data"
        );
        throw error;
      }

      const expiresIn = +responseData.expiresIn * 1000; // sec to milisec
      const expirationDate = (new Date().getTime() + expiresIn).toString();

      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("userId", responseData.localId);
      localStorage.setItem("tokenExpiration", expirationDate);

      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId
      });

    },

    tryLogin(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tokenExp = localStorage.getItem('tokenExpiration');
      const tokenExpiration = +tokenExp!;

      const expiresIn = tokenExpiration - new Date().getTime();

      if (expiresIn < 0) {
        return;
      }

      setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      if (token && userId) {
        context.commit('setUser', {
          token: token,
          userId: userId
        })
      }
    },

    logout(context) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');

      clearTimeout(timer);

      context.commit('setUser', {
        token: null,
        userId: null
      })
    },

    autoLogout(context) {
      context.dispatch('logout');
      context.commit('setAutoLogout')
    }
  },
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
