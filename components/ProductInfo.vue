<template>
  <div class="w-full lg:w-1/2 absolute right-0 top-0 bg-gray-200 h-image opacity-75 z-10">
    <div class="px-16 pt-16 pb-32 w-full">
      <div class="flex items-center justify-between mb-3">
        <h1 class="text-3xl">{{currentProduct.name}}</h1>
        <StockStatus :stockStatus="currentProduct.stock_status" />
      </div>
      <div>
        <input
          disabled="disabled"
          class="text-2xl text-purple-400 mb-3 bg-transparent"
          v-on:changePrice="updatePrice"
          v-model="item.price"
        />
      </div>
      <div>
        <div class="py-3 border-t border-b border-gray-500 mb-6">
          <ProductReviewIndicator :product="currentProduct" />
        </div>
        <div
          v-html="currentProduct.description"
          class="text-sm text-gray-700 leading-loose pb-6 border-b border-gray-500 mb-6"
        ></div>
        <AttributeSelector :productId="currentProduct.id" />
        <AddToCart />
      </div>
    </div>
    <div class="w-full bg-purple-800 h-24 absolute bottom-0 left-0 px-16 flex items-center">Icons</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AttributeSelector from "@/components/AttributeSelector";
import AddToCart from "@/components/AddToCart";
import ProductReviewIndicator from "@/components/ProductReviewIndicator";
import StockStatus from "@/components/StockStatus";
export default {
  name: "ProductInfo",
  data: () => ({
    item: {
      qty: 1,
      bedsize: "",
      price: ""
    }
  }),
  async mounted() {
    this.item.price = this.currentProduct.price;
  },
  computed: {
    ...mapGetters("products", ["currentProduct"])
  },
  components: {
    StockStatus,
    AttributeSelector,
    AddToCart,
    ProductReviewIndicator
  },
  methods: {
    updatePrice: function(value) {
      alert(value);
    }
  }
};
</script>
