<template>
  <nav class="flex items-center justify-between">
    <nuxt-link
      class="text-purple-800 hover:text-purple-400 mr-10 text-lg font-semibold"
      v-for="category in categories"
      :key="category.id"
      :to="'/category/' + category.id + '/' + category.slug"
    >{{ category.name }}</nuxt-link>
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
    categories: []
  }),
  async created() {
    const ck = "ck_867037a89995f3c21452a93e1d75b2b242b3c366";
    const cs = "cs_5b2a1f355a6f92335ac006f671ce4984a030de45";
    const url = "http://purple:8888/wp-json/wc/v2/products/categories";

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
