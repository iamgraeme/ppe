<template>
  <h1
    class="px-6 sm:px-0 font-thin text-gray-600 text-2xl lg:text-3xl my-2 sm:my-4 lg:my-10"
  >{{ title | transformUpperCase }}</h1>
</template>

<script>
export default {
  name: "PageHeading",
  props: {
    title: String
  },
  filters: {
    transformUpperCase(value) {
      let str = value.toLowerCase();
      str = str.split(" ");

      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }

      return str.join(" ");
    }
  }
};
</script>
