<template>
  <div class="relative z-10 w-full h-full bg-gray-100">
    <div class="w-full px-16 pt-16 pb-32">
      <div class="flex items-center justify-between mb-3">
        <h1 class="text-3xl">{{ currentProduct.name }}</h1>
        <StockStatus :stockStatus="currentProduct.stock_status" />
      </div>
      <div>
        <div
          class="mb-3 text-2xl text-purple-400 bg-transparent"
          v-html="currentProduct.price_html"
        ></div>
      </div>
      <div>
        <div class="py-3 mb-6 border-t border-b border-gray-500">
          <ProductReviewIndicator :product="currentProduct" />
        </div>
        <div class="short-description">
          <div
            v-html="currentProduct.short_description"
            class="pb-6 mb-6 text-sm leading-loose text-gray-700 border-b border-gray-500"
          ></div>
        </div>
        <AddToCart />
      </div>
    </div>
    <div class="absolute bottom-0 left-0 flex items-center w-full px-16 bg-purple-800">Icons</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//import AttributeSelector from "@/components/AttributeSelector";
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
  computed: {
    ...mapGetters("products", ["currentProduct"])
  },
  components: {
    StockStatus,
    //AttributeSelector,
    AddToCart,
    ProductReviewIndicator
  }
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
