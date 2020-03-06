<template>
  <div>
    <div class="h-1 bg-purple-500"></div>
    <div class="border-b border-gray-300 py-6">
      <div class="flex justify-between item-center container mx-auto">
        <div>
          <nuxt-link to="/">
            <Logo />
          </nuxt-link>
        </div>
        <Nav />
        <div class="flex items-center">
          <ul class="flex items-center">
            <li class="px-4">
              <nuxt-link class="font-semibold text-purple-800 hover:text-purple-400" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="fill-current font-semibold text-purple-800 hover:text-purple-400 w-5 h-5"
                >
                  <path
                    d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                  />
                </svg>
              </nuxt-link>
            </li>
            <li class="px-4 relative">
              <span
                class="absolute right-5 -top-10 bg-green-600 text-white rounded-full text-xs w-4 h-4 flex justify-center items-center"
              >{{1}}</span>
              <nuxt-link class="font-semibold text-purple-800 hover:text-purple-400" to="/checkout">
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
            <li class="px-4">
              <nuxt-link class="font-semibold text-purple-800 hover:text-purple-400" to="/auth">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="fill-current font-semibold text-purple-800 hover:text-purple-400 w-5 h-5"
                >
                  <path
                    d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"
                  />
                </svg>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
export default {
  name: "Header",
  components: {
    Nav,
    Logo
  }
};
</script>
