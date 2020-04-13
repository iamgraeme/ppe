<template>
  <div class="container py-10 mx-auto">
    <div v-if="isLoading">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h3 class="text-lg text-gray-600 lg:text-2xl">{{title}}</h3>
        </div>
        <div>
          <nuxt-link
            to="#"
            class="px-4 py-2 text-xs font-semibold text-gray-800 uppercase border border-gray-400 rounded-full hover:border-purple-400 hover:text-black"
          >Show All</nuxt-link>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 mb-24 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
    <div v-else>
      <div class="flex items-center justify-between mb-6">
        <div>
          <h3 class="text-lg text-gray-600 lg:text-2xl">{{title}}</h3>
        </div>
        <div>
          <nuxt-link
            to="#"
            class="px-4 py-2 text-xs font-semibold text-gray-800 uppercase border border-gray-400 rounded-full hover:border-purple-400 hover:text-black"
          >Show All</nuxt-link>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 mb-24 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <ProductCard
          v-for="product in products.slice(0,4)"
          :key="product.id"
          :product="product"
          ratio="1:1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import LoadingCard from "@/components/Loading/LoadingCard";
import { api } from "@/services/woocommerce";
export default {
  name: "ProductSlider",
  components: {
    ProductCard,
    LoadingCard
  },
  props: {
    catNumber: Number,
    title: String,
    slug: String
  },
  data: () => ({
    products: [],
    isLoading: true
  }),
  async mounted() {
    const catId = this.catNumber;
    await api
      .get(`products?category=${catId}`)
      .then(response => {
        this.products = response.data;
        this.isLoading = false;
      })
      .catch(error => {
        console.log("Product Slider Error:", error);
      });
  }
};
</script>