<template>
  <div class="flex items-center mr-6 ">
    <img :src="image" class="mr-3" :alt="title" />
    <div>
      <p class=" text-gray-600 font-semibold text-sm xl:text-md">{{ title }}</p>
      <p class=" text-gray-600 text-sm xl:text-md">{{ subTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderInfoBlock",
  props: {
    title: String,
    subTitle: String,
    image: String
  }
};
</script>
