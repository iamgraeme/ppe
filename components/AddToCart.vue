<template>
  <div class="flex my-6">
    <div
      class="border border-gray-500 bg-white flex justify-center items-center rounded-full py-3 overflow-hidden mr-6"
    >
      <button
        class="text-gray-500 px-4 focus:outline-none hover:text-gray-700"
        @click="item.qty > 1 ? item.qty-- : (item.qty = 1)"
      >
        -
      </button>
      <input
        type="number"
        v-model="item.qty"
        class="text-center w-16 text-gray-500 focus:outline-none"
      />
      <button
        class="text-gray-500 px-4 focus:outline-none hover:text-gray-700"
        @click="item.qty++"
      >
        +
      </button>
    </div>
    <div class="flex flex-1">
      <input
        class="w-full bg-cta hover:bg-gray-700 cursor-pointer rounded-full py-3 px-6 text-white focus:outline-none text-sm focus:shadow-outline"
        type="submit"
        value="Add to Cart"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  data: () => ({
    item: {
      qty: 1,
    },
  }),
};
</script>
