<template>
  <div class="w-full">
    <PageHeading title="Your Account" />
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
export default {
  layout: "user",
  middleware: "auth",
  transition: "slide-fade",
  components: {
    PageHeading
  }
};
</script>
