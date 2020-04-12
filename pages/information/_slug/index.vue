<template>
  <div class="container mx-auto">
    <div v-if="isLoading">Loading..</div>
    <div v-else>
      <PageHeading :title="getCurrentCmsPage.title.rendered" />
      <div v-html="getCurrentCmsPage.content.rendered"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeading from "@/components/PageHeading";
export default {
  data: () => ({
    isLoading: true
  }),
  components: {
    PageHeading
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
