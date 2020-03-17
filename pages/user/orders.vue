<template>
  <div class="w-full">
    <PageHeading title="Orders" />
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
