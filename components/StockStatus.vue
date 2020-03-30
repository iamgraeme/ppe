<template>
  <div>
    <div
      v-if="stockStatus === 'instock'"
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-600 text-white border border-green-800 uppercase"
    >In Stock</div>
    <div
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-600 text-white border border-red-800 uppercase"
      v-else
    >Out of Stock</div>
  </div>
</template>

<script>
export default {
  name: "StockStatus",
  props: {
    stockStatus: String
  }
};
</script>