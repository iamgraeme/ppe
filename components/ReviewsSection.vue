<template>
  <div class="bg-purple-100 border-b border-gray-300 pt-10 pb-20">
    <PageHeading title="Reviews" class="text-center" />
    <div class="container mx-auto w-12/12 flex flex-wrap">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import ReviewCard from "@/components/ReviewCard";
import api from "@/services/woocommerce";
export default {
  name: "ReviewsSection",
  data: () => ({
    productId: ""
  }),
  components: {
    ReviewCard,
    PageHeading
  },
  props: {
    productId: Number
  }
};
</script>