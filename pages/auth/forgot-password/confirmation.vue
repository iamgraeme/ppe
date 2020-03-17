<template>
  <div class="container mx-auto bg-white mb-20">
    <div class="text-center w-1/2 mx-auto">
      <PageHeading class="mb-6 mt-10" title="Forgot Password Confirmation" />
      <p
        class="text-gray-600 mb-6"
      >Thanks for requesting a new password, if your password exists on our system you will recieve a password reset email to the email address you have provided.</p>

      <p class="text-gray-600 mb-6">
        Please check your
        <strong>spam</strong> inbox too!
      </p>

      <p class="text-gray-600 mb-6">
        If you didn't recieve an email within 10 minutes, please contact us at
        <a
          class="text-purple-800 hover:text-purple-400"
          href="mailto:info@purplepeopleeater.co.uk"
        >info@purplepeopleeater.co.uk</a>
      </p>
      <p class="text-gray-600 mb-6">
        To return back to the shop please
        <nuxt-link class="text-purple-800 hover:text-purple-400" to="/">Click Here</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
export default {
  transition: "slide-fade",
  components: {
    PageHeading
  }
};
</script>

<style lang="scss" scoped>
</style>