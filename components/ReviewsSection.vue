<template>
  <div class="py-10 bg-purple-100">
    <PageHeading title="Reviews" class="text-center" id="addReview" />
    <div class="container mx-auto">
      <div class="flex">
        <div class="w-full mx-auto lg:w-1/2">
          <h4 class="mb-6 text-2xl font-thin text-center text-gray-600">What Our Customers Say...</h4>

          <no-ssr>
            <carousel items="1" autoplay="true" :dots="true" :nav="false">
              <Quote
                name="Brandon Walker"
                body="Purple People Eater have a great selection of beds and matresses. Delivery was quick. Customer service second to none. Definetly recommending these guys to friends and family."
                location="Manchester, UK"
                image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              />
              <Quote
                name="Lizzy Smith"
                body="Purple People Eater have a great selection of beds and matresses. Delivery was quick. Customer service second to none. Definetly recommending these guys to friends and family."
                location="Glasgow, UK"
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
              <Quote
                name="Franc Guillemot"
                body="Purple People Eater have a great selection of beds and matresses. Delivery was quick. Customer service second to none. Definetly recommending these guys to friends and family."
                location="London, UK"
                image="https://images.unsplash.com/photo-1544098485-2a2ed6da40ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
            </carousel>
          </no-ssr>
          <div class="w-full p-8">
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
import Quote from "@/components/Checkout/Quote";
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
    Quote,
    PageHeading,
    ReviewForm
  },
  props: {
    productId: Number
  }
};
</script>