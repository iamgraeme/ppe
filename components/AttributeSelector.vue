<template>
  <div>
    <div v-if="isLoading">
      <Loader />
    </div>
    <div v-else>
      <select name="attribute" id="attribute" v-on:change="changePrice">
        <option
          v-for="attribute in attributes"
          :key="attribute.id"
          :value="attribute.price"
          v-html="attribute.description"
        />
      </select>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import { api } from "@/services/woocommerce";
export default {
  data: () => ({
    isLoading: true,
    attributes: {}
  }),
  components: {
    Loader
  },
  props: {
    productId: Number
  },
  methods: {
    changePrice(value) {
      this.$emit("changePrice", value);
    }
  },
  async mounted() {
    const productId = this.productId;

    await api
      .get(`products/${productId}/variations`)
      .then(response => {
        this.attributes = response.data;
        this.isLoading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>