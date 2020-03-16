<template>
  <div>
    <div v-if="isLoading">
      <Loader />
    </div>
    <div class="mb-24 relative" v-else>
      <no-ssr>
        <carousel items="1" :autoplay="true" :dots="false">
          <img
            v-for="slide in slides"
            :key="slide.id"
            :src="slide.acf.image"
            :alt="slide.acf.banner_text"
          />
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
