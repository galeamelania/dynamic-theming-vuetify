<template>
  <v-layout column justify-center align-center>
    <v-btn color="primary">This is a normal button</v-btn>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  components: {},

  computed: {
    ...mapState({
      theme: state => state.themes.theme
    })
  },

  mounted() {
    this.getTheme();
  },

  watch: {
    theme(newTheme, oldTheme) {
      this.$vuetify.theme.themes.light = newTheme;
    }
  },

  methods: {
    ...mapActions({
      getTheme: "themes/get"
    })
  }
};
</script>
