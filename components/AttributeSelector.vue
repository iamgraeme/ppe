<template>
  <div>
    <fieldset>
      <div v-for="attribute in attributes" :key="attribute.id">
        <label>
          <input type="radio" name="size" :id="attribute.id" :value="attribute.price" />
          <span v-html="attribute.description" />
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { api } from "@/services/woocommerce";
export default {
  data: () => ({
    attributes: {}
  }),
  props: {
    productId: Number
  },
  methods: {},
  async mounted() {
    const productId = this.productId;

    await api.get(`products/${productId}/variations`).then(response => {
      console.log("from attributes selector", response.data);
      this.attributes = response.data;
    });
  }
};
</script>