const defaultTheme = {
  primary: "#FF9800",
  secondary: "#b0bec5",
  accent: "#8c9eff",
  error: "#b71c1c"
};

export const state = () => ({
  theme: {
    primary: "#ffffff",
    secondary: "#ffffff",
    accent: "#ffffff",
    error: "#ffffff"
  }
});

export const actions = {
  get({ commit }) {
    commit("set", defaultTheme);
  }
};

export const mutations = {
  set(state, theme) {
    state.theme = theme;
  }
};

export const getters = {
  theme: state => state.theme
};
