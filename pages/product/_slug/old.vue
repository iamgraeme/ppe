<template>
  <div>
    <div v-if="isLoading" class="flex items-center justify-center h-64">
      <Loader />
    </div>
    <div v-else>
      <div class="grid-container">
        <div class="photo">
          <div v-if="currentProduct.images.length > 0">
            <div>
              <no-ssr>
                <carousel items="1" autoplay="true" :dots="true" :nav="false">
                  <img
                    v-for="image in currentProduct.images"
                    :key="image.id"
                    :src="image.src"
                    class="object-cover object-center w-full"
                  />
                </carousel>
              </no-ssr>
            </div>
          </div>
          <div v-else>
            <div class="flex items-center justify-center w-full">
              <p>image coming soon</p>
            </div>
          </div>
        </div>
        <div class="thumbs">
          <div class="hidden bg-white md:grid">
            <img
              v-for="image in currentProduct.images"
              class="object-cover object-center h-30"
              :key="image.id"
              :src="image.src"
            />
          </div>
        </div>
        <div class="product-info">
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
        <ReviewsSection :productId="currentProduct.id" />
      </div>
    </div>

    <div class="py-24 border-t border-gray-300">
      <ProductSlider title="Our Bestead Range" catNumber="18" />
    </div>
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
    isLoading: true,
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
      await this.$store.dispatch("products/getCurrentProduct", id);
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
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "Photo Photo Photo Product-Info Product-Info"
    "Photo Photo Photo Product-Info Product-Info"
    "thumbs thumbs thumbs Product-Info Product-Info";
}
.photo {
  grid-area: Photo;
}
.thumbs {
  grid-area: thumbs;
}
.product-info {
  background: #000;
  grid-area: Product-Info;
}
</style>