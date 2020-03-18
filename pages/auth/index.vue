<template>
  <div class="container mx-auto bg-white mb-20">
    <div class="text-center w-1/2 mx-auto">
      <PageHeading class="mb-6 mt-10" title="Login" />
      <p class="text-gray-400 mb-10">
        Please enter the following information to create your account. Creating
        an account allows you to track your orders and checkout more
        efficiently.
      </p>
    </div>

    <div class="w-1/2 mx-auto">
      <form @submit.prevent class="flex flex-col justify-center">
        <div class="w-full">
          <input
            placeholder="Username"
            class="mb-3 border border-gray-400 rounded-full w-full py-3 px-6 focus:outline-none focus:border-purple-400"
            type="text"
            v-model="username"
          />
        </div>
        <div class="w-full flex flex-col relative justify-center mb-20">
          <input
            placeholder="Password"
            class="mb-3 border border-gray-400 rounded-full w-full py-3 px-6 focus:outline-none focus:border-purple-400"
            :type="passwordFieldType"
            id="password"
            v-model="password"
          />
          <button
            class="absolute right-0 mr-6 -mt-4 z-10 focus:outline-none"
            @click="switchVisibility"
          >
            <img src="@/assets/images/hide.svg" />
          </button>
          <div class="text-right">
            <nuxt-link
              class="text-gray-400 hover:text-purple-400"
              to="/auth/forgot-password"
              >Forgot your password?</nuxt-link
            >
          </div>
        </div>

        <input
          class="bg-purple-800 mb-10 hover:bg-purple-400 rounded-full w-full py-3 px-6 text-white focus:outline-none focus:shadow-outline"
          type="submit"
          value="Log In"
          @click="loginUser"
        />
      </form>
      <div class="text-center">
        <p class="text-gray-400">
          Need an account?
          <nuxt-link class="text-purple-800" to="/auth/register"
            >Register Here</nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NotificationSuccess from "@/components/NotificationSuccess";
import PageHeading from "@/components/PageHeading";
export default {
  transition: "slide-fade",
  data: () => ({
    user: {
      username: "",
      password: ""
    },
    passwordFieldType: "password"
  }),
  components: {
    PageHeading,
    NotificationSuccess
  },
  methods: {
    loginUser() {
      // alert("Logging in...");

      this.$auth.loginWith("local", { data: this.user });
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    }
  }
};
</script>
