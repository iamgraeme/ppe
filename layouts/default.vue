<template>
  <div class="relative">
    <no-ssr>
      <vue-snotify></vue-snotify>
    </no-ssr>
    <Header />
    <div class="px-6 mx-auto md:px-0">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
