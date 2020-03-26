<template>
  <div class="bg-purple-100 border-b border-gray-300 pt-10 pb-10 mb-10">
    <PageHeading title="Reviews" class="text-center" />
    <div class="container mx-auto">
      {{productId}}
      <div class="flex flex-wrap -mx-2 overflow-hidden p-6 sm:p-0">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import ReviewCard from "@/components/ReviewCard";
import api from "@/services/woocommerce";
export default {
  name: "ReviewsSection",
  async created() {
    this.productId = this.productId;
    await this.$store.dispatch("reviews/getReviewsByProdId", 707).catch(err => {
      console.log(err);
    });
  },
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