<template>
  <div>
    <div>
      <div v-if="isLoading" class="h-64 flex justify-center items-center">
        <Loader />
      </div>
      <div class="lg:mt-16" v-else>
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
          <div class="w-12/12 md:w-7/12 flex">
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
              <h1 class="text-3xl font-light text-gray-600 hidden md:block">{{ product.name }}</h1>
              <StockStatus :stockStatus="product.stock_status" />

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
            <div class="border-t border-b border-gray-300 py-1 mb-2">
              <div class="flex items-center">
                <div v-if="product.rating_count === 0 && product.reviews_allowed">
                  <a href="#addReview" class="text-sm text-gray-500">Write a Review?</a>
                </div>
                <div v-else>
                  <span class="text-sm mr-2 text-gray-500">{{product.average_rating}}</span>
                  <span>
                    <img src="@/assets/images/starz.svg" :alt="product.average_rating" />
                  </span>
                  <a href="#addReview" class="text-sm text-gray-500">Write a Review?</a>
                </div>
              </div>
            </div>
            <div>
              <div v-html="product.description" class="text-sm text-gray-500 leading-loose"></div>
            </div>
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
                  @click="item.qty -= 1"
                >-</button>
                <input
                  class="text-center w-16 text-gray-500"
                  type="text"
                  min="1"
                  v-model="item.qty"
                />
                <button
                  class="text-gray-500 px-4 focus:outline-none hover:text-gray-700"
                  @click="item.qty += 1"
                >+</button>
              </div>
              <div>
                <input
                  class="bg-purple-800 hover:bg-purple-400 cursor-pointer rounded-full py-3 px-6 text-white focus:outline-none text-sm focus:shadow-outline"
                  type="submit"
                  value="Add to Cart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <Cta />
      </div>
      <div id="addReview" class="container mx-auto">
        <PageHeading title="Write a Review?" />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import SocialIcons from "@/components/SocialIcons";
import Loader from "@/components/Loader";
import StockStatus from "@/components/StockStatus";
import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";
import Cta from "@/components/Cta";
export default {
  head: () => ({
    title: "Purple People Eater"
  }),
  components: {
    PageHeading,
    SocialIcons,
    Cta,
    Loader,
    StockStatus
  },
  data: () => ({
    product: {},
    isLoading: true,
    item: {
      qty: 1
    }
  }),
  async created() {
    const ck = "ck_8d450139382c5dc8293107cd7e3710c80ef962c1";
    const cs = "cs_40ab04189e95016e6b646d5ee5aae0a0801959e5";
    const url = `https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/${this.$route.params.id}`;

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

<style lang="scss" scoped></style>
