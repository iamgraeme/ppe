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
      <form @submit.prevent class="flex flex-col justify-center">
        <div class="w-full">
          <Label class="sr-only">Full Name</Label>
          <input
            placeholder="Full Name"
            class="mb-3 border text-gray-400 focus:outline-none focus:border-purple-400 rounded-full w-full py-3 px-6"
            type="text"
            v-model="name"
          />
        </div>
        <div class="w-full">
          <Label class="sr-only">Email Address</Label>
          <input
            placeholder="Email Address"
            class="mb-3 border text-gray-400 focus:outline-none focus:border-purple-400 rounded-full w-full py-3 px-6"
            type="email"
            v-model="email"
          />
        </div>
        <div class="w-full flex flex-col relative justify-center mb-20">
          <Label class="sr-only">Password</Label>
          <input
            placeholder="Password"
            class="mb-3 border text-gray-400 focus:outline-none focus:border-purple-400 rounded-full w-full py-3 px-6"
            :type="passwordFieldType"
            id="password"
            v-model="password"
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
import PageHeading from "@/components/PageHeading";
export default {
  transition: "slide-fade",
  data: () => ({
    name: "",
    email: "",
    password: "",
    passwordFieldType: "password"
  }),
  components: {
    PageHeading
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    }
  }
};
</script>
