<template>
  <div>
    <div class="relative z-20">
      <div class="h-1 bg-purple-500"></div>
      <div class="border-b border-gray-300 py-6">
        <div class="flex justify-between item-center container mx-auto px-6 sm:px-0">
          <div>
            <nuxt-link to="/">
              <Logo />
            </nuxt-link>
          </div>
          <Nav class="hidden lg:flex" />
          <div class="flex items-center">
            <ul class="flex items-center">
              <li class="px-4 hidden md:block">
                <a
                  class="font-semibold text-purple-800 hover:text-purple-400 cursor-pointer"
                  @click="searchIsOpen = !searchIsOpen"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="fill-current font-semibold text-purple-800 hover:text-purple-400 w-5 h-5"
                  >
                    <path
                      d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                    />
                  </svg>
                </a>
              </li>
              <li class="px-4 relative hidden md:block">
                <span
                  v-if="cartCount > 0"
                  class="absolute right-5 -top-10 bg-green-600 text-white rounded-full text-xs w-4 h-4 flex justify-center items-center"
                >{{ cartCount }}</span>
                <nuxt-link
                  class="font-semibold text-purple-800 hover:text-purple-400"
                  to="/checkout"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="fill-current font-semibold text-purple-800 hover:text-purple-400 w-5 h-5"
                  >
                    <path
                      d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    />
                  </svg>
                </nuxt-link>
              </li>
              <li class="px-4 hidden md:block">
                <AccountDropdown />
                <!-- <nuxt-link class="font-semibold text-purple-800 hover:text-purple-400" to="/auth">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="fill-current font-semibold text-purple-800 hover:text-purple-400 w-5 h-5"
                  >
                    <path
                      d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"
                    />
                  </svg>
                </nuxt-link>-->
              </li>
              <li class="sm:block lg:hidden cursor-pointer" @click="menuIsOpen = !menuIsOpen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="fill-current font-semibold text-purple-800 hover:text-purple-400 w-8 h-8"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              </li>
              <li class="px-4 relative sm:block md:hidden">
                <span
                  v-if="cartCount > 0"
                  class="absolute right-5 -top-10 bg-green-600 text-white rounded-full text-xs w-4 h-4 flex justify-center items-center"
                >{{ cartCount }}</span>
                <nuxt-link
                  class="font-semibold text-purple-800 hover:text-purple-400"
                  to="/checkout"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="fill-current font-semibold text-purple-800 hover:text-purple-400 w-5 h-5"
                  >
                    <path
                      d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    />
                  </svg>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="menuIsOpen" class="border-b border-gray-300 py-3 lg:hidden">
        <div class="mx-auto container">
          <div class="flex justify-center">
            <Nav />
          </div>
        </div>
      </div>
      <SearchBar v-if="searchIsOpen" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mixin as clickaway } from "vue-clickaway";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import AccountDropdown from "@/components/AccountDropdown";
export default {
  name: "Header",
  mixin: ["clickaway"],
  computed: {
    ...mapGetters(["cartCount"])
  },
  data: () => ({
    menuIsOpen: false,
    searchIsOpen: false
  }),

  components: {
    Nav,
    Logo,
    SearchBar,
    AccountDropdown
  },
  methods: {
    searchAway() {
      this.searchIsOpen = false;
    },
    menuAway() {
      this.menuIsOpen = false;
    }
  }
};
</script>
