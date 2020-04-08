<template>
  <nav class="flex items-center justify-between">
    <div v-if="isLoading">
      <div class="mr-3 item lg:mr-10"></div>
      <div class="mr-3 item lg:mr-10"></div>
      <div class="mr-3 item lg:mr-10"></div>
    </div>
    <div v-else>
      <nuxt-link
        class="mx-3 text-sm font-semibold text-purple-600 hover:text-purple-400 lg:mx-5 lg:text-lg"
        v-for="category in getNavigationItems"
        :key="category.id"
        :to="{ name: 'category-slug', params: { slug: category.slug, id: category.id } }"
      >{{ category.name }}</nuxt-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Nav",
  data: () => ({
    isLoading: true
  }),
  computed: {
    ...mapGetters("navigation", ["getNavigationItems"])
  },
  async mounted() {
    try {
      await this.$store
        .dispatch("navigation/navigationItems")
        .then(() => {
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      throw error;
    }
  },

  methods: {}
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
