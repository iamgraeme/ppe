<template>
  <div
    class="w-full lg:w-5/12 absolute right-0 top-0 bg-gray-200 h-image opacity-75 z-10"
  >
    <div class="px-16 pt-16 pb-32 w-full">
      <div class="flex items-center justify-between mb-3">
        <h1 class="text-3xl">{{ currentProduct.name }}</h1>
        <StockStatus :stockStatus="currentProduct.stock_status" />
      </div>
      <div>
        <div
          class="text-2xl text-purple-400 mb-3 bg-transparent"
          v-html="currentProduct.price_html"
        ></div>
      </div>
      <div>
        <div class="py-3 border-t border-b border-gray-500 mb-6">
          <ProductReviewIndicator :product="currentProduct" />
        </div>
        <div class="short-description">
          <div
            v-html="currentProduct.short_description"
            class="text-sm text-gray-700 leading-loose pb-6 border-b border-gray-500 mb-6"
          ></div>
        </div>
        <!-- <AttributeSelector :productId="currentProduct.id" /> -->
        <AddToCart />
      </div>
    </div>
    <div
      class="w-full bg-purple-800 h-24 absolute bottom-0 left-0 px-16 flex items-center"
    >
      Icons
    </div>
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
      price: "",
    },
  }),
  async mounted() {
    this.item.price = this.currentProduct.price;
  },
  computed: {
    ...mapGetters("products", ["currentProduct"]),
  },
  components: {
    StockStatus,
    AttributeSelector,
    AddToCart,
    ProductReviewIndicator,
  },
  methods: {
    updatePrice: function (value) {
      alert(value);
    },
  },
};
</script>
<style>
.short-description li {
  padding-left: 34px;
  background: transparent
    url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwIDEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMCAxMWwyLTIgNSA1IDExLTExIDIgMiAtMTMgMTNaIiB0cmFuc2Zvcm09Im1hdHJpeCguNSAwIDAgLjUgMCAwKSIgZmlsbD0iIzdFRDMyMSI+PC9wYXRoPjwvc3ZnPg==)
    no-repeat center left;
  background-size: 16px;
}
</style>
