<template>
  <div class="container mx-auto mb-20 bg-white">
    <div class="w-1/2 mx-auto text-center">
      <PageHeading class="mt-10 mb-6" title="Login" />
      <p class="mb-10 text-gray-400">
        Please enter the following information to create your account. Creating
        an account allows you to track your orders and checkout more
        efficiently.
      </p>
    </div>

    <div class="w-1/2 mx-auto">
      <Notification :isError="isError" :message="errMsg" />
      <form @submit.prevent="submit" class="flex flex-col justify-center">
        <div class="w-full">
          <input
            placeholder="Email Address"
            class="w-full px-6 py-3 mb-3 border border-gray-400 rounded-full focus:outline-none focus:border-purple-400"
            type="text"
            v-model="login.username"
          />
        </div>
        <div class="relative flex flex-col justify-center w-full mb-20">
          <input
            placeholder="Password"
            class="w-full px-6 py-3 mb-3 border border-gray-400 rounded-full focus:outline-none focus:border-purple-400"
            :type="passwordFieldType"
            id="password"
            v-model="login.password"
          />
          <button
            tabindex="-1"
            class="absolute right-0 z-10 mr-6 -mt-4 focus:outline-none"
            @click="switchVisibility"
          >
            <img src="@/assets/images/hide.svg" />
          </button>
          <div class="text-right">
            <nuxt-link
              class="text-gray-400 hover:text-purple-400"
              to="/auth/forgot-password"
            >Forgot your password?</nuxt-link>
          </div>
        </div>

        <input
          class="w-full px-6 py-3 mb-10 text-white bg-purple-800 rounded-full hover:bg-purple-400 focus:outline-none focus:shadow-outline"
          type="submit"
          value="Log In"
        />
      </form>
      <div class="text-center">
        <p class="text-gray-400">
          Need an account?
          <nuxt-link class="text-purple-800" to="/auth/register">Register Here</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Notification from "@/components/Notification";
import PageHeading from "@/components/PageHeading";
export default {
  transition: "slide-fade",
  data: () => ({
    login: {
      username: "",
      password: ""
    },
    passwordFieldType: "password",
    isError: "",
    errMsg: ""
  }),
  components: {
    PageHeading,
    Notification
  },
  methods: {
    displaySuccessNotification() {
      this.$snotify.success("You are now logged in...", "Success!");
    },
    displayErrorNotification() {
      this.$snotify.error("Usename/Password do not match", "Error!");
    },
    submit() {
      this.$store
        .dispatch("users/login", this.login)
        .then(() => {
          this.displaySuccessNotification();
          this.$router.push("/");
        })
        .catch(error => {
          this.displayErrorNotification();
          this.isError = true;
          this.errMsg = error.code;
        });
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    }
  }
};
</script>
