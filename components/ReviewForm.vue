<template>
  <div class="flex flex-col items-center w-full">
    <h4 class="font-thin text-gray-600 mb-6 text-2xl text-center">Write a Review</h4>
    <input
      class="border w-full rounded border-gray-300 focus:outline-none focus:border-purple-800 p-3 mb-3"
      type="text"
      placeholder="Full Name"
    />
    <input
      class="border w-full rounded border-gray-300 focus:outline-none focus:border-purple-800 p-3 mb-3"
      type="email"
      placeholder="Email"
    />
    <div
      class="flex justify-start items-center border w-full rounded border-gray-300 p-3 mb-3 bg-white"
    >
      <label class="text-gray-500 font-normal text-md mr-6" for="rating">Your rating:</label>
      <star-rating @rating-selected="setRating" active-color="#FFAE00" :star-size="24" :padding="2"></star-rating>
    </div>
    <input type="hidden" />
    <input
      class="border w-full rounded border-gray-300 focus:outline-none focus:border-purple-800 p-3 mb-3"
      type="text"
      placeholder="Review Title"
    />
    <textarea
      rows="10"
      placeholder="Write Your Review"
      class="border w-full border-gray-300 resize-none rounded-lg focus:outline-none focus:border-purple-800 p-3 mb-3"
    ></textarea>
    <input
      type="submit"
      value="Add Review"
      class="bg-purple-800 hover:bg-purple-400 text-white py-4 px-10 rounded-full"
    />
  </div>
</template>

<script>
import StarRating from "vue-star-rating/src/star-rating.vue";
export default {
  name: "ReviewForm",
  components: {
    StarRating
  },
  methods: {
    setRating: function(rating) {
      this.rating = rating;
    }
  },
  data: {
    rating: 0
  }
};
</script>
