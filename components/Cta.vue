<template>
  <div class="hidden lg:flex cta items-center border-t border-b border-gray-300 mb-10 relative">
    <div class="container mx-auto">
      <div class="flex items-center">
        <div class="w-7/12 pr-6">
          <div v-if="title">
            <h2 class="text-3xl font-thin text-gray-600 mb-10">{{title}}</h2>
          </div>
          <div v-else>
            <h2 class="text-3xl font-thin text-gray-600 mb-10">Our Super Relief Mattress</h2>
          </div>
          <h2 class="text-3xl font-thin text-gray-600 mb-10">{{title}}</h2>
          <div v-if="body">
            <div class="leading-loose text-gray-600 mb-10" v-html="body"></div>
          </div>
          <div v-else>
            <p class="leading-loose text-gray-600 mb-10">
              A gorgeous thick layer of reflex foam with a layer of HD memory foam
              allowing the body to sink into the mattress. Relieving pressure on
              bones, joints and muscles whilst maximising life span of the
              mattress. It is supplied with a removable quilted dry cleanable
              cover and delivered rolled in a box for maximum convenience.
            </p>
          </div>
          <nuxt-link
            to="/category/19/mattresses"
            class="border border-gray-400 rounded-full text-gray-800 uppercase text-xs font-semibold py-2 px-4 hover:border-purple-400 hover:text-black"
          >More Info</nuxt-link>
        </div>
        <div class="w-5/12 absolute -right-20">
          <div v-if="imageUrl">
            <img :src="imageUrl" :alt="title" />
          </div>
          <div v-else>
            <img src="@/assets/images/mattress-hex-home.png" :alt="title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cta",
  props: {
    title: String,
    body: String,
    imageUrl: String
  }
};
</script>

<style scoped>
.cta {
  background: #fff url("~assets/images/hex-bg-home.svg") no-repeat -20%;
  height: 800px;
}
</style>
