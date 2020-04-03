<template>
  <div class="hidden lg:flex cta items-center border-t border-b border-gray-300 relative">
    <div class="container mx-auto">
      <div class="flex items-center">
        <div class="w-6/12 pr-16">
          <div v-if="title">
            <h2 class="text-3xl font-thin text-gray-600 mb-10">{{title}}</h2>
          </div>
          <div v-else>
            <h2 class="text-3xl font-thin text-gray-600 mb-10">Our Super Relief Mattress</h2>
          </div>
          <div v-if="body">
            <div class="text-sm leading-loose text-gray-600 mb-10 description-cta" v-html="body"></div>
          </div>
          <div v-else>
            <p class="leading-loose text-gray-600 mb-10 text-sm">
              A gorgeous thick layer of reflex foam with a layer of HD memory foam
              allowing the body to sink into the mattress. Relieving pressure on
              bones, joints and muscles whilst maximising life span of the
              mattress. It is supplied with a removable quilted dry cleanable
              cover and delivered rolled in a box for maximum convenience.
            </p>
          </div>
          <button
            @click="showModal"
            class="text-white bg-gray-600 cursor-pointer hover:bg-purple-400 rounded-full focus:outline-none px-4 h-6"
          >Size Guide</button>
        </div>
        <div class="w-6/12 m-auto relative -top-20">
          <div v-if="imageUrl">
            <div>
              <img
                :src="imageUrl"
                :alt="title"
                class="cta-image object-cover object-center shadow-md"
              />
            </div>
            <div>
              <img
                :src="imageUrlAlt"
                :alt="title"
                class="cta-image-alt object-cover object-center shadow-md absolute w-64"
              />
            </div>
          </div>
          <div v-else>
            <img src="@/assets/images/mattress-hex-home.png" :alt="title" />
          </div>
        </div>
      </div>
    </div>
    <Modal productType="ottoman" v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  name: "Cta",
  components: {
    Modal
  },
  data: () => ({
    isModalVisible: false
  }),
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  props: {
    title: String,
    body: String,
    imageUrl: String,
    imageUrlAlt: String
  }
};
</script>

<style>
.cta {
  background: #fff url("~assets/images/hex-bg-home.svg") no-repeat -20%;
  height: 800px;
}
.cta .cta-image,
.cta .cta-image-alt {
  border: 14px solid #fff;
}
.cta .cta-image {
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  -ms-transform: rotate(5deg);
  -o-transform: rotate(5deg);
  transform: rotate(5deg);
}
.cta .cta-image-alt {
  -webkit-transform: rotate(-5deg);
  -moz-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  -o-transform: rotate(-5deg);
  transform: rotate(-5deg);
  right: -50px;
  bottom: -80px;
}
.description-cta p {
  margin-bottom: 10px;
}
</style>
