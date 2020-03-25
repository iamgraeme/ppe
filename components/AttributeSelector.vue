<template>
  <div>
    <h4 class="text-lg font-light text-gray-600 mt-10 mb-6">Product Options & Information</h4>
    <div
      v-for="attribute in attributes"
      :key="attribute.id"
      class="flex justify-between items-center py-3 border-t border-gray-300 text-gray-600 text-sm"
    >
      <div class="w-1/4">{{attribute.name}}</div>
      <div v-for="option in attribute.options" :key="option">
        <div v-if="attribute.options.length > 1">
          <label class="mr-3">
            <input type="radio" :value="option" name="bed-size" />
            {{option}}
          </label>
        </div>

        <div v-else>{{option}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttributeSelector",
  props: {
    attributes: Object
  },
  async mounted() {
    const id = this.$route.params.id;
    try {
      await this.$store
        .dispatch("products/getProductsAttributesById", 707)
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      throw error;
    }
  }
};
</script>