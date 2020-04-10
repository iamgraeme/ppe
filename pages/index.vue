<template>
  <div>
    <BannerSlider />
    <ProductSlider title="Our Bedstead Range" :catNumber="18" />
    <Cta />
    <SalePoints />
    <ProductSlider title="Our Mattress Range" :catNumber="17" />
  </div>
</template>

<script>
import BannerSlider from "@/components/Home/BannerSlider";
import SalePoints from "@/components/Home/SalePoints";
import ProductSlider from "@/components/Upsells/ProductSlider";
import Cta from "@/components/Cta";
export default {
  transition: "slide-fade",
  head: () => ({
    title: "Purple People Eater"
  }),
  components: {
    BannerSlider,
    ProductSlider,
    Cta,
    SalePoints
  }
};
</script>
