import { MutationTree, ActionTree, GetterTree } from "vuex";

interface State {
  videos: {
    movies: Array<Record<string, unknown>>;
    series: Array<Record<string, unknown>>;
  };
  categories: {
    [key: string]: Array<Record<string, unknown>>;
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
    fetchVideos(state, payload) {
      state.videos = payload;
      //console.log(state.videos);
    },
    fetchCategories(state, payload) {
      state.categories = payload;
    },
  },
  actions: {
    async fetchVideos(context) {
      const response = await fetch(
        `https://netflix-clone-70780-default-rtdb.europe-west1.firebasedatabase.app/videos.json`
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch!");
        throw error;
      }

      const videos: {
        movies: Array<Record<string, unknown>>;
        series: Array<Record<string, unknown>>;
      } = {
        movies: [],
        series: [],
      };

      // console.log(Object.keys(responseData).length);

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

        if (movie.type === "movie") {
          videos.movies.push(movie);
        }

        if (movie.type === "serie") {
          videos.series.push(movie);
        }
      }

      context.commit("fetchVideos", videos);
    },

    async fetchCategories(context) {
      const response: Response = await fetch(
        `https://netflix-clone-70780-default-rtdb.europe-west1.firebasedatabase.app/categories.json`
      );

      if (!response.ok) {
        const error = new Error(
          `Error! status: ${response.status}` || "Failed to fetch!"
        );
        throw error;
      }
      const responseData = await response.json();

      // console.log(responseData);

      interface Categories {
        [key: string]: Array<Record<string, unknown>>;
        horror: [];
        fantasy: [];
        sf: [];
        vueflix: [];
        thriller: [];
        action: [];
      }

      const categories: Categories = {
        horror: [],
        fantasy: [],
        sf: [],
        vueflix: [],
        thriller: [],
        action: [],
      };

      for (const key in responseData) {
        // categories[key] = responseData[key];
        for (const id in responseData[key]) {
          categories[key].push(responseData[key][id]);
        }
      }

      context.commit("fetchCategories", categories);

      console.log(categories);
    },
  },
  getters: {
    getVideos(state) {
      return state.videos;
    },
    getCategories(state) {
      return state.categories;
    },
  },
};
