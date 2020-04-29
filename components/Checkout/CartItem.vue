<template>
  <div class="flex justify-between p-10">
    <div class="flex flex-col mx-auto text-center items-startw sm:flex-row sm:text-left sm:mx-0">
      <div class="w-24 h-24 mb-6 mr-0 overflow-hidden sm:mr-3 sm:mb-0">
        <div v-if="item.images.length > 0">
          <img :src="item.images[0].src" :alt="item.name" />
        </div>
      </div>
      <div>
        <h4 class="text-sm font-semibold text-gray-500 lg:text-lg">{{ item.name }}</h4>
      </div>
    </div>
    <div class="hidden sm:block">
      <p
        class="text-sm font-semibold text-gray-500 lg:text-lg"
      >{{ parseInt(item.price) | renderPrice }}</p>
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
