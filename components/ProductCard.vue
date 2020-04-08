<template>
  <div class="relative">
    <div v-if="product.sale_price">
      <div
        class="absolute px-2 py-1 font-semibold text-white uppercase bg-purple-400 rounded-full text-xxs top-10 left-25"
      >Sale</div>
    </div>
    <AspectRatio
      ratio="4:3"
      :image="product.images[0].src"
      :altText="product.name"
      :id="product.id"
      :slug="product.slug"
    />
    <div>
      <nuxt-link :to="{ name: 'product-slug', params: { slug: product.slug, id: product.id }}">
        <h4 class="text-sm text-gray-600">{{ product.name }}</h4>
      </nuxt-link>

      <div>
        <div v-if="product.sale_price" class="flex">
          <p class="mr-3 text-lg text-purple-800">
            <span class="font-serif text-sm italic">From</span>
            {{ parseFloat(product.sale_price) | pound }}
          </p>
          <p
            class="text-lg text-gray-400 line-through"
          >{{ parseFloat(product.regular_price) | pound }}</p>
        </div>
        <div v-else>
          <p class="text-lg text-gray-600">
            <span class="font-serif text-sm italic">From</span>
            {{ parseFloat(product.price) | pound }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AspectRatio from "@/components/AspectRatio";
export default {
  name: "ProductCard",
  components: {
    AspectRatio
  },
  props: {
    product: Object
  }
};
</script>
