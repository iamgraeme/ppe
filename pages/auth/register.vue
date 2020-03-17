<template>
  <div class="container mx-auto bg-white mb-20">
    <div class="text-center w-1/2 mx-auto">
      <PageHeading class="mb-6 mt-10" title="Register" />
      <p class="text-gray-400 mb-10">
        Please enter the following information to create your account. Creating
        an account allows you to track your orders and checkout more
        efficiently.
      </p>
    </div>
    <div class="w-1/2 mx-auto">
      <Notification :isError="isError" :message="message" type="negative" />
    </div>
    <div class="w-1/2 mx-auto">
      <form @submit.prevent class="flex flex-col justify-center">
        <div class="w-full">
          <Label class="sr-only">Choose a Username</Label>
          <input
            placeholder="Choose a Username"
            class="mb-3 border text-gray-400 focus:outline-none focus:border-purple-400 rounded-full w-full py-3 px-6"
            type="text"
            v-model="user.username"
          />
        </div>
        <div class="w-full">
          <Label class="sr-only">Email Address</Label>
          <input
            placeholder="Email Address"
            class="mb-3 border text-gray-400 focus:outline-none focus:border-purple-400 rounded-full w-full py-3 px-6"
            type="email"
            v-model="user.email"
          />
        </div>
        <div class="w-full flex flex-col relative justify-center mb-20">
          <Label class="sr-only">Password</Label>
          <input
            placeholder="Password"
            class="mb-3 border text-gray-400 focus:outline-none focus:border-purple-400 rounded-full w-full py-3 px-6"
            :type="passwordFieldType"
            id="password"
            v-model="user.password"
          />
          <button
            class="absolute right-0 mr-6 -mt-2 z-10 focus:outline-none"
            @click="switchVisibility"
          >
            <img src="@/assets/images/hide.svg" />
          </button>
        </div>

        <input
          class="bg-purple-800 mb-10 hover:bg-purple-400 focus:outline-none focus:shadow-outline rounded-full w-full py-3 px-6 text-white"
          type="submit"
          value="Register"
          @click="registerUser"
        />
      </form>
      <div class="text-center">
        <p class="text-gray-400">
          Already have an account?
          <nuxt-link class="text-purple-800" to="/auth">Login Here</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PageHeading from "@/components/PageHeading";
import Notification from "@/components/Notification";
export default {
  transition: "slide-fade",
  data: () => ({
    user: {
      username: "",
      email: "",
      password: ""
    },
    passwordFieldType: "password",
    isError: false,
    message: ""
  }),
  components: {
    PageHeading,
    Notification
  },
  methods: {
    registerUser(e) {
      e.preventDefault();

      axios
        .post(
          "https://api.purplepeopleeater.co.uk/wp-json/wp/v2/users/register",
          this.user
        )
        .then(() => {
          this.$router.push({
            name: "auth",
            params: { email: this.user.email }
          });
        })
        .catch(error => {
          //console.log(error);
          this.isError = true;
          this.message =
            "Username already exists, please enter another username";
        });
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    }
  }
};
</script>
