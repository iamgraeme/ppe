<template>
  <div class="container mx-auto bg-white mb-20">
    <div class="text-center w-1/2 mx-auto">
      <PageHeading class="mb-6 mt-10" title="Contact Us" />
      <p class="text-gray-400 mb-10">
        Please enter the following information to create your account. Creating
        an account allows you to track your orders and checkout more
        efficiently.
      </p>
      <input
        type="text"
        placeholder="Name"
        class="mb-3 border border-gray-400 rounded-lg w-full py-3 px-6 focus:outline-none focus:border-purple-400"
      />
      <input
        type="text"
        placeholder="Email"
        class="mb-3 border border-gray-400 rounded-lg w-full py-3 px-6 focus:outline-none focus:border-purple-400"
      />
      <input
        type="text"
        placeholder="Subject"
        class="mb-3 border border-gray-400 rounded-lg w-full py-3 px-6 focus:outline-none focus:border-purple-400"
      />
      <textarea
        placeholder="Your Message"
        rows="6"
        class="mb-3 border border-gray-400 rounded-lg w-full py-3 px-6 focus:outline-none focus:border-purple-400 resize-none"
      ></textarea>
      <input
        type="submit"
        value="Send Message"
        class="bg-purple-800 mb-10 hover:bg-purple-400 rounded-lg w-full py-3 px-6 text-white focus:outline-none focus:shadow-outline"
      />
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
