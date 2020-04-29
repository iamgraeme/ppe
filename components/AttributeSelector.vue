<template></template>

<script>
export default {
  async mounted() {
    try {
      const vars = this.variations;
      this.variations = vars;
      this.getAttributes();
    } catch (error) {
      console.log(error);
    }
  },
  data: () => ({
    isLoading: true,
    variations: this.variations,
    attributes: this.attributes
  }),
  props: {
    attributes: Object,
    variations: Object
  },
  methods: {
    getAttributes() {
      let newAttributes = [];
      let newOptions = [];
      this.variations.map(variation => {
        variation.attributes.map(variation_attribute => {
          //CHECK IF ATTRIBUTE EXISTS
          const attributes = newAttributes.filter(
            attribute => variation_attribute.name == attribute
          );
          if (attributes.length == 0) {
            newAttributes.push(variation_attribute.name);
          }
          //CHECK IF OPTION EXISTS
          const options = newOptions.filter(option => {
            if (option.key == variation_attribute.name) {
              return option.value == variation_attribute.option;
            }
          });
          if (options.length == 0) {
            newOptions.push({
              key: variation_attribute.name,
              value: variation_attribute.option
            });
          }
        });
      });

      this.attributes = newAttributes;
      this.options = newOptions;
    }
  }
};
</script>

<style>
</style>