<template>
  <div>
    <div v-if="isLoading">
      <Loader />
    </div>
    <div v-else>
      <div>
        <div>
          <div class="mb-2" v-if="filters.length > 0">
            <p class="mb-2 text-lg text-gray-600">Your Choices:</p>
            <ul class="option-list">
              <li
                v-for="item in filters"
                :key="item.key"
                class="mr-3 text-sm text-gray-600"
              >{{item.key + " : " + item.value}}</li>
            </ul>
          </div>
          <div>
            <fieldset v-for="attribute in attributes" :key="attribute.id" class="mb-2">
              <div class="mb-2 text-lg text-gray-600">{{ attribute }}</div>
              <div class="flex flex-wrap">
                <div v-for="option in options" :key="option.id" class="attributes">
                  <label v-if="option.key === attribute">
                    <input
                      type="radio"
                      :name="attribute | slugify"
                      :id="option.value | slugify"
                      :selected="isSelected(option)"
                      :disabled="isDisabled(option)"
                      @change="onVariationChange(option.key, option.value)"
                    />
                    <div
                      class="relative flex items-center justify-center w-10 h-10 mb-3 mr-3 bg-gray-400 hover:bg-gray-500 option"
                    >
                      <span
                        v-if="option.key === 'Bed Size'"
                        class="text-sm font-semibold"
                      >{{option.value | getAcronym}}</span>
                      <span class="tooltiptext">{{option.value}}</span>
                      <img
                        v-if="option.key === 'Fabric'"
                        :src="require(`../assets/images/colors/${option.value.replace(/\s+/g, '').toLowerCase()}.jpg`)"
                        :alt="option.value"
                      />
                    </div>
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
    onMatchFound() {},
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
  filters: {
    getAcronym(value) {
      const matches = value.match(/\b(\w)/g); // ['J','S','O','N']
      const acronym = matches.join(""); // JSON
      const stripped = acronym.replace(/[0-9]/g, "");
      return stripped;
    }
  },
  async mounted() {
    const id = this.productId;
    try {
      const pageOne = await api.get(
        `products/${id}/variations?per_page=100&page=1`
      );
      const pageTwo = await api.get(
        `products/${id}/variations?per_page=100&page=2`
      );
      this.variations = [...pageOne.data, ...pageTwo.data];
      this.isLoading = false;
    } catch (error) {
      throw error;
    } finally {
      this.getAttributes();
    }
  }
};
</script>

<style scoped>
[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
} /* IMAGE
STYLES */
[type="radio"] + .option {
  cursor: pointer;
} /* CHECKED STYLES */
[type="radio"]:checked + .option {
  outline: 1px solid rgba(0, 0, 0, 0.8);
}

.option .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  font-size: 13px;
  width: 130px;
  bottom: 120%;
  padding: 3px 5px;
  left: 50%;
  margin-left: -65px;
  position: absolute;
  z-index: 1;
}

.option .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
}

.option:hover .tooltiptext {
  visibility: visible;
}

.option-list li {
  padding-left: 34px;
  background: transparent
    url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwIDEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMCAxMWwyLTIgNSA1IDExLTExIDIgMiAtMTMgMTNaIiB0cmFuc2Zvcm09Im1hdHJpeCguNSAwIDAgLjUgMCAwKSIgZmlsbD0iIzdFRDMyMSI+PC9wYXRoPjwvc3ZnPg==)
    no-repeat center left;
  background-size: 16px;
}
</style>