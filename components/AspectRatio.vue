<template>
  <div class="relative w-full mb-3 overflow-hidden" :style="ratio | parseAspectRatio">
    <nuxt-link :to="{ name: 'product-slug', params: { slug: slug, id: id }}">
      <div class="absolute inset-0">
        <img class="object-cover w-full h-full" :src="image" :alt="altText" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "AspectRatio",
  props: {
    ratio: String,
    id: Number,
    altText: String,
    image: String,
    slug: String
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