<template>
  <div
    class="relative inline-block text-left"
    @click="isOpen = !isOpen"
    v-on-clickaway="away"
  >
    <div>
      <span class="rounded-md shadow-sm">
        <button
          type="button"
          class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:border-purple-300 focus:shadow-outline-purple active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
        >
          Account
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
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
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
    >
      <div class="rounded-md bg-white shadow-xs">
        <div v-if="$auth.loggedIn">
          <div class="py-1">
            <nuxt-link
              to="/user/account"
              class="block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >My Account</nuxt-link
            >
            <nuxt-link
              to="/user/orders"
              class="block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >My Orders</nuxt-link
            >
            <nuxt-link
              to="/user/account"
              class="block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >Settings</nuxt-link
            >
          </div>
          <div class="border-t border-gray-300"></div>
        </div>
        <div class="py-1">
          <div v-if="$auth.loggedIn">
            <a
              @click="logoutUser"
              class="block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >Logout</a
            >
          </div>
          <div v-else>
            <nuxt-link
              to="/auth/register"
              class="block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >Register</nuxt-link
            >
            <nuxt-link
              to="/auth"
              class="block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >Log In</nuxt-link
            >
            <div class="border-t border-gray-300"></div>
            <div class="py-1">
              <nuxt-link
                to="/contact"
                class="block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                >Contact Support</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  name: "AccountDropdown",
  mixins: [clickaway],
  data: () => ({
    isOpen: false
  }),
  methods: {
    logoutUser(e) {
      console.log("Log Ou Clicked");
    },
    away() {
      this.isOpen = false;
    }
  }
};
</script>
