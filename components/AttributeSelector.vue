<template>
  <div>
    <div v-if="isLoading">
      <Loader />
    </div>
    <div v-else>
      <div>
        <div>
          {{filters}}
          <div class="item__variations variation__table">
            <fieldset v-for="attribute in attributes" :key="attribute.id">
              <div class="text-lg text-gray-600">{{attribute}}</div>
              <div class="flex flex-wrap">
                <div v-for="option in options" :key="option.id">
                  <label v-if="option.key === attribute">
                    <input
                      type="radio"
                      :name="attribute | slugify"
                      :id="option.value | slugify"
                      @change="onVariationChange(option.key, option.value)"
                    />
                    <span class="text-xs text-gray-600">{{option.value}}</span>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import { api } from "@/services/woocommerce";
export default {
  data: () => ({
    isLoading: true,
    variations: [],
    attributes: [],
    options: [],
    filters: [],
    matches: []
  }),
  components: {
    Loader
  },
  props: {
    productId: Number
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
    },
    onVariationChange(key, value) {
      var newFilters = [];
      if (
        this.filters.length > 0 &&
        this.matches.filter(match => match == value).length == 0
      ) {
        newFilters = [];
      } else if (!(this.filters.length > 0 && this.filters[0].key == key)) {
        newFilters = this.filters.filter(filter => filter.key !== key);
      }

      newFilters = [{ key, value }, ...newFilters];

      this.filters = newFilters;

      this.findVariationWithFilters();
      this.updateVariationMatches();
      console.log(this.filters);
    },
    findVariationWithFilters() {
      this.onMatchFound(null);
      if (this.filters.length == this.attributes.length) {
        const variations = this.variations.filter(variation => {
          return (
            variation.attributes.filter(
              attribute =>
                this.filters.filter(
                  filter =>
                    attribute.name == filter.key &&
                    attribute.option == filter.value
                ).length >= 1
            ).length >= this.filters.length
          );
        });
        if (variations.length > 0) this.onMatchFound(variations);
      }
    },
    updateVariationMatches() {
      var newMatches = [];
      this.filters.map(filter => {
        this.variations.map(variation => {
          variation.attributes.map(attribute => {
            if (
              attribute.name == filter.key &&
              attribute.option == filter.value
            ) {
              variation.attributes.map(vattribute => {
                newMatches.push(vattribute.option);
              });
            }
          });
        });
      });
      this.matches = newMatches;
    },
    isDisabled(option) {
      if (this.filters.length == 1 && this.filters[0].key == option.key) {
        return false;
      }
      if (
        this.filters.length > 0 &&
        this.matches.filter(match => match == option.value).length > 0
      ) {
        return false;
      }
      if (this.filters.length == 0) {
        return;
        false;
      }
      return true;
    },
    isSelected(option) {
      if (
        this.filters.length > 0 &&
        this.filters.filter(
          filter => filter.key == option.key && filter.value == option.value
        ).length > 0
      ) {
        return true;
      }
      return false;
    }
  },
  async mounted() {}
};
</script>