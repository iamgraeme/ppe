<template>
  <div>
    <MinimalHeader />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import MinimalHeader from "@/components/MinimalHeader";
import Footer from "@/components/Footer";
export default {
  components: {
    MinimalHeader,
    Footer
  }
};
</script>