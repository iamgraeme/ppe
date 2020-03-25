<template>
  <div class="w-12/12 sm:w-6/12 lg:w-4/12 p-3">
    <div class="bg-white flex flex-col rounded-lg p-3 shadow">
      <div class="flex justify-between mb-3 items-center">
        <h5 class="text-lg font-semibold">{{reviewTitle}}</h5>
        <p class="text-xs font-semibold text-purple-800">{{reviewDate}}</p>
      </div>
      <div class="flex mb-3">
        <div class="flex-shrink-0 h-8 w-8 mr-3">
          <div v-if="loggedInUser">
            <v-gravatar :email="loggedInUser.email" :size="160" />
          </div>
        </div>
        <p class="text-gray-600 text-xs">
          <span class="italic font-serif">Review by</span>
          <br />
          {{customerName}}
        </p>
      </div>
      <star-rating
        :rating="reviewRating"
        active-color="#FFAE00"
        :star-size="17"
        :show-rating="false"
        :padding="2"
        increment="0.5"
        :read-only="true"
      />
      <div class="text-gray-600 mt-3 text-sm mb-3">
        <p class="mb-3">{{body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import Gravatar from "vue-gravatar";

export default {
  name: "ReviewCard",
  components: {
    StarRating,
    "v-gravatar": Gravatar
  },
  props: {
    reviewCount: Number,
    reviewTitle: String,
    reviewDate: String,
    reviewRating: Number,
    customerName: String,
    body: String
  }
};
</script>