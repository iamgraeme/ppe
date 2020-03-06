<template>
  <div>
    <div class="container mx-auto">
      <PageHeading :title="$route.params.slug" />
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
export default {
  components: {
    PageHeading
  }
};
</script>
