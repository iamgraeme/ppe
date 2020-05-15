<template>
  <div>
    <div v-if="isLoading" class="flex items-center justify-center h-64">
      <Loader />
    </div>
    <div v-else>
      <div class="parent">
        <div class="flex flex-col items-center div1">
          <div class="grid grid-rows-4 gap-5">
            <div
              class="w-48 h-48"
              v-for="image in currentProduct.images.slice(0,4)"
              :key="image.id"
            >
              <img class="object-cover object-center h-full" :src="image.src" />
            </div>
          </div>
        </div>
        <div class="div2">
          <div v-if="currentProduct.images.length > 0">
            <AspectRatioNoLink
              :image="currentProduct.images[0].src"
              :altText="currentProduct.name"
              ratio="1:1"
            />
          </div>
          <div v-else>
            <div class="flex items-center justify-center w-full">
              <p>image coming soon</p>
            </div>
          </div>
        </div>
        <div class="div3">
          <ProductInfo />
        </div>
      </div>
      <div v-if="currentProduct.images.length >= 1">
        <Cta
          :title="currentProduct.name"
          :body="currentProduct.description"
          :imageUrl="
              currentProduct.acf.mattress_cutout_image
                ? currentProduct.acf.mattress_cutout_image
                : currentProduct.images[0].src
            "
          :imageUrlAlt="
              currentProduct.acf.mattress_cutout_image
                ? currentProduct.acf.mattress_cutout_image
                : currentProduct.images[1].src
            "
        />
      </div>
      <ReviewsSection :productId="currentProduct.id" />
      <div class="py-24 border-t border-gray-300">
        <ProductSlider title="Our Bestead Range" catNumber="18" />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import AspectRatioNoLink from "@/components/AspectRatioNoLink";
import ProductInfo from "@/components/ProductInfo";
import ProductSlider from "@/components/Upsells/ProductSlider";
import ReviewsSection from "@/components/ReviewsSection";
import Cta from "@/components/Cta";

import { mapGetters } from "vuex";
export default {
  components: {
    ProductInfo,
    AspectRatioNoLink,
    Loader,
    Cta,
    ReviewsSection,
    ProductSlider
  },
  transition: "slide-fade",
  data: () => ({
    isModalVisible: false,
    tempcart: [],
    isLoading: true,
    item: { qty: 1, bedsize: "", price: "" }
  }),
  computed: { ...mapGetters("products", ["currentProduct"]) },
  head: () => ({ title: "Purple People Eater" }),
  async mounted() {
    const slug = this.$route.params.slug;
    try {
      await this.$store.dispatch("products/getCurrentProduct", slug);
    } catch (error) {
      throw error;
    }
    window.setInterval(() => {
      this.isLoading = false;
    }, 1500);
  },
  destroyed() {
    this.$store.dispatch("products/resetProduct").catch(err => {
      console.log("err");
    });
  }
};
</script>

<style>
.parent {
  min-height: 820px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.div1 {
  grid-area: 1 / 1 / 6 / 2;
}
.div2 {
  grid-area: 1 / 2 / 6 / 6;
  margin-right: 8px;
}
.div3 {
  grid-area: 1 / 6 / 6 / 9;
}
@media (max-width: 1024px) {
  .parent {
    display: flex;
    flex-direction: column;
  }
  .div1 {
    display: none;
  }
}
</style>