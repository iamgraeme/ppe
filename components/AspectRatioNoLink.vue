<template>
  <div class="relative w-full mb-3 overflow-hidden" :style="ratio | parseAspectRatio">
    <div class="absolute inset-0">
      <img class="object-cover w-full h-full" :src="image" :alt="altText" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AspectRatioNoLink",
  props: {
    ratio: String,
    altText: String,
    image: String
  },
  filters: {
    parseAspectRatio(value) {
      const padding = value
        .split(":")
        .reduce((first, second) => second / first);

      return `padding-bottom: ${padding * 100}%`;
    }
  }
};
</script>