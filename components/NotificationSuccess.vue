<template>
  <div>
    <div
      v-if="message"
      class="bg-green-200 border border-green-600 text-green-600 rounded-full text-center font-bold w-full mx-auto py-2 mb-6"
    >Thanks for registering with us, you can now login with {{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    message: String
  }
};
</script>
