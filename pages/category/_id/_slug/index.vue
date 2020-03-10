<template>
  <div>
    <div class="container mx-auto">
      <PageHeading :title="$route.params.slug" />
      <div>
        <!-- <Breadcrumb /> -->
      </div>
      <div v-if="isLoading" class="h-64 w-full flex justify-center items-center">
        <Loader />
      </div>
      <div class="flex justify-start flex-wrap">
        <ProductCard
          v-for="product in products"
          :productName="product.name"
          :image="product.images[0].src"
          :price="product.regular_price"
          :id="product.id"
          :salePrice="product.sale_price"
          :slug="product.slug"
          :key="product.id"
          noCarousel
        />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
import Loader from "@/components/Loader";
import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

export default {
  components: {
    PageHeading,
    ProductCard,
    Breadcrumb,
    Loader
  },
  data: () => ({
    products: [],
    isLoading: true
  }),
  async created() {
    const ck = process.env.WOOCOMMERCE_KEY;
    const cs = process.env.WOOCOMMERCE_SECRET;
    const url = `http://35.178.124.91/wp-json/wc/v3/products?category=17`;

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

      this.products = data;

      this.isLoading = false;

      console.log(response.data);
    } catch (error) {
      throw error;
    }
  }
};
</script>
