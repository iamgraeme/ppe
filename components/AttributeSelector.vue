<template>
  <div>
    <h4 class="text-lg font-light text-gray-600 mt-10 mb-6">Product Options & Information</h4>
    {{getProductsAttributes}}
    <div v-for="meh in getProductsAttributes" :key="meh.id">{{meh.id}}</div>
    <div
      v-for="attribute in attributes"
      :key="attribute.id"
      class="flex justify-between items-center py-3 border-t border-gray-300 text-gray-600 text-sm"
    >
      <div class="w-1/4">{{attribute.name}}</div>
      <div v-for="option in attribute.options" :key="option">
        <div v-if="attribute.options.length > 1"></div>
        <div v-else>{{option}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AttributeSelector",
  props: {
    attributes: Object
  },
  computed: {
    ...mapGetters("produts", ["getProductsAttributes"])
  },
  async mounted() {
    const id = this.$route.params.id;
    try {
      await this.$store
        .dispatch("products/getProductsAttributesById", id)
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      throw error;
    }
  }
};
</script>