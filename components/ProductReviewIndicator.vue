<template>
  <div class="flex items-center">
    <div v-if="product.rating_count === 0 && product.reviews_allowed">
      <a
        href="#"
        class="text-sm text-gray-700 hover:text-purple-800"
        v-scroll-to="{
                        el: '#addReview',
                        duration: 300,
                        easing: 'linear',
                        force: true,
                        cancelable: true,
                        onStart: onStart,
                        onDone: onDone,
                        onCancel: onCancel,
                        x: false,
                        y: true
                      }"
      >Write a Review?</a>
    </div>
    <div v-else class="flex items-center">
      <a
        href="#"
        v-scroll-to="{
                        el: '#addReview',
                        duration: 300,
                        easing: 'linear',
                        force: true,
                        cancelable: true,
                        onStart: onStart,
                        onDone: onDone,
                        onCancel: onCancel,
                        x: false,
                        y: true
                      }"
        class="text-sm mr-2 text-gray-500 mr-4 hover:text-purple-800"
      >{{ product.rating_count | pluralize }}</a>
      <span class="text-sm mr-2 text-gray-500">|</span>
      <div class="flex items-center ml-4">
        <p
          class="text-sm mr-2 text-gray-500 font-semibold"
        >{{ Math.round(product.average_rating * 100) / 100 }}/5</p>

        <star-rating
          :rating="product.average_rating"
          active-color="#FFAE00"
          :star-size="17"
          :show-rating="false"
          :padding="2"
          increment="0.5"
          :read-only="true"
        ></star-rating>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "ProductReviewIndicator",
  props: {
    product: Object
  },
  components: {
    StarRating
  }
};
</script>