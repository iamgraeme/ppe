<template>
  <div
    class="sticky top-0 z-50 flex flex-col justify-top items-center bg-gray-200 w-12/12 lg:w-4/12 h-full sidebar p-6"
  >
    <div class="mt-8 pb-8 border-b border-gray-200 w-full flex lg:flex-col items-center">
      <figure class="rounded-full w-40 h-40 overflow-hidden border border-gray-400">
        <!-- //TODO add email address dynamically -->
        <div v-if="loggedInUser">
          <v-gravatar :email="loggedInUser.email" :size="160" />
        </div>
      </figure>
      <div
        class="flex flex-col justify-center items-start lg:justify-start lg:items-center flex-wrap ml-10 lg:ml-0"
      >
        <p
          class="text-center mt-3 text-purple-800 font-semibold text-lg"
          v-if="loggedInUser"
        >{{loggedInUser.name}}</p>
        <p
          class="text-center mt-3 text-purple-800 font-semibold text-sm"
          v-if="loggedInUser"
        >{{loggedInUser.user_email}}</p>
        <ul class="flex mt-3 lg:hidden justify-between w-full items-center">
          <li class="mr-6">
            <nuxt-link
              class="text-gray-600 text-xs hover:text-purple-800 flex items-center hover:bg-gray-100 border-transparent border-l-2"
              to="/user/account"
            >
              <svg
                class="w-4 h-4 fill-current text-purple-800 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 6a6 6 0 0112 0v2.4a6 6 0 01-12 0V6zM0 20.02a23.88 23.88 0 0112-3.22 23.8 23.8 0 0112 3.22V24H0v-3.98z"
                />
              </svg>
              My Account
            </nuxt-link>
          </li>
          <li class="mr-6">
            <nuxt-link
              class="text-gray-600 text-xs hover:text-purple-800 flex items-baseline hover:bg-gray-100 border-transparent border-l-2"
              to="/user/orders"
            >
              <svg
                class="w-4 h-4 fill-current text-purple-800 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M1.2 4.8a2.4 2.4 0 012.4-2.4h16.8a2.4 2.4 0 012.4 2.4v16.8a2.4 2.4 0 01-2.4 2.4H3.6a2.4 2.4 0 01-2.4-2.4V4.8zm2.4 2.4v14.4h16.8V7.2H3.6zM6 0h2.4v2.4H6V0zm9.6 0H18v2.4h-2.4V0zM6 10.8h2.4v2.4H6v-2.4zm0 4.8h2.4V18H6v-2.4zm4.8-4.8h2.4v2.4h-2.4v-2.4zm0 4.8h2.4V18h-2.4v-2.4zm4.8-4.8H18v2.4h-2.4v-2.4zm0 4.8H18V18h-2.4v-2.4z"
                />
              </svg>
              Previous Orders
            </nuxt-link>
          </li>
          <li class="mr-6">
            <nuxt-link
              class="text-gray-600 text-xs hover:text-purple-800 flex items-center hover:bg-gray-100 border-transparent border-l-2"
              to="/user/settings"
            >
              <svg
                class="w-4 h-4 fill-current text-purple-800 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.73 7.8L2.66 4.37l1.7-1.7L7.8 4.72a8.49 8.49 0 012.04-.84L10.8 0h2.4l.96 3.89c.72.19 1.42.48 2.04.84l3.43-2.07 1.7 1.7-2.06 3.44c.36.62.65 1.32.84 2.04l3.89.96v2.4l-3.89.96c-.19.72-.48 1.42-.84 2.04l2.07 3.43-1.7 1.7-3.44-2.06c-.62.36-1.32.65-2.04.84L13.2 24h-2.4l-.96-3.89a8.49 8.49 0 01-2.04-.84l-3.43 2.07-1.7-1.7 2.06-3.44a8.49 8.49 0 01-.84-2.04L0 13.2v-2.4l3.89-.96c.19-.72.48-1.42.84-2.04zM12 15.6a3.6 3.6 0 000-7.2 3.6 3.6 0 000 7.2z"
                />
              </svg>
              Settings
            </nuxt-link>
          </li>
          <li class="mr-6">
            <a
              class="text-xs cursor-pointer text-gray-600 hover:text-purple-800 flex items-center hover:bg-gray-100 border-transparent border-l-2"
              @click="logoutUser"
            >
              <svg
                class="w-4 h-4 fill-current text-purple-800 mr-1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.8 9.6V7.2v.00000109c-6e-7-3.976452 3.223548-7.2 7.2-7.2 3.976452-6e-7 7.2 3.223548 7.2 7.2v2.4h1.2-1e-7c1.325484-6e-8 2.4 1.074516 2.4 2.4v9.6c0 1.325484-1.0745172 2.4-2.4 2.4H3.59999979c-1.325484-6e-8-2.4-1.0745172-2.4-2.4v-9.6c0-1.32 1.08-2.4 2.4-2.4h1.2zm6 8.076V20.4h2.4v-2.724l1.9e-7-1e-7c1.147902-.662742 1.541208-2.130564.8784612-3.27846-.662742-1.147902-2.130564-1.541208-3.27846-.8784612-1.147902.662742-1.541208 2.130564-.8784612 3.27846.2106444.3648456.5136144.6678168.8784612.8784612zM8.4 7.2v2.4h7.2V7.2c0-1.98822-1.61178-3.6-3.6-3.6S8.4 5.21178 8.4 7.2z"
                />
              </svg>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="pb-8 w-full">
      <ul class="flex flex-col hidden lg:block">
        <li class="border-b border-gray-200">
          <nuxt-link
            class="text-gray-600 hover:text-purple-800 flex py-3 px-10 items-center hover:bg-gray-100 border-transparent border-l-2"
            to="/user/account"
          >
            <svg
              class="w-4 h-4 fill-current text-purple-800 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 6a6 6 0 0112 0v2.4a6 6 0 01-12 0V6zM0 20.02a23.88 23.88 0 0112-3.22 23.8 23.8 0 0112 3.22V24H0v-3.98z"
              />
            </svg>
            My Account
          </nuxt-link>
        </li>
        <li class="border-b border-gray-200">
          <nuxt-link
            class="text-gray-600 hover:text-purple-800 flex py-3 px-10 items-baseline hover:bg-gray-100 border-transparent border-l-2"
            to="/user/orders"
          >
            <svg
              class="w-4 h-4 fill-current text-purple-800 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M1.2 4.8a2.4 2.4 0 012.4-2.4h16.8a2.4 2.4 0 012.4 2.4v16.8a2.4 2.4 0 01-2.4 2.4H3.6a2.4 2.4 0 01-2.4-2.4V4.8zm2.4 2.4v14.4h16.8V7.2H3.6zM6 0h2.4v2.4H6V0zm9.6 0H18v2.4h-2.4V0zM6 10.8h2.4v2.4H6v-2.4zm0 4.8h2.4V18H6v-2.4zm4.8-4.8h2.4v2.4h-2.4v-2.4zm0 4.8h2.4V18h-2.4v-2.4zm4.8-4.8H18v2.4h-2.4v-2.4zm0 4.8H18V18h-2.4v-2.4z"
              />
            </svg>
            Previous Orders
          </nuxt-link>
        </li>
        <li class="border-b border-gray-200">
          <nuxt-link
            class="text-gray-600 hover:text-purple-800 flex py-3 px-10 items-center hover:bg-gray-100 border-transparent border-l-2"
            to="/user/settings"
          >
            <svg
              class="w-4 h-4 fill-current text-purple-800 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.73 7.8L2.66 4.37l1.7-1.7L7.8 4.72a8.49 8.49 0 012.04-.84L10.8 0h2.4l.96 3.89c.72.19 1.42.48 2.04.84l3.43-2.07 1.7 1.7-2.06 3.44c.36.62.65 1.32.84 2.04l3.89.96v2.4l-3.89.96c-.19.72-.48 1.42-.84 2.04l2.07 3.43-1.7 1.7-3.44-2.06c-.62.36-1.32.65-2.04.84L13.2 24h-2.4l-.96-3.89a8.49 8.49 0 01-2.04-.84l-3.43 2.07-1.7-1.7 2.06-3.44a8.49 8.49 0 01-.84-2.04L0 13.2v-2.4l3.89-.96c.19-.72.48-1.42.84-2.04zM12 15.6a3.6 3.6 0 000-7.2 3.6 3.6 0 000 7.2z"
              />
            </svg>
            Settings
          </nuxt-link>
        </li>
        <li class="border-b border-gray-200">
          <a
            class="cursor-pointer text-gray-600 hover:text-purple-800 flex py-3 px-10 items-center hover:bg-gray-100 border-transparent border-l-2"
            @click="logoutUser"
          >
            <svg
              class="w-4 h-4 fill-current text-purple-800 mr-3"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.8 9.6V7.2v.00000109c-6e-7-3.976452 3.223548-7.2 7.2-7.2 3.976452-6e-7 7.2 3.223548 7.2 7.2v2.4h1.2-1e-7c1.325484-6e-8 2.4 1.074516 2.4 2.4v9.6c0 1.325484-1.0745172 2.4-2.4 2.4H3.59999979c-1.325484-6e-8-2.4-1.0745172-2.4-2.4v-9.6c0-1.32 1.08-2.4 2.4-2.4h1.2zm6 8.076V20.4h2.4v-2.724l1.9e-7-1e-7c1.147902-.662742 1.541208-2.130564.8784612-3.27846-.662742-1.147902-2.130564-1.541208-3.27846-.8784612-1.147902.662742-1.541208 2.130564-.8784612 3.27846.2106444.3648456.5136144.6678168.8784612.8784612zM8.4 7.2v2.4h7.2V7.2c0-1.98822-1.61178-3.6-3.6-3.6S8.4 5.21178 8.4 7.2z"
              />
            </svg>
            Logout
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cookie from "js-cookie";
import Gravatar from "vue-gravatar";

export default {
  components: {
    "v-gravatar": Gravatar
  },
  computed: {
    ...mapGetters("users", ["loggedInUser"])
  },
  methods: {
    logoutUser() {
      this.$store
        .dispatch("users/logout")
        .then(this.$router.push("/auth"))
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
