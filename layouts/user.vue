<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row">
        <Sidebar />
        <div class="w-12/12 lg:w-8/12 pl-10">
          <nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/User/Sidebar";
export default {
  transition: "slide-fade",
  components: {
    Header,
    Footer,
    Sidebar
  }
};
</script>
