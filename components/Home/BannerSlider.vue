<template>
  <div>
    <div v-if="isLoading">
      <Loader />
    </div>
    <div class="mb-24 relative z-10" v-else>
      <no-ssr>
        <carousel items="1" :autoplay="true" :dots="false">
          <div
            v-for="slide in slides"
            :key="slide.id"
            class="relative z-10 flex items-center justify-start"
          >
            <div class="absolute w-full h-full bg-black opacity-25"></div>
            <img :src="slide.acf.image" :alt="slide.acf.banner_text" />
            <h2
              class="text-white w-1/3 font-bold text-6xl -mt-32 absolute ml-48 z-50"
            >{{ slide.acf.banner_text }}</h2>

            <nuxt-link class="absolute ml-48 z-50 mt-16" :to="slide.acf.banner_link">
              <span class="flex items-center">
                <svg
                  class="w-10 h-10 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="39"
                >
                  <circle data-name="Ellipse 48" cx="19.5" cy="19.5" r="19.5" fill="#dbc3fd" />
                  <path
                    d="M20.337 13.321l5.556 5.561L27 19.989l-1.107 1.108-5.556 5.553-1.107-1.1L24 20.772H11.664v-1.565H24l-4.77-4.776z"
                    fill="#fff"
                  />
                </svg>
                <p class="text-white hover:text-purple-400 uppercase font-semibold block">Shop Now</p>
              </span>
            </nuxt-link>
          </div>
        </carousel>
      </no-ssr>
      <div
        class="absolute bg-white w-9/12 h-32 bottom-0 left-0 z-10 rounded-tr-full hidden lg:flex items-center justify-start"
      >
        <div class="flex justify-evenly container mx-auto pl-16 pr-8">
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
