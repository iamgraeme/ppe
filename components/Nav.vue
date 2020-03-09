<template>
  <nav class="flex items-center justify-between">
    <div v-if="isLoading">
      <div class="item mr-8"></div>
      <div class="item mr-8"></div>
      <div class="item mr-8"></div>
    </div>
    <div v-else>
      <nuxt-link
        class="text-purple-800 hover:text-purple-400 mr-10 text-lg font-semibold"
        v-for="category in categories"
        :key="category.id"
        :to="'/category/' + category.id + '/' + category.slug"
      >{{ category.name }}</nuxt-link>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

export default {
  name: "Nav",
  data: () => ({
    categories: [],
    isLoading: true
  }),
  async created() {
    const ck = "ck_3d7e6dc8e9f416e72a656375b366c70392bf31a9";
    const cs = "cs_1577824db5aa127f150af1963641363e3b2378c7";
    const url = "http://35.178.124.91/wp-json/wc/v2/products/categories";

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

      this.categories = data.filter(function(category) {
        return category.id !== 15;
      });

      this.isLoading = false;

      console.log(response.data);
    } catch (error) {
      throw error;
    }
  },
  methods: {},
  filters: {
    removeUncategoriesed(value) {
      value === "Uncategorized" ? null : value;
    }
  }
};
</script>

<style scoped>
.item {
  display: inline-block;
  background-color: #444;
  height: 12px;
  border-radius: 100px;
  min-width: 100px;
  opacity: 0.1;
  animation: fading 1.5s infinite;
}
@keyframes fading {
  0% {
    opacity: 0.1;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    opacity: 0.1;
  }
}
</style>
