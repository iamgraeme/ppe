<template>
  <div class="relative inline-block text-left">
    <div>
      <span class="rounded-md shadow-sm">
        <button
          @click="isOpen = !isOpen"
          v-on-clickaway="away"
          type="button"
          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-purple-300 focus:shadow-outline-purple active:bg-gray-50 active:text-gray-800"
        >
          Sort By
          <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
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
      class="absolute right-0 z-20 w-56 mt-2 origin-top-right rounded-md shadow-lg"
      v-if="isOpen"
    >
      <div class="bg-white rounded-md shadow-xs">
        <div class="py-1">
          <a
            @click="sortLowToHigh"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >Price: Low To High</a>
          <a
            @click="sortHighToLow"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >Price: High to Low</a>
        </div>
        <a
          @click="sortAZ"
          class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
        >Name: A-Z</a>

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
    async sortAZ() {
      await this.$store.dispatch("products/sortAlphabetically").catch(err => {
        console.log(err);
      });
    },

    away() {
      this.isOpen = false;
    }
  }
};
</script>