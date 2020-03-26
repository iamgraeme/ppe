<template>
  <div class="relative mb-10">
    <div v-if="salePrice">
      <div
        class="absolute bg-purple-400 text-white rounded-full text-xxs uppercase top-10 left-25 font-semibold py-1 px-2"
      >Sale</div>
    </div>

    <div class="mb-6 w-full">
      <nuxt-link :to="'/products/' + id + '/' + slug" class>
        <img class="pr-1 sm:pr-3 w-full" :src="image" :alt="productName" />
      </nuxt-link>
    </div>
    <div>
      <nuxt-link :to="'/products/' + id + '/' + slug">
        <h4 class="text-sm text-gray-600">{{ productName }}</h4>
      </nuxt-link>

      <div>
        <div v-if="salePrice" class="flex">
          <p class="text-lg mr-3 text-purple-800">{{ parseFloat(salePrice) | pound }}</p>
          <p class="text-lg text-gray-400 line-through">{{ parseFloat(price) | pound }}</p>
        </div>
        <div v-else>
          <p class="text-lg text-gray-600">
            <span class="text-sm italic font-serif">From</span>
            {{ parseFloat(price) | pound }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    image: String,
    id: Number,
    productName: String,
    price: String,
    salePrice: String,
    slug: String,
    noCarousel: Boolean
  }
};
</script>
