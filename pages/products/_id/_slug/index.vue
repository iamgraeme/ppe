<template>
  <div>
    <Breadcrumb />
    <div>
      <div v-if="isLoading" class="h-64 flex justify-center items-center">
        <Loader />
      </div>
      <div v-else>
        <div class="relative h-image">
          <div class="absolute w-1/2 overflow-hidden">
            <img :src="product.images[0].src" class="w-full h-image object-cover object-center" />
          </div>
          <div>
            <div class="w-full lg:w-1/2 absolute right-0 top-0 bg-gray-200 h-image opacity-75 z-10">
              <div class="px-16 pt-16 pb-32 w-full">
                <div class="flex items-center justify-between mb-3">
                  <h1 class="text-3xl">{{product.name}}</h1>
                  <StockStatus :stockStatus="product.stock_status" />
                </div>
                <div>
                  <h3 class="text-2xl text-purple-400 mb-3" v-html="product.price_html" />
                </div>
                <div>
                  <div class="py-3 border-t border-b border-gray-500 mb-6">
                    <ProductReviewIndicator :product="product" />
                  </div>
                  <div
                    v-html="product.description"
                    class="text-sm text-gray-500 leading-loose pb-6 border-b border-gray-500 mb-6"
                  ></div>
                  <AttributeSelector :productId="product.id" />
                  <AddToCart />
                </div>
              </div>
              <div
                class="w-full bg-purple-800 h-24 absolute bottom-0 left-0 px-16 flex items-center"
              >Icons</div>
            </div>
          </div>
        </div>
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
import StockStatus from "@/components/StockStatus";
import ProductSlider from "@/components/Upsells/ProductSlider";
import ReviewsSection from "@/components/ReviewsSection";
import AttributeSelector from "@/components/AttributeSelector";
import AddToCart from "@/components/AddToCart";
import ProductReviewIndicator from "@/components/ProductReviewIndicator";
import Breadcrumb from "@/components/Breadcrumb";

import { mapGetters } from "vuex";
import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";
import Cta from "@/components/Cta";
export default {
  transition: "slide-fade",
  data: () => ({
    product: {},
    isLoading: true,
    isModalVisible: false,
    tempcart: [],
    item: {
      qty: 1,
      bedsize: ""
    },
    computed: {
      ...mapGetters("users", ["loggedInUser", "isAuthenticated"])
    }
  }),
  head: () => ({
    title: "Purple People Eater"
  }),
  components: {
    AttributeSelector,
    AddToCart,
    PageHeading,
    Modal,
    ProductSlider,
    SocialIcons,
    ProductReviewIndicator,
    Cta,
    Loader,
    ReviewForm,
    StockStatus,
    ReviewsSection,
    Breadcrumb
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    scrollTo(element) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop
      });
    },
    cartAdd() {
      let cartItem = this.product;
      cartItem.quantity = this.item.qty;
      cartItem.bedsize = this.item.bedsize;
      this.tempcart.push(cartItem);
      this.$store.commit("addToCart", { ...cartItem });
    }
  },
  async created() {
    // this.title = this.$route.params.slug;
    const ck = "ck_8d450139382c5dc8293107cd7e3710c80ef962c1";
    const cs = "cs_40ab04189e95016e6b646d5ee5aae0a0801959e5";
    const url = `https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/${this.$route.params.id}`;

    console.log(url);
    const oauth = OAuth({
      consumer: {
        key: ck,
        secret: cs
      },
      signature_method: "HMAC-SHA1",
      hash_function: function(base_string, key) {
        return CryptoJS.enc.Base64.stringify(
          CryptoJS.HmacSHA1(base_string, key)
        );
      }
    });
    const requestData = {
      url,
      method: "GET",
      qs: {
        x_auth_access_type: "read_write"
      }
    };
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const response = await axios.get(
        requestData.url +
          "?" +
          jQuery.param(oauth.authorize(requestData), config)
      );

      const { data } = response;

      this.product = data;

      this.isLoading = false;

      console.log(response.data);
    } catch (error) {
      throw error;
    }
  }
};
</script>

<style>
</style>
