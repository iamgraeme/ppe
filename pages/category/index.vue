<template>
  <div class="container mx-auto">
    <ProductCard
      v-for="product in products"
      productName="product.name"
      price="product.price"
      :key="product.id"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  components: {
    ProductCard
  },
  data: () => ({
    products: [
      {
        id: 1,
        name: "Product One",
        price: "1999.99"
      },
      {
        id: 2,
        name: "Product One",
        price: "1999.99"
      },
      {
        id: 3,
        name: "Product One",
        price: "1999.99"
      },
      {
        id: 4,
        name: "Product One",
        price: "1999.99"
      },
      {
        id: 5,
        name: "Product One",
        price: "1999.99"
      },
      {
        id: 6,
        name: "Product One",
        price: "1999.99"
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
