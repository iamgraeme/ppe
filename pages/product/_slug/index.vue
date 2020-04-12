<template>
  <div>
    <div>
      <div v-if="isLoading" class="flex items-center justify-center h-64">
        <Loader />
      </div>
      <div v-else>
        <div class="relative h-image">
          <div class="absolute w-7/12 overflow-hidden">
            <div v-if="currentProduct.images.length > 0">
              <div class="relative z-10">
                <div class="flex flex-col flex-1">
                  <no-ssr>
                    <carousel items="1" autoplay="true" :dots="true" :nav="false">
                      <img
                        v-for="image in currentProduct.images"
                        :key="image.id"
                        :src="image.src"
                        class="object-cover object-center w-full h-image"
                      />
                    </carousel>
                  </no-ssr>
                </div>
                <div
                  class="relative z-50 items-center hidden grid-cols-8 gap-1 pt-1 -mt-24 bg-white md:grid"
                >
                  <img
                    v-for="image in currentProduct.images"
                    :key="image.id"
                    :src="image.src"
                    class="object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div v-else>
              <div class="flex items-center justify-center w-full h-image">
                <p>image coming soon</p>
              </div>
            </div>
          </div>
          <div>
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
      await this.$store
        .dispatch("products/getCurrentProduct", id)
        .catch(error => {
          console.log(error);
        });
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

<style></style>
