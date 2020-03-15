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
            v-model="email"
          />
        </div>
        <input
          class="bg-purple-800 mb-10 hover:bg-purple-400 rounded-full w-full py-3 px-6 text-white focus:outline-none focus:shadow-outline"
          type="submit"
          value="Reset Password"
        />
      </form>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
export default {
  transition: "slide-fade",
  components: {
    PageHeading
  },
  data: () => ({
    email: ""
  })
};
</script>
