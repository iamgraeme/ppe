<template>
  <div>
    <div class="relative z-20">
      <div class="h-1 bg-purple-500"></div>
      <div class="py-6 border-b border-gray-300">
        <div class="container flex justify-between px-6 mx-auto item-center sm:px-0">
          <div>
            <nuxt-link to="/">
              <Logo />
            </nuxt-link>
          </div>
          <Nav class="hidden lg:flex" />
          <div class="flex items-center">
            <ul class="flex items-center">
              <li class="hidden px-4 md:block">
                <a
                  class="font-semibold text-purple-600 cursor-pointer hover:text-purple-400"
                  @click="searchIsOpen = !searchIsOpen"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="w-5 h-5 font-semibold text-purple-600 fill-current hover:text-purple-400"
                  >
                    <path
                      d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                    />
                  </svg>
                </a>
              </li>
              <li class="relative hidden px-4 md:block">
                <span
                  v-if="cartCount > 0"
                  class="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-green-600 rounded-full right-5 -top-10"
                >{{ cartCount }}</span>
                <nuxt-link
                  class="font-semibold text-purple-600 hover:text-purple-400"
                  to="/checkout"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="w-5 h-5 font-semibold text-purple-600 fill-current hover:text-purple-400"
                  >
                    <path
                      d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    />
                  </svg>
                </nuxt-link>
              </li>
              <li class="hidden pl-4 md:block">
                <AccountDropdown />
              </li>
              <li class="cursor-pointer sm:block lg:hidden" @click="menuIsOpen = !menuIsOpen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 font-semibold text-purple-600 fill-current hover:text-purple-400"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              </li>
              <li class="relative px-4 sm:block md:hidden">
                <span
                  v-if="cartCount > 0"
                  class="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-green-600 rounded-full right-5 -top-10"
                >{{ cartCount }}</span>
                <nuxt-link
                  class="font-semibold text-purple-600 hover:text-purple-400"
                  to="/checkout"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="w-5 h-5 font-semibold text-purple-600 fill-current hover:text-purple-400"
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
      <div v-if="menuIsOpen" class="py-3 border-b border-gray-300 lg:hidden">
        <div class="container mx-auto">
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
