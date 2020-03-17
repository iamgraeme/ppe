<template>
  <div>
    <div
      v-if="isError"
      class="bg-red-200 border border-red-600 text-red-600 rounded-full text-center font-bold w-full mx-auto py-2 mb-6"
    >{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    message: String,
    isError: Boolean
  }
};
</script>
