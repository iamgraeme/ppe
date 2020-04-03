<template>
  <div>
    <div>
      <div v-if="isLoading" class="h-64 flex justify-center items-center">
        <Loader />
      </div>
      <div v-else>
        <div class="relative h-image">
          <div class="absolute w-1/2 overflow-hidden">
            <img
              :src="currentProduct.images[0].src"
              class="w-full h-image object-cover object-center"
            />
          </div>
          <div>
            <ProductInfo />
          </div>
        </div>
        <Cta
          :title="currentProduct.name"
          :body="currentProduct.description"
          :imageUrl="currentProduct.acf.mattress_cutout_image ? currentProduct.acf.mattress_cutout_image : currentProduct.images[1].src"
          :imageUrlAlt="currentProduct.acf.mattress_cutout_image ? currentProduct.acf.mattress_cutout_image : currentProduct.images[2].src"
        />
        <ReviewsSection :productId="currentProduct.id" />
      </div>

      <div class="py-24 border-t border-gray-300">
        <ProductSlider title="Our Bestead Range" />
      </div>
    </div>
    <Modal productType="ottoman" v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import SocialIcons from "@/components/SocialIcons";
import Loader from "@/components/Loader";
import ReviewForm from "@/components/ReviewForm";
import Modal from "@/components/Modal";
import ProductSlider from "@/components/Upsells/ProductSlider";
import ReviewsSection from "@/components/ReviewsSection";
import Cta from "@/components/Cta";
import ProductInfo from "@/components/ProductInfo";

import { mapGetters } from "vuex";
export default {
  transition: "slide-fade",
  data: () => ({
    isModalVisible: false,
    tempcart: [],
    item: {
      qty: 1,
      bedsize: "",
      price: ""
    }
  }),
  computed: {
    ...mapGetters("products", ["isLoading", "currentProduct"])
  },
  head: () => ({
    title: "Purple People Eater"
  }),
  components: {
    PageHeading,
    Modal,
    ProductSlider,
    SocialIcons,
    Cta,
    Loader,
    ReviewForm,
    ReviewsSection,
    ProductInfo
  },
  methods: {
    scrollTo(element) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop
      });
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    try {
      await this.$store
        .dispatch("products/getCurrentProduct", id)
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      throw error;
    }
  }
};
</script>

<style>
</style>
