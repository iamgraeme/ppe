<template>
  <div>
    <h4 class="text-2xl font-semibold mb-3 text-purple-800">{{ title }}</h4>
    <p class="mb-4 text-gray-600">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "CheckoutInformation",
  props: {
    title: String,
    body: String
  }
};
</script>
