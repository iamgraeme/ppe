<template>
  <div>
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <PageHeading :title="$route.params.slug" />
        <div v-if="getProducts.length > 0">
          <div class="flex items-center">
            <SortBy />
          </div>
        </div>
      </div>
      <div v-if="isLoading">
        <div class="grid grid-cols-1 gap-6 mb-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      </div>
      <div v-else>
        <div v-if="getProducts.length > 0">
          <div class="grid grid-cols-1 gap-6 mb-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <template v-for="product in getProducts">
              <div
                class="w-full overflow-hidden"
                :key="product.id"
                v-if="product.catalog_visibility === 'visible'"
              >
                <ProductCard :product="product" ratio="4:3" />
              </div>
            </template>
          </div>
        </div>
        <div v-else>
          <div class="flex items-center justify-center h-64">
            <h3
              class="text-lg font-light text-gray-500"
            >Sorry, there are currently no products in this category.</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import ProductCard from "@/components/ProductCard";
import Loader from "@/components/Loader";
import SortBy from "@/components/SortBy";
import LoadingCard from "@/components/Loading/LoadingCard";
import { mapGetters } from "vuex";
export default {
  transition: "slide-fade",
  components: {
    PageHeading,
    ProductCard,
    Loader,
    SortBy,
    LoadingCard
  },

  computed: {
    ...mapGetters("products", ["getProducts"])
  },

  data: () => ({
    pageTitle: "",
    isLoading: true
  }),
  async mounted() {
    const id = this.$route.params.id;
    try {
      await this.$store
        .dispatch("products/productsCategoryId", id)
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      throw error;
    }

    window.setInterval(() => {
      this.isLoading = false;
    }, 1500);
  },
  destroyed() {
    this.$store.dispatch("products/resetCategory").catch(error => {
      console.log(error);
    });
  },

  methods: {},

  head() {
    return {
      title: "Purple People Eater",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  }
};
</script>
