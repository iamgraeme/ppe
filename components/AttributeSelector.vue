<template>
  <div>
    <fieldset>
      <p class="mb-3 text-gray-700">Please Select Options</p>
      <div v-for="attribute in attributes" :key="attribute.id">
        <label class="flex items-center p-1 mb-1 cursor-pointer">
          <input class="mr-3" type="radio" name="size" :id="attribute.id" :value="attribute.price" />
          <span class="text-sm text-gray-700" v-html="attribute.description" />
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