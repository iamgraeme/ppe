<template>
  <div class="container mx-auto">
    <div v-if="isLoading">
      <LoadingPage />
    </div>
    <div v-else>
      <PageHeading :title="getCurrentCmsPage.title.rendered" />
      <hr class="my-2 sm:my-4 lg:my-10" />
      <div
        class="mb-24 text-xl font-normal leading-loose text-gray-600"
        v-html="getCurrentCmsPage.content.rendered"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeading from "@/components/PageHeading";
import LoadingPage from "@/components/Loading/LoadingPage";
export default {
  data: () => ({
    isLoading: true
  }),
  components: {
    PageHeading,
    LoadingPage
  },
  computed: {
    ...mapGetters("cms", ["getCurrentCmsPage"])
  },
  mounted() {
    const id = this.$route.params.id;
    this.$store.dispatch("cms/retrievePageById", id).catch(error => {
      console.log(error);
    });
    window.setInterval(() => {
      this.isLoading = false;
    }, 1000);
  }
};
</script>

<style scoped>
div >>> ul {
  list-style: disc;
  padding-left: 20px;
}
div >>> p,
div >>> li {
  font-weight: 300;
  margin-bottom: 10px;
}
div >>> p:first-of-type {
  color: #6c4db5;
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 15px;
}
div >>> a {
  text-decoration: none;
  font-weight: bold;
}
</style>

