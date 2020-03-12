<template>
  <div>
    <div class="h-1 bg-purple-500"></div>
    <div class="border-b border-gray-300 py-6">
      <div class="flex container mx-auto justify-between items-center text-gray-500">
        <div>
          <nuxt-link class="hover:text-purple-800" to="/">Back to Shop?</nuxt-link>
        </div>
        <div>
          <Logo />
        </div>
        <div>
          <a class="hover:text-purple-800" href>Account Login</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  components: {
    Logo
  }
};
</script>