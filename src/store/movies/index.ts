import { MutationTree, ActionTree, GetterTree } from "vuex";

interface State {
  videos: {
    movies: [];
    series: [];
  };
  categories: {
    horror: [];
    fantasy: [];
    sf: [];
    vueflix: [];
    thriller: [];
    action: [];
  };
}

interface moviesModule {
  namespaced: true | false;
  state: State;
  mutations: MutationTree<State>;
  actions: ActionTree<State, never>;
  getters: GetterTree<State, never>;
}

export const moviesModule: moviesModule = {
  namespaced: true,
  state: {
    videos: {
      movies: [],
      series: [],
    },
    categories: {
      horror: [],
      fantasy: [],
      sf: [],
      vueflix: [],
      thriller: [],
      action: [],
    },
  },
  mutations: {
    fetchVideos(state, payload: { movies: []; series: [] }) {
      state.videos.movies = payload.movies;
      state.videos.series = payload.series;
    },
  },
  actions: {
    async fetchVideos(context) {
      const response = await fetch(
        `https://netflix-clone-70780-default-rtdb.europe-west1.firebasedatabase.app/videos.json`
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error("responseData.message" || "Failed to fetch!");
        throw error;
      }

      const videos: {
        movies: Array<Record<string, unknown>>;
        series: Array<Record<string, unknown>>;
      } = {
        movies: [],
        series: [],
      };

      console.log(Object.keys(responseData).length);

      for (const key in responseData) {
        const movie = {
          id: key,
          title: responseData[key].title,
          type: responseData[key].type,
          description: responseData[key].description,
          url: responseData[key].url,
          urlPic: responseData[key].urlPic,
          categories: responseData[key].categories,
        };
        const serie = {
          id: key,
          title: responseData[key].title,
          type: responseData[key].type,
          description: responseData[key].description,
          url: responseData[key].url,
          urlPic: responseData[key].urlPic,
          categories: responseData[key].categories,
        };

        if (movie.type === "movie") {
          videos.movies.push(movie);
        }

        if (movie.type === "serie") {
          videos.series.push(serie);
        }
      }

      console.log(videos)

    //  context.commit("fetchVideos");
    },
  },
  getters: {},
};
