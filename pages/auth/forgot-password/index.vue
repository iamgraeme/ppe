<template>
  <div class="container mx-auto bg-white mb-20">
    <div class="text-center w-1/2 mx-auto">
      <PageHeading class="mb-6 mt-10" title="Forgot Password" />
      <p class="text-gray-400 mb-10">
        Please enter the following information to create your account. Creating
        an account allows you to track your orders and checkout more
        efficiently.
      </p>
    </div>
    <div class="w-1/2 mx-auto">
      <form @submit.prevent class="flex flex-col justify-center">
        <div class="w-full mb-20">
          <input
            placeholder="Email Address"
            class="mb-3 border border-gray-400 rounded-full w-full py-3 px-6 focus:outline-none focus:border-purple-400"
            type="email"
            v-model="user.user_login"
          />
        </div>
        <input
          class="bg-purple-800 mb-10 hover:bg-purple-400 rounded-full w-full py-3 px-6 text-white focus:outline-none focus:shadow-outline"
          type="submit"
          value="Reset Password"
          @click="retrievePassword"
        />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PageHeading from "@/components/PageHeading";
import Notification from "@/components/Notification";
export default {
  transition: "slide-fade",
  components: {
    PageHeading
  },
  data: () => ({
    user: {
      user_login: ""
    },
    isError: false,
    message: ""
  }),
  methods: {
    retrievePassword(e) {
      e.preventDefault();

      axios
        .post(
          "https://api.purplepeopleeater.co.uk/wp-json/wp/v2/users/lost-password",
          this.user
        )
        .then(() => {
          this.$router.push("/auth/forgot-password/confirmation");
        })
        .catch(error => {
          this.isError = true;
          this.message = error.message;
        });
    }
  }
};
</script>
