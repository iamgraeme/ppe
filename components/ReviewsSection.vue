<template>
  <div class="bg-purple-100 border-b border-gray-300 pt-10 pb-10 mb-10">
    <PageHeading title="Reviews" class="text-center" />
    <div class="container mx-auto">
      {{productId}}
      <div class="flex">
        <div class="flex flex-wrap -mx-2 overflow-hidden p-6 sm:p-0 w-1/2">
          <div class="p-8 w-full">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <div class="w-1/2 -mx-2 overflow-hidden">
          <div class="p-8 w-full">
            <ReviewForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "@/components/ReviewForm";
import api from "@/services/woocommerce";
export default {
  name: "ReviewsSection",
  async mounted() {
    const productId = this.productId;
    await this.$store
      .dispatch("reviews/getReviewsByProdId", parseInt(productId))
      .then((this.isLoading = false))
      .catch(err => {
        console.log(err);
      });
  },
  data: () => ({
    productId: "",
    isLoading: true
  }),
  components: {
    ReviewCard,
    PageHeading,
    ReviewForm
  },
  props: {
    productId: Number
  }
};
</script>