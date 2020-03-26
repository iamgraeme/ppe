<template>
  <div>
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <PageHeading :title="$route.params.slug" />
        <div class="flex items-center">
          <SortBy />
        </div>
      </div>
      <div>
        <!-- <Breadcrumb /> -->
      </div>
      <div v-if="isLoading" class="h-64 w-full flex justify-center items-center">
        <Loader />
      </div>
      <div class="flex flex-wrap -mx-2 overflow-hidden px-3 sm:px-0" v-else>
        <template v-for="product in getProducts">
          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            :key="product.id"
            v-if="product.catalog_visibility === 'visible'"
          >
            <ProductCard
              :productName="product.name"
              :image="product.images[0].src"
              :price="product.price"
              :id="product.id"
              :salePrice="product.sale_price"
              :slug="product.slug"
              noCarousel
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
import Loader from "@/components/Loader";
import SortBy from "@/components/SortBy";
import { mapGetters } from "vuex";
export default {
  transition: "slide-fade",
  components: {
    PageHeading,
    ProductCard,
    Breadcrumb,
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
