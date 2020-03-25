<template>
  <div>
    <div>
      <div v-if="isLoading" class="h-64 flex justify-center items-center">
        <Loader />
      </div>
      <div v-else>
        <div class="lg:mt-16">
          <div class="bg-white md:hidden sticky top-0 relative z-20">
            <div class="container mx-auto flex justify-between items-center px-6 sm:px-0">
              <h1 class="text-3xl font-light text-gray-600 py-3 md:py-0">{{ product.name }}</h1>
              <div>
                <div v-if="product.sale_price" class="flex">
                  <p
                    class="text-3xl font-normal text-purple-800 mb-2 mr-3"
                  >£{{ product.regular_price }}.00</p>
                  <p
                    class="text-3xl font-normal text-gray-500 mb-2 line-through"
                  >£{{ product.sale_price }}.00</p>
                </div>
                <div v-else>
                  <p class="text-3xl font-normal text-purple-800 mb-2">£{{ product.price }}.00</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="container mx-auto flex pb-16 flex-col items-center md:items-start md:flex-row px-6 sm:px-0"
          >
            <div class="w-12/12 md:w-7/12 flex" v-if="product.images.length > 0">
              <div class="w-3/12 md:w-2/12 flex flex-col">
                <div class="mb-3" v-for="image in product.images" :key="image.id">
                  <img class="w-full pr-3 cursor-pointer" :src="image.src" :alt="image.name" />
                </div>
              </div>
              <div class="w-9/12 md:w-10/12 relative">
                <StockStatus
                  class="md:hidden absolute right-20 top-20"
                  :stockStatus="product.stock_status"
                />
                <img class="w-full md:pr-3" :src="product.images[0].src" :alt="product.name" />
              </div>
            </div>
            <div class="w-12/12 md:w-5/12 pl-3">
              <div class="hidden md:block">
                <div class="flex justify-between items-center">
                  <h1 class="text-3xl font-light text-gray-600 hidden md:block">{{ product.name }}</h1>
                  <StockStatus :stockStatus="product.stock_status" />
                </div>

                <div v-if="product.sale_price" class="flex">
                  <p
                    class="text-3xl font-normal text-purple-800 mb-2 mr-3"
                  >£{{ product.regular_price }}.00</p>
                  <p
                    class="text-3xl font-normal text-gray-500 mb-2 line-through"
                  >£{{ product.sale_price }}.00</p>
                </div>
                <div v-else>
                  <p class="text-3xl font-normal text-purple-800 mb-2" v-html="product.price_html"></p>
                </div>
              </div>
              <div class="border-t border-b border-gray-300 py-1 mb-2">
                <div class="flex items-center">
                  <div v-if="product.rating_count === 0 && product.reviews_allowed">
                    <a
                      href="#"
                      class="text-sm text-gray-500 hover:text-purple-800"
                      v-scroll-to="{
                        el: '#addReview',
                        duration: 300,
                        easing: 'linear',
                        force: true,
                        cancelable: true,
                        onStart: onStart,
                        onDone: onDone,
                        onCancel: onCancel,
                        x: false,
                        y: true
                      }"
                    >Write a Review?</a>
                  </div>
                  <div v-else class="flex items-center">
                    <a
                      href="#"
                      v-scroll-to="{
                        el: '#addReview',
                        duration: 300,
                        easing: 'linear',
                        force: true,
                        cancelable: true,
                        onStart: onStart,
                        onDone: onDone,
                        onCancel: onCancel,
                        x: false,
                        y: true
                      }"
                      class="text-sm mr-2 text-gray-500 mr-4 hover:text-purple-800"
                    >{{ product.rating_count | pluralize }}</a>
                    <span class="text-sm mr-2 text-gray-500">|</span>
                    <div class="flex items-center ml-4">
                      <p
                        class="text-sm mr-2 text-gray-500 font-semibold"
                      >{{ Math.round(product.average_rating * 100) / 100 }}/5</p>

                      <star-rating
                        :rating="product.average_rating"
                        active-color="#FFAE00"
                        :star-size="17"
                        :show-rating="false"
                        :padding="2"
                        increment="0.5"
                        :read-only="true"
                      ></star-rating>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div v-html="product.description" class="text-sm text-gray-500 leading-loose"></div>
              </div>
              <AttributeSelector :attributes="product.attributes" />
              <div class="border-t border-b border-gray-300 py-3 mb-2 mt-10">
                <div class="flex items-center justify-center">
                  <SocialIcons />
                </div>
              </div>
              <div class="flex mt-6">
                <div
                  class="border border-gray-200 flex justify-center items-center rounded-full py-3 overflow-hidden mr-6"
                >
                  <button
                    class="text-gray-500 px-4 focus:outline-none hover:text-gray-700"
                    @click="item.qty > 1 ? item.qty-- : (item.qty = 1)"
                  >-</button>
                  <input
                    type="number"
                    v-model="item.qty"
                    class="text-center w-16 text-gray-500 focus:outline-none"
                  />
                  <button
                    class="text-gray-500 px-4 focus:outline-none hover:text-gray-700"
                    @click="item.qty++"
                  >+</button>
                </div>
                <div class="flex flex-1">
                  <input
                    class="w-full bg-purple-800 hover:bg-purple-400 cursor-pointer rounded-full py-3 px-6 text-white focus:outline-none text-sm focus:shadow-outline"
                    type="submit"
                    @click="cartAdd"
                    value="Add to Cart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <Cta :title="product.name" :body="product.description" />
        </div>
        <ReviewsSection :productId="product.id" />
        <div
          id="addReview"
          class="w-12/12 lg:w-1/2 mx-auto pb-20 items-center flex flex-col px-6 lg:px-0"
        >
          <PageHeading title="Write a Review?" />
          <div v-if="isAuthenticated" class="w-full">
            <ReviewForm />
          </div>
          <div v-else>
            <p class="text-gray-400 mb-10">You need to be logged in to leave a review.</p>
            <nuxt-link
              to="/auth"
              class="bg-purple-800 block text-center mb-10 hover:bg-purple-400 rounded-full w-full py-3 px-6 text-white focus:outline-none focus:shadow-outline"
            >Log In</nuxt-link>
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
import StarRating from "vue-star-rating";
import { mapGetters } from "vuex";
import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";
import Cta from "@/components/Cta";
export default {
  transition: "slide-fade",
  // async asyncData ({ query, store }) {
  //   const { make, model, cardID } = query
  //   // Validate query params

  //   // fetch data from API
  //   try {
  //     const carDetails = await store.dispatch('getCardInfo', { make, model, cardID })
  //     return {
  //        cardDetails
  //     }
  //   } catch (error) {
  //     // Redirect to error page or 404 depending on server response
  //   }
  // },
  // head () {
  //   return {
  //     title: this.carDetails.title,
  //     meta: [
  //       { hid: 'og-title', property: 'og:title', content: this.carDetails.title },
  //       // other meta
  //     ]
  //   }
  // },
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
    PageHeading,
    Modal,
    ProductSlider,
    SocialIcons,
    StarRating,
    Cta,
    Loader,
    ReviewForm,
    StockStatus,
    ReviewsSection
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
/* input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


input[type="number"] {
  -moz-appearance: textfield;
}

[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}


[type="radio"] + img {
  height: 60px;
  padding: 10px;
  cursor: pointer;
  outline: 2px solid #999;
}


[type="radio"]:checked + img {
  outline: 2px solid #9f7aea;
}  */
</style>
