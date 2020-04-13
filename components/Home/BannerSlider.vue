<template>
  <div>
    <div v-if="isLoading">
      <div class="relative">
        <div class="absolute left-0 z-10 w-full g-white h-image">
          <div class="w-full h-full bg-gray-100"></div>
          <div
            class="absolute bottom-0 left-0 z-10 items-center justify-start hidden w-9/12 h-32 bg-white rounded-tr-full lg:flex"
          >
            <div class="container flex pl-16 pr-8 mx-auto justify-evenly">
              <SliderInfoBlock
                v-for="block in infoBlocks"
                :key="block.id"
                :title="block.title"
                :subTitle="block.subTitle"
                :image="block.image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative z-10 mb-6 md:mb-12 lg:mb-24" v-else>
      <no-ssr>
        <carousel items="1" :autoplay="true" :dots="false">
          <div
            v-for="slide in slides"
            :key="slide.id"
            class="relative z-10 flex items-center justify-start"
          >
            <div class="absolute w-full h-full bg-black opacity-10"></div>
            <img :src="slide.acf.image" :alt="slide.acf.banner_text" />
            <div class="absolute z-50 hidden ml-16 sm:block lg:-mt-20 lg:ml-32">
              <h2
                class="w-1/2 mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl"
              >{{ slide.acf.banner_text }}</h2>

              <nuxt-link :to="slide.acf.banner_link">
                <span class="flex items-center">
                  <svg
                    class="w-10 h-10 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="39"
                  >
                    <circle data-name="Ellipse 48" cx="19.5" cy="19.5" r="19.5" fill="#F7931E" />
                    <path
                      d="M20.337 13.321l5.556 5.561L27 19.989l-1.107 1.108-5.556 5.553-1.107-1.1L24 20.772H11.664v-1.565H24l-4.77-4.776z"
                      fill="#fff"
                    />
                  </svg>
                  <p class="block font-semibold text-white uppercase hover:text-purple-400">Shop Now</p>
                </span>
              </nuxt-link>
            </div>
          </div>
        </carousel>
      </no-ssr>
      <div
        class="absolute bottom-0 left-0 z-10 items-center justify-start hidden w-9/12 h-32 bg-white rounded-tr-full lg:flex"
      >
        <div class="container flex pl-16 pr-8 mx-auto justify-evenly">
          <SliderInfoBlock
            v-for="block in infoBlocks"
            :key="block.id"
            :title="block.title"
            :subTitle="block.subTitle"
            :image="block.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader";
import SliderInfoBlock from "@/components/Home/SliderInfoBlock";
export default {
  name: "BannerSlider",
  components: {
    Loader,
    SliderInfoBlock
  },
  data: () => ({
    slides: [],
    isLoading: true,
    infoBlocks: [
      {
        id: 1,
        title: "Free Delivery",
        subTitle: "On all purchases. 7 days maximum on delivery.",
        image:
          "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/free-shipping.png"
      },
      {
        id: 2,
        title: "Satisfaction Guaranteed",
        subTitle: "Our cutomers' opinions speak for themselves!",
        image:
          "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/customer-satisfaction.png"
      },
      {
        id: 3,
        title: "Supporting UK Craftsmen",
        subTitle: "Built & upholstered by craftsmen in the UK.",
        image:
          "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/made-in-uk.png"
      }
    ]
  }),
  async created() {
    const response = await axios.get(
      "https://api.purplepeopleeater.co.uk/wp-json/wp/v2/banners"
    );
    const { data } = response;
    this.slides = data;
    this.isLoading = false;
  }
};
</script>

<style scoped>
.banner {
  min-width: 1440px;
  animation: 0.8s appear;
}

@keyframes appear {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
