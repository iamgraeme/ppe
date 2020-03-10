<template>
  <div class="flex items-center mb-6">
    <span
      class="w-8 h-8 mr-3 rounded-full flex justify-center items-center text-white bg-purple-800"
    >{{number}}</span>
    <h3 class="font-semibold text-gray-600 text-lg lg:text-xl">{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: "SectionHeading",
  props: {
    number: String,
    title: String
  }
};
</script>