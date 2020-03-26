<template>
  <div class="relative inline-block text-left mr-3">
    <div>
      <span class="rounded-md shadow-sm">
        <button
          @click="isOpen = !isOpen"
          v-on-clickaway="away"
          type="button"
          class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:border-purple-300 focus:shadow-outline-purple active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
        >
          Sort By
          <svg class="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </span>
    </div>
    <div
      class="origin-top-right absolute z-20 right-0 mt-2 w-56 rounded-md shadow-lg"
      v-if="isOpen"
    >
      <div class="rounded-md bg-white shadow-xs">
        <div class="py-1">
          <a
            @click="sortLowToHigh"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >Low To High</a>
          <a
            @click="sortHighToLow"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >High to Low</a>
        </div>
        <div class="border-t border-gray-100"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  name: "SortBy",
  mixins: [clickaway],
  data: () => ({
    isOpen: false
  }),
  methods: {
    async sortLowToHigh() {
      await this.$store.dispatch("products/lowToHigh").catch(err => {
        console.log(err);
      });
    },
    async sortHighToLow() {
      await this.$store.dispatch("products/highToLow").catch(err => {
        console.log(err);
      });
    },
    away() {
      this.isOpen = false;
    }
  }
};
</script>