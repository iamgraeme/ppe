<template>
  <div>
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <PageHeading :title="$route.params.slug" />
        <div class="flex items-center">
          <SortBy />
        </div>
      </div>
      <div v-if="isLoading" class="flex items-center justify-center w-full h-64">
        <Loader />
      </div>
      <div v-else>
        <div class="grid grid-cols-1 gap-6 mb-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <template v-for="product in getProducts">
            <div
              class="w-full overflow-hidden"
              :key="product.id"
              v-if="product.catalog_visibility === 'visible'"
            >
              <ProductCard :product="product" />
            </div>
          </template>
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
import { mapGetters } from "vuex";
export default {
  transition: "slide-fade",
  components: {
    PageHeading,
    ProductCard,
    Loader,
    SortBy
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
