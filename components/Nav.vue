<template>
  <nav class="flex items-center justify-between">
    <div v-if="isLoading">
      <div class="item mr-3 lg:mr-10"></div>
      <div class="item mr-3 lg:mr-10"></div>
      <div class="item mr-3 lg:mr-10"></div>
    </div>
    <div v-else>
      <nuxt-link
        class="text-purple-800 hover:text-purple-400 mx-3 lg:mx-5 text-sm lg:text-lg font-semibold"
        v-for="category in getNavigationItems"
        :key="category.id"
        :to="'/category/' + category.id + '/' + category.slug"
        >{{ category.name }}</nuxt-link
      >
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Nav",
  data: () => ({
    isLoading: true,
  }),
  computed: {
    ...mapGetters("navigation", ["getNavigationItems"]),
  },
  async mounted() {
    try {
      await this.$store
        .dispatch("navigation/navigationItems")
        .then(() => {
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      throw error;
    }
  },

  methods: {},
};
</script>

<style scoped>
.item {
  display: inline-block;
  background-color: #444;
  height: 12px;
  border-radius: 100px;
  min-width: 70px;
  opacity: 0.1;
  animation: fading 1.5s infinite;
}
@keyframes fading {
  0% {
    opacity: 0.1;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    opacity: 0.1;
  }
}
</style>
