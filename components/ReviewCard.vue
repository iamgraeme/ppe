<template>
  <div class="bg-white flex flex-col rounded-lg p-3 w-full mb-3">
    <div class="flex justify-between mb-3 items-center">
      <h5 class="text-lg font-semibold">{{reviewTitle}}</h5>
      <p class="text-xs font-semibold text-purple-800">{{reviewDate}}</p>
    </div>
    <div class="flex mb-3">
      <div class="flex-shrink-0 h-8 w-8 mr-3">
        <v-gravatar email="graemehouston@gmail.com" :size="160" />
      </div>
      <p class="text-gray-700 text-xs">
        <span class="italic font-serif">Review by</span>
        <br />Soda Water
      </p>
    </div>
    <star-rating
      :rating="5"
      active-color="#FFAE00"
      :star-size="17"
      :show-rating="false"
      :padding="2"
      increment="0.5"
      :read-only="true"
    />
    <div class="text-gray-700 mt-3 text-sm mb-3">
      <p
        class="mb-3"
      >I'm baby flannel migas cornhole kombucha celiac distillery 90's tousled. Lyft knausgaard iceland cred. Lo-fi quinoa plaid succulents flannel +1 literally truffaut. Hexagon waistcoat raw denim chillwave post-ironic etsy cliche tilde chia asymmetrical banjo woke franzen hoodie.</p>
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