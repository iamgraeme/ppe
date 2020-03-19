<template>
  <div class="w-4/12 p-3">
    <div class="bg-white flex flex-col rounded-lg p-3 shadow">
      <div class="flex justify-between mb-3 items-center">
        <h5 class="text-lg font-semibold">Review Title</h5>
        <p class="text-xs font-semibold text-purple-800">23/03/2020</p>
      </div>
      <div class="flex mb-3">
        <div class="flex-shrink-0 h-8 w-8 mr-3">
          <img
            class="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt
          />
        </div>
        <p class="text-gray-600 text-xs">
          <span class="italic font-serif">Review by</span>
          <br />Graeme Houston
        </p>
      </div>
      <star-rating
        rating="4"
        active-color="#FFAE00"
        :star-size="17"
        :show-rating="false"
        :padding="2"
        increment="0.5"
        :read-only="true"
      />
      <div class="text-gray-600 mt-3 text-sm mb-3">
        <p
          class="mb-3"
        >Beard jianbing chia chambray readymade vegan man braid VHS mumblecore thundercats selvage. Neutra tbh chia twee.</p>
        <p
          class="mb-3"
        >VHS locavore drinking vinegar put a bird on it, godard organic master cleanse. Synth portland poke poutine venmo taxidermy hell of viral. Meditation vinyl messenger bag iceland slow-carb.</p>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating/src/star-rating";
export default {
  name: "ReviewCard",
  components: {
    StarRating
  },
  props: {
    reviewCount: Number,
    title: String,
    date: String,
    rating: Number,
    name: String,
    body: String
  }
};
</script>