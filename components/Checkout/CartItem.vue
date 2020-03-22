<template>
  <div class="flex justify-between p-10">
    <div
      class="flex flex-col sm:flex-row items-center text-center sm:text-left mx-auto sm:mx-0"
    >
      <div class="w-24 h-24 overflow-hidden mr-0 sm:mr-3 mb-6 sm:mb-0">
        <div v-if="item.images.length > 0">
          <img :src="item.images[0].src" alt />
        </div>
      </div>
      <div>
        <h4 class="font-semibold text-gray-500 text-sm lg:text-lg">
          {{ item.name }}
        </h4>
        <div class="text-xs text-gray-500">WB03-M-Yellow</div>
        <div class="flex flex-col">
          <div>
            <div class="text-xs text-gray-500">Color: Yellow</div>
            <div class="text-xs text-gray-500">Size: M</div>
          </div>
          <div>
            <div class="text-xs text-gray-500">Qty 1</div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden sm:block">
      <p class="font-semibold text-gray-500 text-sm lg:text-lg">
        {{ parseInt(item.price) | renderPrice }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: Object
  },
  filters: {
    renderPrice(value) {
      return value.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP"
      });
    }
  }
};
</script>
