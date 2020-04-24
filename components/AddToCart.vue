<template>
  <div class="flex my-6">
    <div
      class="flex items-center justify-center py-3 mr-6 overflow-hidden bg-white border border-gray-500 rounded-full"
    >
      <button
        class="px-4 text-gray-500 focus:outline-none hover:text-gray-700"
        @click="item.qty > 1 ? item.qty-- : (item.qty = 1)"
      >-</button>
      <input
        type="number"
        v-model="item.qty"
        class="w-16 text-center text-gray-500 focus:outline-none"
      />
      <button
        class="px-4 text-gray-500 focus:outline-none hover:text-gray-700"
        @click="item.qty++"
      >+</button>
    </div>
    <div class="flex flex-1">
      <input
        class="w-full px-6 py-3 text-sm text-white rounded-full cursor-pointer bg-cta hover:bg-gray-700 focus:outline-none focus:shadow-outline"
        type="submit"
        value="Add to Cart"
        @click="cartAdd"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  props: {
    product: Object
  },
  data: () => ({
    tempcart: [],
    item: {
      qty: 1
    }
  }),
  methods: {
    cartAdd() {
      let item = this.product;
      item.quantity = this.item.qty;
      this.tempcart.push(item);
      this.$store.commit("addToCart", { ...item });
    }
  }
};
</script>
